import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  Squares2X2Icon,
  CubeTransparentIcon,
  ClipboardDocumentListIcon,
  Cog8ToothIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import "../assets/styles/style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <aside className="flex-shrink-0 bg-white lg:block relative no-scrollbar">
      <div className="h-screen overflow-hidden no-scrollbar">
        <button
          onClick={toggleSidebar}
          className={`absolute cursor-pointer -right-2 top-20 bg-white border transition-all h-5 w-5 rounded-full z-50 hover:border-gray-400 hover:text-gray-600 text-gray-400`}
        >
          {sideBarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
        <div
          className={` ${sideBarOpen ? "w-56" : "w-20 "} relative duration-300`}
        >
          <div className="flex items-center p-4 gap-4">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold text-blue-600">Nfluencer</span>
          </div>

          <div className="overflow-hidden h-screen border-t p-4 mt-1.5 border-gray-100 pt-6">
            <ul className="overflow-auto h-screen custom-scrollbar">
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 bg-nft-primary-light shadow-lg shadow-gray-200 mb-2`}
              >
                <Squares2X2Icon className="w-6 h-6" />
                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Dashboard
                </span>
              </li>

              <li
                className={`rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 hover:bg-gray-100 mb-2`}
              >
                <Link to="/seller/gigs" className="flex items-center gap-x-4">
                  <BriefcaseIcon className="w-6 h-6 text-gray-600" />
                  <span
                    className={`${
                      !sideBarOpen && "hidden"
                    } origin-left duration-200 font-semibold`}
                  >
                    Manage Gigs
                  </span>
                </Link>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <ClipboardDocumentListIcon className="w-6 h-6 text-gray-600" />
                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Manage Orders
                </span>
              </li>

              <li
                className={`rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 hover:bg-gray-100 mb-2`}
              >
                <Link to="/seller/inbox" className="flex items-center gap-x-4">
                  <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gray-600" />
                  <span
                    className={`${
                      !sideBarOpen && "hidden"
                    } origin-left duration-200 font-semibold`}
                  >
                    Inbox
                  </span>
                </Link>
              </li>

              <li
                className={`rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 hover:bg-gray-100 mb-2`}
              >
                <Link to="/seller/nfts" className="flex items-center gap-x-4">
                  <CubeTransparentIcon className="w-6 h-6 text-gray-600" />
                  <span
                    className={`${
                      !sideBarOpen && "hidden"
                    } origin-left duration-200 font-semibold`}
                  >
                    Manage NFTs
                  </span>
                </Link>
              </li>

              <li className="text-sm text-gray-600 items-center mb-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex gap-x-4 rounded-md cursor-pointer w-full items-center hover:bg-gray-100 p-2">
                        <span>
                          <Cog8ToothIcon className="w-6 h-6 text-gray-600" />
                        </span>
                        <div
                          className={`flex w-full justify-between origin-left duration-200 ${
                            !sideBarOpen && "hidden"
                          }`}
                        >
                          <span className="font-semibold">Settings</span>
                          <span>
                            <ChevronDownIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </span>
                        </div>
                      </Disclosure.Button>

                      <Disclosure.Panel className="px-2 pt-3 text-sm text-gray-500">
                        <ul className="bg-gray-100 rounded-lg p-2">
                          <li
                            className={`flex rounded-md cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-200 p-3`}
                          >
                            <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                            <span
                              className={`${
                                !sideBarOpen && "hidden"
                              } origin-left duration-200 font-semibold`}
                            >
                              Profile
                            </span>
                          </li>
                          <li
                            className={`flex rounded-md cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-200 p-3`}
                          >
                            <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
                            <span
                              className={`${
                                !sideBarOpen && "hidden"
                              } origin-left duration-200 font-semibold`}
                            >
                              Account
                            </span>
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </li>

              {/* <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-nft-primary-dark"}`}
                >
                  <Squares2X2Icon />
                  <span
                    className={`${!sideBarOpen && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
