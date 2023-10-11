import React, { Fragment } from "react";
import {
  EllipsisHorizontalIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";

const RequirementsTab = () => {
  return (
    <div id="overview" className="mb-10">
      <div className="p-4 pb-5 text-3xl mb-0 pt-2 text-gray-800 font-normal">
        <h2>Buyer Requirements</h2>
        <p className="text-sm mt-1 text-gray-500">
          Add questions to help buyers include all the information you need to
          get started on their order.
        </p>
      </div>

      <div class="flex justify-between">
        <div class="text-gray-500 p-4 md:w-2/3 w-full">
          <div class="flex items-center space-x-4">
            <hr class="flex-1 border-t border-gray-100" />
            <div class="text-sm font-semibold uppercase">Your Questions</div>
            <hr class="flex-1 border-t border-gray-100" />
          </div>

          <div className="flex flex-col mt-10 mb-5 gap-5">
            <div className="flex justify-between border border-gray-200 items-center p-3 py-4 rounded-xl text-gray-700 ring-2 ring-gray-100 hover:bg-gray-50">
              <div className="font-semibold text-sm">
                Kindly tell me the details of your project.
              </div>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group hover:bg-gray-200 rounded-full w-10 h-10">
                      <div className="p-2.5">
                        <EllipsisHorizontalIcon className="w-full h-full text-gray-500" />
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
                    <Menu.Items className="absolute right-0 z-10 -mt-3 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden text-sm">
                      <div>
                        <Menu.Item>
                          <a
                            href="{option.href}"
                            className="p-2 hover:bg-gray-100 flex gap-2 items-center"
                          >
                            <span>
                              <PencilSquareIcon className="h-5 w-5 font-semibold" />
                            </span>
                            <span>Edit</span>
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="{option.href}"
                            className="p-2 hover:bg-gray-100 flex gap-2 items-center"
                          >
                            <span>
                              <TrashIcon className="h-5 w-5" />
                            </span>
                            <span>Delete</span>
                          </a>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            <div className="flex justify-between border border-gray-200 items-center p-3 py-4 rounded-xl text-gray-700 ring-2 ring-gray-100 hover:bg-gray-50">
              <div className="font-semibold text-sm">
                Tell me if you have any special requirements.
              </div>
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group hover:bg-gray-200 rounded-full w-10 h-10">
                      <div className="p-2.5">
                        <EllipsisHorizontalIcon className="w-full h-full text-gray-500" />
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
                    <Menu.Items className="absolute right-0 z-10 -mt-3 w-32 origin-top-right rounded-md bg-white shadow-lg focus:outline-none p-0 overflow-hidden text-sm">
                      <div>
                        <Menu.Item>
                          <a
                            href="{option.href}"
                            className="p-2 hover:bg-gray-100 flex gap-2 items-center"
                          >
                            <span>
                              <PencilSquareIcon className="h-5 w-5 font-semibold" />
                            </span>
                            <span>Edit</span>
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="{option.href}"
                            className="p-2 hover:bg-gray-100 flex gap-2 items-center"
                          >
                            <span>
                              <TrashIcon className="h-5 w-5" />
                            </span>
                            <span>Delete</span>
                          </a>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-5 text-gray-700 hidden">
            <div>
              <p className="mb-2">Requirement #1</p>
              <div>
                <textarea
                  className="w-full h-40 outline-none border-2 border-gray-300 p-3 resize-none rounded-xl focus:border-nft-primary-light"
                  placeholder="Type your question here..."
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

          <button className="rounded-xl px-6 py-3  text-nft-primary-light font-semibold relative cursor-pointer hover:opacity-80 transition-colors border-2 border-nft-primary-light flex items-center bg-purple-100">
            <PlusIcon className="w-5 h-5 inline-block mr-2" />
            <span>Add New Question</span>
          </button>
        </div>

        <div class="p-4 md:w-1/3 md:block hidden">
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

export default RequirementsTab;
