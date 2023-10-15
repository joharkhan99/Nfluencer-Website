import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ClipboardDocumentListIcon,
  LightBulbIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const GalleryTab = () => {
  return (
    <div id="gallery" className="text-sm">
      <div className="p-4 pb-5 text-3xl border-b mb-6 pt-2 text-gray-800 font-normal border-gray-100">
        <h2>Gallery & Media</h2>
        <p className="text-sm mt-1">
          Show off Your Gig with eye-catching Images and Videos
        </p>
      </div>

      <div className="flex justify-between">
        <div className="text-gray-600 p-4 md:w-3/4 w-full">
          <div className="border-b border-gray-100 pb-8 mb-7">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-xl">Gig Photos</span>
                <span>
                  Upload photos that describe or are related to your Gig.
                </span>
              </div>
              <div>(0/3)</div>
            </div>

            <div className="flex justify-evenly mt-10 gap-3">
              <div className="flex items-center justify-center h-52 w-1/3 cursor-pointer text-center relative">
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="hidden"
                  accept="image/*"
                  required
                />
                <label
                  for="image"
                  className="cursor-pointer bg-white border-2 border-gray-300 text-gray-600 rounded-lg overflow-hidden p-3 px-5 hover:opacity-80 w-full h-full flex items-center flex-col justify-center border-dashed"
                >
                  <PhotoIcon className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">
                    Browse a Photo <br />
                    to Upload
                  </p>
                </label>
              </div>

              <div className="flex items-center justify-center h-52 w-1/3 cursor-pointer text-center relative">
                <div className="w-full h-full absolute bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="hidden"
                  accept="image/*"
                  required
                />
                <label
                  for="image"
                  className="cursor-pointer bg-gray-100 border-2 border-gray-300 text-gray-600 rounded-lg overflow-hidden p-3 px-5 hover:opacity-80 w-full h-full flex items-center flex-col justify-center border-dashed"
                >
                  <PhotoIcon className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">
                    Browse a Photo <br />
                    to Upload
                  </p>
                </label>
              </div>

              <div className="flex items-center justify-center h-52 w-1/3 cursor-pointer text-center relative">
                <div className="w-full h-full absolute bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="hidden"
                  accept="image/*"
                  required
                />
                <label
                  for="image"
                  className="cursor-pointer bg-gray-100 border-2 border-gray-300 text-gray-600 rounded-lg overflow-hidden p-3 px-5 hover:opacity-80 w-full h-full flex items-center flex-col justify-center border-dashed"
                >
                  <PhotoIcon className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">
                    Browse a Photo <br />
                    to Upload
                  </p>
                </label>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-8 mb-7">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-xl">Gig Video</span>
                <span>
                  Capture buyers’ attention with a short video that showcases.
                </span>
              </div>
              <div>(0/1)</div>
            </div>

            <div className="flex justify-start mt-10 gap-3">
              <div className="flex items-center justify-center h-52 w-1/3 cursor-pointer text-center relative">
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="hidden"
                  accept="image/*"
                  required
                />
                <label
                  for="image"
                  className="cursor-pointer bg-white border-2 border-gray-300 text-gray-600 rounded-lg overflow-hidden p-3 px-5 hover:opacity-80 w-full h-full flex items-center flex-col justify-center border-dashed"
                >
                  <VideoCameraIcon className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">
                    Browse a Video <br />
                    to Upload
                  </p>
                </label>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-xl">Gig Documents</span>
                <span>
                  Show some of the best work you created in a document (PDFs
                  only).
                </span>
              </div>
              <div>(0/2)</div>
            </div>

            <div className="flex justify-start mt-10 gap-3">
              <div className="flex items-center justify-center h-52 w-1/3 cursor-pointer text-center relative">
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="hidden"
                  accept="image/*"
                  required
                />
                <label
                  for="image"
                  className="cursor-pointer bg-white border-2 border-gray-300 text-gray-600 rounded-lg overflow-hidden p-3 px-5 hover:opacity-80 w-full h-full flex items-center flex-col justify-center border-dashed"
                >
                  <ClipboardDocumentListIcon className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">
                    Browse a Document <br />
                    to Upload
                  </p>
                </label>
              </div>

              <div className="flex items-center justify-center h-52 w-1/3 cursor-pointer text-center relative">
                <div className="w-full h-full absolute bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="hidden"
                  accept="image/*"
                  required
                />
                <label
                  for="image"
                  className="cursor-pointer bg-white border-2 border-gray-300 text-gray-600 rounded-lg overflow-hidden p-3 px-5 hover:opacity-80 w-full h-full flex items-center flex-col justify-center border-dashed"
                >
                  <ClipboardDocumentListIcon className="w-16 h-16 text-gray-300" />
                  <p className="text-sm font-semibold">
                    Browse a Document <br />
                    to Upload
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:w-1/4 md:block hidden">
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

export default GalleryTab;
