import React from "react";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ChevronRightIcon,
  EyeIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import EarningChart from "../components/charts/EarningChart";
import OrderChart from "../components/charts/OrdersChart";

export const SellerHomePage = () => {
  return (
    <>
      <div>
        <div className="lg:flex gap-4">
          <div className="lg:w-3/4 p-0 bg-purple-300 rounded-xl relative">
            <div className="w-full h-full overflow-hidden absolute rounded-xl">
              <div className="absolute w-64 h-64 opacity-50 bg-nft-primary-light rounded-full -top-36 -left-36 z-10"></div>
              <div className="absolute w-64 h-64 opacity-50 bg-nft-primary-light rounded-full -bottom-36 -right-36 z-10"></div>
            </div>

            <div className="container mx-auto lg:flex items-center justify-between relative">
              <div className="w-1/2 lg:w-auto text-right justify-end flex z-50">
                <img
                  src={require("../assets/img/home-hero.jpg")}
                  alt="Your"
                  className="h-64 w-auto lg:h-full lg:w-full object-contain -mt-10 relative"
                />
              </div>

              <div className="w-1/2 lg:w-auto text-gray-900 z-20 px-16 relative">
                <h2 className="text-xl mb-2 font-normal">
                  Hi, <span className="font-semibold">Johar</span>
                </h2>
                <p className="text-sm">
                  You have 3 tasks to finish all tasks today. You already
                  completed 50% of your tasks. Keep it up! Your progress is
                  looking great.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="bg-nft-primary-light w-full h-full rounded-xl p-4 text-white">
              <div className="flex flex-col justify-between h-full">
                <p className="text-sm mb-3">
                  lorem ipsum mane. lorem ipsum mane. lorem ipsum mane.
                </p>
                <button className="bg-white rounded-lg p-3 text-sm w-full text-gray-700 font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:flex md:flex w-full my-6 gap-3">
          <div class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-nft-primary-light hover:shadow-[0_10px_20px_rgba(120,82,243,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-nft-primary-dark">
                  <div>
                    <span className="bg-nft-primary-light text-nft-primary-dark block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                      <EyeIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>Total Views</div>
                </div>
                <div>
                  <span>
                    <ChevronRightIcon className="w-5 h-5 text-nft-primary-dark group-hover:text-white" />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group-hover:text-white">
                <div className="text-2xl font-semibold text-gray-900 group-hover:text-white">
                  12.32K
                </div>
                <div className="flex rounded-full p-1 px-2.5 text-xs items-center bg-green-200 gap-1">
                  <span>
                    <ArrowTrendingUpIcon className="w-4 h-4 text-green-700" />
                  </span>
                  <span className="text-green-700 font-semibold">25.2%</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
                  via last month:
                </span>
                <span className="text-xs text-black font-semibold group-hover:text-white">
                  112.323k
                </span>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-nft-primary-light hover:shadow-[0_10px_20px_rgba(120,82,243,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-nft-primary-dark">
                  <div>
                    <span className="bg-nft-primary-light text-nft-primary-dark block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                      <PresentationChartBarIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>Total Profits</div>
                </div>
                <div>
                  <span>
                    <ChevronRightIcon className="w-5 h-5 text-nft-primary-dark group-hover:text-white" />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group-hover:text-white">
                <div className="text-2xl font-semibold text-gray-900 group-hover:text-white">
                  $12,233.21
                </div>
                <div className="flex rounded-full p-1 px-2.5 text-xs items-center bg-red-200 gap-1">
                  <span>
                    <ArrowTrendingDownIcon className="w-4 h-4 text-red-700" />
                  </span>
                  <span className="text-red-700 font-semibold">14.2%</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
                  via last month:
                </span>
                <span className="text-xs text-black font-semibold group-hover:text-white">
                  $15,122.0
                </span>
              </div>
            </div>
          </div>

          <div class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-nft-primary-light hover:shadow-[0_10px_20px_rgba(120,82,243,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-nft-primary-dark">
                  <div>
                    <span className="bg-nft-primary-light text-nft-primary-dark block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                      <UsersIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>New Customers</div>
                </div>
                <div>
                  <span>
                    <ChevronRightIcon className="w-5 h-5 text-nft-primary-dark group-hover:text-white" />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group-hover:text-white">
                <div className="text-2xl font-semibold text-gray-900 group-hover:text-white">
                  630
                </div>
                <div className="flex rounded-full p-1 px-2.5 text-xs items-center bg-green-200 gap-1">
                  <span>
                    <ArrowTrendingUpIcon className="w-4 h-4 text-green-700" />
                  </span>
                  <span className="text-green-700 font-semibold">20%</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
                  via last month:
                </span>
                <span className="text-xs text-black font-semibold group-hover:text-white">
                  510
                </span>
              </div>
            </div>
          </div>

          <div class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-nft-primary-light hover:shadow-[0_10px_20px_rgba(120,82,243,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-nft-primary-dark">
                  <div>
                    <span className="bg-nft-primary-light text-nft-primary-dark block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                      <LightBulbIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>Running Projects</div>
                </div>
                <div>
                  <span>
                    <ChevronRightIcon className="w-5 h-5 text-nft-primary-dark group-hover:text-white" />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group-hover:text-white">
                <div className="text-2xl font-semibold text-gray-900 group-hover:text-white">
                  25
                </div>
                <div className="flex rounded-full p-1 px-2.5 text-xs items-center bg-red-200 gap-1">
                  <span>
                    <ArrowTrendingDownIcon className="w-4 h-4 text-red-700" />
                  </span>
                  <span className="text-red-700 font-semibold">15%</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
                  via last month:
                </span>
                <span className="text-xs text-black font-semibold group-hover:text-white">
                  18
                </span>
              </div>
            </div>
          </div>

          {/* <div class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg shadow-gray-200 transition-all hover:bg-nft-primary-light hover:shadow-[0_10px_20px_rgba(120,82,243,0.5)] rounded-xl p-3 py-4 group hover:scale-105">
            <div className="card-stats"></div>
            <div class=" flex justify-between items-center cursor-pointer">
              <div className="flex gap-3 items-center">
                <div>
                  <span className="bg-nft-primary-light text-nft-primary-dark block p-4 bg-opacity-30 rounded-xl group-hover:bg-white transition-all">
                    <EyeIcon className="w-6 h-6" />
                  </span>
                </div>
                <div className="text-sm group-hover:text-white">
                  <p className="text-lg font-semibold">3.456K</p>
                  <p className="text-gray-500 group-hover:text-white">
                    Total Views
                  </p>
                </div>
              </div>

              <div>
                <span>
                  <ChevronRightIcon className="w-6 h-6 text-nft-primary-dark group-hover:text-white" />
                </span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="bg-white rounded-xl p-6 w-full my-6 max-w-full">
          <div className="mb-3 flex justify-between items-center">
            <span className="font-bold text-2xl text-gray-900">
              Overview Orders
            </span>
            <div>
              <select className="text-sm bg-gray-100 rounded-lg p-2 px-3 text-gray-600 outline-none focus:ring focus:ring-gray-200 cursor-pointer">
                <option value="1" selected>
                  Last 7 days
                </option>
                <option value="2">Last 30 days</option>
                <option value="3">Last 90 days</option>
              </select>
            </div>
          </div>
          <div>
            <OrderChart />
          </div>
        </div>

        <div class="p-6 bg-white shadow-sm rounded-xl">
          <div className="mb-3">
            <span className="font-bold text-2xl text-gray-900 block">
              Earning Report
            </span>
          </div>

          <div className="lg:flex rounded-xl">
            <div class="lg:w-1/3">
              <div></div>
            </div>
            <div class="lg:w-2/3 mt-4 lg:mt-0">
              <div>
                <EarningChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
