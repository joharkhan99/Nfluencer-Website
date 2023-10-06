import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";

export const SellerGigs = () => {
  return (
    <div>
      <div class="lg:flex md:flex w-full my-6 gap-3">
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(15,220,156)] shadow-lg hover:border-transparent shadow-green-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer relative">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-light text-sm text-white">
                <div>Active Gigs</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-2xl font-semibold text-white">05</div>
              <div>
                <span className="text-white">
                  <RocketLaunchIcon className="w-10 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(95,70,212)] shadow-lg hover:border-transparent shadow-purple-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-light text-sm text-white">
                <div>Pending Approval Gigs</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-2xl font-semibold text-white">01</div>
              <div>
                <span className="text-white">
                  <RocketLaunchIcon className="w-10 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(253,116,71)] shadow-lg hover:border-transparent shadow-red-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-light text-sm text-white">
                <div>Denied Gigs</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-2xl font-semibold text-white">10</div>
              <div>
                <span className="text-white">
                  <RocketLaunchIcon className="w-10 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-2/4 w-full bg-[rgb(21,124,253)] shadow-lg hover:border-transparent shadow-blue-200 transition-all rounded-xl p-6 group hover:scale-105 cursor-pointer">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center font-light text-sm text-white">
                <div>Draft Gigs</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-2xl font-semibold text-white">15</div>
              <div>
                <span className="text-white">
                  <RocketLaunchIcon className="w-10 h-10 opacity-60" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
