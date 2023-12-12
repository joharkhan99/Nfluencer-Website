import React, { useEffect, useState } from "react";
import CryptoWalletsConnect from "../components/nft/CryptoWalletsConnect";
import { useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import Loader from "../../../utils/Loader";
import {
  NFTMarketplaceContractABI,
  NFTMarketplaceContractAddress,
} from "../../../constants/ContractDetails";
import { ethers } from "ethers";
import axios from "axios";

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

  const [sellerOrders, setSellerOrders] = useState({});
  const getAllSellerOrders = async (seller) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/getAllSellerOrders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": seller.jwtToken,
        },
        body: JSON.stringify({
          userId: seller._id,
        }),
      }
    );
    const data = await res.json();
    if (data.error) {
      return;
    }
    setSellerOrders(data);
    console.log(data);
  };

  useEffect(() => {
    if (user) {
      getAllSellerOrders(user);
    }
  }, [user]);

  const fetchContract = (signerOrProvider) => {
    const marketplaceContract = new ethers.Contract(
      NFTMarketplaceContractAddress,
      NFTMarketplaceContractABI,
      signerOrProvider
    );

    return { marketplaceContract };
  };

  const fetchNFTDetails = async (itemId) => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_ALCHEMY_SEPOLIA_URL
    );
    const { marketplaceContract } = fetchContract(provider);
    const fetchedNFT = await marketplaceContract.getNFTDetails(itemId);
    const tokenUri = await marketplaceContract.tokenURI(fetchedNFT.itemId);
    const meta = await axios.get(tokenUri);
    return {
      ...meta.data,
      seller: fetchedNFT.seller,
      weiPrice: fetchedNFT.price,
      itemId: Number(fetchedNFT.itemId),
    };
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
              selectedTabClassName="bg-nft-primary-light text-white"
            >
              <div className="flex justify-between items-center">
                <TabList className="p-4 flex gap-2">
                  <Tab className="list-none rounded-md px-2 py-2 text-gray-500 font-medium relative cursor-pointer transition-colors outline-none text-sm">
                    Active
                  </Tab>
                  <Tab className="list-none rounded-md px-2 py-2 text-gray-500 font-medium relative cursor-pointer transition-colors outline-none text-sm">
                    Late
                  </Tab>
                  <Tab className="list-none rounded-md px-2 py-2 text-gray-500 font-medium relative cursor-pointer transition-colors outline-none text-sm">
                    Delivered
                  </Tab>
                  <Tab className="list-none rounded-md px-2 py-2 text-gray-500 font-medium relative cursor-pointer transition-colors outline-none text-sm">
                    Completed
                  </Tab>
                  <Tab className="list-none rounded-md px-2 py-2 text-gray-500 font-medium relative cursor-pointer transition-colors outline-none text-sm">
                    Cancelled
                  </Tab>
                </TabList>
              </div>

              <TabPanel>
                <div className="p-4">
                  <div className="relative w-full h-full rounded-xl shadow-lg shadow-gray-50">
                    <table className="w-full text-sm text-left text-gray-700">
                      <thead className="text-xs text-gray-500 uppercase border-b">
                        <tr className="uppercase">
                          <th scope="col" className="p-3">
                            Buyer
                          </th>
                          <th scope="col" className="p-3">
                            Gig
                          </th>
                          <th scope="col" className="p-3">
                            NFT
                          </th>
                          <th scope="col" className="p-3">
                            Due On
                          </th>
                          <th scope="col" className="p-3">
                            Price
                          </th>
                          <th scope="col" className="p-3">
                            Status
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {sellerOrders.activeOrders &&
                          sellerOrders.activeOrders.map((order, index) => {
                            let nft = {};
                            if (order.gig.offerReward) {
                              nft = fetchNFTDetails(order.gig.rewardNFT);
                            }

                            console.log(nft);

                            return (
                              <tr
                                className="hover:bg-gray-50 transition-colors"
                                key={index}
                              >
                                <td className="p-3 py-5 text-gray-800">
                                  <div className="flex items-center gap-2">
                                    <img
                                      src={order.buyer.avatar}
                                      alt=""
                                      className="w-11 h-11 rounded-full object-cover"
                                    />
                                    <span>{order.buyer.name}</span>
                                  </div>
                                </td>
                                <td className="p-3 py-5 text-gray-800">
                                  <div className="flex items-center gap-2 flex-row">
                                    <img
                                      src={order.gig.images[0]}
                                      alt=""
                                      className="w-12 h-12 rounded-md object-cover"
                                    />
                                    <div className="flex flex-col">
                                      <Link
                                        to={`/gigdetails/${order.gig.title.replace(
                                          / /g,
                                          "-"
                                        )}/${order.gig._id}`}
                                        target="_blank"
                                        className="hover:text-nft-primary-light"
                                      >
                                        {order.gig.title}
                                      </Link>
                                      <span className="text-gray-400">
                                        {order.package.name}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 py-5">
                                  {nft && order.gig.offerReward ? (
                                    <span className="flex flex-row items-center gap-1">
                                      <img
                                        src={nft.fileUrl}
                                        className="w-8 h-8"
                                        alt=""
                                      />
                                      <span>{nft.name}</span>
                                    </span>
                                  ) : (
                                    <span className="text-gray-400">
                                      No NFT
                                    </span>
                                  )}
                                </td>
                                <td className="p-3 py-5">
                                  {formatDate(order.orderEndDate)}
                                </td>
                                <td className="p-3 py-5">
                                  ${order.totalPrice}
                                </td>
                                <td className="p-3 py-5">
                                  <span className="p-1 bg-green-500 rounded-md text-white text-sm">
                                    Active
                                  </span>
                                </td>
                                <td className="p-3 py-5">
                                  <Link
                                    target="_blank"
                                    to={`/gig/orders/${order._id}`}
                                    className="p-2 bg-nft-primary-light text-white rounded-md px-4"
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
