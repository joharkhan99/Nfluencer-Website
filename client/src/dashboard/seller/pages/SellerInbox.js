import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  EnvelopeOpenIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

const SellerInbox = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="w-2/6">
          <div className="bg-white rounded-xl w-full p-3">
            {/* search box */}
            <div className="relative w-full">
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

            <div className="my-6 mb-0">
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
                  <Menu.Items className="absolute right-0 z-10 -mt-0 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden text-base">
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

            <ul>
              <li>
                <button className="w-full block">
                  <div className="flex items-center gap-3 w-full justify-between text-start">
                    <div className="flex gap-2 items-center">
                      <img
                        src={require("../../../website/assets/man.jpg")}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span>Syeda Afifa</span>
                        <span>Ok, I will.</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <span>1 week</span>
                        <div className="flex gap-1 items-center">
                          <button>
                            <EnvelopeOpenIcon className="w-4 h-4" />
                          </button>
                          <button>
                            <StarIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/6">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.
        </div>
        <div className="w-1/6">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.
        </div>
      </div>
    </div>
  );
};

export default SellerInbox;
