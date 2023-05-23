import React from "react";

const Header = ({ transparent = false }) => {
  return (
    <>
      <header
        class={
          transparent
            ? "relative inset-x-0 top-0 z-50"
            : "absolute inset-x-0 top-0 z-50"
        }
      >
        <nav
          class={
            transparent
              ? "bg-white shadow-md shadow-gray-200"
              : "bg-transparent"
          }
        >
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 mr-3"
                  alt="Nfluencer Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
              {transparent ? (
                <div className="flex relative max-sm:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-5 h-5 absolute top-2 left-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search items, collections"
                    className="bg-gray-100 p-2 rounded-full outline-none px-6 pl-10 md:w-96 text-gray-500 placeholder:text-gray-500 text-sm focus:shadow-sm focus:shadow-gray-300"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-bold flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-3 md:mt-0 md:border-0 items-center">
                <li>
                  <a
                    href="#dd"
                    class="text-sm text-black px-4 py-2"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#dd" class="text-sm text-black px-4 py-2">
                    About
                  </a>
                </li>
                <li>
                  <a href="#dd" class="text-sm text-black px-4 py-2">
                    Services
                  </a>
                </li>
                <li>
                  <button class="rounded-full bg-nft-primary-light text-sm text-white px-4 py-2">
                    Create
                  </button>
                </li>
                <li>
                  <button class="rounded-full bg-white text-sm text-black px-4 py-2 shadow-md">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
