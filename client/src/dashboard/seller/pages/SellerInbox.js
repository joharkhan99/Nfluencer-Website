import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  EnvelopeOpenIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

const SellerInbox = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center gap-4 h-full">
        <div className="w-2/6 h-full">
          <div className="bg-white rounded-xl w-full h-full overflow-y-auto">
            {/* search box */}
            <div className="relative w-full p-3">
              <div className="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="text-sm rounded-xl pl-8 block w-full p-2.5 bg-gray-100 outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70"
                placeholder="Search Chat..."
                required
              />
            </div>
            {/* options */}

            <div className="mt-1 mb-4 p-3">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group bg-gray-100 hover:bg-gray-200 rounded-xl p-2 text-sm text-gray-800 font-semibold flex items-center gap-2">
                    <div>All Messages</div>
                    <div>
                      <ChevronDownIcon className="w-4 h-4" />
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
                  <Menu.Items className="absolute right-0 z-50 -mt-0 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden text-base">
                    <div>
                      <Menu.Item>
                        <button className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                          All Messages
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                          Unread
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                          Starred
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="text-gray-500 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                          Spam
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <ul className="pb-3">
              <li className="hover:bg-gray-100 p-3">
                <button className="w-full block">
                  <div className="flex items-center gap-3 w-full justify-between text-start text-gray-800 text-sm">
                    <div className="flex gap-2 items-center">
                      <div className="relative">
                        <span className="absolute w-3 h-3 rounded-full bottom-1 right-0 bg-green-500 z-40 ring-2 ring-white"></span>
                        <img
                          src={require("../../../website/assets/man.jpg")}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="font-semibold">Syeda Afifa</span>
                        <span className="text-gray-500">
                          Ok, I will send details.
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col text-gray-500 gap-2">
                      <span className="text-xs">1 week</span>
                      <div className="flex gap-1 items-center justify-end">
                        <button className="hover:text-gray-800">
                          <EnvelopeOpenIcon className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-800">
                          <StarIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
              <li className="hover:bg-gray-100 p-3">
                <button className="w-full block">
                  <div className="flex items-center gap-3 w-full justify-between text-start text-gray-800 text-sm">
                    <div className="flex gap-2 items-center">
                      <div className="relative">
                        <span className="absolute w-3 h-3 rounded-full bottom-1 right-0 bg-gray-400 z-40 ring-2 ring-white"></span>
                        <img
                          src={require("../../../website/assets/man.jpg")}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="font-semibold">Syeda Afifa</span>
                        <span className="text-gray-800 font-medium">
                          Ok, I will send details.
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col text-gray-500 gap-2">
                      <span className="text-xs">1 week</span>
                      <div className="flex gap-1 items-center justify-end">
                        <button className="hover:text-gray-800">
                          <EnvelopeOpenIcon className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-800">
                          <StarIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-3/6 h-full relative">
          <div className="bg-white rounded-xl w-full h-full overflow-y-auto">
            {/* hidden chat */}
            {/* <div className=" w-full h-full justify-center items-center flex-col hidden">
              <img
                src={require("../assets/img/chatbg.png")}
                alt=""
                className="w-1/2 h-1/2 object-contain"
              />
              <div className="text-center text-gray-800">
                <h2 className="text-2xl font-bold">
                  Pick up where you left off
                </h2>
                <div className="text-gray-600">
                  Select a conversation and chat away.
                </div>
              </div>
            </div> */}

            {/* chat box */}
            <div className="flex flex-col h-full">
              {/* head */}
              <div className="sticky top-0 left-0 w-full z-50 bg-white p-3 shadow-md shadow-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                      <span className="w-3 h-3 rounded-full  bg-green-500"></span>
                      <a href="s" className="underline font-semibold">
                        Nathan
                      </a>
                      <span className="font-semibold text-gray-500">
                        @lex104
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">
                        Last seen: 3 days ago
                      </span>
                    </div>
                  </div>

                  <div>
                    <button className="hover:bg-gray-100 rounded-full p-1 text-sm text-gray-800 font-semibold">
                      <VideoCameraIcon className="w-6 h-6" />
                    </button>

                    <button className="hover:bg-gray-100 rounded-full p-1 text-sm text-gray-800 font-semibold">
                      <StarIcon className="w-6 h-6" />
                    </button>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group hover:bg-gray-100 rounded-full p-1 text-sm text-gray-800 font-semibold">
                          <div>
                            <EllipsisHorizontalIcon className="w-6 h-6" />
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
                        <Menu.Items className="absolute right-0 z-50 -mt-0 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden text-sm">
                          <div>
                            <Menu.Item>
                              <button className="text-gray-800 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                                All Messages
                              </button>
                            </Menu.Item>
                            <Menu.Item>
                              <button className="text-gray-800 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                                Unread
                              </button>
                            </Menu.Item>
                            <Menu.Item>
                              <button className="text-gray-800 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                                Starred
                              </button>
                            </Menu.Item>
                            <Menu.Item>
                              <button className="text-gray-800 p-2 hover:bg-gray-100 flex gap-2 items-center w-full">
                                Spam
                              </button>
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <div className="bg-white flex-1 overflow-y-auto custom-scrollbar text-gray-800 p-3 text-sm">
                <div className="w-full">
                  <div className="flex justify-end w-full mb-1">
                    <div className="w-1/2 flex justify-end">
                      <div>
                        <div className="flex gap-1">
                          <div className="bg-gray-100 w-fit text-gray-800 p-2 rounded-xl">
                            Hi Nathan, Hi Nathan, Hi Nathan, Hi Nathan, Hi
                            Nathan, Hi Nathan,
                          </div>
                          <img
                            src={require("../../../website/assets/man.jpg")}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start w-full mb-1">
                    <div className="w-1/2 flex justify-start">
                      <div>
                        <div className="flex gap-1">
                          <img
                            src={require("../../../website/assets/man.jpg")}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover"
                          />
                          <div className="bg-nft-primary-light w-fit text-white p-2 rounded-xl">
                            Hi Nathan, Hi Nathan, Hi Nathan, Hi Nathan, Hi
                            Nathan, Hi Nathan,
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end w-full mb-1">
                    <div className="w-1/2 flex justify-end">
                      <div>
                        <div className="flex gap-1">
                          <div className="bg-gray-100 w-fit text-gray-800 p-2 rounded-xl">
                            Hi Nathan, Hi Nathan, Hi Nathan, Hi Nathan, Hi
                            Nathan, Hi Nathan,
                          </div>
                          <img
                            src={require("../../../website/assets/man.jpg")}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 left-0 w-full z-50 bg-white p-3 shadow-[0px_2px_10px_#e7e7e7]">
                <div className="relative w-full">
                  <textarea
                    type="text"
                    className="text-sm rounded-xl block bg-gray-50 w-full p-3  outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70 resize-none h-20"
                    placeholder="Send a message..."
                    required
                  ></textarea>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                      <FaceSmileIcon className="w-5 h-5 text-gray-800" />
                    </button>
                    <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                      <PaperClipIcon className="w-5 h-5 text-gray-800" />
                    </button>
                  </div>
                  <button className="flex gap-2 bg-nft-primary-light text-white p-2 rounded-xl items-center text-sm hover:opacity-80">
                    <span>Send</span>
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* chat box */}
          </div>
        </div>

        <div className="w-1/6 h-full">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.
        </div>
      </div>
    </div>
  );
};

export default SellerInbox;
