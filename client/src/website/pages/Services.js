import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Services() {
  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      <div class="relative">
        <div class="bg-cover bg-center h-64">
          <img
            src={require("../assets/trend4.png")}
            alt="Background Iamage"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black opacity-40"></div>
          {/* <!-- Overlay --> */}
        </div>
        <div class="absolute inset-0 flex flex-col items-start justify-center text-white p-5">
          <h1 class="text-4xl font-bold mb-5">Design & Creative</h1>
          <p class="mt-2">
            Give your visitor a smooth online experience with a solid UX design
          </p>
        </div>
      </div>

      <div className="container mx-auto my-10 mb-16">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/4 p-4">
              <div className="border-b pb-5 mb-6">
                <div className="font-semibold text-xl mb-4">Categories</div>
                <ul className="list-none">
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Design & Creative</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Development & IT</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Digital Marketing</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Finance & Accounting</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Lifestyle</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Video & Animation</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="border-b pb-5 mb-6">
                <div className="font-semibold text-xl mb-4">Date Posted</div>
                <ul className="list-none">
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Last Hour</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Last 24 hours</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Last 7 days</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Last 14 days</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">Last 30 days</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-web-primary-light border rounded-md border-gray-300 checked:border-web-primary-light"
                      />
                      <span className="text-md">All</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="border-b pb-9 mb-6">
                <div className="font-semibold text-xl mb-4">Response Time</div>
                <select className="mt-4 border w-full p-5 rounded-lg text-gray-500">
                  <option>Response Time</option>
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                  <option>3 Hours</option>
                  <option>4 Hours</option>
                  <option>5 Hours</option>
                </select>
              </div>

              <div className="border-b pb-9 mb-6">
                <div className="font-semibold text-xl mb-4">Delivery Time</div>
                <select className="mt-4 border w-full p-5 rounded-lg text-gray-500">
                  <option>Delivery Time</option>
                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>3 Days</option>
                  <option>4 Days</option>
                  <option>5 Days</option>
                </select>
              </div>

              <div className="border-b pb-9 mb-6">
                <div className="font-semibold text-xl mb-4">Budget</div>
                <div>
                  <div className="mt-4 border w-full p-5 rounded-lg text-gray-500">
                    <input type="range" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="border-b pb-9 mb-6">
                <div className="font-semibold text-xl mb-4">English Level</div>
                <select className="mt-4 border w-full p-5 rounded-lg text-gray-500">
                  <option>English Level</option>
                  <option>Intermediate</option>
                  <option>Beginner</option>
                  <option>Expert</option>
                </select>
              </div>

              <div className="border-b pb-9 mb-6">
                <div className="font-semibold text-xl mb-4">Regions</div>
                <select className="mt-4 border w-full p-5 rounded-lg text-gray-500">
                  <option>Regions</option>
                  <option>Asia</option>
                  <option>Australia</option>
                  <option>Middle East</option>
                </select>
              </div>

              <div>
                <span className="text-sm text-gray-400">
                  Distance: 73 miles
                </span>
                <div className="mt-1 w-full rounded-lg text-gray-500">
                  <input type="range" className="w-full" />
                </div>
              </div>

              <div className="mt-12">
                <button className="bg-web-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm w-full">
                  <span>Filter Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block stroke-1 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Right Column (Grid Layout) --> */}
            <div class="w-full lg:w-3/4 p-4">
              <div class="flex justify-between items-center mb-6">
                {/* <!-- Total Result Text --> */}
                <div>
                  <div class="text-gray-700 text-sm mb-3">Your Selected</div>
                  <div className="flex gap-3">
                    <div className="flex gap-3">
                      <button className="bg-web-secondary-light p-1 px-2 rounded text-sm">
                        <span className="text-red-500 mr-2">x</span>
                        <span>All</span>
                      </button>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-web-secondary-light p-1 px-2 rounded text-sm">
                        <span className="text-red-500 mr-2">x</span>
                        <span>1 Hour</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Sort Select --> */}
                <button class="px-4 rounded text-red-500 font-semibold text-sm">
                  Clear all
                </button>
              </div>

              <div class="flex justify-between items-center mb-4">
                {/* <!-- Total Result Text --> */}
                <p class="text-gray-700 text-sm">Showing 1 – 8 of 12 results</p>

                {/* <!-- Sort Select --> */}
                <select class="px-4 rounded p-3 border border-gray-200 text-sm">
                  <option value="sort1">Sort by (Default)</option>
                  <option value="sort2">Sort by Price low to high</option>
                  <option value="sort3">Sort by Date Added</option>
                </select>
              </div>

              {/* <!-- Grid Layout (Cards) --> */}
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend1.jpg")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <Link
                          to="/gigdetails"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </Link>
                        <Link
                          to="/gigdetails"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </Link>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend2.jpg")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend3.webp")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend4.png")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend5.webp")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend6.jpg")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend1.jpg")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend2.jpg")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>
                <div
                  href="#sd"
                  className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
                >
                  <div className="relative shadow-md rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                        <button class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 hover:stroke-white hover:fill-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <img
                        src={require("../assets/trend3.webp")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover"
                      />
                      <div className="mt-4 p-5 py-2">
                        <a
                          href="s"
                          className="block text-sm text-gray-500 mb-3 hover:text-black"
                        >
                          Development & IT
                        </a>
                        <a
                          href="d"
                          className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </a>
                        <div className="flex items-center gap-2 border-b pb-5 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 fill-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm">Agent Pakulla</span>
                          </div>
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-black font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <img src={require("../assets/nft1.jpg")} alt="" /> */}
                  </div>
                </div>

                {/* <!-- More cards go here --> */}
              </div>

              {/* <!-- Pagination --> */}
              <div class="flex justify-center my-14">
                <ul class="pagination flex justify-center items-center gap-4">
                  <li className="h-10 w-10 text-center text-white rounded-full bg-web-primary-light p-2">
                    <span>1</span>
                  </li>
                  <li className="h-10 w-10 text-center text-black hover:text-white rounded-full hover:bg-web-primary-light p-2">
                    <span>2</span>
                  </li>
                  <li className="h-12 w-12 text-center text-black rounded-full border border-gray-300 p-3">
                    <a class="next page-numbers" href="ds">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Services;
