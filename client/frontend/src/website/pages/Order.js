import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../../utils/Loader";
import OrderChatWindow from "../components/OrderChatWindow";
import {
  InformationCircleIcon,
  ClipboardDocumentListIcon,
  XMarkIcon,
  ArrowUpRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import {
  NFTMarketplaceContractABI,
  NFTMarketplaceContractAddress,
} from "../../constants/ContractDetails";
import { ethers } from "ethers";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";

const Order = () => {
  const { orderId } = useParams();
  const [isRequirementSent, setIsRequirementSent] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({});
  const [orderActivity, setOrderActivity] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [resellModalOpen, setresellModalOpen] = useState(false);

  const [deliveryDescription, setDeliveryDescription] = useState("");
  const [deliveryFile, setDeliveryFile] = useState("");

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(null);
  const [isFormSUbmitting, setIsFormSubmitting] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({});

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
    setDeliveryDetails(res.delivery[0]);
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

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(orderDetails.orderEndDate)
  );

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(orderDetails.orderEndDate));
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [orderDetails]);

  function calculateTimeLeft(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end - now;

    if (difference <= 0) {
      // If the order end date has passed, return 0 for all fields
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: false,
    };
  }

  const uploadFiletoCloudinary = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/uploadDeliveryZiptoCloudinary`,
      {
        method: "POST",
        headers: {
          "x-auth-token": user.jwtToken,
        },
        body: fd,
      }
    );

    const response = await request.json();
    console.log(response);
    return response.url;
  };

  const handleDeliveryFileUpload = async (e) => {
    setIsFormSubmitting(true);
    const file = e.target.files[0];
    console.log(e.target.files);
    console.log(file);
    if (file) {
      const fileUrl = await uploadFiletoCloudinary(file);
      setDeliveryFile(fileUrl);
      setIsFormSubmitting(false);
      return;
    }
    setIsFormSubmitting(false);
    setDeliveryFile("");
  };

  const handleSubmit = async () => {
    setIsFormSubmitting(true);
    if (deliveryDescription) {
      const req = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gig/submitDelivery`,
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
            deliveryDescription,
            deliveryFile: deliveryFile,
            gigId: orderDetails.gig._id,
          }),
        }
      );

      const res = await req.json();

      if (res.error) {
        alert(res.error);
        return;
      }

      setresellModalOpen(false);
      window.location.reload();
    }
    setIsFormSubmitting(false);
  };

  // NFT
  const projectId = process.env.REACT_APP_INFURA_API_KEY;
  const projectSecretKey = process.env.REACT_APP_INFURA_API_KEY_SECRET;
  const encoder = new TextEncoder();
  const data = encoder.encode(`${projectId}:${projectSecretKey}`);
  const auth = `Basic ${btoa(String.fromCharCode.apply(null, data))}`;

  const client = ipfsHttpClient({
    host: process.env.REACT_APP_INFURA_HOST,
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const fetchContract = (signerOrProvider) => {
    const marketplaceContract = new ethers.Contract(
      NFTMarketplaceContractAddress,
      NFTMarketplaceContractABI,
      signerOrProvider
    );

    return { marketplaceContract };
  };
  const updateTokenURI = async (marketplaceContract, nft) => {
    const data = JSON.stringify({
      name: nft.name,
      description: nft.description,
      creator: nft.creator,
      currentOwner: orderDetails.buyer,
      ownershipHistory: nft.ownershipHistory,
      fileUrl: nft.fileUrl,
      fileType: nft.fileType,
      price: nft.price,
      currency: "ETH",
      category: nft.category,
      traits: nft.traits,
      collection: nft.collection,
      royalties: nft.royalties,
      createdAt: nft.createdAt,
      updatedAt: new Date().toISOString(),
      isRewardItem: true,
    });

    const added = await client.add(data);
    const newUrl = `https://nfluencer.infura-ipfs.io/ipfs/${added.path}`;
    console.log(newUrl, nft);
    await marketplaceContract.updateTokenURI(nft.itemId, newUrl);
  };

  const updateNFTDetails = async (itemId) => {
    const w3modal = new Web3Modal();
    const connection = await w3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const { marketplaceContract } = fetchContract(signer);

    const fetchedNFT = await marketplaceContract.getNFTDetails(itemId);
    const tokenUri = await marketplaceContract.tokenURI(fetchedNFT.itemId);
    const meta = await axios.get(tokenUri);
    console.log(fetchedNFT);
    console.log(meta);
    await updateTokenURI(marketplaceContract, {
      ...meta.data,
      itemId: fetchedNFT.itemId,
    });
  };
  // NFT
  const handleReviewSubmit = async () => {
    // Assuming you have an API endpoint to handle review submission
    try {
      if (!reviewText) {
        alert("Please enter a review");
        return;
      }
      if (!rating) {
        alert("Please enter a rating");
        return;
      }

      const hasNFTReward = orderDetails.gig.offerReward;

      if (hasNFTReward === true) {
        console.log("NFT REWARD");
        const itemId = orderDetails.gig.rewardNFT;
        console.log("ITEM ID", itemId);
        await updateNFTDetails(itemId);
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gig/submitReview`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user.jwtToken,
          },
          body: JSON.stringify({
            orderId: orderDetails._id,
            gigId: orderDetails.gig._id,
            sellerId: orderDetails.seller._id,
            buyerId: orderDetails.buyer._id,
            reviewText,
            rating,
          }),
        }
      );

      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Error submitting review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const [nftMetaData, setNftMetaData] = useState(null);
  const fetchNFTDetails = async (itemId) => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_ALCHEMY_SEPOLIA_URL
    );
    const { marketplaceContract } = fetchContract(provider);
    const fetchedNFT = await marketplaceContract.getNFTDetails(itemId);
    const tokenUri = await marketplaceContract.tokenURI(fetchedNFT.itemId);
    const meta = await axios.get(tokenUri);
    setNftMetaData({
      ...meta.data,
      seller: fetchedNFT.seller,
      weiPrice: fetchedNFT.price,
      itemId: Number(fetchedNFT.itemId),
    });
  };

  useEffect(() => {
    if (orderDetails.gig && orderDetails.gig.offerReward) {
      fetchNFTDetails(orderDetails.gig.rewardNFT);
    }
  }, [orderDetails]);

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

          <div className="mt-5">
            {orderDetails.seller._id !== user._id &&
              isRequirementSent &&
              orderDetails.isDeliverySubmitted &&
              !orderDetails.isDeliveryAccepted && (
                <div className="p-5 bg-white rounded-xl">
                  <h2 className="text-lg mb-3">
                    Seller has submitted the delivery. Please review and accept
                  </h2>
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex flex-col gap-2 flex-1 break-all">
                      <div>
                        <span className="font-semibold">
                          Delivery description
                        </span>
                        <p className="text-sm text-gray-500">
                          {deliveryDetails.deliveryDescription}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold ">File</span>
                        <Link to={deliveryDetails.deliveryFile} target="_blank">
                          <p className="text-sm text-nft-primary-light">
                            {deliveryDetails.deliveryFile}
                          </p>
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <div>
                        <textarea
                          placeholder="Write your review..."
                          value={reviewText}
                          className=" border-2 p-3 h-40 rounded-xl w-full"
                          onChange={(e) => setReviewText(e.target.value)}
                        />
                        <div className="flex flex-row justify-between gap-4">
                          <div className="w-full">
                            <input
                              type="number"
                              min="1"
                              max="5"
                              placeholder="Rating (1-5)"
                              className="border-2 rounded-xl p-3 w-full"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            />
                            <button
                              onClick={handleReviewSubmit}
                              className="bg-nft-primary-light p-3 text-center text-white rounded-xl mt-3 hover:opacity-80"
                            >
                              Submit Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>

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
            <h1 className="text-base font-semibold border-b pb-3 text-nft-primary-light p-5">
              Requirements
            </h1>
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

          <div className="my-5 bg-white p-3 py-4 shadow-lg relative rounded-xl">
            {orderDetails.isDeliveryAccepted && (
              <div className="absolute w-full h-full bg-white bg-opacity-70 z-50"></div>
            )}
            <h3 className="text-base font-semibold border-b pb-3 text-nft-primary-light p-3">
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
            <div className="w-full pt-3">
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

                  {!orderDetails.isDeliveryAccepted && (
                    <div className="flex flex-row justify-between gap-1 text-gray-500 font-medium text-sm">
                      <span>Time Left</span>
                      <span className="font-semibold text-gray-800">
                        {timeLeft.isExpired ? (
                          <span>Order Expired</span>
                        ) : (
                          <span className="text-nft-primary-light">
                            {timeLeft.days}d {timeLeft.hours}h{" "}
                            {timeLeft.minutes}m {timeLeft.seconds}s
                          </span>
                        )}
                      </span>
                    </div>
                  )}

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

                      <span className="h-4 border-l-2 border-green-500 ml-2 -my-1"></span>
                      <div className="flex gap-2 items-center">
                        {orderDetails.isDeliverySubmitted ? (
                          <span className="h-4 w-4 ml-[1px] rounded-full bg-green-500"></span>
                        ) : (
                          <span className="h-4 w-4 ml-[1px] rounded-full border-green-500 border-2"></span>
                        )}

                        <span className="text-sm">Delivery Submitted</span>
                      </div>

                      <span className="h-4 border-l-2 border-green-500 ml-2 -my-1"></span>
                      <div className="flex gap-2 items-center">
                        {orderDetails.isDeliveryAccepted ? (
                          <span className="h-4 w-4 ml-[1px] rounded-full bg-green-500"></span>
                        ) : (
                          <span className="h-4 w-4 ml-[1px] rounded-full border-green-500 border-2"></span>
                        )}

                        <span className="text-sm">Delivery Accepted</span>
                      </div>
                    </div>
                  </div>
                </div>

                {isRequirementSent &&
                  orderDetails.seller._id === user._id &&
                  !orderDetails.isDeliveryAccepted && (
                    <button
                      className="bg-nft-primary-light h-full py-4 rounded-xl font-semibold text-white hover:opacity-80 transition-colors text-sm w-full mt-4"
                      onClick={() => setresellModalOpen(true)}
                    >
                      <span>Deliver Now</span>
                    </button>
                  )}

                {orderDetails.gig.offerReward && nftMetaData && (
                  <div className="my-5 mt-0">
                    <h3 className="text-sm text-gray-500 px-2 mb-1">
                      Reward NFT
                    </h3>
                    <div className="flex items-center shadow-md shadow-gray-200 border border-gray-100 rounded-xl gap-4 w-fit pr-10 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex h-full relative">
                        <img
                          src={nftMetaData.fileUrl}
                          alt=""
                          className="w-28 h-32 rounded-l-xl object-cover"
                        />

                        <Link
                          class="rounded-md text-nft-primary-light bg-white p-0.5 absolute top-2 right-2 text-sm"
                          to={nftMetaData.fileUrl}
                          target="_blank"
                          title="View Original Media File"
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="flex-1 py-2">
                        <Link
                          className="text-lg text-gray-800 font-bold flex items-center gap-1"
                          to={`/marketplace/nft/${nftMetaData.itemId}`}
                          target="_blank"
                        >
                          <span>{nftMetaData.name}</span>
                          <ArrowUpRightIcon className="w-4 h-4 text-gray-500" />
                        </Link>

                        <div className="flex gap-1 items-baseline text-gray-800 mb-2">
                          <span className="font-semibold text-base">
                            {nftMetaData.price}
                          </span>
                          <span className="font-normal text-gray-500 text-xs">
                            ETH
                          </span>
                        </div>

                        <div class="flex items-center justify-evenly w-full gap-4">
                          <div class="flex flex-col gap-1 w-full">
                            <div class="flex items-center gap-3">
                              <img
                                src="http://res.cloudinary.com/ds2ss4xmg/image/upload/v1697793424/izwfsygozecbxln3pim9.png"
                                alt="User Imasge"
                                class="rounded-full h-9 w-9 object-cover"
                              />
                              <div class="flex flex-col items-start">
                                <button class="font-bold text-gray-800 text-xs">
                                  Category
                                </button>
                                <div class="text-xs text-gray-500">
                                  {nftMetaData.category}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex flex-col gap-1 w-full">
                            <div class="flex items-center gap-3">
                              <img
                                src={nftMetaData.collection.image}
                                alt="User Imasge"
                                class="rounded-full h-9 w-9 object-cover"
                              />
                              <div class="flex flex-col items-start">
                                <button class="font-bold text-gray-800 text-xs">
                                  Collection
                                </button>
                                <div class="text-xs text-gray-500">
                                  {nftMetaData.collection.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 justify-center z-50 w-full h-full bg-black bg-opacity-70 ${
          resellModalOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-2/3 bg-white p-7 rounded-xl shadow-xl h-fit mt-16 relative">
          <h2 className="block font-bold text-xl text-gray-800 mb-3">
            Deliver Order
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700 absolute right-2 top-2"
            onClick={() => setresellModalOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="relative">
            <textarea
              type="number"
              className="w-full outline-none text-base placeholder:text-gray-400 placeholder:font-medium font-medium p-4 focus:ring-2 focus:ring-nft-primary-light focus:bg-white border-gray-200 border-2 rounded-xl h-52"
              placeholder="Enter New Price"
              value={deliveryDescription}
              // value={newPrice}
              min={0}
              onChange={(e) => setDeliveryDescription(e.target.value)}
              // onChange={(e) => setNewPrice(e.target.value)}
            ></textarea>

            <div className="flex flex-col gap-3 p-3 my-3">
              <label className="font-semibold">Attach file</label>
              <input
                type="file"
                className="cursor-pointer"
                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*, video/*"
                onChange={handleDeliveryFileUpload}
              />
            </div>
          </div>
          {/* <div className="text-red-500 text-sm mt-2">{resellError}</div> */}

          <button
            className="w-fit px-10 font-semibold bg-nft-primary-light text-white p-3 mt-5 rounded-xl hover:opacity-80"
            onClick={() => handleSubmit()}
            disabled={isFormSUbmitting}
          >
            {isFormSUbmitting ? "processing..." : "Submit Delivery"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;
