import React, { useState } from "react";
import "./styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Explore() {
  return (
    <>
      <Header transparent={true} />
      <div className="container mx-auto">
        <div class="py-11">
          <h1 class="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
            Explore NFTs
          </h1>

          <div className="filters mt-6">
            <div className="flex flex-row justify-between">
              <div className="flex gap-3 flex-row justify-start">
                <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
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
                        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                      />
                    </svg>
                  </label>
                  <select className="appearance-none outline-none cursor-pointer bg-transparent">
                    <option>Ethereum</option>
                    <option>Bitcoin</option>
                    <option>Litecoin</option>
                    <option>Doge</option>
                  </select>
                </div>
                <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
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
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>
                  </label>
                  <select className="appearance-none outline-none cursor-pointer bg-transparent">
                    <option>Category</option>
                    <option>All</option>
                    <option>Gaming</option>
                    <option>Art</option>
                    <option>Photography</option>
                    <option>Music</option>
                  </select>
                </div>
                <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
                  <label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <select className="appearance-none outline-none cursor-pointer bg-transparent">
                    <option>Sale type</option>
                    <option>All</option>
                    <option>Gaming</option>
                    <option>Art</option>
                    <option>Photography</option>
                    <option>Music</option>
                  </select>
                </div>
                <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
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
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </label>
                  <select className="appearance-none outline-none cursor-pointer bg-transparent">
                    <option>Price range</option>
                    <option>All</option>
                    <option>Gaming</option>
                    <option>Art</option>
                    <option>Photography</option>
                    <option>Music</option>
                  </select>
                </div>

                <div>
                  <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
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
                          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                        />
                      </svg>
                    </label>
                    <select className="appearance-none outline-none cursor-pointer bg-transparent">
                      <option>Collections</option>
                      <option>Angry Apes</option>
                      <option>PLUR Official</option>
                      <option>Lil Pudgy's</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-row border border-gray-200 rounded-full gap-2 p-2 px-3 text-sm font-semibold items-center hover:bg-gray-100">
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
                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      />
                    </svg>
                  </label>
                  <select className="appearance-none outline-none cursor-pointer bg-transparent">
                    <option>Date added</option>
                    <option>12/12/2023</option>
                    <option>12/12/2023</option>
                    <option>12/12/2023</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-6 mt-12">
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft20.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft36.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft33.PNG")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft8.png")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft34.PNG")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft35.PNG")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft10.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-64 ">
                <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("./assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>
                <div
                  class="h-auto rounded-xl bg-gray-200 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("./assets/nft38.PNG")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-xl font-bold tracking-tight text-black">
                    Nyoling
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("./assets/eth.png")}
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
                  <div class="flex justify-between items-center mt-5">
                    <div>
                      <button className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm">
                        Buy Now
                      </button>
                    </div>
                    <div class="flex items-center">
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
                      <span class="pl-1 font-bold text-sm">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-9">
          <button class="bg-nft-primary-transparent rounded-full px-6 py-3 font-semibold text-sm text-nft-primary-light w-1/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
            <span>Load More</span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Explore;
