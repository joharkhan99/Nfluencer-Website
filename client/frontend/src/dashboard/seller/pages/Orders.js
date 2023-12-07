import React, { useEffect, useState } from "react";
import CryptoWalletsConnect from "../components/nft/CryptoWalletsConnect";
import { useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import Loader from "../../../utils/Loader";

const Orders = () => {
  const user = useSelector((state) => state.user.user);
  const isWalletConnected = useSelector(
    (state) => state.user.isWalletConnected
  );

  const [ordersAsSeller, setOrdersAsSeller] = useState([]);
  const [ordersAsBuyer, setOrdersAsBuyer] = useState([]);

  const getUserOrdersAsSeller = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/getUserOrdersAsSeller`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user.jwtToken,
        },
        body: JSON.stringify({
          userId: user._id,
        }),
      }
    );
    const data = await res.json();
    if (data.error) {
      return;
    }
    setOrdersAsSeller(data);
    console.log(data);
  };

  const getUserOrdersAsBuyer = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/getUserOrdersAsBuyer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user.jwtToken,
        },
        body: JSON.stringify({
          userId: user._id,
        }),
      }
    );
    const data = await res.json();
    if (data.error) {
      return;
    }
    setOrdersAsBuyer(data);
    console.log(data);
  };

  useEffect(() => {
    window.ethereum.on("accountsChanged", async function (accounts) {
      window.location.reload();
    });
  }, []);

  useEffect(() => {
    if (user) {
      getUserOrdersAsSeller();
      getUserOrdersAsBuyer();
    }
  }, [user]);

  // if (!ordersAsBuyer && !ordersAsSeller) {
  //   return <Loader />;
  // }

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

  return (
    <div className="w-full">
      <div>
        <h2 className="font-extrabold tracking-tight text-3xl text-gray-800 block mb-10">
          Manage Orders
        </h2>

        <div>
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200">
            <Tabs
              className="w-full"
              selectedTabClassName="bg-nft-primary-light text-white shadow-lg shadow-purple-200"
            >
              <div className="flex justify-between items-center">
                <TabList className="border-b border-gray-100 p-4">
                  <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                    Your Orders as Seller
                  </Tab>
                  <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                    Your Orders as Buyer
                  </Tab>
                </TabList>

                <div className="text-right p-4">
                  <Link
                    to="/seller/newgig"
                    className="rounded-xl px-6 py-3 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200"
                  >
                    Explore Gigs
                  </Link>
                </div>
              </div>

              <TabPanel>
                <div className="p-4">
                  <div className="relative w-full h-full rounded-xl shadow-lg shadow-gray-50">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs text-gray-500 uppercase border-b">
                        <tr>
                          <th scope="col" className="p-3">
                            Image
                          </th>
                          <th scope="col" className="p-3">
                            Gig Title
                          </th>
                          <th scope="col" className="p-3">
                            Buyer
                          </th>
                          <th scope="col" className="p-3">
                            Total Price
                          </th>
                          <th scope="col" className="p-3">
                            Order Date
                          </th>
                          <th scope="col" className="p-3">
                            Delivery Date
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {ordersAsSeller &&
                          ordersAsSeller.map((order, index) => {
                            return (
                              <tr
                                className="hover:bg-gray-50 transition-colors"
                                key={index}
                              >
                                <td className="p-3 py-5">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={order.gig.images[0]}
                                      alt={order.gig.title}
                                      className="h-14 w-20 object-cover rounded-lg"
                                    />
                                    {/* <p>{gig.title}</p> */}
                                  </div>
                                </td>
                                <td className="p-3 py-5">{order.gig.title}</td>
                                <td className="p-3 py-5 text-nft-primary-light">
                                  {order.buyer.username}
                                </td>
                                <td className="p-3 py-5">
                                  ${order.totalPrice}
                                </td>
                                <td className="p-3 py-5">
                                  {formatDate(order.createdAt)}
                                </td>
                                <td className="p-3 py-5">
                                  {formatDate(order.orderEndDate)}
                                </td>
                                <td className="p-3 py-5">
                                  <Link
                                    target="_blank"
                                    to={`/gig/orders/${order._id}`}
                                    className="p-2 bg-nft-primary-light text-white rounded-xl px-4"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-4">
                  <div className="relative w-full h-full rounded-xl shadow-lg shadow-gray-50">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs text-gray-500 uppercase border-b">
                        <tr>
                          <th scope="col" className="p-3">
                            Image
                          </th>
                          <th scope="col" className="p-3">
                            Gig Title
                          </th>
                          <th scope="col" className="p-3">
                            Seller
                          </th>
                          <th scope="col" className="p-3">
                            Total Price
                          </th>
                          <th scope="col" className="p-3">
                            Order Date
                          </th>
                          <th scope="col" className="p-3">
                            Delivery Date
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {ordersAsBuyer &&
                          ordersAsBuyer.map((order, index) => {
                            if (order.gig)
                              return (
                                <tr
                                  className="hover:bg-gray-50 transition-colors"
                                  key={index}
                                >
                                  <td className="p-3 py-5">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={order.gig.images[0]}
                                        alt={order.gig.title}
                                        className="h-14 w-20 object-cover rounded-lg"
                                      />
                                      {/* <p>{gig.title}</p> */}
                                    </div>
                                  </td>
                                  <td className="p-3 py-5">
                                    {order.gig.title}
                                  </td>
                                  <td className="p-3 py-5 text-nft-primary-light">
                                    {order.buyer.username}
                                  </td>
                                  <td className="p-3 py-5">
                                    ${order.totalPrice}
                                  </td>
                                  <td className="p-3 py-5">
                                    {formatDate(order.createdAt)}
                                  </td>
                                  <td className="p-3 py-5">
                                    {formatDate(order.orderEndDate)}
                                  </td>
                                  <td className="p-3 py-5">
                                    <Link
                                      target="_blank"
                                      to={`/gig/orders/${order._id}`}
                                      className="p-2 bg-nft-primary-light text-white rounded-xl px-4"
                                    >
                                      View
                                    </Link>
                                  </td>
                                </tr>
                              );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-4">
                  <div className="text-sm mb-5 pl-4 text-gray-400">
                    Draft Gigs
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-4">
                  <div className="text-sm mb-5 pl-4 text-gray-400">
                    Denied Gigs
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="p-4">
                  <div className="text-sm mb-5 pl-4 text-gray-400">
                    Paused Gigs
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
