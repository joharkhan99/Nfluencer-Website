import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../../utils/Loader";
import OrderChatWindow from "../components/OrderChatWindow";
import {
  InformationCircleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const Order = () => {
  const { orderId } = useParams();
  const [isRequirementSent, setIsRequirementSent] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({});
  const [orderActivity, setOrderActivity] = useState([]);
  const [requirements, setRequirements] = useState([]);

  const fetchOrderDetails = async () => {
    setIsLoading(true);
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/orderdetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user.jwtToken,
        },
        body: JSON.stringify({
          orderId: orderId,
        }),
      }
    );
    const res = await req.json();

    console.log(res);
    if (res.error) {
      return;
    }

    if (
      user._id !== res.order[0].buyer._id &&
      user._id !== res.order[0].seller._id
    ) {
      window.location.href = "/";
      return;
    }

    setOrderDetails(res.order[0]);
    setIsLoading(false);
    setOrderActivity(res.orderActivity);
    setSubmittedRequirements({ ...res.order[0].requirements });
    setRequirements(res.requirements[0].requirements);
    // console.log(res.requirements[0].requirements);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId, user]);

  useEffect(() => {
    if (orderDetails.isRequirementSent) {
      setIsRequirementSent(true);
    }
  }, [orderDetails]);

  useEffect(() => {
    console.log(user);
    if (!user) {
      window.location.href = "/";
    }
  }, [user, orderDetails]);

  const formatDate = (date) => {
    const originalDate = new Date(date);

    const options = {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };

    const formattedDate = originalDate.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  const [submittedRequirements, setSubmittedRequirements] = useState({});

  const handleChange = (requirement, value) => {
    setSubmittedRequirements((prevRequirements) => ({
      ...prevRequirements,
      [requirement]: value,
    }));
  };

  const handleRequirementsSubmit = async () => {
    const areAllRequirementsFilled = orderDetails.gig.requirements.every(
      (requirement) => submittedRequirements[requirement]
    );

    if (areAllRequirementsFilled) {
      console.log("Submitted Requirements:", submittedRequirements);

      const req = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gig/submitRequirements`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user.jwtToken,
          },
          body: JSON.stringify({
            orderId: orderId,
            buyerId: orderDetails.buyer._id,
            sellerId: orderDetails.seller._id,
            requirements: submittedRequirements,
            gigId: orderDetails.gig._id,
          }),
        }
      );

      const res = await req.json();
      if (res.error) {
        alert(res.error);
        return;
      }
      window.location.reload();
    } else {
      alert("Please fill in all requirements before submitting.");
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} showCategoriesBar={false} />
      </div>

      <div className="flex justify-between p-5 bg-gray-100 shadow-lg shadow-gray-300">
        <div className="w-2/3 p-5">
          <h1 className="text-xl border-b font-semibold pb-3 text-nft-primary-light">
            Activity
          </h1>

          {orderDetails.seller._id !== user._id && !isRequirementSent && (
            <div className="my-10 py-5 border-b p-5 bg-white text-gray-800 rounded-lg">
              <h3 className="text-gray-800 text-lg font-semibold">
                Please submit your requirements to the seller to start the order
              </h3>
              <div>
                {orderDetails.gig.requirements.map((requirement, index) => (
                  <div className="flex flex-col gap-2 mt-5" key={index}>
                    <label className="text-sm ">
                      <span className="pr-1">&gt;</span>
                      {requirement} <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      rows="4"
                      value={submittedRequirements[requirement] || ""}
                      onChange={(e) =>
                        handleChange(requirement, e.target.value)
                      }
                      placeholder={`Enter your ${requirement.toLowerCase()} here...`}
                      className="outline-none border border-gray-300 rounded-xl p-3 resize-none"
                    />
                  </div>
                ))}
                <button
                  className="bg-nft-primary-light text-white p-3 rounded-xl mt-3 hover:opacity-80"
                  onClick={handleRequirementsSubmit}
                  disabled={isRequirementSent}
                >
                  {isRequirementSent
                    ? "Requirements Submitted"
                    : "Submit Requirements"}
                </button>
              </div>
            </div>
          )}

          <div className="mt-5">
            {orderActivity.map((activity, index) => (
              <div className="bg-white rounded-xl shadow-lg shadow-gray-300 p-5 mb-4">
                <div className="flex items-center gap-2">
                  <InformationCircleIcon className="w-12 h-12 bg-nft-primary-transparent text-nft-primary-light p-2 rounded-full" />
                  <span className="text-gray-800 text-base font-semibold">
                    {activity.activity[0].text}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(activity.createdAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-white rounded-xl shadow-lg shadow-gray-300">
            {requirements &&
              Object.keys(requirements).map(function (key) {
                return (
                  <div className="p-5 pb-2">
                    <div className="flex items-center gap-2">
                      <ClipboardDocumentListIcon className="w-12 h-12 bg-nft-primary-transparent text-nft-primary-light p-2 rounded-full" />
                      <span className="text-gray-800 text-base font-semibold">
                        {key}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 ">
                      {requirements[key]}
                    </span>
                  </div>
                );
              })}
          </div>

          <div className="my-5 bg-white p-3 py-4 shadow-lg">
            <h3 className="text-nft-primary-light text-base font-semibold mb-2">
              Chat with{" "}
              {orderDetails.buyer._id !== user._id ? (
                <span>{orderDetails.buyer.name}</span>
              ) : (
                <span>{orderDetails.seller.name}</span>
              )}{" "}
            </h3>
            {orderDetails.buyer._id !== user._id ? (
              <OrderChatWindow orderChatUser={orderDetails.buyer} />
            ) : (
              <OrderChatWindow orderChatUser={orderDetails.seller} />
            )}
          </div>
        </div>

        <div className="w-1/3">
          <div className="md:sticky relative top-0">
            <div className="w-full">
              <div className="bg-white shadow-lg rounded-xl p-3">
                <h1 className="text-xl font-medium border-b pb-3 text-gray-800">
                  Order Details
                </h1>

                <div className="flex items-center gap-3 mt-3 border-b pb-3">
                  {orderDetails.gig.images && (
                    <img
                      src={orderDetails.gig.images[0]}
                      alt=""
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                  )}
                  <h3 className="text-sm font-medium text-gray-800">
                    {orderDetails.gig.title}
                  </h3>
                </div>

                <div className="mt-3 p-3 flex flex-col gap-2">
                  <div className="flex flex-row justify-between gap-1 text-gray-500 font-medium text-sm">
                    {orderDetails.buyer._id !== user._id ? (
                      <>
                        <span>Ordered By</span>
                        <span className="font-semibold text-gray-800">
                          {orderDetails.buyer.name}
                        </span>
                      </>
                    ) : (
                      <>
                        <span>Seller</span>
                        <span className="font-semibold text-gray-800">
                          {orderDetails.seller.name}
                        </span>
                      </>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-gray-500 font-medium text-sm">
                      <p>Total Price</p>
                      <p className="font-semibold text-gray-800">
                        ${orderDetails.package.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between gap-1 text-gray-500 font-medium text-sm">
                    <span>Revisions</span>
                    <span className="font-semibold text-gray-800">
                      {orderDetails.package.revisions}
                    </span>
                  </div>

                  <div className="flex flex-row justify-between gap-1 text-gray-500 font-medium text-sm">
                    <span>Delivery Date</span>
                    <span className="font-semibold text-gray-800">
                      {formatDate(orderDetails.orderEndDate)}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 my-5">
                      Track Order
                    </h4>

                    <div className="flex flex-col">
                      <div className="flex gap-2 items-center">
                        <span className="h-4 w-4 rounded-full bg-green-500"></span>
                        <span className="text-sm">Order Placed</span>
                      </div>

                      <span className="h-4 border-l-2 border-green-500 ml-2 -my-1"></span>

                      <div className="flex gap-2 items-center">
                        {isRequirementSent ? (
                          <span className="h-4 w-4 ml-[1px] rounded-full bg-green-500"></span>
                        ) : (
                          <span className="h-4 w-4 ml-[1px] rounded-full border-green-500 border-2"></span>
                        )}

                        <span className="text-sm">
                          {orderDetails.isRequirementSent
                            ? "Requirement Sent"
                            : "Submit Requirements"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {isRequirementSent && orderDetails.seller._id === user._id && (
                  <button className="bg-nft-primary-light h-full py-4 rounded-xl font-semibold text-white hover:opacity-80 transition-colors text-sm w-full mt-4">
                    <span>Deliver Now</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;
