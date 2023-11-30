import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { Menu } from "@headlessui/react";
import {
  HeartIcon,
  ClipboardDocumentListIcon,
  PhotoIcon,
  FlagIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsWalletConnected,
  setWaletAddress,
} from "../../redux/slices/UserSlice";
import { ethers } from "ethers";
import axios from "axios";
import {
  NFTMarketplaceContractABI,
  NFTMarketplaceContractAddress,
} from "../../constants/ContractDetails";
import toast, { Toaster } from "react-hot-toast";

const Collection = () => {
  const dispatch = useDispatch();
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) {
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        dispatch(setWaletAddress(accounts[0]));
        dispatch(setIsWalletConnected(true));
      } else {
        dispatch(setIsWalletConnected(false));
        dispatch(setWaletAddress(null));
      }
    } catch (error) {
      console.log(`Error connecting with smart contract: ${error}`);
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  const user = useSelector((state) => state.user.user);
  const walletAddress = useSelector((state) => state.user.walletAddress);
  //

  const { collectionId } = useParams();
  const [nfts, setNfts] = useState([]);
  const [nftLikes, setNFTLikes] = useState([]);

  const fetchContract = (signerOrProvider) => {
    const marketplaceContract = new ethers.Contract(
      NFTMarketplaceContractAddress,
      NFTMarketplaceContractABI,
      signerOrProvider
    );

    return { marketplaceContract };
  };

  const fetchNFTs = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_ALCHEMY_SEPOLIA_URL
    );

    const { marketplaceContract } = fetchContract(provider);
    const fetchedMarketItems = await marketplaceContract.fetchMarketItems();

    const items = await Promise.all(
      fetchedMarketItems.map(async (i) => {
        const tokenUri = await marketplaceContract.tokenURI(i.itemId);
        const meta = await axios.get(tokenUri);

        if (meta.data.collection._id === collectionId) {
          return {
            ...meta.data,
            likes: i.likes.toString(),
            itemId: Number(i.itemId),
            weiPrice: i.price,
          };
        } else return;
      })
    );

    // remove null or undefined items from array
    const filteredItems = items.filter(function (el) {
      return el != null;
    });

    filteredItems.reverse();
    setNfts(filteredItems);
  };

  useEffect(() => {
    fetchNFTs();
  }, [collectionId]);

  const handleCopyToClipboard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const getFormattedPrice = (price) => {
    return ethers.utils.formatEther(price.toString());
  };

  const fetchLikes = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/nft/getLikes`,
        {
          nftIds: nfts.map((nft) => nft.itemId),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setNFTLikes(response.data.totalNFTLikes);
    } catch (error) {
      console.log(error);
    }
  };

  const countNFTLikes = (nft) => {
    if (nftLikes.length === 0) {
      return 0;
    }
    const nftLike = nftLikes.filter(
      (like) => like.nftId.toString() === nft.itemId.toString()
    );
    return nftLike.length;
  };

  const checkIfUserLikedNFT = (nft) => {
    if (nftLikes.length === 0 || !user) {
      return false;
    }
    const nftLike = nftLikes.filter(
      (like) =>
        like.nftId.toString() === nft.itemId.toString() &&
        like.userId.toString() === user._id.toString()
    );
    return nftLike.length > 0;
  };

  const addOrRemoveLike = async (nft) => {
    if (!user) {
      toast.error("Please login to like this NFT");
      return;
    }

    try {
      const nftLike = nftLikes.filter(
        (like) =>
          like.nftId.toString() === nft.itemId.toString() &&
          like.userId.toString() === user._id.toString()
      );

      if (nftLike.length > 0) {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/nft/like/${nftLike[0]._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": user.jwtToken,
            },
          }
        );
        if (response.data.error === false) {
          const newNFTLikes = nftLikes.filter(
            (like) => like._id.toString() !== nftLike[0]._id.toString()
          );
          setNFTLikes(newNFTLikes);
          toast.success("Like removed successfully");
        }
        return;
      } else {
        // add like
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/nft/like`,
          {
            nftId: nft.itemId,
            userId: user._id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": user.jwtToken,
            },
          }
        );
        if (response.data.error === false) {
          const newNFTLikes = [...nftLikes, response.data.nftLike];
          setNFTLikes(newNFTLikes);
          toast.success("NFT liked successfully");
        }
      }
    } catch (error) {
      toast.error("Error liking NFT");
      console.log(error);
    }
  };

  useEffect(() => {
    if (nfts.length > 0) fetchLikes();
  }, [nfts]);

  return (
    <>
      <Toaster />
      <Header transparent={true} />
      <div className="mt-8">
        <div className="container mx-auto">
          <div className="p-4 h-80 w-full">
            <div
              className={`w-full h-full rounded-xl relative bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-gray-200 `}
            >
              <img
                src="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg"
                alt=""
                className="absolute w-full h-full object-cover rounded-xl"
              />
              <div className="flex items-center justify-end p-5 gap-4">
                <button className="bg-white rounded-full w-auto h-10 z-10 shadow-lg hover:bg-gray-100 text-gray-700 flex items-center px-4 text-sm gap-2 font-medium">
                  <HeartIcon className="w-5 h-5 text-nft-primary-light" />
                  <span>Add to Favorites</span>
                </button>

                <Menu as="div" className="relative text-left">
                  <div>
                    <Menu.Button className="font-black text-xl bg-white rounded-full w-10 h-10 z-50 shadow-lg hover:bg-gray-100 text-gray-700">
                      <span>···</span>
                    </Menu.Button>
                  </div>

                  <Menu.Items className="absolute right-0 z-10 mt-1 w-40 origin-top-right rounded-xl bg-white shadow-xl focus:outline-none  p-1 border border-gray-50">
                    <Menu.Item>
                      <button className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium">
                        <ClipboardDocumentListIcon className="w-5 h-5" />
                        <span>Copy Link</span>
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <Link
                        target="_blank"
                        className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium"
                      >
                        <PhotoIcon className="w-5 h-5" />
                        <span>Open Original</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <button className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium">
                        <FlagIcon className="w-5 h-5" />
                        <span>Report</span>
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col z-50 -mt-20 gap-4">
            <div className="z-50">
              <img
                src="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg"
                alt=""
                className="w-32 h-32 rounded-full border-2 border-white object-cover z-50"
              />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gra sm:text-4xl">
              Electric Scooter
            </h1>

            <p className="w-1/2 text-sm text-center text-gray-500">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>

            <div className="flex items-center justify-center gap-3">
              <div>
                <span className="text-gray-500 font-normal">Items</span>
                <span className="text-gray-800 font-bold pl-2">1200</span>
              </div>
              <div className="text-gray-500 font-black">·</div>
              <div>
                <span className="text-gray-500 font-normal">Created</span>
                <span className="text-gray-800 font-bold pl-2">Nov 2023</span>
              </div>
              <div className="text-gray-500 font-black">·</div>
              <div>
                <span className="text-gray-500 font-normal">Chain</span>
                <span className="text-gray-800 font-bold pl-2">Ethereum</span>
              </div>
            </div>

            <div className="w-fit flex flex-col gap-2 items-center justify-center border border-gray-200 p-2 px-4 rounded-xl shadow-md shadow-gray-200">
              <span className="text-gray-500 font-normal w-full text-sm text-center block">
                Created by
              </span>
              <a href="s" className="block">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.dribbble.com/users/2256359/screenshots/15433092/media/311b79dd55ecde91f8096d9e49dc2577.jpg"
                    alt="User Imasge"
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-gray-900">Usmama Awan</span>
                    <div className="text-sm text-gray-500">
                      {"0xagjsdh87788hy26".substring(0, 10) +
                        "..." +
                        "0xagjsdh87788hy26".substring(
                          "0xagjsdh87788hy26".length - 4,
                          "0xagjsdh87788hy26".length
                        )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* add here */}

          <div className="my-14 items-center">
            <div className="sticky top-0 p-5 z-50 bg-white border-b pb-3 border-gray-100">
              <div>
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Category</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Gaming
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Art
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Price Range</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            &lt; 0.01 ETH
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            0.01 ETH - 0.1 ETH
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Owner</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            All
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Me
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <div className="relative">
                      <div className="absolute inset-y-0 flex items-center pl-2 text-gray-100">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="text-base rounded-xl border-gray-200 shadow-sm focus:border-nft-primary-light pl-9 block w-full p-3 outline-none border ring-purple-700 focus:ring-1 focus:bg-transparent placeholder-gray-500 text-gray-800"
                        placeholder="Search by name or trait"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-between  text-gray-800 gap-20 items-center border border-gray-200 shadow-sm focus:border-nft-primary-light p-3 rounded-xl font-semibold focus:ring-nft-primary-light focus:ring-1">
                          <span>Recently Sold</span>
                          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                        </Menu.Button>
                      </div>

                      <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl p-2 focus:outline-none">
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Price Low to High
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <button className="font-medium text-gray-800 hover:bg-gray-100 block p-3 rounded-lg w-full text-left">
                            Price High to Low
                          </button>
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>

                <div className="mt-2 px-4">
                  <div className="text-gray-500 flex items-center gap-2">
                    <span className="font-medium">2850</span>
                    results
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-start py-10">
              {nfts.map((nft, index) => (
                <div
                  className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                  key={index}
                >
                  <div className="w-full h-full decoration-transparent rounded-xl shadow-xl transition-colors duration-300 relative group">
                    <div
                      className="h-auto bg-gray-100 overflow-hidden rounded-xl"
                      style={{ height: "300px" }}
                    >
                      {nft.fileType === "image" ? (
                        <img
                          src={nft.fileUrl}
                          alt={nft.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <video controls width="100%" height="100%">
                          <source src={nft.fileUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                    <div className="p-2">
                      <div className="flex justify-between items-center -mt-8 z-50">
                        <div className="flex -space-x-3">
                          {nft.ownershipHistory.map((history, index) => (
                            <img
                              key={index}
                              className="w-12 h-12 rounded-full border-2 object-cover border-white z-10"
                              src={history.avatar}
                              alt="avatar"
                            />
                          ))}
                        </div>
                        <div className="flex items-center justify-center">
                          <Menu as="div" className="relative text-left">
                            <div>
                              <Menu.Button className="font-black text-xl bg-white rounded-full w-12 h-12 z-50 shadow-lg hover:bg-gray-100 text-gray-700">
                                <span>···</span>
                              </Menu.Button>
                            </div>

                            <Menu.Items className="absolute right-0 z-10 mt-1 w-40 origin-top-right rounded-xl bg-white shadow-xl focus:outline-none  p-1 border border-gray-50">
                              <Menu.Item>
                                <button
                                  className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium"
                                  onClick={() => {
                                    handleCopyToClipboard(
                                      `${window.location.origin}/nft/${nft.itemId}`
                                    );
                                    toast.success("Link copied to clipboard");
                                  }}
                                >
                                  <ClipboardDocumentListIcon className="w-5 h-5" />
                                  <span>Copy Link</span>
                                </button>
                              </Menu.Item>
                              <Menu.Item>
                                <Link
                                  to={nft.fileUrl}
                                  target="_blank"
                                  className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium"
                                >
                                  <PhotoIcon className="w-5 h-5" />
                                  <span>Open Original</span>
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <button className="text-gray-600 p-3 rounded-xl hover:bg-gray-100 text-sm w-full text-left flex gap-2 items-center font-medium">
                                  <FlagIcon className="w-5 h-5" />
                                  <span>Report</span>
                                </button>
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        </div>
                      </div>

                      <div className="p-2">
                        <h3 className="text-xl font-bold tracking-tight text-black">
                          {nft.name}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2 justify-between">
                          <div>
                            <span className="block text-xs text-center">
                              Price
                            </span>
                            <span className="font-bold text-sm text-black">
                              <span className="text-gray-500 pr-1 font-medium">
                                {getFormattedPrice(nft.weiPrice)}
                              </span>
                              ETH
                            </span>
                          </div>
                          <div>
                            <span className="block text-xs text-center">
                              Collection
                            </span>
                            <Link
                              to={"s"}
                              className="text-nft-primary-light font-semibold"
                            >
                              <span>{nft.collection.name}</span>
                              <ArrowUpRightIcon className="w-4 h-4 inline-block" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-1 text-sm mt-4 text-center">
                        {user &&
                        nft.currentOwner.walletAddress ===
                          walletAddress ? null : (
                          <button
                            className="bg-nft-primary-light border-nft-primary-light text-white font-medium p-4 rounded-xl hover:bg-nft-primary-dark w-full"
                            // onClick={() => buyNFT(nft)}
                          >
                            Buy Now
                          </button>
                        )}
                        <Link
                          className="bg-gray-200 font-medium p-4 rounded-xl hover:bg-gray-300 w-full text-gray-800"
                          to={`/nft/${nft.itemId}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    <div className="absolute top-2 left-2">
                      <div className="bg-white rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 text-black overflow-hidden p-2">
                        <div>
                          <div className="flex rounded-2xl justify-evenly items-center">
                            <div className="flex flex-col gap-1 items-center">
                              <span className="flex gap-1">
                                <img
                                  src={require("../assets/eth.png")}
                                  alt=""
                                  className="w-5 h-5 object-contain"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className={`rounded-xl p-2 flex gap-1 items-center absolute top-2 right-2 text-sm font-semibold ${
                        checkIfUserLikedNFT(nft)
                          ? "bg-nft-primary-light text-white"
                          : "text-nft-primary-light bg-white"
                      }`}
                      onClick={() => addOrRemoveLike(nft)}
                    >
                      <HeartIcon className="w-5 h-5" />
                      <span
                        className={!checkIfUserLikedNFT(nft) && "text-gray-700"}
                      >
                        {nftLikes && countNFTLikes(nft)}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection;