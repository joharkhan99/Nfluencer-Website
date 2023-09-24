import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import "../assets/styles/style.css";

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
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 bg-nft-primary-light shadow-lg mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Dashboard
                </span>
              </li>

              <li className="text-sm text-gray-600 items-center mb-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex gap-x-4 rounded-md cursor-pointer w-full items-center hover:bg-gray-100 p-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-gray-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
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

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Analytics
                </span>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Pie Charts
                </span>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Manage Orders
                </span>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Your Earnings
                </span>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Manage NFTs
                </span>
              </li>

              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span
                  className={`${
                    !sideBarOpen && "hidden"
                  } origin-left duration-200 font-semibold`}
                >
                  Your Earnings
                </span>
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
