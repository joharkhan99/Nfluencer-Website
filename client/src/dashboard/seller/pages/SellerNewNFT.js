import React from "react";

const SellerNewNFT = () => {
  return (
    <div className="container mx-auto my-10 mt-0 rounded-xl p-4 bg-white shadow-lg shadow-gray-200">
      <div class="py-7 pt-0">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-800">
          Add new NFT
        </h1>
      </div>

      <div class="flex flex-col md:flex-row justify-between">
        <div class="order-2 md:order-1 w-full">
          <div className="mb-14">
            <div className="font-bold text-md">Choose blockchain</div>
            <p className="text-sm text-gray-500">
              Connect with one of our available wallet providers or create a new
              one.
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              <div>
                <input
                  type="radio"
                  name="option"
                  id="1"
                  value="1"
                  class="peer hidden"
                />
                <label
                  for="1"
                  class="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/metamask.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>MetaMask</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="2"
                  value="2"
                  class="peer hidden"
                />
                <label
                  for="2"
                  class="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/coinbase.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>Coinbase</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="3"
                  value="3"
                  class="peer hidden"
                />
                <label
                  for="3"
                  class="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/torus.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>Torus</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="4"
                  value="4"
                  class="peer hidden"
                />
                <label
                  for="4"
                  class="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/fort.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>Fortmatic</span>
                </label>
              </div>

              <div className="flex gap-2 flex-row border border-gray-200 text-gray-600 rounded-full p-3 px-12 text-sm font-semibold items-center hover:bg-gray-100">
                <button>Show more options</button>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Select item type</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose, but each one takes.
            </p>
            <div className="flex gap-3 flex-row mt-6">
              <div className="flex gap-2 w-full flex-row py-8 shadow-md text-gray-800 rounded-xl p-3 px-12 text-sm font-bold items-center hover:bg-gray-100">
                <img
                  src={require("../../../nftmarketplace/assets/single.png")}
                  alt="s"
                  className="w-7 h-7"
                />
                <button>Create single item</button>
              </div>
              <div className="flex gap-2 w-full flex-row py-8 shadow-md text-gray-600 rounded-xl p-3 px-12 text-sm font-semibold items-center hover:bg-gray-100">
                <img
                  src={require("../../../nftmarketplace/assets/collection.png")}
                  alt="s"
                  className="w-5 h-5"
                />
                <button>Create Collection</button>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Upload an item</div>
            <p className="text-sm text-gray-500">
              But each one takes a different approach and makes different
              tradeoffs.
            </p>
            <div className="w-full mt-6 border-2 rounded-xl border-dashed border-gray-300 p-6 py-10">
              <div className="text-center flex items-center justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-28 h-28 stroke-gray-300 stroke-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <div className="font-extrabold text-md mt-4">
                  Drag your item to upload
                </div>
                <p className="text-sm text-gray-500">
                  PNG, GIF, WebP, MP4 or MP3. Maximum file size 100mb.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Item Details</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose, but each one takes.
            </p>
            <div className="mt-6">
              <div className="mb-6">
                <label className="block font-semibold text-sm text-gray-800 mb-2">
                  Name your item
                </label>
                <input
                  type="text"
                  placeholder="e.g. Brown Grizzly Bear Smile"
                  className="w-full rounded-full border-gray-200 border p-3 outline-none text-sm placeholder:text-gray-500 font-semibold px-5"
                />
              </div>
              <div className="mb-6">
                <label className="block font-semibold text-sm text-gray-800 mb-2">
                  Enter short description
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border-gray-200 border p-3 outline-none text-sm placeholder:text-gray-500 font-semibold px-5"
                  placeholder="e.g. Description about the NFT"
                />
              </div>
              <div className="mb-6">
                <label className="block font-semibold text-sm text-gray-800 mb-2">
                  Add properties
                </label>
                <div className="w-full rounded-full border-gray-200 border p-3 outline-none text-sm placeholder:text-gray-500 font-semibold px-5">
                  <span className="bg-gray-200 p-2 px-3 rounded-full mr-2 text-sm">
                    Art<span className="pl-3">x</span>
                  </span>
                  <span className="bg-gray-200 p-2 px-3 rounded-full mr-2 text-sm">
                    Color<span className="pl-3">x</span>
                  </span>
                  <span className="bg-gray-200 p-2 px-3 rounded-full mr-2 text-sm">
                    Body Type<span className="pl-3">x</span>
                  </span>
                </div>
              </div>

              <div className="mb-6 flex gap-6">
                <div className="w-full">
                  <label className="block font-semibold text-sm text-gray-800 mb-2">
                    Set item price or starting bid
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-full border-gray-200 border p-3 outline-none text-sm placeholder:text-gray-500 font-semibold px-5"
                    placeholder="e.g. 230"
                  />
                </div>
                <div className="w-full">
                  <label className="block font-semibold text-sm text-gray-800 mb-2">
                    Set royalities amount, %
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-full border-gray-200 border p-3 outline-none text-sm placeholder:text-gray-500 font-semibold px-5"
                    placeholder="e.g. 12"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Choose collection</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose.
            </p>
            <div className="flex gap-3 mt-6 flex-row">
              <div className="flex gap-2 w-full flex-row py-4 border text-gray-800 rounded-xl p-1 px-4 text-md font-bold items-center hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 bg-gray-200 p-3 rounded-xl fill-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>

                <button className="text-left text-sm">
                  Create new collection
                  <span className="block text-xs text-gray-600 font-semibold">
                    Type to create
                  </span>
                </button>
              </div>
              <div className="flex gap-2 w-full flex-row py-4 border text-gray-800 rounded-xl p-1 px-4 text-md font-bold items-center hover:bg-gray-100">
                <img
                  src={require("../../../nftmarketplace/assets/nft32.PNG")}
                  alt=""
                  className="w-14 h-14 rounded-xl"
                />

                <button className="text-left text-sm">
                  Battle for Digital
                  <span className="block text-xs text-gray-600 font-semibold">
                    17 items
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <div className="font-bold text-md">Notifications</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose.
            </p>
            <div className="mt-6">
              <div className="border-b flex flex-row justify-between items-center py-3 pb-5 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Product updates
                  </div>
                  <div className="font-bold mt-1">
                    Receive messages from our platform
                  </div>
                </div>
                <div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
                  </label>
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center py-5 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Reminders
                  </div>
                  <div className="font-bold mt-1">
                    Receive booking reminders, pricing notices
                  </div>
                </div>
                <div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
                  </label>
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center py-5 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Account support
                  </div>
                  <div className="font-bold mt-1">
                    Receive messages about your account, your trips, your legal
                    alerts
                  </div>
                </div>
                <div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <div className="flex justify-between items-center  flex-row">
                <div className="text-center w-full">
                  <button class="bg-nft-primary-light rounded-full px-6 py-4 font-semibold text-sm text-white w-4/5">
                    <span>Publish</span>
                  </button>
                </div>
                <div className="text-center w-full">
                  <button class="bg-nft-primary-transparent rounded-full px-6 py-4 font-semibold text-sm text-nft-primary-light w-4/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
                    <span>Discard all</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2 w-full">
          <div class="flex flex-wrap justify-center gap-6 sticky top-0">
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div class="w-80">
                <div className="font-extrabold text-lg pb-3 mb-0">
                  NFT Preview
                </div>

                {/* <div class="flex justify-between items-center mb-5">
                  <div class="flex -space-x-2">
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../../../nftmarketplace/assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../../../nftmarketplace/assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      class="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../../../nftmarketplace/assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div> */}
                <div
                  class="h-auto rounded-xl bg-gray-100 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  <img
                    src={require("../../../nftmarketplace/assets/nft36.jpg")}
                    alt="sd"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="py-2 pt-3">
                  <h3 class="text-lg font-bold tracking-tight text-gray-800">
                    Capturing Memories
                  </h3>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <img
                      src={require("../../../nftmarketplace/assets/eth.png")}
                      alt="sd"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="pl-2">
                      from
                      <span className="font-bold text-sm text-gray-800 ml-2">
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
      </div>
    </div>
  );
};

export default SellerNewNFT;
