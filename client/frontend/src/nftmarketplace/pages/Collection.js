import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { Menu } from "@headlessui/react";
import {
  HeartIcon,
  ClipboardDocumentListIcon,
  PhotoIcon,
  FlagIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Collection = () => {
  const { collectionId } = useParams();
  console.log(collectionId);

  const gradientClasses = [
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-blue-500 to-green-500",
    "bg-gradient-to-r from-yellow-500 to-orange-500",
    // Add more gradient classes as needed
  ];

  // Get a random gradient class
  const getRandomGradientClass = () => {
    const randomIndex = Math.floor(Math.random() * gradientClasses.length);
    return gradientClasses[randomIndex];
  };

  const backgroundGradient = getRandomGradientClass();

  return (
    <>
      <Header transparent={true} />
      <div className="mt-8">
        <div className="container mx-auto">
          <div className="p-4 h-80 w-full">
            <div
              className={`w-full h-full rounded-xl relative bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-gray-200 `}
            >
              <img
                src="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg"
                alt=""
                className="absolute w-full h-full object-cover rounded-xl"
              />
              <div className="flex items-center justify-end p-5 gap-4">
                <button className="bg-white rounded-full w-auto h-10 z-50 shadow-lg hover:bg-gray-100 text-gray-700 flex items-center px-4 text-sm gap-2 font-medium">
                  <HeartIcon className="w-5 h-5 text-nft-primary-light" />
                  <span>Add to Favorites</span>
                </button>

                <Menu as="div" className="relative text-left">
                  <div>
                    <Menu.Button className="font-black text-xl bg-white rounded-full w-10 h-10 z-50 shadow-lg hover:bg-gray-100 text-gray-700">
                      <span>···</span>
                    </Menu.Button>
                  </div>

                  <Menu.Items className="absolute right-0 z-10 mt-1 w-40 origin-top-right rounded-xl bg-white shadow-xl focus:outline-none  p-1 border border-gray-50">
                    <Menu.Item>
                      <button className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium">
                        <ClipboardDocumentListIcon className="w-5 h-5" />
                        <span>Copy Link</span>
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        target="_blank"
                        className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium"
                      >
                        <PhotoIcon className="w-5 h-5" />
                        <span>Open Original</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <button className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium">
                        <FlagIcon className="w-5 h-5" />
                        <span>Report</span>
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col z-50 -mt-20 gap-4">
            <div className="z-50">
              <img
                src="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg"
                alt=""
                className="w-32 h-32 rounded-full border-2 border-white object-cover z-50"
              />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gra sm:text-4xl">
              Electric Scooter
            </h1>

            <p className="w-1/2 text-sm text-center text-gray-500">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>

            <div className="flex items-center justify-center gap-3">
              <div>
                <span className="text-gray-500 font-normal">Items</span>
                <span className="text-gray-800 font-bold pl-2">1200</span>
              </div>
              <div className="text-gray-500 font-black">·</div>
              <div>
                <span className="text-gray-500 font-normal">Created</span>
                <span className="text-gray-800 font-bold pl-2">Nov 2023</span>
              </div>
              <div className="text-gray-500 font-black">·</div>
              <div>
                <span className="text-gray-500 font-normal">Chain</span>
                <span className="text-gray-800 font-bold pl-2">Ethereum</span>
              </div>
            </div>

            <div className="w-fit flex flex-col gap-2 items-center justify-center border border-gray-200 p-2 px-4 rounded-xl shadow-md shadow-gray-200">
              <span className="text-gray-500 font-normal w-full text-sm text-center block">
                Created by
              </span>
              <a href="s" className="block">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg"
                    alt="User Imasge"
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-gray-900">Usmama Awan</span>
                    <div className="text-sm text-gray-500">
                      {"0xagjsdh87788hy26".substring(0, 10) +
                        "..." +
                        "0xagjsdh87788hy26".substring(
                          "0xagjsdh87788hy26".length - 4,
                          "0xagjsdh87788hy26".length
                        )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* add here */}

          <div className="my-14 items-center">
            <div className="sticky top-0 p-5 z-50 bg-white border-b pb-3 border-gray-100">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Category</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Gaming
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Art
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Price Range</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            &lt; 0.01 ETH
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            0.01 ETH - 0.1 ETH
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Owner</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            All
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Me
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <div className="relative">
                      <div className="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="text-base rounded-xl border-gray-200 shadow-sm focus:border-nft-primary-light pl-9 block w-full p-3 outline-none border ring-purple-700 focus:ring-1 focus:bg-transparent placeholder-gray-500 text-gray-800"
                        placeholder="Search by name or trait"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Recently Sold</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Price Low to High
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Price High to Low
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>

                <div className="mt-2 px-4">
                  <div className="text-gray-500 flex items-center gap-2">
                    <span className="font-medium">2850</span>
                    results
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 overflow-auto flex-1 relative">
              <div className="grid grid-cols-3 gap-4"></div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection;
