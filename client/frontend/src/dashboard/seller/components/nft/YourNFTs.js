import React, { useEffect, useState } from "react";
import { HeartIcon, TrophyIcon, PlusIcon } from "@heroicons/react/24/outline";
import FirstNFT from "./FirstNFT";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import {
  NFTContractABI,
  NFTContractAddress,
  NFTMarketplaceContractABI,
  NFTMarketplaceContractAddress,
} from "../../../../constants/ContractDetails";
import { Link } from "react-router-dom";

const YourNFTs = ({ user }) => {
  const [nfts, setNFTs] = useState([]);
  const [firstNFT, setFirstNFT] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
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
      console.log(data);
      setNFTs(data.slice(1));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  */

  const fetchContract = (signerOrProvider) => {
    const marketplaceContract = new ethers.Contract(
      NFTMarketplaceContractAddress,
      NFTMarketplaceContractABI,
      signerOrProvider
    );

    const nftContract = new ethers.Contract(
      NFTContractAddress,
      NFTContractABI,
      signerOrProvider
    );

    return { marketplaceContract, nftContract };
  };

  const fetchNFTs = async () => {
    setLoading(true);
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const { marketplaceContract, nftContract } = fetchContract(signer);
      const data = await marketplaceContract.fetchItemsCreated();

      // console.log(data[0].itemId.toString());

      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await nftContract.tokenURI(i.tokenId);
          const activity = await marketplaceContract.getNFTActivity(i.tokenId);
          console.log(i.tokenId, activity);
          const meta = await axios.get(tokenUri);
          return meta.data;
        })
      );

      // console.log(data);
      items.reverse();
      console.log(items);

      if (items.length > 0) {
        setFirstNFT(items[0]);
      }
      setNFTs(items.slice(1));
    } catch (error) {
      console.log(`Error fetching NFTs: ${error}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const loader = (
    <div className="flex w-full justify-center items-center m-auto gap-1 flex-col my-10">
      <div className="border-t-gray-700 border-2 w-7 h-7 flex items-center justify-center rounded-full animate-spin"></div>
    </div>
  );

  if (loading) {
    return loader;
  }

  return (
    <>
      {nfts.length > 0 || firstNFT ? (
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 mb-7">
              Your NFTs
            </h2>
            <button className="text-nft-primary-light font-medium text-sm block">
              View All
            </button>
          </div>

          {firstNFT && <FirstNFT NFT={firstNFT} />}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            {nfts.map((nft, index) => (
              <div
                className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white"
                key={index}
              >
                <div className="relative shadow-lg rounded-2xl shadow-gray-200 text-gray-800">
                  <div className="rounded-2xl overflow-hidden">
                    <div className="h-64 w-full relative">
                      {nft.fileType === "image" ? (
                        <img
                          src={nft.fileUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={nft.fileUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        ></video>
                      )}

                      <div className="absolute bottom-0 w-full p-4">
                        <div className="bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 text-black p-4 overflow-hidden">
                          <div>
                            <div className="flex rounded-2xl justify-evenly items-center">
                              <div className="flex flex-col gap-1 items-center">
                                <span className="text-sm font-medium">
                                  Price
                                </span>
                                <span className="flex gap-1">
                                  <img
                                    src={require("../../../../nftmarketplace/assets/eth.png")}
                                    alt=""
                                    className="w-5 h-5 object-contain"
                                  />
                                  <span className="font-semibold text-sm">
                                    {nft.price} ETH
                                  </span>
                                </span>
                              </div>
                              <div className="flex flex-col gap-1 items-center">
                                <span className="text-sm font-medium">
                                  Creator Royalty
                                </span>
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

                        <button className="rounded-xl text-nft-primary-light bg-white p-2 flex gap-1 items-center absolute top-2 right-2 text-sm">
                          <HeartIcon className="h-5 w-5 fill-nft-primary-light" />
                          <span className="font-semibold">12</span>
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center justify-start gap-2 mb-5">
                          <img
                            src={nft.creator.avatar}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-500 font-semibold">
                              {nft.creator.name}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-start gap-2 mb-5">
                          <img
                            src={nft.collection.image}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-500 font-semibold">
                              {nft.collection.name.substring(0, 13)}...
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3 text-sm">
                        <button className="bg-gray-200 font-medium p-3 rounded-xl hover:opacity-80 w-full text-gray-800">
                          Manage
                        </button>
                        <button className="bg-nft-primary-light border border-nft-primary-light text-white font-medium p-3 rounded-xl hover:opacity-80 w-full">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 justify-center">
            <button className="bg-nft-primary-light border border-nft-primary-light text-white font-bold p-3 rounded-xl px-10 hover:opacity-80">
              View All
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
              Your NFTs
            </h2>
            <Link
              to="/seller/newnft"
              className="bg-nft-primary-light text-white w-fit p-3 rounded-full text-sm hover:opacity-80 flex items-center gap-2"
            >
              <PlusIcon className="w-6 h-6 object-contain" />
              <span>Create Your First NFT</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default YourNFTs;
