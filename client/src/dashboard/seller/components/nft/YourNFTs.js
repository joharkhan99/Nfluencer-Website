import React, { useEffect, useState } from "react";
import { HeartIcon, TrophyIcon } from "@heroicons/react/24/outline";
import FirstNFT from "./FirstNFT";

const YourNFTs = ({ user }) => {
  const [nfts, setNFTs] = useState([]);
  const [firstNFT, setFirstNFT] = useState(null);

  // fetch all the gigs for the user
  const fetchNFTs = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/nft/user-nfts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user.jwtToken,
          },
          body: JSON.stringify({ userId: user._id }),
        }
      );
      const data = await response.json();
      if (data.length >= 1) {
        setFirstNFT(data[0]);
      }
      setNFTs(data.slice(1));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <>
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 mb-7">
          Your NFTs
        </h2>

        {firstNFT && <FirstNFT NFT={firstNFT} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
          {nfts.map((nft) => (
            <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
              <div className="relative shadow-lg rounded-2xl shadow-gray-200 text-gray-800">
                <div className="rounded-2xl overflow-hidden">
                  <div className="h-64 w-full relative">
                    <img
                      src={nft.image}
                      alt="Card Imagea"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute bottom-0 w-full p-4">
                      <div className="bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 text-white p-4 overflow-hidden">
                        <div>
                          <div className="flex rounded-2xl justify-between">
                            <div className="flex flex-col gap-1">
                              <span className="text-sm">Price</span>
                              <span className="flex gap-1">
                                <img
                                  src={require("../../../../nftmarketplace/assets/eth.png")}
                                  alt=""
                                  className="w-6 h-6 object-contain"
                                />
                                <span className="font-semibold text-sm">
                                  {nft.price} ETH
                                </span>
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-sm">Creator Royalty</span>
                              <span className="flex gap-1 items-center">
                                <TrophyIcon className="w-5 h-5 object-contain text-gray-800 fill-gray-800" />
                                <span className="font-semibold text-sm">
                                  {nft.royalties} %
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <div className="text-lg text-gray-800 font-semibold">
                        {nft.name}
                      </div>

                      <button className="p-2 bg-purple-200 hover:bg-nft-primary-light text-nft-primary-light rounded-full group">
                        <HeartIcon className="w-6 h-6 group-hover:stroke-white group-hover:fill-white" />
                      </button>
                    </div>

                    <div className="flex items-center justify-start gap-2 mb-5">
                      <img
                        src={nft.user.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 font-semibold">
                          {nft.user.name}
                        </span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between gap-3 text-sm">
                      <button class="bg-gray-200 font-medium p-3 rounded-xl hover:opacity-80 w-full text-gray-800">
                        Details
                      </button>
                      <button class="bg-nft-primary-light border border-nft-primary-light text-white font-medium p-3 rounded-xl hover:opacity-80 w-full">
                        Place a Bid
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YourNFTs;
