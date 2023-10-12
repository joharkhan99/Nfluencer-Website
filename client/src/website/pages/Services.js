import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CubeIcon } from "@heroicons/react/24/solid";
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
function Services() {
  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      <div class="relative">
        <div class="bg-cover bg-center h-64">
          <img
            src={require("../assets/fluid_background.jpg")}
            alt="Background Iamage"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 serv-hero"></div>
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
            <div class="w-full lg:w-1/4 text-gray-800">
              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">Categories</div>
                <ul className="list-none">
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Design & Creative</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Development & IT</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Digital Marketing</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Finance & Accounting</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Lifestyle</span>
                    </label>
                  </li>
                  <li>
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Video & Animation</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">Date Posted</div>
                <ul className="list-none">
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Last Hour</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Last 24 hours</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Last 7 days</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Last 14 days</span>
                    </label>
                  </li>
                  <li className="mb-4">
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">Last 30 days</span>
                    </label>
                  </li>
                  <li>
                    <label class="flex gap-3 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        class="w-5 h-5 appearance-none checked:bg-nft-primary-light border rounded-md border-gray-300 checked:border-nft-primary-light cursor-pointer"
                      />
                      <span className="text-sm">All</span>
                    </label>
                  </li>
                </ul>
              </div>

              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">Response Time</div>
                <select className="mt-0 border w-full p-5 rounded-xl text-gray-500 outline-none focus:border-nft-primary-light">
                  <option>Response Time</option>
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                  <option>3 Hours</option>
                  <option>4 Hours</option>
                  <option>5 Hours</option>
                </select>
              </div>

              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">Delivery Time</div>
                <select className="mt-0 border w-full p-5 rounded-xl text-gray-500 outline-none focus:border-nft-primary-light">
                  <option>Delivery Time</option>
                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>3 Days</option>
                  <option>4 Days</option>
                  <option>5 Days</option>
                </select>
              </div>

              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">Budget</div>
                <div>
                  <div className="mt-0 border w-full p-5 rounded-xl text-gray-500 outline-none focus:border-nft-primary-light">
                    <input type="range" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">English Level</div>
                <select className="mt-0 border w-full p-5 rounded-xl text-gray-500 outline-none focus:border-nft-primary-light">
                  <option>English Level</option>
                  <option>Intermediate</option>
                  <option>Beginner</option>
                  <option>Expert</option>
                </select>
              </div>

              <div className="p-4 mb-5 bg-white shadow-md shadow-gray-100 rounded-xl border border-gray-100">
                <div className="font-semibold text-md mb-3">Regions</div>
                <select className="mt-0 border w-full p-5 rounded-xl text-gray-500 outline-none focus:border-nft-primary-light">
                  <option>Regions</option>
                  <option>Asia</option>
                  <option>Australia</option>
                  <option>Middle East</option>
                </select>
              </div>

              <div className="mt-12">
                <button className="bg-nft-primary-light h-full py-5 px-10 rounded-xl font-semibold text-white hover:bg-nft-primary-dark transition-colors text-sm w-full">
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
                <div className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-all duration-300 p-0 m-2 block hover:scale-105 transform">
                  <div className="relative shadow-lg rounded-md shadow-gray-200">
                    <div className="max-w-sm rounded-md overflow-hidden pb-2">
                      <div className="absolute top-2 right-2">
                        <button class="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                          <HeartIcon class="w-5 h-5 group-hover:stroke-white group-hover:fill-white" />
                        </button>
                      </div>

                      <img
                        src={require("../assets/trend1.jpg")}
                        alt="Card Imagea"
                        className="h-60 w-full object-cover rounded-t-xl"
                      />

                      <div className="p-3 py-2 mt-2 rounded-b-xl">
                        <div className="flex justify-between items-center border-b pb-3 mb-3">
                          <div className="flex gap-2 items-center">
                            <img
                              src={require("../assets/slider8.png")}
                              alt="s"
                              className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-semibold text-gray-800">
                              Agent Pakulla
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-800 font-semibold">
                              Level 2
                            </span>
                          </div>
                        </div>

                        <Link
                          to="/gigdetails"
                          className="block text-sm text-gray-500 mb-3 hover:text-gray-800"
                        >
                          Development & IT
                        </Link>
                        <Link
                          to="/gigdetails"
                          className="mb-4 font-semibold text-lg text-gray-800 block hover:text-nft-primary-light hover:underline"
                        >
                          Management software to help you manage your mobile
                          workers
                        </Link>

                        <div className="flex justify-between items-center border-b pb-3 mb-3">
                          <div className="flex items-center gap-2">
                            <div>
                              <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                            </div>
                            <div className="text-md font-semibold text-sm">
                              4.7
                            </div>
                            <div className="text-gray-500 text-sm">
                              (3 Reviews)
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div>
                              <CubeIcon className="w-4 h-4 text-nft-primary-dark" />
                            </div>
                            <div className="text-md font-semibold text-sm text-gray-700">
                              NFT
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 items-center text-sm text-gray-500">
                            Starting at:
                            <span className="text-lg text-gray-800 font-bold">
                              $29
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Pagination --> */}
              <div class="flex justify-center my-14">
                <ul class="pagination flex justify-center items-center gap-4">
                  <li className="h-10 w-10 text-center text-white rounded-xl bg-nft-primary-light p-2">
                    <span>1</span>
                  </li>
                  <li className="h-10 w-10 text-center text-gray-800 hover:text-white rounded-xl hover:bg-nft-primary-light p-2">
                    <span>2</span>
                  </li>
                  <li className="h-12 w-12 text-center text-gray-800 rounded-xl border border-gray-300 p-3">
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
