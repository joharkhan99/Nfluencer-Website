import React, { useEffect, useState } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../utils/Loader";
import { ethers } from "ethers";
import axios from "axios";
import {
  NFTMarketplaceContractABI,
  NFTMarketplaceContractAddress,
} from "../../constants/ContractDetails";
import {
  HeartIcon,
  EyeIcon,
  ShareIcon,
  ArrowPathIcon,
  BookmarkIcon,
  ShoppingCartIcon,
  PresentationChartLineIcon,
  ArrowsRightLeftIcon,
  SparklesIcon,
  TagIcon,
  ArrowTrendingUpIcon,
  QueueListIcon,
  ChevronUpIcon,
  CpuChipIcon,
  ListBulletIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import PriceHistory from "../components/nft/PriceHistory";
import { Disclosure } from "@headlessui/react";

function NFTDetail() {
  let { itemId } = useParams();
  const navigate = useNavigate();
  const [nftMetaData, setNftMetaData] = useState(null);
  const [nftUsdPrice, setNftUsdPrice] = useState(0);
  const [priceHistory, setPriceHistory] = useState([]);

  useEffect(() => {
    if (!itemId) {
      navigate("/explore");
      return;
    }
    fetchNFTDetails(itemId);
    fetchNFTPriceHistory(itemId);
    if (nftMetaData && nftMetaData.weiPrice)
      convertEthToDollars(getFormattedPrice(nftMetaData.weiPrice));
  }, [itemId, navigate]);

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
    const act_res = await marketplaceContract.getActivities(itemId);
    setNftActivity(act_res);
    setFilteredNftActivity(act_res);
    const tokenUri = await marketplaceContract.tokenURI(fetchedNFT.itemId);
    const meta = await axios.get(tokenUri);
    setNftMetaData({
      ...meta.data,
      seller: fetchedNFT.seller,
      weiPrice: fetchedNFT.price,
    });
  };

  const fetchNFTPriceHistory = async (itemId) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.REACT_APP_ALCHEMY_SEPOLIA_URL
      );
      const { marketplaceContract } = fetchContract(provider);
      const priceHistory = await marketplaceContract.getPriceHistory(itemId);
      setPriceHistory(priceHistory);
    } catch (error) {
      console.log(error);
      console.error("Error fetching price history:", error.message);
    }
  };

  async function convertEthToDollars(ethAmount) {
    // Get the current Ether to USD exchange rate from CoinGecko API
    const coingeckoApiResponse = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    const ethToUsdRate = coingeckoApiResponse.data.ethereum.usd;
    const dollars = ethAmount * ethToUsdRate;
    console.log(dollars);
    setNftUsdPrice(dollars);
  }

  const activityIcons = {
    Sale: <ShoppingCartIcon className="w-6 h-6" />,
    List: <TagIcon className="w-6 h-6" />,
    Transfer: <ArrowsRightLeftIcon className="w-6 h-6" />,
    Mint: <SparklesIcon className="w-6 h-6" />,
  };

  const activityFilters = ["All", "Sale", "List", "Transfer", "Mint"];
  const [activityFilter, setActivityFilter] = useState("All");
  const [nftActivity, setNftActivity] = useState([]);
  const [filteredNftActivity, setFilteredNftActivity] = useState([]);

  const handleActivityFilterChange = (filter) => {
    setActivityFilter(filter);

    if (filter === "All") {
      setFilteredNftActivity(nftActivity);
      return;
    }

    var updatedList = [...nftActivity];
    updatedList = updatedList.filter((item) => item.eventType === filter);
    setFilteredNftActivity(updatedList);
  };

  function timeAgo(timestamp) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const seconds = currentTimestamp - timestamp;

    const interval = Math.floor(seconds / 60);

    if (interval < 1) {
      return "Just now";
    }
    if (interval < 60) {
      return `${interval} ${interval === 1 ? "minute" : "minutes"} ago`;
    }

    const hours = Math.floor(interval / 60);
    if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} ${months === 1 ? "month" : "months"} ago`;
    }

    const years = Math.floor(days / 365);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }

  const getFormattedPrice = (price) => {
    return ethers.utils.formatEther(price.toString());
  };

  if (!nftMetaData) {
    <Loader />;
  } else
    return (
      <>
        <Header transparent={true} />
        <div className="container mx-auto my-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 relative">
              {nftMetaData.fileType === "image" ? (
                <img
                  src={nftMetaData.fileUrl}
                  alt={nftMetaData.name}
                  className="rounded-lg h-auto w-full md:h-full object-cover"
                />
              ) : (
                <video controls width="100%" height="100%">
                  <source src={nftMetaData.fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <Link
                class="rounded-xl text-nft-primary-light bg-white p-2 flex gap-1 items-center absolute top-2 right-2 text-sm"
                to={nftMetaData.fileUrl}
                target="_blank"
                title="View Original Media File"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </Link>
              <div className="absolute top-2 left-2">
                <div className="bg-white rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 overflow-hidden p-2">
                  <div>
                    <div className="flex rounded-2xl justify-evenly items-center">
                      <div className="flex flex-col gap-1 items-center">
                        <span className="flex gap-1">
                          <img
                            src={require("../assets/eth.png")}
                            alt=""
                            className="w-6 h-6 object-contain"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <button class="bg-gray-100 font-medium p-3 rounded-xl hover:bg-gray-300 text-gray-800 flex items-center">
                    <HeartIcon className="w-5 h-5" />
                    <span className="pl-2 font-medium text-gray-600 text-sm">
                      36 favorites
                    </span>
                  </button>
                  <button className="flex items-center p-3">
                    <EyeIcon className="w-5 h-5" />
                    <span className="pl-2 font-medium text-gray-600 text-sm">
                      124.6k
                    </span>
                  </button>
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    className="rounded-xl border p-3 hover:bg-gray-100"
                    title="Share"
                  >
                    <ShareIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="rounded-xl border p-3 hover:bg-gray-100"
                    title="Refresh metadata"
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-gra sm:text-4xl">
                {nftMetaData.name}
              </h1>

              <div className="flex items-center text-gray-500 text-base my-3 mb-7">
                Owned by
                <span className="pl-2 font-bold text-nft-primary-light">
                  {nftMetaData.creator.name}
                </span>
              </div>

              <div className="flex items-center mt-7 justify-between">
                <div>
                  <a href="s" className="block">
                    <div className="flex items-center gap-3">
                      <span className="w-14 h-14 rounded-full bg-gray-100 flex justify-center items-center">
                        <Square3Stack3DIcon className="w-7 h-7" />
                      </span>
                      <div className="flex flex-col items-start">
                        <button className="font-bold text-gray-900">
                          Category
                        </button>
                        <div className="text-sm text-gray-500">
                          {nftMetaData.category}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center mt-7 justify-between">
                <div>
                  <span className="text-sm mb-4 block">
                    <span className="text-gray-900 font-semibold">Owner</span>
                  </span>
                  <a href="s" className="block">
                    <div className="flex items-center gap-3">
                      <img
                        src={nftMetaData.creator.avatar}
                        alt="User Imasge"
                        className="rounded-full h-14 w-14"
                      />
                      <div className="flex flex-col items-start">
                        <button className="font-bold text-gray-900">
                          {nftMetaData.creator.name}
                        </button>
                        <div className="text-sm text-gray-500">
                          {nftMetaData.seller.substring(0, 10) +
                            "..." +
                            nftMetaData.seller.substring(
                              nftMetaData.seller.length - 4,
                              nftMetaData.seller.length
                            )}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <span className="text-sm mb-4 block">
                    <span className="text-gray-900 font-semibold">
                      Collection
                    </span>
                  </span>
                  <a href="s" className="block">
                    <div className="flex items-center gap-3">
                      <img
                        src={nftMetaData.collection.image}
                        alt="User Imasge"
                        className="rounded-full h-14 w-14 object-cover"
                      />
                      <div className="flex flex-col items-start">
                        <button className="font-bold text-gray-900">
                          {nftMetaData.collection.name}
                        </button>
                        <div className="text-sm text-gray-500">
                          {nftMetaData.collection.totalItems} Items
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-10 p-6 shadow-md shadow-gray-100 rounded-xl border-2 border-gray-200 bg-gray-50">
                <span className="text-gray-900 text-sm font-medium">
                  Current Price
                </span>
                <div className="flex items-end text-gray-900 text-sm my-3 mb-7 gap-3">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
                    {getFormattedPrice(nftMetaData.weiPrice)} ETH
                  </h1>
                  <div className="text-gray-500 text-base">
                    ${nftUsdPrice && nftUsdPrice.toFixed(5)}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button class="bg-nft-primary-light border-nft-primary-light text-white font-medium p-4 rounded-xl hover:bg-nft-primary-dark w-full flex items-center justify-center gap-2">
                    <ShoppingCartIcon className="w-6 h-6" />
                    Buy Now
                  </button>
                  <button className="bg-nft-primary-transparent rounded-xl p-4 font-semibold text-nft-primary-light w-full hover:bg-nft-primary-light hover:text-white duration-300 transition-colors flex items-center justify-center gap-2">
                    <BookmarkIcon className="w-6 h-6" />
                    <span>Save for later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-16 mt-12">
            <div className="md:w-1/2">
              <div className="relative overflow-x-auto border-2 border-gray-100 shadow-lg shadow-gray-100 p-5 rounded-xl text-gray-800 ">
                <div>
                  <div className="text-lg font-extrabold pb-4 pt-2 flex gap-3 border-b">
                    <QueueListIcon className="w-6 h-6 inline-block" />
                    <span>Description</span>
                  </div>

                  <div className="my-5 px-4 pb-2 pt-4 text-base text-gray-500">
                    <div className="flex gap-1">
                      <span className="text-gray-500 font-medium">By</span>
                      <span className="font-semibold text-nft-primary-light">
                        {nftMetaData.creator.name}
                      </span>
                    </div>
                    <p className="font-normal text-sm">
                      {nftMetaData.description}
                    </p>
                  </div>
                </div>

                <div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between items-center border-t pt-4 pb-4">
                          <div className="text-lg font-extrabold flex gap-3">
                            <CpuChipIcon className="w-6 h-6 inline-block" />
                            <span>Traits</span>
                          </div>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-4 w-4 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                          <div className="grid grid-cols-4 items-center gap-2">
                            {nftMetaData.traits.map((attribute, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center flex-col gap-0.5 justify-center bg-gray-100 p-3 rounded-md w-full"
                                >
                                  <span className="text-xs text-gray-400 font-medium uppercase">
                                    {attribute.traitType}
                                  </span>
                                  <span className="font-semibold text-base text-gray-800">
                                    {attribute.traitName}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between items-center border-b border-t pt-4 pb-4">
                          <div className="text-lg font-extrabold flex gap-3">
                            <ListBulletIcon className="w-6 h-6 inline-block" />
                            <span>Details</span>
                          </div>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-4 w-4 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                              <span className="text-base text-gray-700">
                                Contract Address
                              </span>
                              <span className="font-medium text-nft-primary-light">
                                0x0000...b719
                              </span>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-base text-gray-700">
                                Token ID
                              </span>
                              <span className="font-normal text-sm text-gray-700">
                                {itemId}
                              </span>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-base text-gray-700">
                                Token Standard
                              </span>
                              <span className="font-normal text-sm text-gray-700">
                                ERC-721
                              </span>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-base text-gray-700">
                                Chain
                              </span>
                              <span className="font-normal text-sm text-gray-700">
                                Ethereum
                              </span>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-base text-gray-700">
                                Creator Earnings
                              </span>
                              <span className="font-normal text-sm text-gray-700">
                                {nftMetaData.royalties}%
                              </span>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex">
              <div className="w-full border-2 border-gray-100 shadow-lg shadow-gray-100 p-5 rounded-xl h-fit">
                <div className="text-lg font-extrabold pb-4 pt-2 flex gap-3 border-b">
                  <ArrowTrendingUpIcon className="w-6 h-6 inline-block" />
                  <span>Price History</span>
                </div>
                <div className="w-full flex-grow" style={{ height: "87%" }}>
                  <PriceHistory data={priceHistory} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-16 mt-12">
            <div className="w-full">
              <div className="relative overflow-x-auto border-2 border-gray-100 shadow-lg shadow-gray-100 p-5 pb-0 rounded-xl ">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="text-lg font-extrabold pb-4 pt-2 flex gap-3">
                    <PresentationChartLineIcon className="w-6 h-6 inline-block" />
                    <span>Item Activity</span>
                  </div>
                  <div className="flex gap-3 flex-row justify-start flex-wrap">
                    {activityFilters.map((filter, index) => {
                      return (
                        <button
                          key={index}
                          className={`rounded-xl p-3 px-5 text-sm font-medium items-center cursor-pointer ${
                            activityFilter === filter
                              ? "bg-nft-primary-light text-white border border-nft-primary-light"
                              : "text-gray-500 hover:bg-gray-100 border border-gray-200"
                          }`}
                          onClick={() => handleActivityFilterChange(filter)}
                        >
                          {filter}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <table className="w-full text-sm text-start">
                  <thead className="text-sm text-gray-500 ">
                    <tr className="border-b">
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3 pt-3"
                      >
                        Event
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3 pt-3"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3 pt-3"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3 pt-3"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3 pt-3"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800 text-base">
                    {filteredNftActivity
                      .slice()
                      .reverse()
                      .map((activity, index) => {
                        return (
                          <tr
                            className={
                              index + 1 < nftActivity.length && "border-b"
                            }
                            key={index}
                          >
                            <td className="pb-5 pt-5">
                              <div className="flex items-center text-sm gap-3">
                                {activityIcons[activity.eventType]}
                                <span className="text-base">
                                  {activity.eventType}
                                </span>
                              </div>
                            </td>
                            <td className="pb-5 pt-5 font-medium">
                              {activity.eventType !== "Transfer" &&
                                getFormattedPrice(activity.price) + " ETH"}
                            </td>
                            <td className="pb-5 pt-5 font-semibold text-nft-primary-light">
                              {activity.eventType === "Mint" ? (
                                <span className="opacity-60">Null Address</span>
                              ) : (
                                activity.from.substring(0, 6) +
                                "..." +
                                activity.from.substring(
                                  activity.from.length - 4,
                                  activity.from.length
                                )
                              )}
                            </td>
                            <td className="pb-5 pt-5 font-semibold text-nft-primary-light">
                              {activity.to.substring(0, 6) +
                                "..." +
                                activity.to.substring(
                                  activity.to.length - 4,
                                  activity.to.length
                                )}
                            </td>
                            <td className="pb-5 pt-5">
                              {timeAgo(activity.timestamp)}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="py-11">
            <h1 className="text-2xl font-extrabold tracking-tight text-gra sm:text-2xl">
              More from this collection
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-4 px-4 border transition-colors duration-300">
                <div className="w-64 ">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex -space-x-2">
                      <img
                        className="w-8 h-8 rounded-full border-2 object-cover border-white"
                        src={require("../assets/user1.jpeg")}
                        alt="User Imageas"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 object-cover border-white"
                        src={require("../assets/user2.jpeg")}
                        alt="User Imageas"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 object-cover border-white"
                        src={require("../assets/user3.webp")}
                        alt="User Imageas"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                        <span>···</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="h-auto rounded-xl bg-gray-200 overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    <img
                      src={require("../assets/nft20.jpg")}
                      alt="sd"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold tracking-tight text-gra">
                      Diamond Ride
                    </h3>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../assets/eth.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span className="pl-2">
                          from{" "}
                          <span className="font-bold text-sm text-gra">
                            0.45 ETH
                          </span>
                        </span>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        <span className="pl-1 font-bold text-sm">10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}

export default NFTDetail;
