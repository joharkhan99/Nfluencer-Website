import web3Modal from "web3modal";
import {
  NFTMarketplaceABI,
  NFTMarketplaceAddress,
} from "../../constants/constants";
import { create as ipfsHttpClient } from "ipfs-http-client";
import React, { useEffect } from "react";
import { ethers } from "ethers";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const w3modal = new web3Modal();
    const connection = await w3modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(`Error connecting with smart contract: ${error}`);
  }
};

export const NFTMarketplaceProvider = () => {
  const [currentAccount, setCurrentAccount] = React.useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum)
        throw new Error("Make sure you have metamask installed!");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        return true;
      } else {
        console.log("No authorized account found");
        return false;
      }
    } catch (error) {
      console.log(`Error connecting with smart contract: ${error}`);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return console.log("Make sure you have metamask installed!");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(`Error connecting with smart contract: ${error}`);
    }
  };

  // Upload to IPFS
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log(`Error uploading to IPFS: ${error}`);
    }
  };

  return <div>nftMarketplace</div>;
};
