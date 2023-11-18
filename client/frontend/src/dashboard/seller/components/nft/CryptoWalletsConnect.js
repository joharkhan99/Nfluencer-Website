import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsWalletConnected,
  setUser,
} from "../../../../redux/slices/UserSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";

const CryptoWalletsConnect = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metaMaskSelected, setMetaMaskSelected] = useState(false);
  const { ethereum } = window;
  const dispatch = useDispatch();

  const checkMetamaskAvailability = async () => {
    if (!ethereum) {
      setIsOpen(true);
      dispatch(setIsWalletConnected(false));
      return false;
    }
    setIsOpen(false);
    return true;
  };

  const ConnectMetaMask = async () => {
    if (checkMetamaskAvailability()) {
      setMetaMaskSelected(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      if (signer) {
        const walletAddress = await signer.getAddress();
        const request = await fetch(
          `${process.env.REACT_APP_API_URL}/api/user/wallet`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": user.jwtToken,
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
          dispatch(setUser(response.user));
          dispatch(setIsWalletConnected(true));
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

        if (accounts.length > 0) {
          dispatch(setIsWalletConnected(true));
          console.log("YES");
        }
        // else {
        //   const request = await fetch(
        //     `${process.env.REACT_APP_API_URL}/api/user/wallet`,
        //     {
        //       method: "DELETE",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         username: user.username,
        //       }),
        //     }
        //   );
        //   const response = await request.json();
        //   if (response.error) {
        //     alert(response.message);
        //     return false;
        //   }
        //   dispatch(setIsWalletConnected(false));
        // }
      } catch (error) {
        console.error("Error fetching connected accounts:", error);
        console.log(0);
      }
    } else {
      dispatch(setIsWalletConnected(false));
    }
  };

  useEffect(() => {
    connectedAccounts();
  }, []);

  return (
    <div>
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
                  src={require("../../../../nftmarketplace/assets/metamask.png")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">MetaMask</span>
              </button>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/coinbase.png")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">Coinbase Wallet</span>
              </div>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/walletconnect.png")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">WalletConnect</span>
              </div>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/ledgerconnect.webp")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">Ledger</span>
              </div>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/phantom.png")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">Phantom</span>
              </div>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/bitkeep.png")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">BitKeep</span>
              </div>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/fort.png")}
                  alt="s"
                  className="w-10 h-10"
                />
                <span className="text-sm font-bold">Fortmatic</span>
              </div>

              <div className="border-2 border-gray-100 p-4 rounded-xl flex flex-col items-center gap-2 px-14 hover:bg-purple-100 cursor-pointer hover:border-nft-primary-light">
                <img
                  src={require("../../../../nftmarketplace/assets/bitski.png")}
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
          Metamask extension is required to use this application. Please install
          Metamask to proceed.
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
  );
};

export default CryptoWalletsConnect;
