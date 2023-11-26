import React, { useState, Fragment, useEffect } from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { Web3 } from "web3";
import {
  NFTMarketplaceContractABI,
  NFTMarketplaceContractAddress,
  NFTContractAddress,
  NFTContractABI,
} from "../../constants/ContractDetails";
import { ethers } from "ethers";
import axios from "axios";
import { HeartIcon } from "@heroicons/react/24/solid";
import Web3Modal from "web3modal";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Explore() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [nfts, setNFTs] = useState([]);
  const fetchContract = (signerOrProvider) => {
    const marketplaceContract = new ethers.Contract(
      NFTMarketplaceContractAddress,
      NFTMarketplaceContractABI,
      signerOrProvider
    );

    const nftContract = new ethers.Contract(
      NFTContractAddress,
      NFTContractABI,
      signerOrProvider
    );

    return { marketplaceContract, nftContract };
  };

  const fetchNFTs = async () => {
    const web3 = new Web3(window.ethereum);
    // await window.ethereum.enable();

    const provider = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_ALCHEMY_SEPOLIA_URL
    );

    const { marketplaceContract, nftContract } = fetchContract(provider);

    const fetchedMarketItems = await marketplaceContract.fetchMarketItems();

    const items = await Promise.all(
      fetchedMarketItems.map(async (i) => {
        const tokenUri = await nftContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        return {
          ...meta.data,
          likes: i.likes.toString(),
          tokenId: i.tokenId.toString(),
        };
      })
    );

    items.reverse();
    setNFTs(items);
    console.log(items);
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  //   // Buy NFT
  const connectingWithSmartContract = async () => {
    try {
      const w3modal = new Web3Modal();
      const connection = await w3modal.connect();
      // setNFTStatusMessage("Opening Modal...");

      const provider = new ethers.providers.Web3Provider(connection);
      const signer = await provider.getSigner();

      const { marketplaceContract, nftContract } = fetchContract(signer);
      return { marketplaceContract, nftContract };
    } catch (error) {
      // setErrors({ message: "Error connecting with smart contract" });
      console.log(`Error connecting with smart contract: ${error}`);
    }
  };

  const buyNFT = async (nft) => {
    try {
      const { marketplaceContract } = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await marketplaceContract.buyMarketItem(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
      fetchNFTs();
    } catch (error) {
      console.log(`Error buying NFT: ${error}`);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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

  return (
    <>
      <Header transparent={true} />
      <div className="container mx-auto">
        <div className="py-11 pt-0">
          {/* LAYOUT */}
          <div className="bg-white">
            <div>
              {/* Mobile filter dialog */}
              <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-40 lg:hidden"
                  onClose={setMobileFiltersOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                          <h2 className="text-lg font-medium text-gray-900">
                            Filters
                          </h2>

                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">
                          <h3 className="sr-only">Categories</h3>
                          <ul
                            role="list"
                            className="px-2 py-3 font-medium text-gray-900"
                          >
                            {subCategories.map((category) => (
                              <li key={category.name}>
                                <a
                                  href={category.href}
                                  className="block px-2 py-3"
                                >
                                  {category.name}
                                </a>
                              </li>
                            ))}
                          </ul>

                          {filters.map((section) => (
                            <Disclosure
                              as="div"
                              key={section.id}
                              className="border-t border-gray-200 px-4 py-6"
                            >
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                      <span className="font-medium text-gray-900">
                                        {section.name}
                                      </span>
                                      <span className="ml-6 flex items-center">
                                        {open ? (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M19.5 12h-15"
                                            />
                                          </svg>
                                        ) : (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                          </svg>
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={option.value}
                                            className="flex items-center"
                                          >
                                            <input
                                              id={`filter-mobile-${section.id}-${optionIdx}`}
                                              name={`${section.id}[]`}
                                              defaultValue={option.value}
                                              type="checkbox"
                                              defaultChecked={option.checked}
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                              className="ml-3 min-w-0 flex-1 text-gray-500"
                                            >
                                              {option.label}
                                            </label>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <main className="mx-auto max-w-7xl px-0">
                <div className="flex justify-between border-b border-gray-200 pb-6 pt-10 items-center">
                  <button className="flex justify-center items-center gap-3 bg-gray-100 py-3 px-4 font-medium rounded-xl hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="tracking-tight text-gray-900">Filter</span>
                  </button>

                  <div className="flex items-center gap-4">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-black gap-20 items-center border p-3 rounded-xl font-bold focus:border-black focus:border">
                          <span>Recently Sold</span>
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
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <a
                                    href={option.href}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-3 py-4 rounded-lg"
                                    )}
                                  >
                                    {option.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <div className="bg-gray-100 flex justify-center rounded-xl border border-transparent p-0.5 overflow-hidden">
                      <button
                        type="button"
                        className="text-gray-400  rounded-xl py-3 px-4 hover:text-black font-thin"
                      >
                        <span className="sr-only">View grid</span>
                        <svg
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13,4 L13,11 L20,11 L20,4 L13,4 Z M11,4 L4,4 L4,11 L11,11 L11,4 Z M13,20 L20,20 L20,13 L13,13 L13,20 Z M11,20 L11,13 L4,13 L4,20 L11,20 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>

                      <button
                        type="button"
                        className="text-black bg-white rounded-xl py-3 px-4 shadow-xl shadow-gray-400"
                      >
                        <span className="sr-only">View grid</span>
                        <svg
                          viewBox="0 0 24 24"
                          height="20"
                          width="20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10,14 L14,14 L14,10 L10,10 L10,14 Z M8,14 L8,10 L4,10 L4,14 L8,14 Z M10,4 L10,8 L14,8 L14,4 L10,4 Z M8,4 L4,4 L4,8 L8,8 L8,4 Z M10,20 L14,20 L14,16 L10,16 L10,20 Z M8,20 L8,16 L4,16 L4,20 L8,20 Z M16,14 L20,14 L20,10 L16,10 L16,14 Z M16,4 L16,8 L20,8 L20,4 L16,4 Z M16,20 L20,20 L20,16 L16,16 L16,20 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Filters</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <section
                  aria-labelledby="products-heading"
                  className="pb-24 pt-6"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="hidden lg:block">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-100 py-5"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root p-3 py-0 rounded-xl font-bold hover:bg-gray-100">
                                <Disclosure.Button className="flex w-full items-center justify-between py-3 hover:text-gray-500">
                                  <span className="font-bold text-black">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
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
                                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                        />
                                      </svg>
                                    ) : (
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
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                      </svg>
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-2">
                                <div className="space-y-0">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex p-3 rounded-xl py-4 hover:bg-gray-100  items-center"
                                    >
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        onChange={(e) => console.log("object")}
                                        className="h-6 w-6 rounded-md border  border-gray-00 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 cursor-pointer text-gray-600"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>

                    {/* Product grid */}
                    <div className="lg:col-span-3">
                      <div className="container mx-auto">
                        <div className="mt-0">
                          <div className="text-start mb-5">
                            <span>Collection results</span>
                          </div>
                          <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            transitionDuration={10000}
                            pauseOnHover={true}
                            // focusOnSelect={true}
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px"
                          >
                            <a
                              href="#sd"
                              className="decoration-transparent hover:shadow-xl shadow-lg rounded-xl transition-colors duration-300 p-0 m-2 block pb-1"
                            >
                              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                                  <img
                                    src={require("../assets/nft7.jpeg")}
                                    alt="Card Imagea"
                                    className="h-40 w-full object-cover"
                                  />
                                  <div className="flex items-center justify-start gap-4 px-3">
                                    <div
                                      className="rounded-2xl overflow-hidden -mt-3 border-4 border-white"
                                      style={{ width: "70px", height: "70px" }}
                                    >
                                      <img
                                        src={require("../assets/user1.jpeg")}
                                        alt="User Idmage"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="font-bold">
                                      Julie Bell
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="#sd"
                              className="decoration-transparent hover:shadow-xl shadow-lg rounded-xl transition-colors duration-300 p-0 m-2 block pb-1"
                            >
                              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                                  <img
                                    src={require("../assets/nft1.jpg")}
                                    alt="Card Imagea"
                                    className="h-40 w-full object-cover"
                                  />
                                  <div className="flex items-center justify-start gap-4 px-3">
                                    <div
                                      className="rounded-2xl overflow-hidden -mt-3 border-4 border-white"
                                      style={{ width: "70px", height: "70px" }}
                                    >
                                      <img
                                        src={require("../assets/user2.jpeg")}
                                        alt="User Idmage"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="font-bold">Mark</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="#sd"
                              className="decoration-transparent hover:shadow-xl shadow-lg rounded-xl transition-colors duration-300 p-0 m-2 block pb-1"
                            >
                              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                                  <img
                                    src={require("../assets/nft17.jpg")}
                                    alt="Card Imagea"
                                    className="h-40 w-full object-cover"
                                  />
                                  <div className="flex items-center justify-start gap-4 px-3">
                                    <div
                                      className="rounded-2xl overflow-hidden -mt-3 border-4 border-white"
                                      style={{ width: "70px", height: "70px" }}
                                    >
                                      <img
                                        src={require("../assets/user3.webp")}
                                        alt="User Idmage"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="font-bold">
                                      Will Smith
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="#sd"
                              className="decoration-transparent hover:shadow-xl shadow-lg rounded-xl transition-colors duration-300 p-0 m-2 block pb-1"
                            >
                              <div className="relative shadow-sm rounded-xl shadow-gray-100">
                                <div className="max-w-sm rounded-xl overflow-hidden pb-2">
                                  <img
                                    src={require("../assets/nft17.jpg")}
                                    alt="Card Imagea"
                                    className="h-40 w-full object-cover"
                                  />
                                  <div className="flex items-center justify-start gap-4 px-3">
                                    <div
                                      className="rounded-2xl overflow-hidden -mt-3 border-4 border-white"
                                      style={{ width: "70px", height: "70px" }}
                                    >
                                      <img
                                        src={require("../assets/user3.webp")}
                                        alt="User Idmage"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="font-bold">
                                      Will Smith
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Carousel>
                        </div>
                      </div>

                      <div className="results mt-14">
                        <div className="mb-4">
                          <h4 className="font-bold">467458 items</h4>
                          <div className="filters flex gap-3 items-center mt-5">
                            <button className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-2 text-sm">
                              <span className="font-semibold">mark</span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5 font-bold"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-2 text-sm">
                              <span className="font-semibold">monkey</span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5 font-bold"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                            <button className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-2 px-4 text-md hover:bg-gray-200">
                              <span className="font-semibold">Clear all</span>
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-wrap justify-start">
                          {nfts.map((nft, index) => (
                            <div
                              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-2"
                              key={index}
                            >
                              <div className="w-full h-full decoration-transparent rounded-xl shadow-xl transition-colors duration-300 relative group">
                                <div
                                  className="h-auto bg-gray-100 overflow-hidden rounded-t-xl"
                                  style={{ height: "300px" }}
                                >
                                  {nft.fileType === "image" ? (
                                    <img
                                      src={nft.fileUrl}
                                      alt={nft.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  ) : (
                                    <video controls width="100%" height="100%">
                                      <source
                                        src={nft.fileUrl}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  )}
                                </div>
                                <div className="p-2">
                                  <div className="p-2">
                                    <h3 className="text-xl font-bold tracking-tight text-black">
                                      {nft.name}
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
                                          {nft.price} ETH
                                        </span>
                                      </span>
                                    </div>
                                  </div>

                                  <div class="flex items-center justify-between gap-1 text-sm mt-4 text-center">
                                    <button
                                      class="bg-nft-primary-light border-nft-primary-light text-white font-medium p-4 rounded-xl hover:bg-nft-primary-dark w-full"
                                      onClick={() => buyNFT(nft)}
                                    >
                                      Buy Now
                                    </button>
                                    <Link
                                      class="bg-gray-200 font-medium p-4 rounded-xl hover:bg-gray-300 w-full text-gray-800"
                                      to={`/nftdetails/${nft.name
                                        .replace(/[^a-zA-Z0-9-]+/g, "-")
                                        .replace(/-+/g, "-")
                                        .toLowerCase()}/${nft._id}`}
                                    >
                                      View Details
                                    </Link>
                                  </div>
                                </div>

                                <div className="absolute top-2 left-2">
                                  <div className="bg-white rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 text-black overflow-hidden p-2">
                                    <div>
                                      <div className="flex rounded-2xl justify-evenly items-center">
                                        <div className="flex flex-col gap-1 items-center">
                                          <span className="flex gap-1">
                                            <img
                                              src={require("../assets/eth.png")}
                                              alt=""
                                              className="w-5 h-5 object-contain"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <button class="rounded-xl text-nft-primary-light bg-white p-2 flex gap-1 items-center absolute top-2 right-2 text-sm">
                                  <HeartIcon className="w-5 h-5" />
                                  <span class="font-semibold text-gray-700">
                                    12
                                  </span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
          {/* LAYOUT */}
        </div>

        <div className="text-center mt-9">
          <button className="bg-nft-primary-transparent rounded-full px-6 py-3 font-semibold text-sm text-nft-primary-light w-1/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors">
            <span>Load More</span>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Explore;
