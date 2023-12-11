import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutForm from "../components/CheckoutForm";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import GigDetails from "./GigDetails";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function OrderCheckout() {
  const { gigId, packageId } = useParams();

  const [gig, setGig] = useState({});
  const navigate = useNavigate();
  const [packageInfo, setPackageInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user.user);

  const fetchGigDetails = async () => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gigId: gigId,
        }),
      }
    );
    const res = await req.json();
    if (res.error) {
      navigate("/");
      return;
    }
    setGig(res[0]);

    let _package = {};

    for (const key in res[0].packages) {
      if (res[0].packages.hasOwnProperty(key)) {
        if (res[0].packages[key]._id === packageId) {
          setPackageInfo(res[0].packages[key]);
          _package = res[0].packages[key];
        }
      }
    }

    setGigDetails({
      title: res[0].title,
      gigId: res[0]._id,
      image: res[0].images[0],
      seller: res[0].user._id,
      buyer: user._id,
      package: {
        packageId: _package._id,
        revisions: _package.revisions,
        deliveryTime: `${_package.deliveryTime} days`,
        price: _package.price,
      },
      price: _package.price,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    if (!gigId) {
      navigate("/");
      return;
    }
    fetchGigDetails();
    setIsLoading(false);
  }, [gigId, navigate, packageId]);

  const [clientSecret, setClientSecret] = useState("");
  const [gigDetails, setGigDetails] = useState({});

  const fetchIntent = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ id: "xl-tshirt" }],
          gigDetails: gigDetails,
        }),
      }
    );

    const { clientSecret } = await response.json();
    setClientSecret(clientSecret);
  };

  useEffect(() => {
    setIsLoading(true);
    if (gig && packageInfo && gig.images && GigDetails) {
      fetchIntent();
    }

    setIsLoading(false);
  }, [gig, gigId, gigDetails]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      {gig && (
        <div className="flex justify-center items-center p-10 py-20 gap-20">
          <div className="w-1/4">
            <div className="bg-white shadow-lg rounded-xl p-3">
              <h1 className="text-2xl font-medium border-b pb-3 text-gray-800">
                Confirm and Pay
              </h1>

              <div className="flex items-center gap-3 mt-3 border-b pb-3">
                {gig && packageInfo && gig.images && (
                  <img
                    src={gig.images[0]}
                    alt=""
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                )}
                <h3 className="text-sm font-medium text-gray-800">
                  {gig.title}
                </h3>
              </div>

              <div className="mt-3 p-3 flex flex-col gap-2">
                <div>
                  <div className="flex items-center justify-between text-gray-800 font-semibold text-lg">
                    <p>{packageInfo.name}</p>
                    <p className="font-normal text-gray-500">
                      ${packageInfo.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row justify-between gap-1">
                  <span>Support</span>
                  <span>
                    {packageInfo.support ? (
                      <CheckIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </span>
                </div>

                <div className="flex flex-row justify-between gap-1">
                  <span>Revisions</span>
                  <span className="text-gray-500">{packageInfo.revisions}</span>
                </div>

                <div className="flex flex-row justify-between gap-1">
                  <span>Delivery Time</span>
                  <span className="text-gray-500">
                    {packageInfo.deliveryTime} Day(s)
                  </span>
                </div>

                <div className="border-t mt-3 pt-3">
                  <div className="flex items-center justify-between text-gray-800 font-semibold text-lg">
                    <p>Total</p>
                    <p>$ {packageInfo.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {clientSecret ? (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm gigDetails={gigDetails} />
              </Elements>
            ) : (
              <div
                className="h-6 w-6 border-2 border-gray-600 border-t-gray-50 animate-spin rounded-full mx-auto"
                id="spinner"
              ></div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

/*
export default function OrderCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const [gigDetails, setGigDetails] = useState({
    name: "Package MERN Stack",
    revisions: 10,
    deliveryTime: "10 days",
    image:
      "https://res.cloudinary.com/nfluen/image/upload/v1627669129/nfluencer-gigs/1627669128.png",
    price: 100,
    totalPrice: 105,
  });

  const fetchIntent = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ id: "xl-tshirt" }],
          gigDetails: gigDetails,
        }),
      }
    );

    const { clientSecret } = await response.json();
    setClientSecret(clientSecret);
    console.log("clientSecret", clientSecret);
    // .then((res) => res.json())
    // .then((data) => setClientSecret(data.clientSecret));
  };

  useEffect(() => {
    // Fetch gig details and create PaymentIntent
    fetchIntent();
    // console.log("clientSecret", clientSecret);
  }, [gigDetails]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm setGigDetails={setGigDetails} gigDetails={gigDetails} />
        </Elements>
      )}
    </div>
  );
}

function CheckoutForm({ setGigDetails, gigDetails }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setGigDetails({ ...gigDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setGigDetails({ ...gigDetails, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... existing code ...

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000",
      },
    });

    // ... existing code ...
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div>
        <label>Gig Package Name:</label>
        <input
          type="text"
          name="name"
          value={gigDetails.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gig Package Revisions:</label>
        <input
          type="number"
          name="revisions"
          value={gigDetails.revisions}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gig Package Delivery Time:</label>
        <input
          type="text"
          name="deliveryTime"
          value={gigDetails.deliveryTime}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gig Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label>Gig Price:</label>
        <input
          type="number"
          name="price"
          value={gigDetails.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Total Price:</label>
        <input
          type="number"
          name="totalPrice"
          value={gigDetails.totalPrice}
          onChange={handleChange}
        />
      </div>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

*/
