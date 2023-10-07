import { Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  PauseCircleIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export const SellerGigs = () => {
  return (
    <div>
      <h2 className="font-extrabold tracking-tight text-3xl text-gray-800 block">
        Gigs Overview
      </h2>

      <div class="lg:flex md:flex w-full my-6 gap-3">
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(15,220,156)] shadow-lg hover:border-transparent shadow-green-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer relative">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-md text-sm text-white">
                <div>Active</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-4xl font-semibold text-white">05</div>
              <div>
                <span className="text-white">
                  <RocketLaunchIcon className="w-12 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(95,70,212)] shadow-lg hover:border-transparent shadow-purple-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-md text-sm text-white">
                <div>Pending Approval</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-4xl font-semibold text-white">01</div>
              <div>
                <span className="text-white">
                  <ClockIcon className="w-12 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(253,116,71)] shadow-lg hover:border-transparent shadow-red-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-md text-sm text-white">
                <div>Denied</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-4xl font-semibold text-white">10</div>
              <div>
                <span className="text-white">
                  <ArchiveBoxXMarkIcon className="w-12 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(21,124,253)] shadow-lg hover:border-transparent shadow-blue-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-md text-sm text-white">
                <div>Draft</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-4xl font-semibold text-white">15</div>
              <div>
                <span className="text-white">
                  <PencilSquareIcon className="w-12 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(21,180,253)] shadow-lg hover:border-transparent shadow-blue-300 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-md text-sm text-white">
                <div>Paused</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-4xl font-semibold text-white">15</div>
              <div>
                <span className="text-white">
                  <PauseCircleIcon className="w-12 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg shadow-gray-200">
        <Tabs
          className="w-full"
          selectedTabClassName="bg-nft-primary-light text-white shadow-lg shadow-purple-200"
        >
          <div className="flex justify-between items-center">
            <TabList className="border-b border-gray-100 p-4">
              <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                Active
              </Tab>
              <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                Pending Approval
              </Tab>
              <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                Draft
              </Tab>
              <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                Denied
              </Tab>
              <Tab className="list-none rounded-xl px-6 py-3 text-gray-500 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors outline-none">
                Paused
              </Tab>
            </TabList>

            <div className="text-right p-4">
              <Link
                to="/seller/newgig"
                className="rounded-xl px-6 py-3 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200"
              >
                Create New Gig
              </Link>
            </div>
          </div>

          <TabPanel>
            <div className="p-4">
              <div className="text-sm mb-5 pl-4 text-gray-400">Active Gigs</div>
              {/* overflow-x-auto */}
              <div class="relative w-full h-full rounded-xl shadow-lg shadow-gray-50">
                <table class="w-full text-sm text-left text-gray-700">
                  <thead class="text-xs text-gray-500 uppercase border-b">
                    <tr>
                      <th scope="col" class="p-3">
                        <input
                          id="checked-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 focus:ring-nft-primary-light cursor-pointer hover:accent-nft-primary-light accent-nft-primary-light"
                        />
                      </th>
                      <th scope="col" class="p-3">
                        Gig
                      </th>
                      <th scope="col" class="p-3">
                        NFT Reward
                      </th>
                      <th scope="col" class="p-3">
                        Impressions
                      </th>
                      <th scope="col" class="p-3">
                        Clicks
                      </th>
                      <th scope="col" class="p-3">
                        Orders
                      </th>
                      <th scope="col" class="p-3">
                        Cancellations
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td class="p-3 py-5">
                        <input
                          id="checked-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 focus:ring-nft-primary-light cursor-pointer hover:accent-nft-primary-light accent-nft-primary-light"
                        />
                      </td>
                      <td class="p-3 py-5">
                        <div className="flex items-center gap-3">
                          <img
                            src="https://img.freepik.com/free-psd/3d-rendering-search-engine-background_23-2150562443.jpg?w=740&t=st=1696684061~exp=1696684661~hmac=d3a9859ef6a2aa01d1164440ccbd66e542071035f257b02d4cc990f1c2169c55"
                            alt="d"
                            className="h-12 rounded-lg"
                          />
                          <p>
                            provide expert data science and analytics solutions
                          </p>
                        </div>
                      </td>
                      <td class="p-3 py-5">
                        <a
                          href="s"
                          className="text-nft-primary-light bg-purple-100 p-1 rounded-md hover:bg-purple-200"
                        >
                          NFT14df36f41b0d4c4b
                        </a>
                      </td>
                      <td class="p-3 py-5">
                        <div className="flex items-center gap-1 text-green-500 font-medium">
                          <span>1.9K</span>
                          <span>
                            <ArrowTrendingUpIcon className="w-4 h-4" />
                          </span>
                        </div>
                      </td>
                      <td class="p-3 py-5">15</td>
                      <td class="p-3 py-5">2</td>
                      <td class="p-3 py-5">0%</td>
                      <td class="p-3 py-5">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="group bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10">
                              <div className="p-2.5">
                                <EllipsisVerticalIcon className="w-full h-full text-gray-500" />
                              </div>
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
                            <Menu.Items className="absolute right-0 z-10 -mt-3 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden">
                              <div>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <EyeIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Preview</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <PencilSquareIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Edit</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <PauseCircleIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Pause</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <ShareIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Share</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <TrashIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Delete</span>
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td class="p-3 py-5">
                        <input
                          id="checked-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 focus:ring-nft-primary-light cursor-pointer hover:accent-nft-primary-light accent-nft-primary-light"
                        />
                      </td>
                      <td class="p-3 py-5">
                        <div className="flex items-center gap-3">
                          <img
                            src="https://img.freepik.com/free-vector/gradient-computer-screen-illustration-color-year-2023_23-2149989551.jpg?w=740&t=st=1696684289~exp=1696684889~hmac=02474ee0f5001926da32a6577f63edff7e3f66e091f9d7a814612a40362a6e6c"
                            alt="d"
                            className="h-12 rounded-lg"
                          />
                          <p>
                            Free vector gradient computer screen illustration
                            color of the year 2023
                          </p>
                        </div>
                      </td>
                      <td class="p-3 py-5">
                        <a
                          href="s"
                          className="text-nft-primary-light bg-purple-100 p-1 rounded-md hover:bg-purple-200"
                        >
                          NFT14df36f41b0d4c4b
                        </a>
                      </td>
                      <td class="p-3 py-5">
                        <div className="flex items-center gap-1 text-red-500 font-medium">
                          <span>300</span>
                          <span>
                            <ArrowTrendingDownIcon className="w-4 h-4" />
                          </span>
                        </div>
                      </td>
                      <td class="p-3 py-5">15</td>
                      <td class="p-3 py-5">2</td>
                      <td class="p-3 py-5">0%</td>
                      <td class="p-3 py-5">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="group bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10">
                              <div className="p-2.5">
                                <EllipsisVerticalIcon className="w-full h-full text-gray-500" />
                              </div>
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
                            <Menu.Items className="absolute right-0 z-10 -mt-3 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden">
                              <div>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <EyeIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Preview</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <PencilSquareIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Edit</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <PauseCircleIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Pause</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <ShareIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Share</span>
                                  </a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a
                                    href="{option.href}"
                                    className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center"
                                  >
                                    <span>
                                      <TrashIcon className="h-5 w-5 text-gray-400" />
                                    </span>
                                    <span>Delete</span>
                                  </a>
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-4">
              <div className="text-sm mb-5 pl-4 text-gray-400">
                Pending Gigs
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
