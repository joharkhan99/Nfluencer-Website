import React from "react";
import herobg from "../assets/img/vr-glasses2.PNG";
import { HeartIcon } from "@heroicons/react/24/outline";
import BalanceChart from "../components/charts/BalanceChart";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const SellerManageNFT = () => {
  return (
    <div className="w-full">
      <div className="lg:flex gap-4">
        <div
          className="lg:w-3/4 p-0 bg-nft-primary-light rounded-xl relative bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${herobg})`,
          }}
        >
          <div className="w-1/2 text-white relative py-12 px-10">
            <h2 className="text-3xl mb-2 font-medium">
              Discover, Collect, and sell NFTs
            </h2>
            <div className="flex gap-3 items-center mt-10">
              <a
                href="d"
                className="block bg-white text-gray-800 font-semibold rounded-full p-4 px-7 text-sm hover:opacity-80"
              >
                Discover now
              </a>
              <a
                href="d"
                className="block border-transparent border text-white bg-white font-semibold rounded-full p-4 px-7 text-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 hover:opacity-80"
              >
                Create NFT
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4">
          <div className="bg-white w-full h-full rounded-xl p-0 shadow-xl shadow-gray-200">
            <div className="flex flex-col justify-between h-full relative">
              <div className="text-center pt-4 text-base font-light text-gray-400 absolute w-full">
                Balance
              </div>
              <BalanceChart />
              <div className="p-4 pt-0">
                <button className="bg-purple-200 rounded-xl p-3 text-sm w-full text-nft-primary-dark font-semibold hover:bg-nft-primary-light hover:text-white transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-4 mt-10">
        <div className="lg:w-3/4 p-0 rounded-xl relative">
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                Trending NFTs
              </h2>

              <button className="text-nft-primary-light font-medium text-sm block">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-xl shadow-gray-200 text-gray-800">
                  <div className="max-w-sm rounded-xl overflow-hidden p-2">
                    <div className="absolute top-3 right-3">
                      <button className="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon className="w-4 h-4 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../../../website/assets/trend1.jpg")}
                      alt="Card Imagea"
                      className="h-44 w-full object-cover rounded-xl"
                    />

                    <div className="flex flex-col justify-between gap-6 py-3 pb-0">
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1 items-center text-gray-500 text-sm">
                            <span>Jacob Maharra</span>
                            <span>
                              <CheckBadgeIcon className="w-4 h-4 text-nft-primary-dark" />
                            </span>
                          </div>
                          <div className="flex items-center -space-x-3">
                            <img
                              src={require("../../../website/assets/man.jpg")}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                            <img
                              src={require("../../../website/assets/authbg.jpg")}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                          </div>
                        </div>

                        <div className="text-lg text-gray-800 font-semibold">
                          Dream World #50
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                          <div>
                            <span>Price</span>
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-yellow-100 p-1">
                                <img
                                  src={require("../../../nftmarketplace/assets/bitcoin.png")}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                              <div className="flex gap-1">
                                <span className="font-semibold text-gray-800">
                                  5.32
                                </span>
                                <span>BTC</span>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-gray-500 text-xs">
                                - $ 2500
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-gray-500 text-sm">
                          <div>
                            <span>Current Bid</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-gray-100 p-1">
                              <img
                                src={require("../../../nftmarketplace/assets/eth.png")}
                                alt=""
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                            <div className="flex gap-1">
                              <span className="font-semibold text-gray-800">
                                3.423
                              </span>
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button className="bg-nft-primary-light text-white w-full p-3 rounded-xl text-sm hover:opacity-80">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-xl shadow-gray-200 text-gray-800">
                  <div className="max-w-sm rounded-xl overflow-hidden p-2">
                    <div className="absolute top-3 right-3">
                      <button className="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon className="w-4 h-4 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../../../website/assets/trend1.jpg")}
                      alt="Card Imagea"
                      className="h-44 w-full object-cover rounded-xl"
                    />

                    <div className="flex flex-col justify-between gap-6 py-3 pb-0">
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1 items-center text-gray-500 text-sm">
                            <span>Jacob Maharra</span>
                            <span>
                              <CheckBadgeIcon className="w-4 h-4 text-nft-primary-dark" />
                            </span>
                          </div>
                          <div className="flex items-center -space-x-3">
                            <img
                              src={require("../../../website/assets/man.jpg")}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                            <img
                              src={require("../../../website/assets/authbg.jpg")}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                          </div>
                        </div>

                        <div className="text-lg text-gray-800 font-semibold">
                          Dream World #50
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                          <div>
                            <span>Price</span>
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-yellow-100 p-1">
                                <img
                                  src={require("../../../nftmarketplace/assets/bitcoin.png")}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                              <div className="flex gap-1">
                                <span className="font-semibold text-gray-800">
                                  5.32
                                </span>
                                <span>BTC</span>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-gray-500 text-xs">
                                - $ 2500
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-gray-500 text-sm">
                          <div>
                            <span>Current Bid</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-gray-100 p-1">
                              <img
                                src={require("../../../nftmarketplace/assets/eth.png")}
                                alt=""
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                            <div className="flex gap-1">
                              <span className="font-semibold text-gray-800">
                                3.423
                              </span>
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button className="bg-nft-primary-light text-white w-full p-3 rounded-xl text-sm hover:opacity-80">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-xl shadow-gray-200 text-gray-800">
                  <div className="max-w-sm rounded-xl overflow-hidden p-2">
                    <div className="absolute top-3 right-3">
                      <button className="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon className="w-4 h-4 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../../../website/assets/trend1.jpg")}
                      alt="Card Imagea"
                      className="h-44 w-full object-cover rounded-xl"
                    />

                    <div className="flex flex-col justify-between gap-6 py-3 pb-0">
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1 items-center text-gray-500 text-sm">
                            <span>Jacob Maharra</span>
                            <span>
                              <CheckBadgeIcon className="w-4 h-4 text-nft-primary-dark" />
                            </span>
                          </div>
                          <div className="flex items-center -space-x-3">
                            <img
                              src={require("../../../website/assets/man.jpg")}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                            <img
                              src={require("../../../website/assets/authbg.jpg")}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover border-2 border-white"
                            />
                          </div>
                        </div>

                        <div className="text-lg text-gray-800 font-semibold">
                          Dream World #50
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                          <div>
                            <span>Price</span>
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-yellow-100 p-1">
                                <img
                                  src={require("../../../nftmarketplace/assets/bitcoin.png")}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                              <div className="flex gap-1">
                                <span className="font-semibold text-gray-800">
                                  5.32
                                </span>
                                <span>BTC</span>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-gray-500 text-xs">
                                - $ 2500
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-gray-500 text-sm">
                          <div>
                            <span>Current Bid</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-gray-100 p-1">
                              <img
                                src={require("../../../nftmarketplace/assets/eth.png")}
                                alt=""
                                className="w-4 h-4 object-contain"
                              />
                            </div>
                            <div className="flex gap-1">
                              <span className="font-semibold text-gray-800">
                                3.423
                              </span>
                              <span>ETH</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button className="bg-nft-primary-light text-white w-full p-3 rounded-xl text-sm hover:opacity-80">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4">
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                Top Creators
              </h2>

              <button className="text-nft-primary-light font-medium text-sm block">
                View All
              </button>
            </div>

            <div className="rounded-xl p-0 bg-white">
              <div className="shadow-lg rounded-xl shadow-gray-200">
                {/*  */}
                <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
                  <div className="flex h-full gap-2">
                    <div>
                      <img
                        src={require("../../../website/assets/man.jpg")}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-fulls">
                      <span className="font-semibold">Golbert Andi</span>
                      <span className="text-gray-500 text-xs">
                        10,300 Items
                      </span>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="flex flex-col justify-between h-full gap-1">
                      <span className="font-semibold">$500K</span>
                      <span className="text-gray-500 text-xs">Total USD</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
                  <div className="flex h-full gap-2">
                    <div>
                      <img
                        src={require("../../../website/assets/man.jpg")}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-fulls">
                      <span className="font-semibold">Golbert Andi</span>
                      <span className="text-gray-500 text-xs">
                        10,300 Items
                      </span>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="flex flex-col justify-between h-full gap-1">
                      <span className="font-semibold">$500K</span>
                      <span className="text-gray-500 text-xs">Total USD</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
                  <div className="flex h-full gap-2">
                    <div>
                      <img
                        src={require("../../../website/assets/man.jpg")}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between h-fulls">
                      <span className="font-semibold">Golbert Andi</span>
                      <span className="text-gray-500 text-xs">
                        10,300 Items
                      </span>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="flex flex-col justify-between h-full gap-1">
                      <span className="font-semibold">$500K</span>
                      <span className="text-gray-500 text-xs">Total USD</span>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerManageNFT;
