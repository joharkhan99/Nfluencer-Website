import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setUser } from "../../../redux/slices/UserSlice";

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
          {/* <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-lg ml-2">Nfluencer</span>
          </div> */}

          <div className="w-full">
            <div class="relative w-full max-w-xl pl-6">
              <div class="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                class="text-sm rounded-lg pl-8 block w-full p-2.5 bg-gray-100 outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-full h-full text-gray-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-full h-full text-gray-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  {/* <EnvelopeIcon
                    className="w-full h-full text-gray-700"
                    fill="none"
                    stroke="currentColor"
                  /> */}
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
                            <span>{user.name}</span>
                            <span>({user.username})</span>
                          </div>
                          <div className="text-gray-500 text-sm w-full">
                            {user.email}
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
