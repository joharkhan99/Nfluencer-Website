import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  CubeIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  StarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  ClockIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function GigDetails() {
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      <div className="pt-0">
        <div className="p-10 pt-0">
          <div className="flex justify-end my-8 gap-4 text-sm items-center text-gray-800">
            <button className="flex items-center border rounded-xl hover:bg-gray-50 p-2 gap-2">
              <HeartIcon className="w-5 h-5 text-gray-300" />
              <span className="font-semibold">1,505</span>
            </button>
            <button className="border rounded-xl hover:bg-gray-50 p-2 px-4">
              <ShareIcon className="w-5 h-5" />
            </button>
            <Menu
              as="button"
              className="border rounded-xl hover:bg-gray-50 p-1 px-3 relative"
            >
              <Menu.Button className="flex">
                <EllipsisHorizontalIcon className="w-7 h-7" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 -mt-0 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden border py-2">
                  <div>
                    <Menu.Item>
                      <a
                        href="{option.href}"
                        className="text-gray-700 p-2 hover:bg-gray-100 flex gap-2 items-center"
                      >
                        <span>
                          <FlagIcon className="h-5 w-5 text-gray-700" />
                        </span>
                        <span>Report Gig</span>
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="flex justify-between gap-20 w-full text-gray-800 mb-20">
            <div className="md:w-2/3 w-full">
              <div>
                <h1 className="text-4xl font-bold mb-7">
                  I will show your product for 10s in my video
                </h1>
                <div className="flex items-center gap-10 justify-between">
                  <div className="flex items-center gap-2 text-md font-semibold">
                    <img
                      src={require("../assets/man.jpg")}
                      className="rounded-full h-16 w-16 object-cover"
                      alt=""
                    />
                    <span className="flex flex-col gap-1">
                      <span className="text-md">Agent Pakulla</span>
                      <span className="text-sm text-gray-400 font-normal">
                        @Pakulla123
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-md">
                    <span>
                      <ChartBarIcon className="w-6 h-6 text-gray-400" />
                    </span>
                    <span className="font-semibold">Level 1</span>
                  </div>
                  <div className="flex items-center gap-2 text-md">
                    <span>
                      <StarIcon className="w-6 h-6 fill-yellow-500" />
                    </span>
                    <span className="font-semibold">4.7</span>
                    <span className="text-gray-400">(3 Reviews)</span>
                  </div>
                </div>
              </div>

              <div class="block bg-transparent">
                <div className="flex justify-between my-10 bg-gray-100 p-4 rounded-xl">
                  <div>
                    <div className="font-semibold">Delivery Time</div>
                    <div className="text-sm text-gray-600">4 Days</div>
                  </div>
                  <div>
                    <div className="font-semibold">English level</div>
                    <div className="text-sm text-gray-600">Conversational</div>
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-sm text-gray-600">
                      Islamabad, Pakistan
                    </div>
                  </div>
                </div>

                <div class="mb-6 w-full">
                  <Tabs
                    className="w-full"
                    selectedTabClassName="p-0 opacity-95 m-0 ring-nft-primary-light"
                  >
                    <TabPanel>
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={require("../assets/trend5.webp")}
                          alt=""
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={require("../assets/trend6.jpg")}
                          alt=""
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={require("../assets/trend7.png")}
                          alt=""
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </TabPanel>

                    <div className="flex justify-between items-center">
                      <TabList className="border-b border-gray-100 p-4 flex justify-center items-center w-full gap-4">
                        <Tab className="cursor-pointer rounded-xl opacity-40 ring-2">
                          <img
                            src={require("../assets/trend5.webp")}
                            alt=""
                            className="w-20 rounded-xl object-cover"
                          />
                        </Tab>
                        <Tab className="cursor-pointer rounded-xl opacity-40 ring-2">
                          <img
                            src={require("../assets/trend6.jpg")}
                            alt=""
                            className="w-20 rounded-xl object-cover"
                          />
                        </Tab>
                        <Tab className="cursor-pointer rounded-xl opacity-40 ring-2">
                          <img
                            src={require("../assets/trend7.png")}
                            alt=""
                            className="w-20 rounded-xl object-cover"
                          />
                        </Tab>
                      </TabList>
                    </div>
                  </Tabs>

                  {/* <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive2}
                infinite={true}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={7000}
              >
                <div className="h-full w-full">
                  <img
                    src={require("../assets/trend5.webp")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-full">
                  <img
                    src={require("../assets/trend6.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-full">
                  <img
                    src={require("../assets/trend7.png")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Carousel> */}
                </div>

                <div>
                  <h3 className="font-semibold text-xl my-5 mt-10">
                    Service Description
                  </h3>
                  <p class="text-gray-600 mb-6">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet.
                    <br />
                    <br />
                    Services I provide:
                    <br /> 1) Website Design
                    <br /> 2) Mobile App Design
                    <br /> 3) Brochure Design
                    <br /> 4) Business Card Design <br />
                    5) Flyer Design
                    <br />
                    <br />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </p>
                </div>

                <h3 className="font-semibold text-xl my-5 mt-10">
                  Compare Packages
                </h3>

                <div class="flex justify-between">
                  <div class="text-gray-600 w-full">
                    <div className="w-full">
                      <div className="overflow-x-auto w-full">
                        <table
                          className="border-collapse border border-gray-100 text-left w-full text-sm"
                          cellPadding={0}
                        >
                          <thead>
                            <tr>
                              <th className="font-normal p-5">Package</th>
                              <th className="border-collapse border border-gray-100 p-5 py-7">
                                <span className="block text-lg font-medium mb-2">
                                  $ 2,296
                                </span>
                                <span className="text-base">BASIC</span>
                              </th>
                              <th className="border-collapse border border-gray-100 p-5 py-7">
                                <span className="block text-lg font-medium mb-2">
                                  $ 4,296
                                </span>
                                <span className="text-base">STANDARD</span>
                              </th>
                              <th className="border-collapse border border-gray-100 p-5 py-7">
                                <span className="block text-lg font-medium mb-2">
                                  $ 10,296
                                </span>
                                <span className="text-base">PREMIUM</span>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td className="p-5 font-normal">Name</td>
                              <td className="border-collapse border border-gray-100 p-5 font-medium">
                                Basic Package
                              </td>
                              <td className="border-collapse border border-gray-100 p-5 font-medium">
                                Standard Package
                              </td>
                              <td className="border-collapse border border-gray-100 p-5 font-medium">
                                Premium Package
                              </td>
                            </tr>

                            <tr className="">
                              <td className="p-5 font-normal">Description</td>
                              <td className="border-collapse border border-gray-100 p-5">
                                1 logos + unlimited revisions + PNG file + basic
                                designs
                              </td>
                              <td className="border-collapse border border-gray-100 p-5">
                                2 HQ logos + Unlimited revisions + SOURCE file +
                                Priority support + HQ Designs
                              </td>
                              <td className="border-collapse border border-gray-100 p-5">
                                3 Ultra HQ logos+ SOURCE file + Unlimited
                                revisions + social media kit
                              </td>
                            </tr>

                            <tr className="bg-gray-100">
                              <td className="p-5 font-normal">Delivery Time</td>
                              <td className="border-collapse border border-gray-100 p-5 text-center">
                                2 Days
                              </td>
                              <td className="border-collapse border border-gray-100 p-5 text-center">
                                3 Days
                              </td>
                              <td className="border-collapse border border-gray-100 p-5 text-center">
                                4 Days
                              </td>
                            </tr>

                            <tr>
                              <td className="p-5 font-normal">Support</td>
                              <td className="border-collapse border border-gray-100 p-5">
                                <div className="flex justify-center items-center">
                                  <CheckIcon className="w-5 h-5 text-gray-800" />
                                </div>
                              </td>

                              <td className="border-collapse border border-gray-100 p-5">
                                <div className="flex justify-center items-center">
                                  <CheckIcon className="w-5 h-5 text-gray-400" />
                                </div>
                              </td>

                              <td className="border-collapse border border-gray-100 p-5">
                                <div className="flex justify-center items-center">
                                  <CheckIcon className="w-5 h-5 text-gray-400" />
                                </div>
                              </td>
                            </tr>

                            <tr className="bg-gray-100">
                              <td className="p-5 font-normal">Revisions</td>
                              <td className="border-collapse border border-gray-100 p-5 text-center">
                                2
                              </td>
                              <td className="border-collapse border border-gray-100 p-5 text-center">
                                4
                              </td>
                              <td className="border-collapse border border-gray-100 p-5 text-center">
                                Unlimited
                              </td>
                            </tr>

                            <tr>
                              <td className="p-5 font-normal">Price</td>
                              <td className="border-collapse border border-gray-100 text-center p-5 font-semibold text-base">
                                $ 120
                              </td>
                              <td className="border-collapse border border-gray-100 text-center p-5 font-semibold text-base">
                                $ 150
                              </td>
                              <td className="border-collapse border border-gray-100 text-center p-5 font-semibold text-base">
                                $ 200
                              </td>
                            </tr>

                            <tr>
                              <td className="p-5 font-normal border border-gray-100"></td>
                              <td className="border-collapse border border-gray-100 text-center p-5 font-normal text-base">
                                <button className="bg-nft-primary-light hover:opacity-80 p-3 rounded-xl text-white w-40">
                                  Select
                                </button>
                              </td>
                              <td className="border-collapse border border-gray-100 text-center p-5 font-normal text-base">
                                <button className="bg-nft-primary-light hover:opacity-80 p-3 rounded-xl text-white w-40">
                                  Select
                                </button>
                              </td>
                              <td className="border-collapse border border-gray-100 text-center p-5 font-normal text-base">
                                <button className="bg-nft-primary-light hover:opacity-80 p-3 rounded-xl text-white w-40">
                                  Select
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between my-14 bg-gray-100 p-4 py-6 rounded-xl">
                  <div>
                    <div className="font-semibold">App type</div>
                    <div className="text-sm text-gray-600">
                      Business, Food & drink, Graphics & design
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Design tool</div>
                    <div className="text-sm text-gray-600">
                      Adobe XD, Figma, Adobe Photoshop
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Device</div>
                    <div className="text-sm text-gray-600">Mobile, Desktop</div>
                  </div>
                </div>

                <h3 className="font-semibold text-xl my-5 mt-10">FAQs</h3>

                <div className="flex flex-col my-7 gap-5">
                  <div>
                    {/*  */}
                    <div className="w-full">
                      <div className="flex flex-col">
                        <div className="border-b p-5 px-1 hover:bg-gray-50">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between items-center text-gray-500 text-base font-semibold">
                                  <span>What is your refund policy?</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-base px-4 pt-4 pb-2">
                                  <p className="text-gray-600">
                                    If you're unhappy with your purchase for any
                                    reason, email us within 90 days and we'll
                                    refund you in full, no questions asked. We
                                    stand behind our products and want to make
                                    sure you're happy with them. If there's
                                    something we can fix, we'll do it.
                                  </p>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className="border-b p-5 px-1 hover:bg-gray-50">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between items-center text-gray-500 text-base font-semibold">
                                  <span>What is your refund policy?</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-base px-4 pt-4 pb-2">
                                  <p className="text-gray-600">
                                    If you're unhappy with your purchase for any
                                    reason, email us within 90 days and we'll
                                    refund you in full, no questions asked. We
                                    stand behind our products and want to make
                                    sure you're happy with them. If there's
                                    something we can fix, we'll do it.
                                  </p>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                        <div className="p-5 px-1 hover:bg-gray-50">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full justify-between items-center text-gray-500 text-base font-semibold">
                                  <span>What is your refund policy?</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-gray-500`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="text-base px-4 pt-4 pb-2">
                                  <p className="text-gray-600">
                                    If you're unhappy with your purchase for any
                                    reason, email us within 90 days and we'll
                                    refund you in full, no questions asked. We
                                    stand behind our products and want to make
                                    sure you're happy with them. If there's
                                    something we can fix, we'll do it.
                                  </p>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>

                <div class="mb-6 text-gray-800 border-b">
                  <h3 className="font-semibold text-xl my-5 mt-10">Reviews</h3>

                  <div>
                    <div className="flex flex-row gap-10 items-center font-bold">
                      <div>230 reviews for this Gig</div>
                      <div className="flex gap-1 items-center">
                        <StarIcon className="w-5 h-5 fill-yellow-500" />
                        <span>4.5</span>
                      </div>
                    </div>

                    <div className="mt-5 border-b pb-9">
                      <div className="md:w-1/2 w-full">
                        <div className="flex flex-col gap-0 w-full">
                          <button className="flex gap-3 items-center w-full hover:opacity-80 justify-between">
                            <div className="whitespace-nowrap bg-nft-primary-light p-2 rounded-lg text-white text-sm font-semibold">
                              5 Stars
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                class="bg-nft-primary-light h-2.5 rounded-full"
                                style={{ width: "45%" }}
                              ></div>
                            </div>
                            <div className="whitespace-nowrap text-gray-800 text-sm font-medium">
                              (1,252)
                            </div>
                          </button>

                          <button className="flex gap-3 items-center w-full hover:opacity-80 justify-between">
                            <div className="whitespace-nowrap p-2 rounded-lg text-gray-800 text-sm font-semibold">
                              4 Stars
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                class="bg-nft-primary-light h-2.5 rounded-full"
                                style={{ width: "20%" }}
                              ></div>
                            </div>
                            <div className="whitespace-nowrap text-gray-800 text-sm font-medium">
                              (200)
                            </div>
                          </button>

                          <button className="flex gap-3 items-center w-full hover:opacity-80">
                            <div className="whitespace-nowrap p-2 rounded-lg text-gray-800 text-sm font-semibold">
                              3 Stars
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                class="bg-nft-primary-light h-2.5 rounded-full"
                                style={{ width: "60%" }}
                              ></div>
                            </div>
                            <div className="whitespace-nowrap text-gray-800 text-sm font-medium">
                              (340)
                            </div>
                          </button>

                          <button className="flex gap-3 items-center w-full hover:opacity-80">
                            <div className="whitespace-nowrap p-2 rounded-lg text-gray-800 text-sm font-semibold">
                              2 Stars
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                class="bg-nft-primary-light h-2.5 rounded-full"
                                style={{ width: "10%" }}
                              ></div>
                            </div>
                            <div className="whitespace-nowrap text-gray-800 text-sm font-medium">
                              (12)
                            </div>
                          </button>

                          <button className="flex gap-3 items-center w-full hover:opacity-80">
                            <div className="whitespace-nowrap p-2 rounded-lg text-gray-800 text-sm font-semibold">
                              1 Stars
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                class="bg-nft-primary-light h-2.5 rounded-full"
                                style={{ width: "5%" }}
                              ></div>
                            </div>
                            <div className="whitespace-nowrap text-gray-800 text-sm font-medium">
                              (6)
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between mt-10 w-full">
                        <div class="relative max-w-xl">
                          <div class="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            class="text-sm rounded-lg pl-8 block w-full p-2.5 bg-gray-100 outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70"
                            placeholder="Search Reviews..."
                            required
                          />
                        </div>

                        <div>
                          <Menu as="button" className="relative">
                            <div className="flex gap-3 items-center text-gray-800">
                              <span className="text-sm">Sort By</span>
                              <Menu.Button className="border rounded-xl hover:bg-gray-50 px-3 flex items-center gap-2 text-sm p-2.5 font-semibold">
                                <span>Date Ascending</span>
                                <span>
                                  <ArrowSmallUpIcon className="w-4 h-4" />
                                </span>
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
                              <Menu.Items className="absolute right-0 z-10 mt-1 w-auto origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden border text-sm">
                                <div>
                                  <Menu.Item>
                                    <a
                                      href="{option.href}"
                                      className="text-gray-700 p-2.5 hover:bg-gray-100 flex gap-2 items-center"
                                    >
                                      <span>
                                        <ArrowSmallUpIcon className="h-4 w-4 text-gray-700" />
                                      </span>
                                      <span>Date Ascending</span>
                                    </a>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <a
                                      href="{option.href}"
                                      className="text-gray-700 p-2.5 hover:bg-gray-100 flex gap-2 items-center"
                                    >
                                      <span>
                                        <ArrowSmallDownIcon className="h-4 w-4 text-gray-700" />
                                      </span>
                                      <span>Date Descending</span>
                                    </a>
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 gap-4 mb-3">
                      <div class="bg-white rounded-lg p-4 px-0">
                        <div class="flex items-center mb-4">
                          <img
                            src={require("../assets/man.jpg")}
                            alt="User"
                            class="rounded-full h-12 w-12 mr-4 object-cover"
                          />
                          <div>
                            <h3 class="font-medium text-sm">John Doe</h3>
                            <div className="flex flex-row gap-3 items-center">
                              <div className="flex flex-row items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 fill-yellow-500"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>4.0</span>
                              </div>
                              <p class="text-gray-500 text-sm">May 15, 2023</p>
                            </div>
                          </div>
                        </div>
                        <p class="text-gray-800">
                          Aliquam hendrerit sollicitudin purus, quis rutrum mi
                          accumsan nec. Quisque bibendum orci ac nibh facilisis,
                          at malesuada orci congue. Nullam tempus sollicitudin
                          cursus.
                        </p>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 mb-3">
                      <div class="bg-white rounded-lg p-4 px-0">
                        <div class="flex items-center mb-4">
                          <img
                            src={require("../assets/man.jpg")}
                            alt="User"
                            class="rounded-full h-12 w-12 mr-4 object-cover"
                          />
                          <div>
                            <h3 class="font-medium text-sm">John Doe</h3>
                            <div className="flex flex-row gap-3 items-center">
                              <div className="flex flex-row items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 fill-yellow-500"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>4.0</span>
                              </div>
                              <p class="text-gray-500 text-sm">May 15, 2023</p>
                            </div>
                          </div>
                        </div>
                        <p class="text-gray-800">
                          Aliquam hendrerit sollicitudin purus, quis rutrum mi
                          accumsan nec. Quisque bibendum orci ac nibh facilisis,
                          at malesuada orci congue. Nullam tempus sollicitudin
                          cursus.
                        </p>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 mb-3">
                      <div class="bg-white rounded-lg p-4 px-0">
                        <div class="flex items-center mb-4">
                          <img
                            src={require("../assets/man.jpg")}
                            alt="User"
                            class="rounded-full h-12 w-12 mr-4 object-cover"
                          />
                          <div>
                            <h3 class="font-medium text-sm">John Doe</h3>
                            <div className="flex flex-row gap-3 items-center">
                              <div className="flex flex-row items-center gap-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-4 h-4 fill-yellow-500"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>4.0</span>
                              </div>
                              <p class="text-gray-500 text-sm">May 15, 2023</p>
                            </div>
                          </div>
                        </div>
                        <p class="text-gray-800">
                          Aliquam hendrerit sollicitudin purus, quis rutrum mi
                          accumsan nec. Quisque bibendum orci ac nibh facilisis,
                          at malesuada orci congue. Nullam tempus sollicitudin
                          cursus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <button className="p-3 px-6 border-2 border-nft-primary-light font-semibold text-nft-primary-light rounded-xl hover:bg-nft-primary-light hover:text-white">
                      Show More Reviews
                    </button>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl my-5 mt-14">
                      Related Keywords
                    </h3>

                    <div className="flex gap-5">
                      <a
                        href="sd"
                        className="bg-gray-100 p-1 text-sm px-3 rounded-lg border border-gray-300 hover:text-nft-primary-light hover:underline"
                      >
                        IT
                      </a>
                      <a
                        href="sd"
                        className="bg-gray-100 p-1 text-sm px-3 rounded-lg border border-gray-300 hover:text-nft-primary-light hover:underline"
                      >
                        Programming
                      </a>
                      <a
                        href="sd"
                        className="bg-gray-100 p-1 text-sm px-3 rounded-lg border border-gray-300 hover:text-nft-primary-light hover:underline"
                      >
                        Tech
                      </a>
                      <a
                        href="sd"
                        className="bg-gray-100 p-1 text-sm px-3 rounded-lg border border-gray-300 hover:text-nft-primary-light hover:underline"
                      >
                        Computer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 w-full">
              <div class="md:sticky relative top-0">
                <div className="border shadow-lg rounded-xl shadow-gray-200 border-gray-100">
                  <div class="w-full">
                    <Tabs
                      className="w-full"
                      selectedTabClassName="border-nft-primary-light text-nft-primary-light opacity-100 bg-purple-100"
                    >
                      <TabList className="flex justify-between items-center w-full mb-2">
                        <Tab className="w-full border-b-2 text-base cursor-pointer text-gray-600 text-center p-3 py-4 rounded-tl-xl font-semibold">
                          Basic
                        </Tab>
                        <Tab className="w-full border-b-2 text-base cursor-pointer text-gray-600 text-center p-3 py-4 font-semibold">
                          Standard
                        </Tab>
                        <Tab className="w-full border-b-2 text-base cursor-pointer text-gray-600 text-center p-3 py-4 rounded-tr-xl font-semibold">
                          Premium
                        </Tab>
                      </TabList>

                      <TabPanel>
                        <div className="p-5">
                          <div className="flex text-base text-gray-600 justify-between items-center">
                            <div className="uppercase font-bold">Basic</div>
                            <div className="uppercase font-medium text-2xl">
                              $ 120.00
                            </div>
                          </div>

                          <p className="my-7">
                            1 logos + unlimited revisions + PNG file + basic
                            designs
                          </p>

                          <div className="flex justify-between items-center text-gray-800">
                            <div className="flex gap-1 items-center text-sm font-semibold">
                              <ClockIcon className="w-5 h-5" />
                              <span>3 days Delivery</span>
                            </div>
                            <div className="flex gap-1 items-center text-sm font-semibold">
                              <ArrowPathIcon className="w-5 h-5" />
                              <span>5 Revisions</span>
                            </div>
                          </div>

                          <button className="bg-nft-primary-light h-full py-4 rounded-xl font-semibold text-white hover:opacity-80 transition-colors text-sm w-full mt-10">
                            <span>Buy This Package</span>
                          </button>
                        </div>
                      </TabPanel>

                      <TabPanel>
                        <div className="p-5">
                          <div className="flex text-base text-gray-600 justify-between items-center">
                            <div className="uppercase font-bold">Standard</div>
                            <div className="uppercase font-medium text-2xl">
                              $ 120.00
                            </div>
                          </div>

                          <p className="my-7">
                            1 logos + unlimited revisions + PNG file + basic
                            designs
                          </p>

                          <div className="flex justify-between items-center text-gray-800">
                            <div className="flex gap-1 items-center text-sm font-semibold">
                              <ClockIcon className="w-5 h-5" />
                              <span>3 days Delivery</span>
                            </div>
                            <div className="flex gap-1 items-center text-sm font-semibold">
                              <ArrowPathIcon className="w-5 h-5" />
                              <span>5 Revisions</span>
                            </div>
                          </div>

                          <button className="bg-nft-primary-light h-full py-4 rounded-xl font-semibold text-white hover:opacity-80 transition-colors text-sm w-full mt-10">
                            <span>Buy This Package</span>
                          </button>
                        </div>
                      </TabPanel>

                      <TabPanel>
                        <div className="p-5">
                          <div className="flex text-base text-gray-600 justify-between items-center">
                            <div className="uppercase font-bold">Premium</div>
                            <div className="uppercase font-medium text-2xl">
                              $ 120.00
                            </div>
                          </div>

                          <p className="my-7">
                            1 logos + unlimited revisions + PNG file + basic
                            designs
                          </p>

                          <div className="flex justify-between items-center text-gray-800">
                            <div className="flex gap-1 items-center text-sm font-semibold">
                              <ClockIcon className="w-5 h-5" />
                              <span>3 days Delivery</span>
                            </div>
                            <div className="flex gap-1 items-center text-sm font-semibold">
                              <ArrowPathIcon className="w-5 h-5" />
                              <span>5 Revisions</span>
                            </div>
                          </div>

                          <button className="bg-nft-primary-light h-full py-4 rounded-xl font-semibold text-white hover:opacity-80 transition-colors text-sm w-full mt-10">
                            <span>Buy This Package</span>
                          </button>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>

                <div className="border p-8 shadow-lg rounded-lg mt-12">
                  <div className="font-semibold text-xl mb-6">
                    About The Seller
                  </div>

                  <div class="grid grid-cols-1 gap-4 mb-3">
                    <div class="bg-white rounded-lg">
                      <div class="flex items-center mb-6 border-b pb-7">
                        <img
                          src={require("../assets/man.jpg")}
                          alt="User"
                          class="rounded-full h-24 w-24 mr-4 object-cover"
                        />
                        <div>
                          <h3 class="font-medium text-lg">John Doe</h3>
                          <div className="flex flex-row gap-3 items-center">
                            <div className="flex flex-row items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 fill-yellow-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>4.0</span>
                            </div>
                            <p class="text-gray-500 text-sm">(4 reviews)</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm mb-2">
                        <div>Location:</div>
                        <div>Los Angeles</div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>Rate:</div>
                        <div>$25 - $30 / hr</div>
                      </div>
                    </div>
                  </div>

                  <button className="bg-nft-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-nft-primary-dark transition-colors text-sm w-full mt-10">
                    <span>Contact Me</span>
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

        <div className="bg-gray-50 p-10">
          <div className="container mx-auto mb-28">
            <h1 className="text-2xl py-4 pb-6 font-bold">Related Services</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* cards */}

              <div className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-all duration-300 p-0 m-2 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-md shadow-gray-200">
                  <div className="max-w-sm rounded-md overflow-hidden pb-2">
                    <div className="absolute top-2 right-2">
                      <button class="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon class="w-5 h-5 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../assets/trend1.jpg")}
                      alt="Card Imagea"
                      className="h-60 w-full object-cover rounded-t-xl"
                    />

                    <div className="p-3 py-2 mt-2 rounded-b-xl">
                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../assets/slider8.png")}
                            alt="s"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            Agent Pakulla
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-800 font-semibold">
                            Level 2
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/gigdetails"
                        className="block text-sm text-gray-500 mb-3 hover:text-gray-800"
                      >
                        Development & IT
                      </Link>
                      <Link
                        to="/gigdetails"
                        className="mb-4 font-semibold text-lg text-gray-800 block hover:text-nft-primary-light hover:underline"
                      >
                        Management software to help you manage your mobile
                        workers
                      </Link>

                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div>
                            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div>
                            <CubeIcon className="w-4 h-4 text-nft-primary-dark" />
                          </div>
                          <div className="text-md font-semibold text-sm text-gray-700">
                            NFT
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          Starting at:
                          <span className="text-lg text-gray-800 font-bold">
                            $29
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-all duration-300 p-0 m-2 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-md shadow-gray-200">
                  <div className="max-w-sm rounded-md overflow-hidden pb-2">
                    <div className="absolute top-2 right-2">
                      <button class="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon class="w-5 h-5 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../assets/trend7.png")}
                      alt="Card Imagea"
                      className="h-60 w-full object-cover rounded-t-xl"
                    />

                    <div className="p-3 py-2 mt-2 rounded-b-xl">
                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../assets/slider8.png")}
                            alt="s"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            Agent Pakulla
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-800 font-semibold">
                            Level 2
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/gigdetails"
                        className="block text-sm text-gray-500 mb-3 hover:text-gray-800"
                      >
                        Development & IT
                      </Link>
                      <Link
                        to="/gigdetails"
                        className="mb-4 font-semibold text-lg text-gray-800 block hover:text-nft-primary-light hover:underline"
                      >
                        Management software to help you manage your mobile
                        workers
                      </Link>

                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div>
                            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div>
                            <CubeIcon className="w-4 h-4 text-nft-primary-dark" />
                          </div>
                          <div className="text-md font-semibold text-sm text-gray-700">
                            NFT
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          Starting at:
                          <span className="text-lg text-gray-800 font-bold">
                            $29
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-all duration-300 p-0 m-2 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-md shadow-gray-200">
                  <div className="max-w-sm rounded-md overflow-hidden pb-2">
                    <div className="absolute top-2 right-2">
                      <button class="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon class="w-5 h-5 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../assets/trend6.jpg")}
                      alt="Card Imagea"
                      className="h-60 w-full object-cover rounded-t-xl"
                    />

                    <div className="p-3 py-2 mt-2 rounded-b-xl">
                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../assets/slider8.png")}
                            alt="s"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            Agent Pakulla
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-800 font-semibold">
                            Level 2
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/gigdetails"
                        className="block text-sm text-gray-500 mb-3 hover:text-gray-800"
                      >
                        Development & IT
                      </Link>
                      <Link
                        to="/gigdetails"
                        className="mb-4 font-semibold text-lg text-gray-800 block hover:text-nft-primary-light hover:underline"
                      >
                        Management software to help you manage your mobile
                        workers
                      </Link>

                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div>
                            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div>
                            <CubeIcon className="w-4 h-4 text-nft-primary-dark" />
                          </div>
                          <div className="text-md font-semibold text-sm text-gray-700">
                            NFT
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          Starting at:
                          <span className="text-lg text-gray-800 font-bold">
                            $29
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="decoration-transparent shadow-sm shadow-gray-50 rounded-xl transition-all duration-300 p-0 m-2 block hover:scale-105 transform bg-white">
                <div className="relative shadow-lg rounded-md shadow-gray-200">
                  <div className="max-w-sm rounded-md overflow-hidden pb-2">
                    <div className="absolute top-2 right-2">
                      <button class="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                        <HeartIcon class="w-5 h-5 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <img
                      src={require("../assets/trend1.jpg")}
                      alt="Card Imagea"
                      className="h-60 w-full object-cover rounded-t-xl"
                    />

                    <div className="p-3 py-2 mt-2 rounded-b-xl">
                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex gap-2 items-center">
                          <img
                            src={require("../assets/slider8.png")}
                            alt="s"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            Agent Pakulla
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-800 font-semibold">
                            Level 2
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/gigdetails"
                        className="block text-sm text-gray-500 mb-3 hover:text-gray-800"
                      >
                        Development & IT
                      </Link>
                      <Link
                        to="/gigdetails"
                        className="mb-4 font-semibold text-lg text-gray-800 block hover:text-nft-primary-light hover:underline"
                      >
                        Management software to help you manage your mobile
                        workers
                      </Link>

                      <div className="flex justify-between items-center border-b pb-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div>
                            <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                          </div>
                          <div className="text-md font-semibold text-sm">
                            4.7
                          </div>
                          <div className="text-gray-500 text-sm">
                            (3 Reviews)
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div>
                            <CubeIcon className="w-4 h-4 text-nft-primary-dark" />
                          </div>
                          <div className="text-md font-semibold text-sm text-gray-700">
                            NFT
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          Starting at:
                          <span className="text-lg text-gray-800 font-bold">
                            $29
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default GigDetails;
