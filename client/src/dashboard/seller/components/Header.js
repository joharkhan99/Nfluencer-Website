import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setUser } from "../../../redux/slices/UserSlice";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    Cookies.remove("authId");
    localStorage.removeItem("user");
    dispatch(setUser(null));
    navigate("/");
  };

  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-white">
        <div className="flex items-center">
          <div className="w-full">
            <div className="relative w-full max-w-xl pl-6">
              <div className="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="text-sm rounded-lg pl-8 block w-full p-2.5 bg-gray-100 outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70"
                placeholder="Search..."
                required
              />
            </div>
          </div>
        </div>

        <div className="space-x-4 items-center flex">
          <Menu as="div" className="relative text-left">
            <div>
              <Menu.Button className="group">
                <div className="flex justify-between items-center">
                  <div className=""></div>
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
            ></Transition>
          </Menu>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group bg-gray-100 rounded-full w-10 h-10">
                <div className="p-2.5">
                  <BellIcon className="w-full h-full text-gray-700" />
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
                  <ChatBubbleLeftEllipsisIcon className="w-full h-full text-gray-700" />
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

          <Menu as="div" className="relative text-left">
            <div>
              <Menu.Button className="group shadow-md rounded-full w-10 h-10">
                <img
                  src={user.avatar}
                  alt={user.name}
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
              <Menu.Items className="absolute right-0 z-20 mt-2 w-64 origin-top-right rounded-xl bg-white shadow-xl focus:outline-none p-3 border border-gray-100">
                <div>
                  <Menu.Item>
                    <div className="w-full border-b pb-3 border-gray-200 mb-1">
                      <div className="flex gap-3 items-center">
                        <div>
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-11 w-11 rounded-full"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start text-start">
                          <div className="text-gray-800 text-sm font-semibold text-start w-full flex gap-1">
                            <span>
                              {user.name
                                .concat(" (", user.username, ")")
                                .substring(0, 18)}
                              ...
                            </span>
                          </div>
                          <div className="text-gray-500 text-sm w-full">
                            {user.email.substring(0, 18)}...
                          </div>
                        </div>
                      </div>

                      <div className="w-full text-current mt-4">
                        <button className="w-full bg-nft-primary-light text-white rounded-xl text-sm p-2 py-3 hover:opacity-80 font-medium">
                          Switch to Buying
                        </button>
                      </div>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="{option.href}"
                      className="text-gray-600 block p-2 rounded-xl hover:bg-gray-100 text-base"
                    >
                      Profile
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      href="{option.href}"
                      className="text-gray-600 block p-2 rounded-xl hover:bg-gray-100 text-base"
                    >
                      Settings
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      className="text-gray-600 block p-2 rounded-xl hover:bg-gray-100 text-base w-full text-start"
                      onClick={logout}
                    >
                      Logout
                    </button>
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
