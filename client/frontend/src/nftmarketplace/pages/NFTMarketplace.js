import web3Modal from "web3modal";
import {
  NFTMarketplaceABI,
  NFTMarketplaceAddress,
} from "../../constants/constants";
import { create as ipfsHttpClient } from "ipfs-http-client";
import React, { useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

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
        console.log(currentAccount, accounts[0]);
        // return true;
      } else {
        console.log("No authorized account found");
        // return false;
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

  // Create NFT
  const createNFT = async (formInput, fileUrl, router) => {
    try {
      const { name, description, price } = formInput;
      if (!name || !description || !price || !fileUrl) {
        return console.log("Please make sure all fields are completed");
      }

      const data = JSON.stringify({
        name,
        description,
        image: fileUrl,
      });

      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      await createSale(url, price);
    } catch (error) {
      console.log(`Error creating NFT: ${error}`);
    }
  };

  // Create Sale
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(url, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      console.log(`Error creating sale: ${error}`);
    }
  };

  // Fetch NFTs
  const fetchNFTs = async () => {
    try {
      const provider = new ethers.JsonRpcProvider();
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.log(`Error fetching NFTs: ${error}`);
    }
  };

  // Fetch MY NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();

      const data =
        type === "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );

      return items;
    } catch (error) {
      console.log(`Error fetching my NFTs: ${error}`);
    }
  };

  // Buy NFT
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
    } catch (error) {
      console.log(`Error buying NFT: ${error}`);
    }
  };

  return <div>nftMarketplace</div>;
};
