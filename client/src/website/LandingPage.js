import React from "react";
import Header from "./components/Header";
import "./styles/style.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="bg-transparent hombg">
        <Header />

        <div class="relative isolate px-4 pt-8  overflow-x-clip overflow-y-visible">
          <div class="flex flex-wrap items-center">
            <div class="w-full sm:w-1/2">
              <div class="p-1 py-0">
                <div class="text-left">
                  <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Freelance Services For Your Business
                  </h1>
                </div>

                <div className="flex flex-col md:flex-row bg-white rounded-md p-4 py-2 pr-2 w-full mt-10 items-center gap-2">
                  <div className="w-full">
                    <div className="flex relative items-center border-r">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="w-5 h-5 absolute"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>

                      <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="p-2 outline-none px-6 pl-10 md:w-80 text-black placeholder:text-black text-sm"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <select className="w-full outline-none text-black text-sm appearance-none text-center cursor-pointer">
                      <option>Categories</option>
                      <option>Photography</option>
                      <option>Marketing</option>
                      <option>Advertisement</option>
                      <option>Social Media</option>
                      <option>Writing</option>
                      <option>Design & Creative</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <button className="bg-web-primary-light h-full py-5 w-full rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm">
                      Search
                    </button>
                  </div>
                </div>

                <div className="mt-12 text-white">
                  <span className="mb-5 block">Popular Searches</span>
                  <div>
                    <a
                      href="ss"
                      className="rounded-full bg-gray-700 backdrop-blur-sm hover:bg-web-primary-light text-sm mr-4 p-3 px-5"
                    >
                      Designer
                    </a>
                    <a
                      href="ss"
                      className="rounded-full bg-gray-700 backdrop-blur-sm hover:bg-web-primary-light text-sm mr-4 p-3 px-5"
                    >
                      Marketing
                    </a>
                    <a
                      href="ss"
                      className="rounded-full bg-gray-700 backdrop-blur-sm hover:bg-web-primary-light text-sm mr-4 p-3 px-5"
                    >
                      Social Media
                    </a>
                    <a
                      href="ss"
                      className="rounded-full bg-gray-700 backdrop-blur-sm hover:bg-web-primary-light text-sm mr-4 p-3 px-5"
                    >
                      Enterpreneur
                    </a>
                    <a
                      href="ss"
                      className="rounded-full bg-gray-700 backdrop-blur-sm hover:bg-web-primary-light text-sm mr-4 p-3 px-5"
                    >
                      Speaker
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/2 ">
              <div class="p-4">
                <img
                  src={require("./assets/slider8.png")}
                  alt="Ismage"
                  class="mb-[-50px] ml-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-44 mb-20">
        <div>
          <h2 className="text-3xl mb-1 font-extrabold">
            Browse talent by category​
          </h2>
          <p className="text-sm text-gray-600">
            Get some Inspirations from 1800+ skills
          </p>
          <div className="text-right flex flex-row justify-end items-center font-bold text-sm gap-2">
            <a href="sd">All Categories</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/it.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">8 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Development & IT</h3>
                <p class="text-sm text-gray-600">
                  Software Engineer, Web / Mobile Developer & More
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/design.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">8 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Design & Creative</h3>
                <p class="text-sm text-gray-600">
                  Website Design Adobe XD, Figma, Adobe Photoshop
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/marketing.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">3 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Digital Marketing</h3>
                <p class="text-sm text-gray-600">
                  Service Digital and Social Media Management
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/writing.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">1 Service</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Writing & Translation</h3>
                <p class="text-sm text-gray-600">
                  Writing , Translation Project, get It Quickly done
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/music.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">4 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Music & Audio</h3>
                <p class="text-sm text-gray-600">
                  Freelancer Music, Audio Services, Music Projects
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/video.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">8 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Video & Animation</h3>
                <p class="text-sm text-gray-600">
                  Animation Video Maker that Brings Studio Quality
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/construct.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">12 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Programming & Tech</h3>
                <p class="text-sm text-gray-600">
                  Programmers and coders Both for Your Project
                </p>
              </div>
            </a>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <a
              href="s"
              class="bg-white block rounded-md hover:border-black hover:border overflow-hidden border p-7 py-8"
            >
              <div class="relative inline-block">
                <img
                  src={require("./assets/finance.PNG")}
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <span class="text-sm mt-5 mb-2 block">5 Services</span>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">Finance & Accounting</h3>
                <p class="text-sm text-gray-600">
                  Team Works , Collaboration Meet for Your Business
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 bg-2">
        <div className="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-1/2">
              <img src={require("./assets/h34.png")} alt="s" />
            </div>
            <div class="w-1/2 md:p-8">
              <div>
                <h2 className="text-3xl mb-1 font-extrabold">
                  Trusted By Best
                  <br /> Freelancers
                </h2>
                <p class="text-md text-black my-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-web-primary-light rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="font-semibold">
                      Last Education of Bachelor Degree
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-web-primary-light rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="font-semibold">
                      More Than 15 Years Experience
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-web-primary-light rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="font-semibold">
                      12 Education Award Winning
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="bg-web-primary-dark h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm">
                    <span>See More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block stroke-1 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-44 mb-20">
        <div className="mb-10">
          <h2 className="text-3xl mb-1 font-extrabold">Trending Services</h2>
          <p className="text-sm text-gray-600">
            Most viewed and all-time top-selling services
          </p>
          <div className="text-right flex flex-row justify-end items-center font-bold text-sm gap-2">
            <a href="sd">All Services</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            // focusOnSelect={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div
              href="#sd"
              className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
            >
              <div className="relative shadow-md rounded-md shadow-gray-200">
                <div className="max-w-sm rounded-md overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                    <button class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 hover:stroke-white hover:fill-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={require("./assets/trend1.jpg")}
                    alt="Card Imagea"
                    className="h-60 w-full object-cover"
                  />
                  <div className="mt-4 p-2">
                    <a
                      href="s"
                      className="block text-sm text-gray-500 mb-3 hover:text-black"
                    >
                      Development & IT
                    </a>
                    <Link
                      to="/gigdetails"
                      className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                    >
                      Management software to help you manage your mobile workers
                    </Link>
                    <div className="flex items-center gap-2 border-b pb-5 mb-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-md font-semibold text-sm">4.7</div>
                      <div className="text-gray-500 text-sm">(3 Reviews)</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("./assets/slider8.png")}
                          alt="s"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm">Agent Pakulla</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        Starting at:
                        <span className="text-lg text-black font-bold">
                          $29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
              </div>
            </div>
            <div
              href="#sd"
              className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
            >
              <div className="relative shadow-md rounded-md shadow-gray-200">
                <div className="max-w-sm rounded-md overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                    <button class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 hover:stroke-white hover:fill-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={require("./assets/trend2.jpg")}
                    alt="Card Imagea"
                    className="h-60 w-full object-cover"
                  />
                  <div className="mt-4 p-2">
                    <a
                      href="s"
                      className="block text-sm text-gray-500 mb-3 hover:text-black"
                    >
                      Development & IT
                    </a>
                    <a
                      href="d"
                      className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                    >
                      Management software to help you manage your mobile workers
                    </a>
                    <div className="flex items-center gap-2 border-b pb-5 mb-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-md font-semibold text-sm">4.7</div>
                      <div className="text-gray-500 text-sm">(3 Reviews)</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("./assets/slider8.png")}
                          alt="s"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm">Agent Pakulla</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        Starting at:
                        <span className="text-lg text-black font-bold">
                          $29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
              </div>
            </div>
            <div
              href="#sd"
              className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
            >
              <div className="relative shadow-md rounded-md shadow-gray-200">
                <div className="max-w-sm rounded-md overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                    <button class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 hover:stroke-white hover:fill-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={require("./assets/trend3.webp")}
                    alt="Card Imagea"
                    className="h-60 w-full object-cover"
                  />
                  <div className="mt-4 p-2">
                    <a
                      href="s"
                      className="block text-sm text-gray-500 mb-3 hover:text-black"
                    >
                      Development & IT
                    </a>
                    <a
                      href="d"
                      className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                    >
                      Management software to help you manage your mobile workers
                    </a>
                    <div className="flex items-center gap-2 border-b pb-5 mb-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-md font-semibold text-sm">4.7</div>
                      <div className="text-gray-500 text-sm">(3 Reviews)</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("./assets/slider8.png")}
                          alt="s"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm">Agent Pakulla</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        Starting at:
                        <span className="text-lg text-black font-bold">
                          $29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
              </div>
            </div>
            <div
              href="#sd"
              className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
            >
              <div className="relative shadow-md rounded-md shadow-gray-200">
                <div className="max-w-sm rounded-md overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                    <button class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 hover:stroke-white hover:fill-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={require("./assets/trend4.png")}
                    alt="Card Imagea"
                    className="h-60 w-full object-cover"
                  />
                  <div className="mt-4 p-2">
                    <a
                      href="s"
                      className="block text-sm text-gray-500 mb-3 hover:text-black"
                    >
                      Development & IT
                    </a>
                    <a
                      href="d"
                      className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                    >
                      Management software to help you manage your mobile workers
                    </a>
                    <div className="flex items-center gap-2 border-b pb-5 mb-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-md font-semibold text-sm">4.7</div>
                      <div className="text-gray-500 text-sm">(3 Reviews)</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("./assets/slider8.png")}
                          alt="s"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm">Agent Pakulla</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        Starting at:
                        <span className="text-lg text-black font-bold">
                          $29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
              </div>
            </div>
            <div
              href="#sd"
              className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
            >
              <div className="relative shadow-md rounded-md shadow-gray-200">
                <div className="max-w-sm rounded-md overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                    <button class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 hover:stroke-white hover:fill-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={require("./assets/trend5.webp")}
                    alt="Card Imagea"
                    className="h-60 w-full object-cover"
                  />
                  <div className="mt-4 p-2">
                    <a
                      href="s"
                      className="block text-sm text-gray-500 mb-3 hover:text-black"
                    >
                      Development & IT
                    </a>
                    <a
                      href="d"
                      className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                    >
                      Management software to help you manage your mobile workers
                    </a>
                    <div className="flex items-center gap-2 border-b pb-5 mb-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-md font-semibold text-sm">4.7</div>
                      <div className="text-gray-500 text-sm">(3 Reviews)</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("./assets/slider8.png")}
                          alt="s"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm">Agent Pakulla</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        Starting at:
                        <span className="text-lg text-black font-bold">
                          $29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
              </div>
            </div>
            <div
              href="#sd"
              className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-colors duration-300 p-0 m-2 block cursor-pointer"
            >
              <div className="relative shadow-md rounded-md shadow-gray-200">
                <div className="max-w-sm rounded-md overflow-hidden pb-2">
                  <div className="absolute top-2 right-2 p-2 bg-white hover:bg-web-primary-light text-black rounded-full">
                    <button class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 hover:stroke-white hover:fill-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={require("./assets/trend6.jpg")}
                    alt="Card Imagea"
                    className="h-60 w-full object-cover"
                  />
                  <div className="mt-4 p-2">
                    <a
                      href="s"
                      className="block text-sm text-gray-500 mb-3 hover:text-black"
                    >
                      Development & IT
                    </a>
                    <a
                      href="d"
                      className="mb-4 font-semibold text-lg block hover:text-web-primary-light hover:underline"
                    >
                      Management software to help you manage your mobile workers
                    </a>
                    <div className="flex items-center gap-2 border-b pb-5 mb-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-md font-semibold text-sm">4.7</div>
                      <div className="text-gray-500 text-sm">(3 Reviews)</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src={require("./assets/slider8.png")}
                          alt="s"
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm">Agent Pakulla</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm text-gray-500">
                        Starting at:
                        <span className="text-lg text-black font-bold">
                          $29
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="py-0 bg-web-secondary-transparent">
        <div className="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-1/2">
              <img src={require("./assets/h1.jpg")} alt="s" />
            </div>
            <div class="w-1/2 md:p-8 md:pl-20">
              <div>
                <h2 className="text-3xl mb-1 font-extrabold">
                  A whole world of freelance talent at your fingertips
                </h2>

                <div className="mt-14">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-full p-1">
                      <img src={require("./assets/medal.PNG")} alt="s" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-2">
                        Proof of quality
                      </div>
                      <p className="text-sm">
                        Check any pro’s work samples, client reviews, and
                        identity verification.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-full p-1">
                      <img src={require("./assets/cost.PNG")} alt="s" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-2">
                        No cost until you hire
                      </div>
                      <p className="text-sm">
                        Check any pro’s work samples, client reviews, and
                        identity verification.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-full p-1">
                      <img src={require("./assets/safe.PNG")} alt="s" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-2">
                        Safe and secure
                      </div>
                      <p className="text-sm">
                        Check any pro’s work samples, client reviews, and
                        identity verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-36 mb-20">
        <h2 className="text-3xl mb-2 font-extrabold text-center">
          Need something done?
        </h2>
        <p className="text-sm text-center">
          Most viewed and all-time top-selling services
        </p>

        <div class="flex flex-wrap mt-14">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
            <div href="s" class="block overflow-hidden">
              <div class="relative inline-block">
                <img
                  src={require("./assets/job.PNG")}
                  className="object-cover"
                  alt=""
                />
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2 mt-4">Post a job</h3>
                <p class="text-md">
                  It’s free and easy to post a job. Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
            <div href="s" class="block overflow-hidden">
              <div class="relative inline-block">
                <img
                  src={require("./assets/freelancer.PNG")}
                  className="object-cover"
                  alt=""
                />
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2 mt-4">Choose freelancers</h3>
                <p class="text-md">
                  It’s free and easy to post a job. Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
            <div href="s" class="block overflow-hidden">
              <div class="relative inline-block">
                <img
                  src={require("./assets/pay.PNG")}
                  className="object-cover"
                  alt=""
                />
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2 mt-4">Pay safely</h3>
                <p class="text-md">
                  It’s free and easy to post a job. Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
            <div href="s" class="block overflow-hidden">
              <div class="relative inline-block">
                <img
                  src={require("./assets/help.PNG")}
                  className="object-cover"
                  alt=""
                />
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2 mt-4">We’re here to help</h3>
                <p class="text-md">
                  It’s free and easy to post a job. Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-web-primary-dark">
        <div className="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-1/2 md:p-8">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive2}
                infinite={true}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={7000}
                // focusOnSelect={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="text-white">
                  <h3 className="text-web-primary-light text-3xl font-bold mb-5">
                    Envato
                  </h3>
                  <div className="font-semibold text-xl mb-10">
                    “ I have used Freeio numerous times for several different
                    companies. I have always had great experiences. I once tried
                    using someone else and I ended up having to cancel the order
                    and move back to Freeio. ”
                  </div>
                  <div>
                    <span className="font-semibold text-md block">
                      Jane Cooper
                    </span>
                    <span className="text-sm">Marketing Manager</span>
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-web-primary-light text-3xl font-bold mb-5">
                    Envato
                  </h3>
                  <div className="font-semibold text-xl mb-10">
                    “ I have used Freeio numerous times for several different
                    companies. I have always had great experiences. I once tried
                    using someone else and I ended up having to cancel the order
                    and move back to Freeio. ”
                  </div>
                  <div>
                    <span className="font-semibold text-md block">
                      Jane Cooper
                    </span>
                    <span className="text-sm">Marketing Manager</span>
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-web-primary-light text-3xl font-bold mb-5">
                    Themeforest
                  </h3>
                  <div className="font-semibold text-xl mb-10">
                    “ I have used Freeio numerous times for several different
                    companies. I have always had great experiences. I once tried
                    using someone else and I ended up having to cancel the order
                    and move back to Freeio. ”
                  </div>
                  <div>
                    <span className="font-semibold text-md block">
                      Jane Cooper
                    </span>
                    <span className="text-sm">Marketing Manager</span>
                  </div>
                </div>
              </Carousel>
            </div>
            <div class="w-1/2">
              <img src={require("./assets/h1.jpg")} alt="s" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 pt-0">
        <div className="container mx-auto">
          <div class="flex flex-wrap mt-10 border-b pb-7">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
              <div href="s" class="block overflow-hidden text-center">
                <h1 className="text-4xl mb-3 font-bold">890M</h1>
                <p className="text-sm">Total Freelancer</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
              <div href="s" class="block overflow-hidden text-center">
                <h1 className="text-4xl mb-3 font-bold">750M</h1>
                <p className="text-sm">Positive Review</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
              <div href="s" class="block overflow-hidden text-center">
                <h1 className="text-4xl mb-3 font-bold">98M</h1>
                <p className="text-sm">Order recieved</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-left p-4">
              <div href="s" class="block overflow-hidden text-center">
                <h1 className="text-4xl mb-3 font-bold">336M</h1>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 pt-0 mt-20">
        <div className="container mx-auto">
          <h6 className="text-center text-sm">Trusted by the world’s best</h6>
          <div class="flex flex-wrap mt-10 pb-7">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 text-left p-4">
              <img
                src={require("./assets/amazon.png")}
                alt=""
                className="opacity-80 hover:opacity-100"
              />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 text-left p-4">
              <img
                src={require("./assets/amd.png")}
                alt=""
                className="opacity-80 hover:opacity-100"
              />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 text-left p-4">
              <img
                src={require("./assets/cisco.png")}
                alt=""
                className="opacity-80 hover:opacity-100"
              />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 text-left p-4">
              <img
                src={require("./assets/dropcam.png")}
                alt=""
                className="opacity-80 hover:opacity-100"
              />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 text-left p-4">
              <img
                src={require("./assets/logitech.png")}
                alt=""
                className="opacity-80 hover:opacity-100"
              />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 text-left p-4">
              <img
                src={require("./assets/spotify.png")}
                alt=""
                className="opacity-80 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-web-secondary-light">
        <div className="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-1/2 md:p-8">
              <div>
                <h2 className="text-3xl mb-1 font-extrabold">
                  Find the talent needed to get your business growing.
                </h2>
                <p class="text-md text-black my-5">
                  Advertise your jobs to millions of monthly users and search
                  15.8 million CVs
                </p>

                <div className="mt-4">
                  <button className="bg-web-primary-dark h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm">
                    <span>Find Talent</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block stroke-1 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-1/2 text-right">
              <img
                src={require("./assets/h16.png")}
                alt="s"
                className="h-72 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
