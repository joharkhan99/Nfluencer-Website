import React, { useEffect, useState } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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
} from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const data = [
  {
    name: "Jan",
    BTC: 1.2055,
    uv: 2400,
    amt: 0.2055,
  },
  {
    name: "Feb",
    BTC: 2.5,
    uv: 1398,
    amt: 2.5,
  },
  {
    name: "Mar",
    BTC: 1.5,
    uv: 9800,
    amt: 1.5,
  },
  {
    name: "Apr",
    BTC: 0.5,
    uv: 3908,
    amt: 0.5,
  },
  {
    name: "May",
    BTC: 2,
    uv: 4800,
    amt: 2,
  },
  {
    name: "Jun",
    BTC: 1.9,
    uv: 3800,
    amt: 1.9,
  },
  {
    name: "Jul",
    BTC: 2.3,
    uv: 4300,
    amt: 2.3,
  },
];

function NFTDetail() {
  let { itemId } = useParams();
  const navigate = useNavigate();
  const [nftMetaData, setNftMetaData] = useState(null);
  const [nftUsdPrice, setNftUsdPrice] = useState(0);
  const [priceHistory, setPriceHistory] = useState([]);
  const [nftActivity, setNftActivity] = useState([]);

  useEffect(() => {
    if (!itemId) {
      navigate("/explore");
      return;
    }
    fetchNFTDetails(itemId);
    if (nftMetaData && nftMetaData.price)
      convertEthToDollars(nftMetaData.price);
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
    console.log(fetchedNFT);

    const act_res = await marketplaceContract.getActivities(itemId);
    // act_res.reverse();
    console.log(act_res);
    setNftActivity(act_res);

    // const priceHistory = await marketplaceContract.getPriceHistory(itemId);
    // console.log(priceHistory);

    const tokenUri = await marketplaceContract.tokenURI(fetchedNFT.itemId);
    const meta = await axios.get(tokenUri);
    setNftMetaData({ ...meta.data, seller: fetchedNFT.seller });
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

              <div className="mt-10 p-6 shadow-md shadow-gray-100 rounded-xl border border-gray-200">
                <span className="text-gray-900 text-sm font-medium">
                  Current Price
                </span>
                <div className="flex items-end text-gray-900 text-sm my-3 mb-7 gap-3">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-4xl">
                    {nftMetaData.price} ETH
                  </h1>
                  <div className="text-gray-500 text-base">
                    ${nftUsdPrice.toFixed(5)}
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
              <div className="relative overflow-x-auto border-2 p-5 rounded-xl">
                <div className="text-lg font-extrabold border-b-2 pb-4 pt-2">
                  Offers
                </div>
                <table className="w-full text-sm text-start">
                  <thead className="text-xs text-gray-500 ">
                    <tr>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        USD Price
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        Difference
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        Expiration
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        From
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-gra">
                              2.68 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">$6402.84</td>
                      <td className="pb-5 pt-5">29% below</td>
                      <td className="pb-5 pt-5">7 min</td>
                      <td className="pb-5 pt-5 font-bold">nfinitcom</td>
                    </tr>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-gra">
                              3.68 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">$602.84</td>
                      <td className="pb-5 pt-5">70% below</td>
                      <td className="pb-5 pt-5">10 min</td>
                      <td className="pb-5 pt-5 font-bold">bitminer</td>
                    </tr>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-gra">
                              10 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">$1000.84</td>
                      <td className="pb-5 pt-5">2% below</td>
                      <td className="pb-5 pt-5">11 min</td>
                      <td className="pb-5 pt-5 font-bold">nfinitcom</td>
                    </tr>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-gra">
                              2.68 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">$6402.84</td>
                      <td className="pb-5 pt-5">29% below</td>
                      <td className="pb-5 pt-5">7 min</td>
                      <td className="pb-5 pt-5 font-bold">nfinitcom</td>
                    </tr>
                    <tr>
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-gra">
                              3.68 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">$602.84</td>
                      <td className="pb-5 pt-5">70% below</td>
                      <td className="pb-5 pt-5">10 min</td>
                      <td className="pb-5 pt-5 font-bold">bitminer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/2 flex">
              <div className="w-full border-2 p-5 rounded-xl">
                <div className="text-lg font-extrabold border-b-2 pb-4 pt-2">
                  Price History
                </div>
                <div className="w-full flex-grow" style={{ height: "87%" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <defs>
                        <filter
                          id="shadow"
                          x="-20%"
                          y="-20%"
                          width="140%"
                          height="140%"
                        >
                          <feDropShadow
                            dx={2}
                            dy={2}
                            stdDeviation={9}
                            floodColor="orange"
                          />
                        </filter>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tick={{ display: "none" }} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="BTC"
                        stroke="orange"
                        activeDot={{ r: 8 }}
                        strokeWidth={3}
                        filter="url(#shadow)" // Apply the shadow filter to the line
                      />
                      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-16 mt-12">
            <div className="w-full">
              <div className="relative overflow-x-auto border-2 p-5 pb-0 rounded-xl">
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="text-lg font-extrabold pb-4 pt-2 flex gap-3">
                    <PresentationChartLineIcon className="w-6 h-6 inline-block" />
                    <span>Item Activity</span>
                  </div>
                  <div className="flex gap-3 flex-row justify-start flex-wrap">
                    <div className="border border-nft-primary-light bg-nft-primary-light text-white rounded-xl p-3 px-5 text-sm font-medium items-center cursor-pointer">
                      All
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 px-5 text-sm font-medium items-center hover:bg-gray-100 cursor-pointer">
                      Sales
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 px-5 text-sm font-medium items-center hover:bg-gray-100 cursor-pointer">
                      Listings
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 px-5 text-sm font-medium items-center hover:bg-gray-100 cursor-pointer">
                      Transfers
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 px-5 text-sm font-medium items-center hover:bg-gray-100 cursor-pointer">
                      Mint
                    </div>
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
                  <tbody className="text-gray-800">
                    {nftActivity
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
                            <td className="pb-5 pt-5">
                              {ethers.utils.formatEther(
                                activity.price.toString()
                              )}
                            </td>
                            <td className="pb-5 pt-5 font-bold">
                              nonkosi.joyi
                            </td>
                            <td className="pb-5 pt-5 font-bold">nfinitcom</td>
                            <td className="pb-5 pt-5">31 DEC 2021</td>
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
