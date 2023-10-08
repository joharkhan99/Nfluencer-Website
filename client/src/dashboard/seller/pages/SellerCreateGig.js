import {
  CubeTransparentIcon,
  CurrencyDollarIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  PencilIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const SellerCreateGig = () => {
  return (
    <div>
      <div className="flex items-center justify-center rounded-lg w-fit m-auto bg-white shadow-xl shadow-gray-200 p-2">
        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-purple-100">
              <DocumentMagnifyingGlassIcon className="h-6 w-6 text-nft-primary-light" />
            </button>
          </div>
        </div>

        <div className="vert-line relative text-center px-4">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-purple-100">
              <DocumentTextIcon className="h-6 w-6 text-nft-primary-light" />
            </button>
            <div className="hidden flex-col justify-start text-left">
              <span className="text-xs text-nft-primary-light font-medium">
                Step 2/6
              </span>
              <span className="text-sm font-semibold text-gray-800">
                Description
              </span>
            </div>
          </div>
        </div>

        <div className="vert-line relative text-center px-4">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-nft-primary-light shadow-md shadow-purple-300">
              <CurrencyDollarIcon className="h-6 w-6 text-white" />
            </button>
            <div className="flex flex-col justify-start text-left">
              <span className="text-xs text-nft-primary-light font-medium">
                Step 2/6
              </span>
              <span className="text-sm font-semibold text-gray-800">
                Pricing & Packages
              </span>
            </div>
          </div>
        </div>

        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-gray-50">
              <PhotoIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-gray-50">
              <CubeTransparentIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-gray-50">
              <PencilIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-gray-50">
              <QuestionMarkCircleIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCreateGig;
