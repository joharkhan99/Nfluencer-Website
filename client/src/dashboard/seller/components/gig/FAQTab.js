import React, { Fragment } from "react";
import {
  ChevronUpIcon,
  EllipsisHorizontalIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const FAQTab = () => {
  return (
    <div id="overview" className="mb-10">
      <div className="p-4 pb-5 text-3xl mb-0 pt-2 text-gray-800 font-normal">
        <h2>Frequently Asked Questions</h2>
        <p className="text-sm mt-1 text-gray-500">
          Add Questions and Answers to help buyers learn more about your gig.
        </p>
      </div>

      <div className="flex justify-between">
        <div className="text-gray-500 p-4 md:w-2/3 w-full">
          <div className="flex items-center space-x-4">
            <hr className="flex-1 border-t border-gray-100" />
            <div className="text-sm font-semibold uppercase flex items-center gap-1">
              <span>Your FAQs</span>
              <span>
                <QuestionMarkCircleIcon className="h-5 w-5" />
              </span>
            </div>
            <hr className="flex-1 border-t border-gray-100" />
          </div>

          <div className="bg-gray-100 rounded-xl p-4 text-gray-700 mt-10 text-sm">
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Add a Question. i.e. What is your refund policy?"
                  className="w-full outline-none border-2 border-gray-300 p-3 resize-none rounded-xl focus:border-nft-primary-light"
                />
              </div>
              <div>
                <textarea
                  className="w-full h-40 outline-none border-2 border-gray-300 p-3 resize-none rounded-xl focus:border-nft-primary-light"
                  placeholder="Add an Answer. i.e. If you're unhappy with your purchase for any reason"
                ></textarea>
                <span className="italic block text-right text-xs text-gray-500">
                  0/450 Characters
                </span>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button className="rounded-xl p-1.5 px-3 bg-gray-200 text-gray-500 font-semibold cursor-pointer hover:opacity-80 transition-colors border border-gray-300">
                  Cancel
                </button>
                <button className="rounded-xl p-1.5 px-5 bg-nft-primary-light text-white font-semibold cursor-pointer hover:opacity-80 transition-colors border border-nft-primary-light">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-7 gap-5">
            <div>
              {/*  */}
              <div className="w-full">
                <div className="flex flex-col gap-3">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between border border-gray-200 items-center p-3 py-4 rounded-xl text-gray-700 ring-2 ring-gray-100 hover:bg-gray-50 text-sm">
                          <span>What is your refund policy?</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-sm px-4 pt-4 pb-2 text-gray-700 bg-gray-100 rounded-xl">
                          <p>
                            If you're unhappy with your purchase for any reason,
                            email us within 90 days and we'll refund you in
                            full, no questions asked. We stand behind our
                            products and want to make sure you're happy with
                            them. If there's something we can fix, we'll do it.
                          </p>
                          <div className="text-right mt-2">
                            <button className="bg-red-500 p-2 text-white rounded-xl px-4 hover:opacity-80">
                              Remove
                            </button>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/3 md:block hidden">
          <div className="flex justify-center items-center sticky top-0">
            <div className=" bg-purple-200 w-full p-3 rounded-xl">
              <div className="text-center -mt-8">
                <span className="rounded-full bg-nft-primary-light p-2 inline-block">
                  <LightBulbIcon className=" w-7 h-7 text-white" />
                </span>
              </div>

              <div>
                <h2 className="text-center font-semibold mb-3 text-gray-600">
                  Start Defining Your Gig
                </h2>
                <div>
                  <ul className="list-disc px-7 pb-0 pt-0 text-md text-gray-600">
                    <li className="mb-2">Choose a catchy title.</li>
                    <li className="mb-2">
                      Choose a category and subcategory that best describe
                    </li>
                    <li className="mb-2">
                      Add metadata tags to help buyers find your gig in
                    </li>
                    <li className="mb-2">
                      Add tags that describe your gig. Use letters and numbers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQTab;
