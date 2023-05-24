import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "react-multi-carousel";
function GigDetails() {
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
        <Header transparent={true} />
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-28">
          <h1 className="text-4xl font-bold mb-7">
            I will show your product for 10s in my video
          </h1>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-sm">
              <img
                src={require("./assets/man.jpg")}
                className="rounded-full h-10 w-10 object-cover"
                alt=""
              />
              <span>Freelancer</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>4.7 (3 Reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>3063 Views</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-10 pt-0">
        <div class="grid grid-cols-12 gap-4 bg-transparent">
          <div class="col-span-8 bg-transparent">
            <div className="flex justify-between py-10">
              <div>
                <div className="font-semibold">Delivery Time</div>
                <div className="text-sm">4 Days</div>
              </div>
              <div>
                <div className="font-semibold">English level</div>
                <div className="text-sm">Conversational</div>
              </div>
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-sm">Islamabad, Pakistan</div>
              </div>
            </div>

            <div class="mb-6 w-full">
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
                // className="w-full h-full"
              >
                <div className="h-full w-full">
                  <img
                    src={require("./assets/trend5.webp")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-full">
                  {" "}
                  <img
                    src={require("./assets/trend6.jpg")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-full w-full">
                  <img
                    src={require("./assets/trend7.png")}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Carousel>
            </div>

            <h3 className="font-semibold text-xl my-5 mt-10">
              Service Description
            </h3>
            <p class="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet.
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
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>

            <div className="flex justify-between py-16 mb-10 border-b">
              <div>
                <div className="font-semibold mb-2">App type</div>
                <div className="text-sm">
                  Business, Food & drink, Graphics & design
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Design tool</div>
                <div className="text-sm">Adobe XD, Figma, Adobe Photoshop</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Device</div>
                <div className="text-sm">Mobile, Desktop</div>
              </div>
            </div>

            <div class="mb-6">
              <div class="container mx-auto px-4 py-8">
                <div class="grid grid-cols-1 gap-4 mb-3">
                  <div class="bg-white rounded-lg p-4">
                    <div class="flex items-center mb-4">
                      <img
                        src={require("./assets/man.jpg")}
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
                      accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                      malesuada orci congue. Nullam tempus sollicitudin cursus.
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-3">
                  <div class="bg-white rounded-lg p-4">
                    <div class="flex items-center mb-4">
                      <img
                        src={require("./assets/man.jpg")}
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
                      accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                      malesuada orci congue. Nullam tempus sollicitudin cursus.
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-3">
                  <div class="bg-white rounded-lg p-4">
                    <div class="flex items-center mb-4">
                      <img
                        src={require("./assets/man.jpg")}
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
                      accumsan nec. Quisque bibendum orci ac nibh facilisis, at
                      malesuada orci congue. Nullam tempus sollicitudin cursus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-6"></div>
          </div>

          <div class="col-span-4">
            <div class="p-4">
              <div className="border p-8 shadow-lg rounded-lg">
                <div className="text-xl font-bold mb-5">$29</div>
                <div className="flex gap-5 border-b pb-4 mb-4">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <span className="block text-md mb-3 font-semibold">
                      1000 Words (+5 days)
                    </span>
                    <span className="text-sm block mb-3">
                      I will professionalyy translate english to german
                    </span>
                    <span className="block text-md font-semibold">$85</span>
                  </div>
                </div>
                <div className="flex gap-5 border-b pb-4 mb-4">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <span className="block text-md mb-3 font-semibold">
                      3000 Words (+8 days)
                    </span>
                    <span className="text-sm block mb-3">
                      I will professionaly translate english to german
                    </span>
                    <span className="block text-md font-semibold">$120</span>
                  </div>
                </div>

                <button className="bg-web-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm w-full">
                  <span>Buy Now $29</span>
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
              <div className="border p-8 shadow-lg rounded-lg mt-12">
                <div className="font-semibold text-xl mb-6">
                  About The Seller
                </div>

                <div class="grid grid-cols-1 gap-4 mb-3">
                  <div class="bg-white rounded-lg">
                    <div class="flex items-center mb-6 border-b pb-7">
                      <img
                        src={require("./assets/man.jpg")}
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

                <button className="bg-web-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm w-full mt-10">
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

      <div className="container mx-auto mb-28">
        <h1 className="text-2xl py-4 pb-6 font-bold">Related Services</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                <div className="mt-4 p-5 py-2">
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
                      <span className="text-lg text-black font-bold">$29</span>
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
                <div className="mt-4 p-5 py-2">
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
                      <span className="text-lg text-black font-bold">$29</span>
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
                <div className="mt-4 p-5 py-2">
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
                      <span className="text-lg text-black font-bold">$29</span>
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
                <div className="mt-4 p-5 py-2">
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
                      <span className="text-lg text-black font-bold">$29</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <img src={require("./assets/nft1.jpg")} alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default GigDetails;
