import React from "react";

export const SellerHomePage = () => {
  return (
    <>
      <div className="flex">
        <div className="p-0 bg-purple-300 rounded-xl relative">
          {/*  */}
          <div className="w-full h-full overflow-hidden absolute rounded-xl">
            <div className="absolute w-64 h-64 opacity-50 bg-nft-primary-light rounded-full -top-36 -left-36 z-10"></div>
            <div className="absolute w-64 h-64 opacity-50 bg-nft-primary-light rounded-full -bottom-36 -right-36 z-10"></div>
          </div>

          <div className="container flex items-center justify-between relative">
            <div className="w-1/2 text-right justify-end flex z-50">
              <img
                src={require("../assets/img/home-hero.jpg")}
                alt="Your"
                className="h-64 w-full object-contain -mt-12 relative"
              />
            </div>

            <div className="w-1/2 text-black z-20 px-16 relative">
              <h2 className="text-xl mb-2 font-normal">
                Hi, <span className="font-semibold">Johar</span>
              </h2>
              <p className="text-sm">
                You have 3 tasks to finish all tasks today. You already
                completed 50% of your tasks. Keep it up! Your progress is
                looking great.
              </p>
            </div>
          </div>
        </div>
        <div>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </div>
      </div>
    </>
  );
};
