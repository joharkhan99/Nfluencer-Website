import { LightBulbIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DescriptionTab = () => {
  const [description, setDescription] = useState("");
  const formats = [
    // "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
  ];
  const quillmodules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <div id="description">
      <div className="p-4 text-3xl border-b mb-6 pt-2 text-gray-800 font-normal border-gray-100">
        <h2>Description</h2>
      </div>

      <div class="flex justify-between">
        <div class="text-gray-600 p-4 md:w-2/3 w-full">
          <div className="flex flex-col gap-10">
            <div>
              <label className="capitalize font-bold text-sm mb-2 block">
                Briefly Describe Your Gig
              </label>
              <div style={{ height: "250px" }}>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  formats={formats}
                  modules={quillmodules}
                  className="resize-none block outline-none placeholder:text-gray-200 focus:ring-2 focus:ring-nft-primary-light max-h-full h-full"
                />
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className="block text-right text-xs text-gray-400 italic">
                min. 120
              </span>
              <span className="block text-right text-xs text-gray-400 italic">
                10/1200 characters
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

export default DescriptionTab;
