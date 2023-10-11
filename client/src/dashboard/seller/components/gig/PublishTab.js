import React, { Fragment } from "react";
import {
  ChevronUpIcon,
  LightBulbIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";

const PublishTab = () => {
  return (
    <div id="overview" className="mb-10">
      <div className="p-4 pb-5 pt-2 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight text-nft-primary-light">
          It's Alive!
        </h2>
        <p className="text-xl my-10 font-bold text-gray-700">
          Boost your gig through sharing for better promotions, rankings, and
          impressions.
        </p>

        <div>
          <div className="w-fit p-3 rounded-xl border-nft-primary-light border-2 mx-auto flex items-center gap-3 cursor-pointer text-nft-primary-light font-medium">
            <LinkIcon className="h-6 w-6 inline-block" />
            <div>https://www.nftify.network/gig/1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishTab;
