import React from "react";
import { HeartIcon, TrophyIcon } from "@heroicons/react/24/outline";

const FirstNFT = ({ NFT }) => {
  const formatDate = (dateString) => {
    var date = new Date(dateString);
    return (
      date.getDate() +
      " " +
      date.toLocaleString("default", { month: "long" }) +
      " " +
      date.getFullYear()
    );
  };

  return (
    <div className="w-full flex bg-white p-5 rounded-2xl gap-10">
      <div className="w-1/3">
        <div>
          <img
            src={NFT.image}
            alt=""
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex flex-col gap-3 text-gray-800">
          <h3 className="font-bold text-3xl">{NFT.name}</h3>
          <p className="text-gray-500 text-sm">
            Published on {formatDate(NFT.createdAt)}
          </p>

          <div className="flex items-center justify-start gap-5">
            <img
              src={NFT.user.avatar}
              alt=""
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold">{NFT.user.name}</span>
              <span className="text-gray-500 font-medium">
                @{NFT.user.username}
              </span>
            </div>
          </div>

          <p className="py-4 block">{NFT.description.substring(0, 200)}...</p>

          <div className="bg-gray-100 w-fit flex p-8 px-12 rounded-xl gap-14">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-500">
                Price Starts From
              </span>
              <span className="flex gap-2">
                <img
                  src={require("../../../../nftmarketplace/assets/eth.png")}
                  alt=""
                  className="w-8 h-8 object-contain"
                />
                <span className="font-bold text-xl">{NFT.price} ETH</span>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-500">
                Creator Royalty
              </span>
              <span className="flex gap-2 items-center">
                <TrophyIcon className="w-8 h-8 object-contain text-yellow-500" />
                <span className="font-bold text-xl">{NFT.royalties} %</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-10 mt-2">
            <button className="rounded-full text-nft-primary-light bg-purple-200 p-2">
              <HeartIcon className="h-6 w-6 fill-nft-primary-light" />
            </button>

            <div className="flex items-center gap-4">
              <button className="bg-gray-200 border border-gray-300 font-bold p-3 rounded-xl px-10 hover:opacity-80">
                Details
              </button>
              <button className="bg-nft-primary-light border border-nft-primary-light text-white font-bold p-3 rounded-xl px-10 hover:opacity-80">
                Place a Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNFT;
