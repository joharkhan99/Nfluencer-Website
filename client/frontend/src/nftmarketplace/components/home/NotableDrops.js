import React from "react";
import { Link } from "react-router-dom";

const NotableDrops = () => {
  return (
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
                  src={require("../../assets/nft1.jpg")}
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
                    src={require("../../assets/eth.png")}
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
                    src={require("../../assets/user1.jpeg")}
                    alt="User Imageas"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 object-cover border-white"
                    src={require("../../assets/user2.jpeg")}
                    alt="User Imageas"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 object-cover border-white"
                    src={require("../../assets/user3.webp")}
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
                  src={require("../../assets/nft3.jpg")}
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
                    src={require("../../assets/bitcoin.png")}
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
                    src={require("../../assets/user3.webp")}
                    alt="User Imageas"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 object-cover border-white"
                    src={require("../../assets/user1.jpeg")}
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
                  src={require("../../assets/nft2.jpg")}
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
                    src={require("../../assets/uniswap.png")}
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
                    src={require("../../assets/user2.jpeg")}
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
                  src={require("../../assets/nft4.jpg")}
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
                    src={require("../../assets/litecoin.png")}
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
                    src={require("../../assets/user2.jpeg")}
                    alt="User Imageas"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 object-cover border-white"
                    src={require("../../assets/user3.webp")}
                    alt="User Imageas"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 object-cover border-white"
                    src={require("../../assets/user1.jpeg")}
                    alt="User Imageas"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotableDrops;
