import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <>
      <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-white">
        <div className="flex items-center gap-36">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-lg ml-2">Nfluencer</span>
          </div>

          <div>
            <div class="relative w-full max-w-xl mr-6">
              <div class="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                class="text-sm rounded-lg pl-8 block w-full p-2.5 bg-gray-100 outline-none"
                placeholder="Search..."
                required
              />
            </div>
          </div>
        </div>

        <div className="space-x-4 items-center flex">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group bg-gray-100 rounded-full w-10 h-10">
                <div className="p-2.5">
                  <BellIcon
                    className="w-full h-full text-gray-700"
                    fill="none"
                    stroke="currentColor"
                  />
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-xl bg-white shadow-lg focus:outline-none p-2">
                <div>
                  <Menu.Item>
                    <a
                      href="{option.href}"
                      className="text-gray-500 block p-2 rounded-lg hover:bg-gray-100"
                    >
                      Link 1
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="{option.href}"
                      className="text-gray-500 block p-2 rounded-lg hover:bg-gray-100"
                    >
                      Link 1
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group bg-gray-100 rounded-full w-10 h-10">
                <div className="p-2.5">
                  <EnvelopeIcon
                    className="w-full h-full text-gray-700"
                    fill="none"
                    stroke="currentColor"
                  />
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-xl bg-white shadow-lg p-2 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <a
                      href="{option.href}"
                      className={"text-gray-500 block px-3 py-4 rounded-lg"}
                    >
                      Link 1
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group bg-gray-100 rounded-full w-10 h-10">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/50/2ec25f505091121.64c0087b7bd73.png"
                  alt="random user"
                  className="w-full h-full rounded-full"
                />
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-xl bg-white shadow-lg p-2 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <a
                      href="{option.href}"
                      className={"text-gray-500 block px-3 py-4 rounded-lg"}
                    >
                      Link 1
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
