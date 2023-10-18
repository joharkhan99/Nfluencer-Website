import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  PlusIcon,
  TrophyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SellerNewNFT = () => {
  const walletAddress = useSelector((state) => state.user.walletAddress);
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
    if (!walletAddress) {
      navigate("/seller");
      return;
    }
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("royalties", royalties);
      formData.append("image", image);
      formData.append("traits", JSON.stringify(traits));
      formData.append("walletAddress", walletAddress);
      formData.append("username", user.username);

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/nft/`, {
        method: "POST",
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
  };

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
            <div className="font-bold text-md">Choose blockchain</div>
            <p className="text-sm text-gray-500">
              Connect with one of our available wallet providers or create a new
              one.
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              <div>
                <input
                  type="radio"
                  name="option"
                  id="1"
                  value="1"
                  className="peer hidden"
                  checked
                />
                <label
                  for="1"
                  className="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/metamask.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>MetaMask</span>
                </label>
              </div>
              {/* 
              <div>
                <input
                  type="radio"
                  name="option"
                  id="2"
                  value="2"
                  className="peer hidden"
                />
                <label
                  for="2"
                  className="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/coinbase.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>Coinbase</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="3"
                  value="3"
                  className="peer hidden"
                />
                <label
                  for="3"
                  className="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/torus.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>Torus</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="option"
                  id="4"
                  value="4"
                  className="peer hidden"
                />
                <label
                  for="4"
                  className="cursor-pointer select-none rounded-full text-center peer-checked:bg-purple-100 peer-checked:text-nft-primary-light peer-checked:border-nft-primary-light border font-semibold text-sm border-gray-200 text-gray-600 flex gap-2 items-center p-3 px-6 transition-colors duration-300"
                >
                  <span>
                    <img
                      src={require("../../../nftmarketplace/assets/fort.png")}
                      alt="s"
                      className="w-5 h-5"
                    />
                  </span>
                  <span>Fortmatic</span>
                </label>
              </div>

              <div className="flex gap-2 flex-row border border-gray-200 text-gray-600 rounded-full p-3 px-12 text-sm font-semibold items-center hover:bg-gray-100">
                <button>Show more options</button>
              </div> */}
            </div>
          </div>

          <div className="mb-14">
            <div className="font-bold text-md">Upload an item</div>
            <p className="text-sm text-gray-500">
              But each one takes a different approach and makes different
              tradeoffs.
            </p>
            <div className="w-full mt-6 border-2 rounded-xl border-dashed border-gray-300">
              <input
                type="file"
                className="hidden"
                accept="image/*"
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
                  <img
                    src={preview}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-xl"
                  />
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
                      Drag your item to upload
                    </div>
                    <p className="text-sm text-gray-500">
                      PNG, GIF, WebP, MP4 or MP3. Maximum file size 100mb.
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
                <label className="block font-semibold text-sm text-gray-800 mb-2">
                  Traits
                </label>
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
          </div>

          <div className="mb-0">
            <div className="font-bold text-md">Notifications</div>
            <p className="text-sm text-gray-500">
              They all serve the same purpose.
            </p>
            <div className="mt-6">
              <div className="border-b flex flex-row justify-between items-center py-3 pb-5 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Product updates
                  </div>
                  <div className="font-bold mt-1">
                    Receive messages from our platform
                  </div>
                </div>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
                  </label>
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center py-5 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Reminders
                  </div>
                  <div className="font-bold mt-1">
                    Receive booking reminders, pricing notices
                  </div>
                </div>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
                  </label>
                </div>
              </div>
              <div className="border-b flex flex-row justify-between items-center py-5 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Account support
                  </div>
                  <div className="font-bold mt-1">
                    Receive messages about your account, your trips, your legal
                    alerts
                  </div>
                </div>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-nft-primary-light"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-24">
              {errors.message && (
                <div className="text-red-500 text-sm mt-2">
                  {errors.message}
                </div>
              )}

              <div className="flex justify-between items-center  flex-row">
                <div className="text-center w-full">
                  <button
                    className="bg-nft-primary-light rounded-full px-6 py-4 font-semibold text-sm text-white w-4/5 hover:shadow-lg hover:shadow-purple-100"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 mx-auto rounded-full border-t border-r animate-spin border-white"></div>
                    ) : (
                      <>
                        <span>Publish NFT</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-center w-full">
                  <button className="bg-nft-primary-transparent rounded-full px-6 py-4 font-semibold text-sm text-nft-primary-light w-4/5 hover:bg-nft-primary-light hover:text-white duration-300 transition-colors hover:shadow-lg hover:shadow-purple-100">
                    <span>Discard all</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full">
          <div className="flex flex-wrap justify-center gap-6 sticky top-0">
            <div className="decoration-transparent hover:bg-purple-50  rounded-2xl shadow-sm shadow-gray-100 p-3 px-4 border transition-colors duration-300">
              <div className="w-80">
                <div className="font-extrabold text-lg pb-3 mb-0">
                  NFT Preview
                </div>

                <div className="flex justify-between items-center mb-5">
                  <div className="flex -space-x-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../../../nftmarketplace/assets/user1.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../../../nftmarketplace/assets/user2.jpeg")}
                      alt="User Imageas"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 object-cover border-white"
                      src={require("../../../nftmarketplace/assets/user3.webp")}
                      alt="User Imageas"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="font-bold text-xl hover:bg-gray-200 rounded-full w-7 h-7">
                      <span>···</span>
                    </button>
                  </div>
                </div>

                <div
                  className="h-auto rounded-xl bg-gray-100 overflow-hidden"
                  style={{ height: "300px" }}
                >
                  {preview && (
                    <img
                      src={preview}
                      alt="sd"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="py-2 pt-3">
                  <h3 className="text-lg font-bold tracking-tight text-gray-800">
                    {name}
                  </h3>

                  <div className="flex items-center justify-between my-2">
                    <div>
                      <div className="flex items-center text-gray-500 text-sm gap-2">
                        <img
                          src={require("../../../nftmarketplace/assets/eth.png")}
                          alt="sd"
                          className="h-5 w-5 object-contain"
                        />
                        <span>
                          from
                          <span className="font-bold text-sm text-gray-800 ml-2">
                            {price} ETH
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>
                        <TrophyIcon className="w-5 h-5 text-yellow-500" />
                      </span>
                      <span className="textsm font-semibold">{royalties}%</span>
                    </div>
                  </div>

                  {traits.map((t) => (
                    <div className="p-1 px-2 border-gray-200 border inline-block rounded-full mr-1 mb-1 text-xs font-medium">
                      <div className="flex gap-1">
                        <span>{t.traitType}</span>
                        <span>:</span>
                        <span>{t.traitName}</span>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between items-center mt-5">
                    <div>
                      <button
                        className="bg-nft-primary-light text-white p-3 px-7 rounded-full text-sm"
                        disabled
                      >
                        Buy Now
                      </button>
                    </div>
                    <button className="flex items-center gap-1">
                      <HeartIcon className="w-4 h-4" />
                      <span className="font-bold text-sm">00</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerNewNFT;
