import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  PlusIcon,
  TrophyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NFTPreview from "../components/nft/NFTPreview";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {
  NFTMarketplaceABI,
  NFTMarketplaceAddress,
} from "../../../constants/constants";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";

const SellerNewNFT = () => {
  const isWalletConnected = useSelector(
    (state) => state.user.isWalletConnected
  );
  const [preview, setPreview] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [royalties, setRoyalties] = useState(null);
  const [image, setImage] = useState(null);

  const [traitName, settraitName] = useState("");
  const [traitType, settraitType] = useState("");
  const [traits, setTraits] = useState([]);
  const [traitErrors, setTraitErrors] = useState({});
  const [traitModalOpen, setTraitModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const AddTrait = () => {
    const errors = {};

    if (!traitName) {
      errors.traitName = "Name cannot be empty";
    }
    if (!traitType) {
      errors.traitType = "Type cannot be empty";
    }

    setTraitErrors(errors);

    if (traitName && traitType) {
      setTraits([...traits, { traitName, traitType }]);
      setTraitModalOpen(false);
      settraitName("");
      settraitType("");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!isWalletConnected) {
      navigate("/seller");
      return;
    }
  }, [isWalletConnected]);

  const [isVideoFile, setIsVideoFile] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      const maxSize = 50 * 1024 * 1024;
      if (file.size > maxSize) {
        setErrors({ image: "File size exceeds 50MB." });
        e.target.value = null;
        return;
      }

      if (file.type === "video/mp4") {
        const videoUrl = URL.createObjectURL(file);
        setIsVideoFile(true);
        setPreview(videoUrl);
      } else {
        setIsVideoFile(false);
        setPreview(URL.createObjectURL(file));
      }

      console.log(preview);

      setImage(file);
    }
  };

  const DeleteTrait = (index) => {
    setTraits(traits.filter((trait, i) => i !== index));
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name cannot be empty";
    }
    if (!description) {
      errors.description = "Description cannot be empty";
    }
    if (!price) {
      errors.price = "Price cannot be empty";
    }
    if (!royalties) {
      errors.royalties = "Royalties cannot be empty";
    }
    if (!image) {
      errors.image = "Image cannot be empty";
    }
    if (traits.length === 0) {
      errors.traits = "Add at least one trait";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const user = useSelector((state) => state.user.user);

  const projectId = process.env.REACT_APP_INFURA_API_KEY;
  const projectSecretKey = process.env.REACT_APP_INFURA_API_KEY_SECRET;
  const encoder = new TextEncoder();
  const data = encoder.encode(`${projectId}:${projectSecretKey}`);
  const auth = `Basic ${btoa(String.fromCharCode.apply(null, data))}`;
  const subdomain = "https://nfluencer.infura-ipfs.io";

  const client = ipfsHttpClient({
    host: "nfluencer.infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      return url;
    } catch (error) {
      setErrors({ message: "Error uploading to IPFS" });
      console.log(`Error uploading to IPFS: ${error}`);
    }
  };

  // Create NFT
  const createNFT = async (name, price, image, description, router) => {
    try {
      if (!name || !description || !price || !image) {
        setErrors({ message: "Please make sure all fields are completed" });
        return;
      }

      const data = JSON.stringify({
        name,
        description,
        image,
      });

      const added = await client.add(data);
      const url = `https://nfluencer.infura-ipfs.io/ipfs/${added.path}`;

      await createSale(url, price);
    } catch (error) {
      setErrors({ message: "Error creating NFT" });
      console.log(`Error creating NFT: ${error}`);
    }
  };
  const fetchContract = (signerOrProvider) =>
    new ethers.Contract(
      NFTMarketplaceAddress,
      NFTMarketplaceABI,
      signerOrProvider
    );

  const connectingWithSmartContract = async () => {
    try {
      const w3modal = new Web3Modal();
      const connection = await w3modal.connect();

      const provider = new ethers.BrowserProvider(connection);
      const signer = await provider.getSigner();

      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      setErrors({ message: "Error connecting with smart contract" });
      console.log(`Error connecting with smart contract: ${error}`);
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
      setErrors({ message: "Error creating sale" });
      console.log(`Error creating sale: ${error}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fileUrl = await uploadToIPFS(image);
    await createNFT(name, price, fileUrl, description, navigate);

    /*
    if (validateForm()) {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("royalties", royalties);
      formData.append("image", image);
      formData.append("traits", JSON.stringify(traits));
      formData.append("walletAddress", user.walletAddress);
      formData.append("username", user.username);

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/nft/`, {
        method: "POST",
        headers: {
          "x-auth-token": user.jwtToken,
        },
        body: formData,
      });

      const data = await res.json();
      setIsSubmitting(false);

      if (data.error) {
        setErrors({ message: data.message });
        return;
      }

      navigate("/seller/nfts");
    }
    */

    setIsSubmitting(false);
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.JsonRpcProvider();
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItems();

      console.log(data);

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            console.log("tokenURI");
            const tokenURI = await contract.tokenURI(tokenId);
            console.log(tokenURI);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            console.log("NFT DATA");
            console.log({
              price,
              tokenId: tokenId,
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            });

            return {
              price,
              tokenId: tokenId,
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

  // const [nfts, setNfts] = useState([]);

  // useEffect(() => {
  //   fetchNFTs().then((nfts) => {
  //     setNfts(nfts);
  //   });

  //   console.log(nfts);
  // }, []);

  return (
    <div className="container mx-auto my-10 mt-0 rounded-xl p-4 bg-white shadow-lg shadow-gray-200">
      <div className="py-7 pt-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
          Add new NFT
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="order-2 md:order-1 w-full">
          <div className="mb-14">
            <div className="font-bold text-md">Upload an item</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose, but each one takes.
            </p>
            <div className="w-full mt-6 border-2 rounded-xl border-dashed border-gray-300">
              <input
                type="file"
                className="hidden"
                accept=".jpg, .jpeg, .png, .gif, .svg, .mp4"
                name="image"
                id="image"
                onChange={handleImageChange}
              />
              <label
                for="image"
                className={`cursor-pointer overflow-hidden hover:opacity-80 w-full h-full flex items-center flex-col justify-center gap-0 group relative ${
                  !preview && "px-10 py-6"
                }`}
              >
                {preview && (
                  <div className="w-full h-full">
                    {isVideoFile ? (
                      <video
                        controls
                        width="100%"
                        height="100%"
                        className="rounded-xl"
                      >
                        <source src={preview} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={preview}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                  </div>
                )}

                {!preview && (
                  <div className="text-center flex items-center justify-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-28 h-28 stroke-gray-300 stroke-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <div className="font-extrabold text-md mt-4">
                      Choose an item to upload
                    </div>
                    <p className="text-sm text-gray-500">Max size: 50MB</p>
                    <p className="text-sm text-gray-500">
                      JPG, PNG, GIF, SVG, MP4
                    </p>
                  </div>
                )}

                {preview && (
                  <div className="absolute top-0 right-0 w-full h-full items-center justify-center bg-black rounded-xl bg-opacity-80 text-white text-sm hidden group-hover:flex">
                    <span className="bg-white text-black p-3 rounded-xl">
                      Change File
                    </span>
                  </div>
                )}
              </label>
            </div>

            {errors.image && (
              <div className="text-red-500 text-sm mt-2">{errors.image}</div>
            )}
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Item Details</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose, but each one takes.
            </p>
            <div className="mt-6">
              <div className="mb-6">
                <label className="block font-semibold text-sm text-gray-800 mb-2">
                  Name your item
                </label>
                <input
                  type="text"
                  placeholder="e.g. Brown Grizzly Bear Smile"
                  className="w-full rounded-xl border-gray-200 border p-4 outline-none text-sm placeholder:text-gray-400 placeholder:font-medium font-semibold px-5 focus:ring-2 focus:ring-nft-primary-light bg-gray-100 hover:opacity-80 focus:bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                {errors.name && (
                  <div className="text-red-500 text-sm mt-2">{errors.name}</div>
                )}
              </div>
              <div className="mb-6">
                <label className="block font-semibold text-sm text-gray-800 mb-2">
                  Enter short description
                </label>
                <textarea
                  type="text"
                  className="w-full rounded-xl border-gray-200 border p-4 outline-none text-sm placeholder:text-gray-400 placeholder:font-medium font-semibold px-5 focus:ring-2 focus:ring-nft-primary-light bg-gray-100 hover:opacity-80 focus:bg-white h-40 resize-none"
                  placeholder="e.g. Description about the NFT"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                {errors.description && (
                  <div className="text-red-500 text-sm mt-2">
                    {errors.description}
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label className="block font-bold text-md mb-2">Traits</label>
                <p className="text-sm text-gray-500">
                  Traits describe attributes of your item. They appear as
                  filters inside your collection page and are also listed out
                  inside your item page.
                </p>

                <button
                  className="flex justify-between items-center mt-4 font-semibold gap-3 text-gray-800 text-base mb-10 hover:opacity-80"
                  onClick={() => setTraitModalOpen(true)}
                >
                  <span>
                    <PlusIcon className="w-5 h-5" />
                  </span>
                  <span>Add trait</span>
                </button>

                {errors.traits && (
                  <div className="text-red-500 text-sm mt-2">
                    {errors.traits}
                  </div>
                )}

                {traits.map((trait, index) => (
                  <div className="justify-between flex items-center bg-gray-50 mb-2 rounded-xl p-4 py-3">
                    <div className="flex gap-1 font-semibold">
                      <span>{trait.traitType}</span>
                      <span>:</span>
                      <span>{trait.traitName}</span>
                    </div>
                    <button
                      className="text-gray-500 hover:text-gray-800"
                      onClick={() => DeleteTrait(index)}
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                ))}

                <div
                  className={`fixed top-0 right-0 justify-center z-50 w-full h-full bg-black bg-opacity-70 ${
                    traitModalOpen ? "flex" : "hidden"
                  }`}
                >
                  <div className="w-1/3 bg-white p-4 rounded-xl shadow-xl h-fit mt-16 relative">
                    <h2 className="block font-bold text-xl text-gray-800 mb-5">
                      Add trait
                    </h2>
                    <button
                      className="text-gray-500 hover:text-gray-700 absolute right-2 top-2"
                      onClick={() => setTraitModalOpen(false)}
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                    <div className="flex justify-between items-center gap-3">
                      <div>
                        <label className="block font-semibold text-sm text-gray-800 mb-2">
                          Type
                        </label>
                        <input
                          type="text"
                          placeholder="Ex. Size"
                          className="w-full rounded-xl border-gray-200 border p-3 outline-none focus:ring-2 focus:ring-nft-primary-light font-normal"
                          value={traitType}
                          onChange={(e) => settraitType(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-sm text-gray-800 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Ex. Large"
                          className="w-full rounded-xl border-gray-200 border p-3 outline-none focus:ring-2 focus:ring-nft-primary-light font-normal"
                          value={traitName}
                          onChange={(e) => settraitName(e.target.value)}
                        />
                      </div>
                    </div>

                    {traitErrors.traitName && (
                      <div className="text-red-500 text-sm mt-2">
                        {traitErrors.traitName}
                      </div>
                    )}

                    {traitErrors.traitType && (
                      <div className="text-red-500 text-sm mt-2">
                        {traitErrors.traitType}
                      </div>
                    )}

                    <button
                      className="w-full bg-nft-primary-light text-white p-3 mt-7 rounded-xl hover:opacity-80"
                      onClick={AddTrait}
                    >
                      Add
                    </button>
                  </div>
                </div>
                {/*  */}
              </div>

              <div className="mb-6 flex gap-6">
                <div className="w-full">
                  <label className="block font-semibold text-sm text-gray-800 mb-2">
                    Set item price or starting bid
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-gray-200 border p-4 outline-none text-sm placeholder:text-gray-400 placeholder:font-medium font-semibold px-5 focus:ring-2 focus:ring-nft-primary-light bg-gray-100 hover:opacity-80 focus:bg-white"
                    placeholder="e.g. 230"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  {errors.price && (
                    <div className="text-red-500 text-sm mt-2">
                      {errors.price}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <label className="block font-semibold text-sm text-gray-800 mb-2">
                    Set royalities amount, %
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-gray-200 border p-4 outline-none text-sm placeholder:text-gray-400 placeholder:font-medium font-semibold px-5 focus:ring-2 focus:ring-nft-primary-light bg-gray-100 hover:opacity-80 focus:bg-white"
                    placeholder="e.g. 12"
                    value={royalties}
                    onChange={(e) => setRoyalties(e.target.value)}
                  />

                  {errors.royalties && (
                    <div className="text-red-500 text-sm mt-2">
                      {errors.royalties}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Choose collection</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose.
            </p>
            <div className="flex gap-3 mt-6 flex-row">
              <div className="flex gap-2 w-full flex-row py-4 border text-gray-800 rounded-xl p-1 px-4 text-md font-bold items-center hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-14 h-14 bg-gray-200 p-3 rounded-xl fill-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>

                <button className="text-left text-sm">
                  Create new collection
                  <span className="block text-xs text-gray-600 font-semibold">
                    Type to create
                  </span>
                </button>
              </div>
              <div className="flex gap-2 w-full flex-row py-4 border text-gray-800 rounded-xl p-1 px-4 text-md font-bold items-center hover:bg-gray-100">
                <img
                  src={require("../../../nftmarketplace/assets/nft32.PNG")}
                  alt=""
                  className="w-14 h-14 rounded-xl"
                />

                <button className="text-left text-sm">
                  Battle for Digital
                  <span className="block text-xs text-gray-600 font-semibold">
                    17 items
                  </span>
                </button>
              </div>
            </div>

            <span className="text-xs text-gray-600">
              * Once your item is minted you will not be able to change any of
              its information.
            </span>
          </div>

          <div className="mb-0">
            <div>
              {errors.message && (
                <div className="text-red-500 text-sm mb-2">
                  {errors.message}
                </div>
              )}

              <div className="flex justify-between items-center flex-row">
                <div className="text-center w-full">
                  <button
                    className="rounded-xl px-6 py-4 bg-nft-primary-light text-white font-semibold inline-block relative cursor-pointer hover:opacity-80 transition-colors shadow-lg shadow-purple-200 max-w-sm w-full"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 mx-auto rounded-full border-t-white border-nft-primary-dark border-2 animate-spin"></div>
                    ) : (
                      <>
                        <span>Create NFT</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full">
          <NFTPreview
            name={name}
            price={price}
            royalties={royalties}
            preview={preview}
            traits={traits}
            isVideoFile={isVideoFile}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerNewNFT;
