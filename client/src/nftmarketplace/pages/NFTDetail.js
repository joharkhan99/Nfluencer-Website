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
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../utils/Loader";

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
  let { nfttitle, nftId } = useParams();

  const navigate = useNavigate();
  const [nft, setNft] = useState(null);

  const fetchGigDetails = async () => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/api/nft/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nftId: nftId,
        }),
      }
    );
    const res = await req.json();
    console.log(res);
    if (res.error) {
      navigate("/");
      return;
    }
    setNft(res[0]);
  };

  useEffect(() => {
    if (!nftId) {
      navigate("/");
      return;
    }
    fetchGigDetails();
  }, [nftId, navigate]);

  if (!nft) {
    <Loader />;
  } else
    return (
      <>
        <Header transparent={true} />
        <div className="container mx-auto my-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <img
                src={nft.image}
                alt={nft.name}
                className="rounded-lg h-auto w-full md:h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 px-5 bg-white text-black rounded-full border">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                      <span className="pl-2 font-bold text-sm">36</span>
                    </button>
                  </div>
                  <div className="p-3 px-5 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <span className="pl-2 font-bold text-sm">124.6k</span>
                    </button>
                  </div>
                </div>
                <button className="font-bold text-xl hover:bg-gray-100 rounded-full w-9 h-9 border text-center">
                  <span>···</span>
                </button>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
                {nft.name}
              </h1>
              <div className="flex items-center text-gray-500 text-sm my-3 mb-7">
                <img
                  src={require("../assets/bitcoin.png")}
                  alt="sd"
                  className="h-5 w-5 object-contain"
                />
                <span className="pl-2">
                  on Sale for{" "}
                  <span className="font-bold text-sm text-black">
                    {nft.price} BTC
                  </span>
                </span>
              </div>

              <p className="text-sm">{nft.description}</p>

              <div className="flex items-center mt-7 justify-between">
                <div>
                  <span className="text-sm mb-4 block">
                    <span className="text-black font-semibold">Creator</span>
                    <span className="text-gray-500 ml-1">
                      {nft.royalties}% royalities
                    </span>
                  </span>
                  <a href="s" className="flex items-center">
                    <img
                      src={nft.user.avatar}
                      alt="User Imasge"
                      className="rounded-full h-10 w-10"
                    />
                    <span className="ml-2 font-bold">
                      {nft.walletAddress.substring(0, 10) +
                        "..." +
                        nft.walletAddress.substring(
                          nft.walletAddress.length - 4,
                          nft.walletAddress.length
                        )}
                    </span>
                  </a>
                </div>
                <div>
                  <span className="text-sm mb-4 block">
                    <span className="text-black font-semibold">Collection</span>
                  </span>
                  <a href="s" className="flex items-center">
                    <img
                      src={require("../assets/nft1.jpg")}
                      alt="User Imasge"
                      className="rounded-full h-10 w-10"
                    />
                    <span className="ml-2 font-bold">Fellaz Collection</span>
                  </a>
                </div>
              </div>

              {/* <div className="text-sm mt-7">
              <div className="text-gray-500 mb-1">Blockchain</div>
              <div className="text-black font-bold flex gap-2">
                <img
                  src={require("../assets/bitcoin.png")}
                  alt="sd"
                  className="h-5 w-5 object-contain"
                />
                <span>Bitcoin</span>
              </div>
            </div> */}

              {/* <div className="flex justify-evenly mt-7 gap-5 border p-5 rounded-xl">
              <div className="text-center ">
                <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-2xl">
                  $24.50
                </h1>
                <span className="text-gray-500 text-sm font-semibold">
                  Auction price
                </span>
              </div>
              <div className="border"></div>
              <div className="text-center">
                <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-2xl">
                  $99.50
                </h1>
                <span className="text-gray-500 text-sm font-semibold">
                  Buy it now
                </span>
              </div>
            </div> */}

              <div className="text-sm mt-7 w-full">
                <div className="text-black font-bold flex gap-2 mb-4">
                  Properties
                </div>
                <div className="flex gap-3 flex-row justify-start flex-wrap">
                  {nft.traits.map((trait, index) => (
                    <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
                      <div className=" outline-none cursor-pointer bg-transparent">
                        {trait.traitType}: {trait.traitName}
                      </div>
                    </div>
                  ))}

                  {/* <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
                  <label>
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
                        d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                      />
                    </svg>
                  </label>
                  <div className=" outline-none cursor-pointer bg-transparent">
                    Mouth grade: Fresh
                  </div>
                </div> */}
                  <div className="flex flex-row border bg-gray-100 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-200 text-gray-500">
                    <div className=" outline-none cursor-pointer bg-transparent">
                      See more
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-6 shadow-lg rounded-xl">
                <span className="text-gray-500 text-sm font-bold">Top bid</span>
                <div className="flex items-center text-gray-500 text-sm my-3 mb-7">
                  <img
                    src={require("../assets/bitcoin.png")}
                    alt="sd"
                    className="h-10 w-10 object-contain bg-orange-100 rounded-full p-2"
                  />
                  <span className="pl-2">
                    <span className="font-bold text-lg text-black">
                      {nft.price} BTC ($9118.1 USD)
                    </span>
                  </span>
                </div>

                <div className="flex gap-4">
                  <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm w-full font-semibold">
                    Place your bid
                  </button>
                  <button className="bg-nft-primary-transparent rounded-full px-6 py-3 font-semibold text-sm text-nft-primary-light w-full hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
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
                            <span className="font-bold text-sm text-black">
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
                            <span className="font-bold text-sm text-black">
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
                            <span className="font-bold text-sm text-black">
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
                            <span className="font-bold text-sm text-black">
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
                            <span className="font-bold text-sm text-black">
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
              <div className="relative overflow-x-auto border-2 p-5 rounded-xl">
                <div className="flex justify-between items-center border-b-2">
                  <div className="text-lg font-extrabold pb-4 pt-2">
                    Item Activity
                  </div>
                  <div className="flex gap-3 flex-row justify-start flex-wrap">
                    <div className="border border-nft-primary-transparent bg-nft-primary-transparent text-nft-primary-light rounded-full p-2 px-3 text-sm font-semibold items-center cursor-pointer">
                      Listings
                    </div>
                    <div className="border border-gray-200 rounded-full p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100 cursor-pointer">
                      Sales
                    </div>
                    <div className="border border-nft-primary-transparent bg-nft-primary-transparent text-nft-primary-light rounded-full p-2 px-3 text-sm font-semibold items-center cursor-pointer">
                      Bids
                    </div>
                    <div className="border border-gray-200 rounded-full p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100 cursor-pointer">
                      Transfers
                    </div>
                  </div>
                </div>
                <table className="w-full text-sm text-start">
                  <thead className="text-xs text-gray-500 ">
                    <tr>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        Event
                      </th>
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
                        From
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="text-start font-semibold py-6 pb-3"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                            />
                          </svg>

                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              Transfer
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5"></td>
                      <td className="pb-5 pt-5 font-bold">nonkosi.joyi</td>
                      <td className="pb-5 pt-5 font-bold">nfinitcom</td>
                      <td className="pb-5 pt-5">31 DEC 2021</td>
                    </tr>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>

                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              Sale
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              2.52 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5 font-bold">nonkosi.joyi</td>
                      <td className="pb-5 pt-5 font-bold">peter.ty</td>
                      <td className="pb-5 pt-5">13 JAN 2021</td>
                    </tr>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>

                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              Sale
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              3.65 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5 font-bold">peter.tyi</td>
                      <td className="pb-5 pt-5 font-bold">jumaima</td>
                      <td className="pb-5 pt-5">31 DEC 2021</td>
                    </tr>
                    <tr className="border-b-2">
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                            />
                          </svg>

                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              Transfer
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5"></td>
                      <td className="pb-5 pt-5 font-bold">jumaima</td>
                      <td className="pb-5 pt-5 font-bold">faadi.al.rahman</td>
                      <td className="pb-5 pt-5">15 SEP 2022</td>
                    </tr>
                    <tr>
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>

                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              Sale
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5">
                        <div className="flex items-center text-sm">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="font-bold text-sm text-black">
                              4.32 BTC
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="pb-5 pt-5 font-bold">faadi.al.rahman</td>
                      <td className="pb-5 pt-5 font-bold">thanawan</td>
                      <td className="pb-5 pt-5 text-sm">21 FEB 2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="py-11">
            <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-2xl">
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
                    <h3 className="text-xl font-bold tracking-tight text-black">
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
                          <span className="font-bold text-sm text-black">
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

              <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-4 px-4 border transition-colors duration-300">
                <div className="w-64 ">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex -space-x-2">
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
                      src={require("../assets/nft36.jpg")}
                      alt="sd"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold tracking-tight text-black">
                      Silent Ghost
                    </h3>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../assets/theta.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span className="pl-2">
                          from{" "}
                          <span className="font-bold text-sm text-black">
                            4 THT
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
                        <span className="pl-1 font-bold text-sm">29</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-4 px-4 border transition-colors duration-300">
                <div className="w-64 ">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex -space-x-2">
                      <img
                        className="w-8 h-8 rounded-full border-2 object-cover border-white"
                        src={require("../assets/user1.jpeg")}
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
                      src={require("../assets/nft39.PNG")}
                      alt="sd"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold tracking-tight text-black">
                      Egg Galaxy
                    </h3>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../assets/uniswap.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span className="pl-2">
                          from{" "}
                          <span className="font-bold text-sm text-black">
                            260 UNS
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
                        <span className="pl-1 font-bold text-sm">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-4 px-4 border transition-colors duration-300">
                <div className="w-64 ">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex -space-x-2">
                      <img
                        className="w-8 h-8 rounded-full border-2 object-cover border-white"
                        src={require("../assets/user3.webp")}
                        alt="User Imageas"
                      />
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
                      src={require("../assets/nft30.jpg")}
                      alt="sd"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold tracking-tight text-black">
                      Urban Life
                    </h3>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../assets/bitcoin.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span className="pl-2">
                          from{" "}
                          <span className="font-bold text-sm text-black">
                            2.3 BTC
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
                        <span className="pl-1 font-bold text-sm">35</span>
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
