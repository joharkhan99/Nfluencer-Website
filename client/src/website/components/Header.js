import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ transparent = false }) {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <>
      <header
        class={
          transparent
            ? "relative inset-x-0 top-0 z-50"
            : "relative inset-x-0 top-0 z-50"
        }
      >
        <nav class={transparent ? "bg-white shadow-md" : "bg-transparent"}>
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <Link class="flex items-center" to="/">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 mr-3"
                  alt="Nfluencer Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black"></span>
              </Link>

              <div class="group">
                <button class="ml-5 px-5 py-4 text-black flex items-center gap-2 text-sm hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  <span>Categories</span>
                </button>
                <div class="hidden group-hover:flex flex-col absolute p-10  bg-white text-black rounded-lg">
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Design & Creative
                      </h3>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Web Design
                      </Link>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        UI and Interactive Design
                      </Link>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Motion Graphics
                      </Link>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Packaging Design
                      </Link>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Game Design
                      </Link>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Illustration
                      </Link>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Publication
                      </Link>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Digital Marketing
                      </h3>
                      <Link
                        to="/services"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Content Marketing
                      </Link>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        SEO
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Pay-per-Click
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Social Media Marketing
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Influencer Marketing
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Email Marketing
                      </a>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Development & IT
                      </h3>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Front-end development
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Back-end development
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Full stack development
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Application development
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        API development
                      </a>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Music & Audio
                      </h3>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Finance & Accounting
                      </h3>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Financial accounting
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Managerial accounting
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Cost accounting
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Auditing
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Tax accounting
                      </a>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Programming & Tech
                      </h3>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Web developer
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Computer programmer
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Computer systems engineer
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Systems analyst
                      </a>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Video & Animation
                      </h3>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        2D animation videos
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        3D animation videos
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Motion graphic videos
                      </a>
                    </div>

                    <div class="flex flex-col">
                      <h3 class="mb-4 text-md text-black font-semibold">
                        Writing & Translation
                      </h3>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Script Translation
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Multimedia Localization
                      </a>
                      <a
                        href="#z"
                        class="text-sm text-gray-600 mt-1 hover:text-black"
                      >
                        Commercial Translation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
              <ul class=" flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-3 md:mt-0 md:border-0 items-center">
                <li>
                  <Link
                    to="/marketplace"
                    class="text-sm text-black px-4 py-2 hover:opacity-80 transition-colors"
                  >
                    NFT Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    class="text-sm text-black px-4 py-2 hover:opacity-80 transition-colors"
                  >
                    Become a Seller
                  </Link>
                </li>
                {Cookies.get("token") === "" ||
                Cookies.get("token") === null ||
                Cookies.get("token") === undefined ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        class="text-sm text-black px-4 py-2 hover:opacity-80 transition-colors"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        class="rounded-xl bg-white text-sm text-black px-4 py-3 shadow-md hover:bg-nft-primary-light hover:text-black transition-colors"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/"
                        class="text-sm text-black px-4 py-2 hover:text-nft-primary-light"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        class="rounded bg-white text-sm text-black px-4 py-2 shadow-md hover:bg-nft-primary-light hover:text-black"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
