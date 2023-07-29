import React, { useState, Fragment } from "react";
import "./styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";

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

  return (
    <>
      <Header transparent={true} />
      <div className="container mx-auto">
        <div class="py-11 pt-0">
          {/* <h1 class="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
            Explore NFTs
          </h1> */}

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

              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Filters
                  </h1>

                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-black gap-20 items-center border p-3 rounded-xl font-bold focus:border-black focus:border">
                          <span>Sort</span>
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

                    <button
                      type="button"
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                    >
                      <span className="sr-only">View grid</span>
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
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                      </svg>
                    </button>
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
                                        className="w-5 h-5"
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
                              <Disclosure.Panel className="pt-2 px-2">
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
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                      <div class="flex flex-wrap justify-center gap-3 mt-12">
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
                  </div>
                </section>
              </main>
            </div>
          </div>
          {/* LAYOUT */}
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
