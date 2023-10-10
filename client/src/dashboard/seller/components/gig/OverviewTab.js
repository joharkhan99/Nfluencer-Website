import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const OverviewTab = () => {
  const categories = [
    // Main Categories
    {
      name: "Influencer Services",
      subcategories: [
        {
          name: "Social Media Promotion",
        },
        {
          name: "Sponsored Posts",
        },
      ],
    },
    {
      name: "Live Streaming",
      subcategories: [
        {
          name: "Freelance Services",
        },
        {
          name: "Writing and Editing",
        },
        {
          name: "Graphic Design",
        },
        {
          name: "Web Development",
        },
        {
          name: "Video Editing",
        },
      ],
    },
    {
      name: "Music Services",
      subcategories: [
        {
          name: "Music Production",
        },
        {
          name: "Songwriting",
        },
        {
          name: "Instrumental Services",
        },
        {
          name: "Music Lessons",
        },
      ],
    },
    {
      name: "Art Services",
      subcategories: [
        {
          name: "Digital Art",
        },
        {
          name: "Traditional Art",
        },
        {
          name: "Custom Art Commissions",
        },
        {
          name: "Art Tutorials",
        },
      ],
    },
    {
      name: "Consulting Services",
      subcategories: [
        {
          name: "Business Consulting",
        },
        {
          name: "Marketing Strategy",
        },
        {
          name: "Career Counseling",
        },
        {
          name: "Financial Advice",
        },
      ],
    },
    {
      name: "Coaching Services",
      subcategories: [
        {
          name: "Life Coaching",
        },
        {
          name: "Fitness Coaching",
        },
        {
          name: "Career Coaching",
        },
        {
          name: "Personal Development",
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(categories[0]);
  const [selected2, setSelected2] = useState(categories[0]);

  return (
    <div id="overview">
      <div className="p-4 text-3xl border-b mb-6 pt-2 text-gray-800 font-normal border-gray-100">
        <h2>Overview</h2>
      </div>

      <div class="flex justify-between">
        <div class="text-gray-600 p-4 md:w-2/3 w-full">
          <div className="flex flex-col gap-10">
            <div>
              <label className="uppercase font-bold text-sm mb-2 block">
                Git Title
              </label>
              <textarea
                type="text"
                placeholder="I will do something I'm really good at"
                className="w-full text-5xl font-medium rounded-xl border-gray-200 border p-3 py-4 resize-none outline-none placeholder:text-gray-200 focus:ring-2 focus:ring-nft-primary-light"
              />
              <span className="block text-right text-xs text-gray-400">
                10/80 max
              </span>
            </div>

            <div className="flex justify-between gap-8">
              <div className="w-full">
                <label className="uppercase font-bold text-sm mb-2 block">
                  Category
                </label>

                <div>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-pointer rounded-xl text-left font-medium hover:bg-gray-200 bg-gray-100 py-3 px-6 focus:ring-2 focus:ring-nft-primary-light text-sm">
                        <span className="block truncate text-md">
                          {selected.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                          <ChevronUpDownIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm rounded-xl bg-white shadow-2xl p-2 text-sm">
                          {categories.map((category, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active }) =>
                                `block py-4 rounded-lg relative cursor-default select-none pl-8 hover:bg-gray-100 text-gray-900`
                              }
                              value={category}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate text-md`}>
                                    {category.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                                      <CheckIcon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="w-full">
                <label className="uppercase font-bold text-sm mb-2 block">
                  Sub-Category
                </label>

                <div>
                  <Listbox value={selected2} onChange={setSelected2}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-pointer rounded-xl text-left font-medium hover:bg-gray-200 bg-gray-100 py-3 px-6 focus:ring-2 focus:ring-nft-primary-light text-sm">
                        <span className="block truncate text-md">
                          {selected2.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                          <ChevronUpDownIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm rounded-xl bg-white shadow-2xl p-2">
                          {categories[1]["subcategories"].map(
                            (category, index) => (
                              <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                  `block py-4 rounded-lg relative cursor-default select-none pl-8 hover:bg-gray-100 text-gray-900`
                                }
                                value={category}
                              >
                                {({ selected2 }) => (
                                  <>
                                    <span className={`block truncate text-md`}>
                                      {category.name}
                                    </span>
                                    {selected2 ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                                        <CheckIcon
                                          className="h-4 w-4"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            )
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
            </div>

            <div>
              <label className="uppercase font-bold text-sm mb-2 block">
                Search Tags
              </label>
              <textarea
                type="text"
                className="w-full text-xl font-medium rounded-xl border-gray-200 border p-3 py-4 resize-none outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-nft-primary-light"
              />
              <span className="block text-left text-xs text-gray-400 italic">
                5 tags maximum. Use letters and numbers only.
              </span>
            </div>
          </div>
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

export default OverviewTab;