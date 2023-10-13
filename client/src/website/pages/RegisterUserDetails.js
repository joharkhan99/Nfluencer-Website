import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

function RegisterUserDetails() {
  let { verificationLink } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/verifyemail/${verificationLink}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [verificationLink]);

  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      <div className="authbg">
        <div className="container mx-auto py-28">
          <div
            className={`md:w-3/5 w-full mx-auto bg-white rounded-xl p-7 shadow-lg text-gray-800`}
          >
            <div className="border-b mb-5 pb-5 border-gray-100">
              <h3 className="text-2xl font-extrabold text-center mb-2">
                Email Verified Successfully
              </h3>
              <p className="text-center text-sm">
                Thank you for verifiying your email address. Please fill out the
                form below to complete your registration.
              </p>
            </div>

            <form className="text-left">
              <div className="flex justify-center mb-8 items-center gap-6 md:flex-row flex-col">
                <div>
                  {/* Avatar/DP */}
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected Avatar"
                      className="rounded-full w-40 h-40 mx-auto block bg-gray-100 object-cover"
                    />
                  ) : (
                    <div className="rounded-full w-40 h-40 mx-auto block bg-gray-100"></div>
                  )}
                  <div className="mt-3">
                    <label
                      for="avatar"
                      className="rounded-lg bg-gray-800 hover:opacity-80 p-2 outline-none cursor-pointer text-white text-sm"
                    >
                      Choose profile picture
                    </label>
                    <input
                      name="avatar"
                      id="avatar"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center gap-6 md:flex-row flex-col">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-2">
                    Full Name<span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-2">
                    Username<span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Choose a username"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-6 md:flex-row flex-col my-5">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-2">
                    Languages<span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Languages you speak/understand"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-2">
                    Location<span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Enter your city or country"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-6 md:flex-row flex-col my-5">
                <div className="w-full">
                  <label className="block text-sm font-semibold mb-2">
                    Bio<span className="text-red-500 ml-2">*</span>
                  </label>
                  <textarea
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none resize-none h-40"
                    placeholder="Write a short bio about yourself"
                  ></textarea>
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-10">
                <button
                  className="bg-nft-primary-light h-full py-5 px-10 rounded-xl font-semibold text-white hover:opacity-80 transition-colors text-sm w-full"
                  type="submit"
                >
                  <span>Continue</span>
                  <ArrowSmallRightIcon className="inline-block w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegisterUserDetails;
