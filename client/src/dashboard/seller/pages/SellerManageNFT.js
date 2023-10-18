import React, { useEffect, useState } from "react";
import herobg from "../assets/img/vr-glasses2.PNG";
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import BalanceChart from "../components/charts/BalanceChart";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ethers, BrowserProvider, parseUnits } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { setWalletAddress } from "../../../redux/slices/UserSlice";

const SellerManageNFT = () => {
  const [haveMetamask, sethaveMetamask] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [metaMaskSelected, setMetaMaskSelected] = useState(false);
  const { ethereum } = window;
  const user = useSelector((state) => state.user.user);
  const walletAddress = useSelector((state) => state.user.walletAddress);

  const checkMetamaskAvailability = async () => {
    if (!ethereum) {
      sethaveMetamask(false);
      setIsOpen(true);
      dispatch(setWalletAddress(null));
      return false;
    }
    sethaveMetamask(true);
    setIsOpen(false);
    return true;
  };

  const dispatch = useDispatch();

  const ConnectMetaMask = async () => {
    if (checkMetamaskAvailability()) {
      setMetaMaskSelected(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      if (signer) {
        setIsConnected(true);
        const walletAddress = await signer.getAddress();
        const request = await fetch(
          `${process.env.REACT_APP_API_URL}/api/user/wallet`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              walletAddress,
              username: user.username,
            }),
          }
        );

        const response = await request.json();
        if (response.error) {
          alert(response.message);
          return;
        } else {
          dispatch(setWalletAddress(response.walletAddress));
        }
      }
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const connectedAccounts = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts) {
          if (accounts.length > 0) {
            console.log(accounts[0]);
            dispatch(setWalletAddress(accounts[0]));
            setIsConnected(true);
            console.log("Connected");
          } else {
            const request = await fetch(
              `${process.env.REACT_APP_API_URL}/api/user/wallet`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: user.username,
                }),
              }
            );
            const response = await request.json();
            if (response.error) {
              alert(response.message);
              return false;
            }
            console.log("Not connected");
            setIsConnected(false);
            dispatch(setWalletAddress(null));
          }
        } else {
          console.log(0);
        }
      } catch (error) {
        console.error("Error fetching connected accounts:", error);
        console.log(0);
      }
    }
  };

  useEffect(() => {
    connectedAccounts();
  });

  return (
    <div className="w-full">
      <div className={`${isConnected ? "hidden" : ""}`}>
        <div class="flex items-center justify-center h-full w-full">
          <div className="">
            <div className="bg-white rounded-xl text-gray-800 shadow-lg shadow-gray-200 p-7">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                Connect your Crypto Wallet
              </h2>
              <p className="text-gray-500 text-sm">
                Please Connect with one of our available wallet providers to
                continue with NFTs.
              </p>

              <div className="text-lg font-extrabold tracking-tight text-gray-800 my-5 flex justify-between items-center">
                <span>Choose Wallet</span>
                <a
                  href="https://opensea.io/learn/what-is-crypto-wallet"
                  className="text-nft-primary-light font-semibold text-sm hover:underline"
                >
                  What is a wallet?
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <button
                  className={`border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light ${
                    metaMaskSelected
                      ? "bg-purple-100 border-nft-primary-light"
                      : ""
                  }`}
                  onClick={ConnectMetaMask}
                >
                  <img
                    src={require("../../../nftmarketplace/assets/metamask.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">MetaMask</span>
                </button>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/coinbase.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">Coinbase Wallet</span>
                </div>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/walletconnect.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">WalletConnect</span>
                </div>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/ledgerconnect.webp")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">Ledger</span>
                </div>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/phantom.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">Phantom</span>
                </div>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/bitkeep.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">BitKeep</span>
                </div>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/fort.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">Fortmatic</span>
                </div>

                <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                  <img
                    src={require("../../../nftmarketplace/assets/bitski.png")}
                    alt="s"
                    className="w-10 h-10"
                  />
                  <span className="text-sm font-bold">Bikski</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-20 right-2 w-1/3 bg-white p-4 rounded-xl shadow-xl ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Metamask Not Installed</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            Metamask extension is required to use this application. Please
            install Metamask to proceed.
          </p>
          <a
            className="bg-[rgb(245,133,27)] text-white p-4 block rounded-xl hover:opacity-80 transition duration-300 text-center"
            href="https://metamask.io/download/"
            target="_blank"
            rel="noreferrer"
          >
            Download Metamask
          </a>
        </div>
      </div>

      {/*  */}

      <div className={`${isConnected ? "" : "hidden"}`}>
        <div className="lg:flex gap-4">
          <div
            className="lg:w-3/4 p-0 bg-nft-primary-light rounded-xl relative bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${herobg})`,
            }}
          >
            <div className="w-1/2 text-white relative py-12 px-10">
              <h2 className="text-3xl mb-2 font-medium">
                Discover, Collect, and sell NFTs
              </h2>
              <div className="flex gap-3 items-center mt-10">
                <a
                  href="d"
                  className="block bg-white text-gray-800 font-semibold rounded-full p-4 px-7 text-sm hover:opacity-80"
                >
                  Discover now
                </a>
                <Link
                  to="/seller/newnft"
                  className="block border-transparent border text-white bg-white font-semibold rounded-full p-4 px-7 text-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 hover:opacity-80"
                >
                  Create NFT
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="bg-white w-full h-full rounded-xl p-0 shadow-xl shadow-gray-200">
              <div className="flex flex-col justify-between h-full relative">
                <div className="text-center pt-4 text-base font-light text-gray-400 absolute w-full">
                  Balance
                </div>
                <BalanceChart />
                <div className="p-4 pt-0">
                  <button className="bg-purple-200 rounded-xl p-3 text-sm w-full text-nft-primary-dark font-semibold hover:bg-nft-primary-light hover:text-white transition-colors">
                    View Reports
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-4 mt-10">
          <div className="lg:w-3/4 p-0 rounded-xl relative">
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                  Trending NFTs
                </h2>

                <button className="text-nft-primary-light font-medium text-sm block">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
                  <div className="relative shadow-lg rounded-xl shadow-gray-200 text-gray-800">
                    <div className="max-w-sm rounded-xl overflow-hidden p-2">
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                          <HeartIcon className="w-4 h-4 group-hover:stroke-white group-hover:fill-white" />
                        </button>
                      </div>

                      <img
                        src={require("../../../website/assets/trend1.jpg")}
                        alt="Card Imagea"
                        className="h-44 w-full object-cover rounded-xl"
                      />

                      <div className="flex flex-col justify-between gap-6 py-3 pb-0">
                        <div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center text-gray-500 text-sm">
                              <span>Jacob Maharra</span>
                              <span>
                                <CheckBadgeIcon className="w-4 h-4 text-nft-primary-dark" />
                              </span>
                            </div>
                            <div className="flex items-center -space-x-3">
                              <img
                                src={require("../../../website/assets/man.jpg")}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                              <img
                                src={require("../../../website/assets/authbg.jpg")}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                            </div>
                          </div>

                          <div className="text-lg text-gray-800 font-semibold">
                            Dream World #50
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                            <div>
                              <span>Price</span>
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <div className="rounded-full bg-yellow-100 p-1">
                                  <img
                                    src={require("../../../nftmarketplace/assets/bitcoin.png")}
                                    alt=""
                                    className="w-4 h-4 object-contain"
                                  />
                                </div>
                                <div className="flex gap-1">
                                  <span className="font-semibold text-gray-800">
                                    5.32
                                  </span>
                                  <span>BTC</span>
                                </div>
                              </div>

                              <div className="text-right">
                                <span className="text-gray-500 text-xs">
                                  - $ 2500
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-gray-500 text-sm">
                            <div>
                              <span>Current Bid</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-gray-100 p-1">
                                <img
                                  src={require("../../../nftmarketplace/assets/eth.png")}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                              <div className="flex gap-1">
                                <span className="font-semibold text-gray-800">
                                  3.423
                                </span>
                                <span>ETH</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <button className="bg-nft-primary-light text-white w-full p-3 rounded-xl text-sm hover:opacity-80">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
                  <div className="relative shadow-lg rounded-xl shadow-gray-200 text-gray-800">
                    <div className="max-w-sm rounded-xl overflow-hidden p-2">
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                          <HeartIcon className="w-4 h-4 group-hover:stroke-white group-hover:fill-white" />
                        </button>
                      </div>

                      <img
                        src={require("../../../website/assets/trend1.jpg")}
                        alt="Card Imagea"
                        className="h-44 w-full object-cover rounded-xl"
                      />

                      <div className="flex flex-col justify-between gap-6 py-3 pb-0">
                        <div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center text-gray-500 text-sm">
                              <span>Jacob Maharra</span>
                              <span>
                                <CheckBadgeIcon className="w-4 h-4 text-nft-primary-dark" />
                              </span>
                            </div>
                            <div className="flex items-center -space-x-3">
                              <img
                                src={require("../../../website/assets/man.jpg")}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                              <img
                                src={require("../../../website/assets/authbg.jpg")}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                            </div>
                          </div>

                          <div className="text-lg text-gray-800 font-semibold">
                            Dream World #50
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                            <div>
                              <span>Price</span>
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <div className="rounded-full bg-yellow-100 p-1">
                                  <img
                                    src={require("../../../nftmarketplace/assets/bitcoin.png")}
                                    alt=""
                                    className="w-4 h-4 object-contain"
                                  />
                                </div>
                                <div className="flex gap-1">
                                  <span className="font-semibold text-gray-800">
                                    5.32
                                  </span>
                                  <span>BTC</span>
                                </div>
                              </div>

                              <div className="text-right">
                                <span className="text-gray-500 text-xs">
                                  - $ 2500
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-gray-500 text-sm">
                            <div>
                              <span>Current Bid</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-gray-100 p-1">
                                <img
                                  src={require("../../../nftmarketplace/assets/eth.png")}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                              <div className="flex gap-1">
                                <span className="font-semibold text-gray-800">
                                  3.423
                                </span>
                                <span>ETH</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <button className="bg-nft-primary-light text-white w-full p-3 rounded-xl text-sm hover:opacity-80">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="decoration-transparent shadow-sm shadow-gray-100 rounded-xl transition-all duration-300 p-0 block hover:scale-105 transform bg-white">
                  <div className="relative shadow-lg rounded-xl shadow-gray-200 text-gray-800">
                    <div className="max-w-sm rounded-xl overflow-hidden p-2">
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-white hover:bg-nft-primary-light text-gray-500 rounded-full group">
                          <HeartIcon className="w-4 h-4 group-hover:stroke-white group-hover:fill-white" />
                        </button>
                      </div>

                      <img
                        src={require("../../../website/assets/trend1.jpg")}
                        alt="Card Imagea"
                        className="h-44 w-full object-cover rounded-xl"
                      />

                      <div className="flex flex-col justify-between gap-6 py-3 pb-0">
                        <div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center text-gray-500 text-sm">
                              <span>Jacob Maharra</span>
                              <span>
                                <CheckBadgeIcon className="w-4 h-4 text-nft-primary-dark" />
                              </span>
                            </div>
                            <div className="flex items-center -space-x-3">
                              <img
                                src={require("../../../website/assets/man.jpg")}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                              <img
                                src={require("../../../website/assets/authbg.jpg")}
                                alt=""
                                className="w-8 h-8 rounded-full object-cover border-2 border-white"
                              />
                            </div>
                          </div>

                          <div className="text-lg text-gray-800 font-semibold">
                            Dream World #50
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
                            <div>
                              <span>Price</span>
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <div className="rounded-full bg-yellow-100 p-1">
                                  <img
                                    src={require("../../../nftmarketplace/assets/bitcoin.png")}
                                    alt=""
                                    className="w-4 h-4 object-contain"
                                  />
                                </div>
                                <div className="flex gap-1">
                                  <span className="font-semibold text-gray-800">
                                    5.32
                                  </span>
                                  <span>BTC</span>
                                </div>
                              </div>

                              <div className="text-right">
                                <span className="text-gray-500 text-xs">
                                  - $ 2500
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-gray-500 text-sm">
                            <div>
                              <span>Current Bid</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-gray-100 p-1">
                                <img
                                  src={require("../../../nftmarketplace/assets/eth.png")}
                                  alt=""
                                  className="w-4 h-4 object-contain"
                                />
                              </div>
                              <div className="flex gap-1">
                                <span className="font-semibold text-gray-800">
                                  3.423
                                </span>
                                <span>ETH</span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <button className="bg-nft-primary-light text-white w-full p-3 rounded-xl text-sm hover:opacity-80">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
                  Top Creators
                </h2>

                <button className="text-nft-primary-light font-medium text-sm block">
                  View All
                </button>
              </div>

              <div className="rounded-xl p-0 bg-white">
                <div className="shadow-lg rounded-xl shadow-gray-200">
                  {/*  */}
                  <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
                    <div className="flex h-full gap-2">
                      <div>
                        <img
                          src={require("../../../website/assets/man.jpg")}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between h-fulls">
                        <span className="font-semibold">Golbert Andi</span>
                        <span className="text-gray-500 text-xs">
                          10,300 Items
                        </span>
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="flex flex-col justify-between h-full gap-1">
                        <span className="font-semibold">$500K</span>
                        <span className="text-gray-500 text-xs">Total USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
                    <div className="flex h-full gap-2">
                      <div>
                        <img
                          src={require("../../../website/assets/man.jpg")}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between h-fulls">
                        <span className="font-semibold">Golbert Andi</span>
                        <span className="text-gray-500 text-xs">
                          10,300 Items
                        </span>
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="flex flex-col justify-between h-full gap-1">
                        <span className="font-semibold">$500K</span>
                        <span className="text-gray-500 text-xs">Total USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
                    <div className="flex h-full gap-2">
                      <div>
                        <img
                          src={require("../../../website/assets/man.jpg")}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between h-fulls">
                        <span className="font-semibold">Golbert Andi</span>
                        <span className="text-gray-500 text-xs">
                          10,300 Items
                        </span>
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="flex flex-col justify-between h-full gap-1">
                        <span className="font-semibold">$500K</span>
                        <span className="text-gray-500 text-xs">Total USD</span>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerManageNFT;
