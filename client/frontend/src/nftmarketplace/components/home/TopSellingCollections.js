import React from "react";

const TopSellingCollections = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-28">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl mr-4">
              Top selling collections
            </h1>
            <select className="sm:text-4xl text-4xl font-extrabold tracking-tight focus:outline-none  text-nft-primary-light">
              <option value="7-days" className="font-extrabold tracking-tight">
                Last 7 Days
              </option>
              <option value="1-month" className="font-extrabold tracking-tight">
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
                      src={require("../../assets/nft12.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">
                        Bored Ape Yacht Club
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/eth.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span className="pl-2">
                          <span className="text-sm text-black">10,450.00</span>
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
                      src={require("../../assets/nft13.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">
                        Worldwide Webb Land
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/litecoin.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span className="pl-2">
                          <span className="text-sm text-black">19,320.00</span>
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
                      src={require("../../assets/nft14.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">
                        Bored Ape Chemistry Club
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/bitcoin.png")}
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
                      src={require("../../assets/nft15.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">
                        Psychedelics Genesis
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/uniswap.png")}
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
                      src={require("../../assets/nft16.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">Lil Pudgys</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/theta.png")}
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
                      src={require("../../assets/nft17.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">D3LUSION</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/eth.png")}
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
                      src={require("../../assets/nft18.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">Dapper Dinos NFT</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/bitcoin.png")}
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
                      src={require("../../assets/nft19.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">Zeeverse: Masks</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/uniswap.png")}
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
                      src={require("../../assets/nft20.jpg")}
                      alt="Images 1"
                    />
                    <div className="ml-2">
                      <h3 className="text-base font-bold">Zed Run</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <img
                          src={require("../../assets/litecoin.png")}
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
  );
};

export default TopSellingCollections;
