import {
  CubeTransparentIcon,
  CurrencyDollarIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  DocumentCheckIcon,
  PhotoIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import OverviewTab from "../components/gig/OverviewTab";
import DescriptionTab from "../components/gig/DescriptionTab";
import PricingTab from "../components/gig/PricingTab";

const SellerCreateGig = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center rounded-xl w-fit m-auto bg-white shadow-xl shadow-gray-200 p-3">
        <div className="vert-line relative text-center px-4">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-purple-100">
              <DocumentMagnifyingGlassIcon className="h-6 w-6 text-nft-primary-light" />
            </button>
            <div className="hidden flex-col justify-start text-left">
              <span className="text-xs text-nft-primary-light font-medium">
                Step 1/6
              </span>
              <span className="text-sm font-semibold text-gray-800">
                Overview
              </span>
            </div>
          </div>
        </div>

        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-nft-primary-light shadow-md shadow-purple-300">
              <DocumentTextIcon className="h-6 w-6 text-white" />
            </button>

            <div className="flex flex-col justify-start text-left">
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
            <div className=" flex-col justify-start text-left flex">
              <span className="text-xs text-nft-primary-light font-medium">
                Step 3/6
              </span>
              <span className="text-sm font-semibold text-gray-800">
                Scope & Pricing
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
              <DocumentCheckIcon className="h-6 w-6 text-gray-400" />
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

        <div className="vert-line text-center px-4 relative">
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full bg-gray-50">
              <CheckCircleIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="my-10 bg-white shadow-xl shadow-gray-200 p-5 rounded-xl">
        {/* overview */}
        {/* <OverviewTab /> */}
        {/* overview */}

        {/* description */}
        {/* <DescriptionTab /> */}
        {/* description */}

        {/* pricing */}
        <PricingTab />
        {/* pricing */}

        <div className="flex w-full justify-between md:w-2/3 p-4 pb-0 mt-5">
          <div>
            <button className="rounded-xl px-6 py-3 bg-gray-200 text-gray-800 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors border border-gray-300">
              Cancel
            </button>
          </div>
          <div className="flex gap-4">
            <button className="rounded-xl px-6 py-3 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200">
              Previous
            </button>
            <button className="rounded-xl px-6 py-3 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200">
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCreateGig;
