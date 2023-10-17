import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormStep } from "../../../../redux/slices/NewGigSlice";
import { LightBulbIcon } from "@heroicons/react/24/outline";

const NFTTab = () => {
  const dispatch = useDispatch();
  const formStep = useSelector((state) => state.gig.formStep);

  const handlePrev = () => {
    dispatch(setFormStep(formStep - 1));
  };

  const handleSubmit = () => {
    dispatch(setFormStep(formStep + 1));
  };

  return (
    <div id="description">
      <div className="p-4 text-3xl border-b mb-6 pt-2 text-gray-800 font-normal border-gray-100">
        <h2>NFT Reward</h2>
      </div>

      <div className="flex justify-between">
        <div className="text-gray-600 p-4 md:w-2/3 w-full">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-gray-800 font-semibold mb-3">
                What is the NFT Reward?
              </h2>
              <p className="text-gray-600">
                The NFT Reward is the NFT you will be giving to the buyer. It is
                the NFT that will be minted and sent to the buyer when they
                purchase your gig.
              </p>

              <h3 className="my-5 text-gray-500 font-semibold">
                This feature is currently under development. Please check back
                later.
              </h3>
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

      <div className="flex w-full justify-between md:w-2/3 p-4 pb-0 mt-5">
        <div>
          <button className="rounded-xl px-6 py-3 bg-gray-200 text-gray-800 font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors border border-gray-300">
            Cancel
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="rounded-xl px-6 py-3 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="rounded-xl px-6 py-3 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200"
            onClick={handleSubmit}
          >
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTTab;
