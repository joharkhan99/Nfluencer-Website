import React, { useEffect } from "react";

import "../styles/style.css";
import Header from "../components/Header";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setIsWalletConnected,
  setWaletAddress,
} from "../../redux/slices/UserSlice";

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const dispatch = useDispatch();

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) {
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        dispatch(setWaletAddress(accounts[0]));
        dispatch(setIsWalletConnected(true));
      } else {
        console.log("No authorized account found");
        dispatch(setIsWalletConnected(false));
        dispatch(setWaletAddress(null));
      }
    } catch (error) {
      console.log(`Error connecting with smart contract: ${error}`);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <div className="bg-transparent">
        <Header />

        <div className="relative isolate px-6 pt-14 lg:px-8 overflow-x-clip overflow-y-visible">
          <div className="relative">
            <div className="absolute left-36 top-60 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-28 h-28 rounded-full bg-cover bg-center bg-transparent shadow-xl left-hero-2"></div>
            </div>
            <div className="absolute -left-4 top-60 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 rounded-full bg-cover bg-center bg-transparent shadow-xl left-hero-1"></div>
            </div>
            <div className="absolute left-28 top-96 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full bg-cover bg-center bg-transparent shadow-xl left-hero-3"></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-60 right-20 transform -translate-y-1/2">
              <div className="w-40 h-40 rounded-full bg-cover bg-center right-hero-1 shadow-xl"></div>
            </div>
            <div className="absolute top-60 -right-12 transform">
              <div className="w-20 h-20 rounded-full bg-cover bg-center right-hero-2 shadow-xl"></div>
            </div>
            <div className="absolute top-96 right-11 transform -translate-y-1/2">
              <div className="w-28 h-28 rounded-full bg-cover bg-center right-hero-3 shadow-xl"></div>
            </div>
          </div>

          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                Discover and collect extraordinary NFTs
              </h1>
              <p className="mt-6 text-lg leading-8 text-black">
                Our marketplace is the world's first and largest NFT market with
                100s of collections
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="w-full py-7 font-bold pl-10 placeholder-black rounded-full shadow-2xl focus:outline-none bg-gradient-to-r from-pink-50 to-white backdrop-filter backdrop-blur-3xl"
                    placeholder="Search items, collections"
                  />

                  <button className="absolute inset-y-0 right-0 flex items-center justify-center pr-3">
                    <svg
                      className=" text-white h-11 w-11 bg-nft-primary-light rounded-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM21 21l-4.35-4.35"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(20%-30rem)] "
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-90 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] rotate-[100deg]"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  ></div>
                </div>

                <div
                  className="absolute top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] sm:left-[calc(0%-30rem)]"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9228e9b6] to-[#b10aff98] opacity-50 sm:left-[calc(20%+36rem)] sm:w-[72.1875rem] rotate-[10deg]"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mt-44">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
              Selected notable drops
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <Link
              to="/nftdetails"
              className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300"
            >
              <div className="w-64">
                <div className="flex justify-between items-center mb-5">
                  <div className="bg-nft-primary-transparent rounded-full px-6 py-2 font-semibold text-sm text-nft-primary-light flex justify-center items-center gap-2">
                    <span className="relative  h-3 w-3 flex">
                      <span className="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-nft-primary-light opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-nft-primary-light"></span>
                    </span>
                    <span>Live Now</span>
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
                <div
                  className="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("../assets/nft1.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-2 pt-3">
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
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
                  <div className="flex -space-x-2 mt-5">
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
                </div>
              </div>
            </Link>
            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300"
            >
              <div className="w-64">
                <div className="flex justify-between items-center mb-5">
                  <div className="bg-gray-100 rounded-full px-8 py-2 font-semibold text-sm text-gray-500">
                    01 Dec 2023
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
                    <span className="pl-1 font-bold text-sm">20</span>
                  </div>
                </div>
                <div
                  className="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("../assets/nft3.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-2 pt-3">
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    Angry Ape
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("../assets/bitcoin.png")}
                      alt="sd"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="pl-2">
                      from{" "}
                      <span className="font-bold text-sm text-black">
                        2.51 COINS
                      </span>
                    </span>
                  </div>
                  <div className="flex -space-x-2 mt-5">
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
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300"
            >
              <div className="w-64">
                <div className="flex justify-between items-center mb-5">
                  <div className="bg-nft-primary-transparent rounded-full px-6 py-2 font-semibold text-sm text-nft-primary-light flex justify-center items-center gap-2">
                    <span className="relative  h-3 w-3 flex">
                      <span className="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-nft-primary-light opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-nft-primary-light"></span>
                    </span>
                    <span>Live Now</span>
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
                    <span className="pl-1 font-bold text-sm">32</span>
                  </div>
                </div>
                <div
                  className="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("../assets/nft2.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-2 pt-3">
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    Boring Smurf
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("../assets/uniswap.png")}
                      alt="sd"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="pl-2">
                      from{" "}
                      <span className="font-bold text-sm text-black">
                        1.98 UNISWAP
                      </span>
                    </span>
                  </div>
                  <div className="flex -space-x-2 mt-5">
                    <img
                      className="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300"
            >
              <div className="w-64">
                <div className="flex justify-between items-center mb-5">
                  <div className="bg-gray-100 rounded-full px-8 py-2 font-semibold text-sm text-gray-500">
                    22 Aug 2023
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
                    <span className="pl-1 font-bold text-sm">46</span>
                  </div>
                </div>
                <div
                  className="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("../assets/nft4.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="py-2 pt-3">
                  <h3 className="text-xl font-bold tracking-tight text-black">
                    Egyptian Myth
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("../assets/litecoin.png")}
                      alt="sd"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="pl-2">
                      from{" "}
                      <span className="font-bold text-sm text-black">
                        7.5 ETH
                      </span>
                    </span>
                  </div>
                  <div className="flex -space-x-2 mt-5">
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
                    <img
                      className="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mt-28">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl mr-4">
                Top selling collections
              </h1>
              <select className="sm:text-4xl text-4xl font-extrabold tracking-tight focus:outline-none  text-nft-primary-light">
                <option
                  value="7-days"
                  className="font-extrabold tracking-tight"
                >
                  Last 7 Days
                </option>
                <option
                  value="1-month"
                  className="font-extrabold tracking-tight"
                >
                  Last 1 Month
                </option>
                <option
                  value="3-months"
                  className="font-extrabold tracking-tight"
                >
                  Last 3 Months
                </option>
                <option
                  value="6-months"
                  className="font-extrabold tracking-tight"
                >
                  Last 6 Months
                </option>
              </select>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="md:grid md:grid-cols-3 gap-7 flex flex-wrap mt-11">
              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">1</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft12.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">
                          Bored Ape Yacht Club
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/eth.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">
                              10,450.00
                            </span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +10,000%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">2</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft13.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">
                          Worldwide Webb Land
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/litecoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">
                              19,320.00
                            </span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +18,00%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">3</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft14.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">
                          Bored Ape Chemistry Club
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">13457.59</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +17,20%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">4</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft15.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">
                          Psychedelics Genesis
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/uniswap.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">5344.13</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +6.94%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">4</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft16.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">Lil Pudgys</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/theta.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain rotate-45"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">5,832.13</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +700.94%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">4</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft17.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">D3LUSION</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/eth.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">33475.59</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +700.94%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">4</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft18.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">
                          Dapper Dinos NFT
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/bitcoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">33475.59</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +700.94%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">4</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft19.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">Zeeverse: Masks</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/uniswap.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">5344.13</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +6.94%
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="#sd"
                className="decoration-transparent hover:bg-purple-50 transition-colors duration-300 pt-3 px-1"
              >
                <div className="w-full">
                  <div className="pb-5 border-b border-gray-200">
                    <div className="flex items-center p-0 gap-3">
                      <span className="text-sm font-bold mr-2">4</span>
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={require("../assets/nft20.jpg")}
                        alt="Images 1"
                      />
                      <div className="ml-2">
                        <h3 className="text-base font-bold">Zed Run</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                          <img
                            src={require("../assets/litecoin.png")}
                            alt="sd"
                            className="h-5 w-5 object-contain"
                          />
                          <span className="pl-2">
                            <span className="text-sm text-black">8,193.13</span>
                          </span>
                        </div>
                      </div>
                      <p className="ml-auto text-sm text-green-500 align-bottom mt-8">
                        +800.94%
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-9">
              <button className="bg-nft-primary-transparent rounded-full px-6 py-3 font-semibold text-sm text-nft-primary-light w-1/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
                <span>Load More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mt-28">
          <div className="text-center mb-11">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
              Trending NFTs
            </h1>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            // focusOnSelect={true}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft7.jpeg")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user1.jpeg")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>

            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft25.PNG")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user2.jpeg")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>

            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft6.PNG")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user3.webp")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>

            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft21.PNG")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user1.jpeg")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>

            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft22.PNG")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user2.jpeg")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>

            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft23.png")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user3.webp")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>

            <a
              href="#sd"
              className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block"
            >
              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                    <button className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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
                  <img
                    src={require("../assets/nft24.PNG")}
                    alt="Card Imagea"
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                      <img
                        src={require("../assets/user1.jpeg")}
                        alt="User Idmage"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-6 py-4 pt-2 text-center">
                    <div className="font-bold text-lg">Week Ahead</div>
                    <div className="text-gray-500 text-xs">
                      category{" "}
                      <span className="font-bold text-xs text-gray-600">
                        Art
                      </span>
                    </div>
                    <p className="text-black font-normal mt-4 text-sm">
                      You can't fall if you don't climb. But there's no joy in
                      living your whole
                    </p>
                  </div>
                </div>
                {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
              </div>
            </a>
          </Carousel>
        </div>
      </div>

      <div className="mt-28 py-20" style={{ background: "#F0F4F7" }}>
        <div className="container mx-auto">
          <div className="text-center mb-11">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
              Resources for getting started
            </h1>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-xl shadow-lg p-5">
                <img
                  className="h-48 object-cover rounded-t-lg w-full rounded-xl"
                  src={require("../assets/recource1.jpg")}
                  alt="Card 1"
                />
                <div className="pt-6">
                  <h3 className="text-lg font-bold mb-2">
                    I should have recieved NFTs
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Scammers and bad actors could easily steal an artist's work
                    and open a fake OpenSea account where they list counterfeit
                    artwork for auction.
                  </p>
                  <a
                    href="#s"
                    className="flex items-center gap-3 text-black font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    See more details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-xl shadow-lg p-5">
                <img
                  className="h-48 object-cover rounded-t-lg w-full rounded-xl"
                  src={require("../assets/recource3.jpg")}
                  alt="Card 1"
                />
                <div className="pt-6">
                  <h3 className="text-lg font-bold mb-2">
                    The marketplace isn't working
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Let's find the main challenges companies face when crafting
                    NFT marketplaces. ✓ Our complete guide on 12 issues to
                    avoid.
                  </p>
                  <a
                    href="#s"
                    className="flex items-center gap-3 text-black font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    See more details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-xl shadow-lg p-5">
                <img
                  className="h-48 object-cover rounded-t-lg w-full rounded-xl"
                  src={require("../assets/recource2.jpg")}
                  alt="Card 1"
                />
                <div className="pt-6">
                  <h3 className="text-lg font-bold mb-2">
                    I think I minted duplicate NFTs
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Creating and minting NFTs is, in some ways, an easy
                    practice, and there are so many duplicates and pirated art
                    pieces on the blockchain.
                  </p>
                  <a
                    href="#s"
                    className="flex items-center gap-3 text-black font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    See more details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <div className="container mx-auto">
          <div className="text-center mb-11">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
              Browse Popular NFTs
            </h1>
          </div>

          <div className="flex flex-wrap justify-center">
            <Tabs
              className="w-full text-center"
              selectedTabClassName="active-tab-look"
            >
              <TabList className="border-b border-gray-200 w-full">
                <Tab className="list-none pb-3 text-gray-400 text-sm font-semibold mr-10 inline-block relative cursor-pointer">
                  All
                </Tab>
                <Tab className="list-none pb-3 text-gray-400 text-sm font-semibold mr-10 inline-block relative cursor-pointer">
                  Trending
                </Tab>
                <Tab className="list-none pb-3 text-gray-400 text-sm font-semibold mr-10 inline-block relative cursor-pointer">
                  Gaming
                </Tab>
                <Tab className="list-none pb-3 text-gray-400 text-sm font-semibold mr-10 inline-block relative cursor-pointer">
                  Photography
                </Tab>
              </TabList>

              <TabPanel>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
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
                          <img
                            src={require("../assets/nft29.PNG")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Election Season
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Art
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/eth.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  450 ETH
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">19</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft28.PNG")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user2.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Lorr's Ad Issues
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Shapes
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/bitcoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  17.59 BC
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">20</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft26.PNG")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user3.webp")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Science Jobs
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                science
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/litecoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  7 XTZ
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">12</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft27.PNG")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Venture Capitalist
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                PFPS
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/uniswap.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  20 Flow
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
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
                          <img
                            src={require("../assets/nft19.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Interesting Lemur
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Art
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/eth.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  450 ETH
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">19</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft9.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user2.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">Cold Bear</div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Shapes
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/bitcoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  17.59 BC
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">20</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft5.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user3.webp")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Ancient Monk
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                science
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/litecoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  7 XTZ
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">12</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft11.jpeg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              President Candidate
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                PFPS
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/uniswap.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  20 Flow
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
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
                          <img
                            src={require("../assets/nft30.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Election Season
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Art
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/eth.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  450 ETH
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">19</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft31.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user2.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Lorr's Ad Issues
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Shapes
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/bitcoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  17.59 BC
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">20</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft32.PNG")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user3.webp")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Science Jobs
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                science
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/litecoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  7 XTZ
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">12</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft15.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Venture Capitalist
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                PFPS
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/uniswap.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  20 Flow
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">12</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft11.jpeg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              President Candidate
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                PFPS
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/uniswap.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  20 Flow
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">20</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft5.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user3.webp")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Ancient Monk
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                science
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/litecoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  7 XTZ
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
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
                          <img
                            src={require("../assets/nft19.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user1.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">
                              Interesting Lemur
                            </div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Art
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/eth.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  450 ETH
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>

                  <div className="w-72">
                    <a
                      href="#sd"
                      className="decoration-transparent hover:bg-purple-50 shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0  block"
                    >
                      <div className="relative shadow-sm rounded-xl shadow-gray-100">
                        <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                          <div className="absolute top-2 right-2 p-2 px-3 bg-white text-black rounded-full">
                            <button className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                ></path>
                              </svg>
                              <span className="pl-2 font-bold text-sm">19</span>
                            </button>
                          </div>
                          <img
                            src={require("../assets/nft9.jpg")}
                            alt="Card Imagea"
                            className="h-80 w-full object-cover"
                          />
                          <div className="flex items-center justify-center">
                            <div className="rounded-full overflow-hidden w-14 h-14 -mt-7 border-2 border-white">
                              <img
                                src={require("../assets/user2.jpeg")}
                                alt="User Idmage"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="px-6 py-4 pt-2 text-center">
                            <div className="font-bold text-lg">Cold Bear</div>
                            <div className="text-gray-500 text-xs">
                              category{" "}
                              <span className="font-bold text-xs text-gray-600">
                                Shapes
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 justify-center pt-2 text-sm mt-2">
                              <img
                                src={require("../assets/bitcoin.png")}
                                alt="sd"
                                className="h-5 w-5 object-contain"
                              />
                              <span className="pl-2">
                                <span className="font-bold text-sm text-black">
                                  17.59 BC
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                      </div>
                    </a>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div className="text-center mt-14">
            <button className="bg-nft-primary-transparent rounded-full px-6 py-3 font-semibold text-sm text-nft-primary-light w-1/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
              <span>Load More</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
