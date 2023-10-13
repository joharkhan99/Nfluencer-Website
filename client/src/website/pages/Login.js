import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      <div className="authbg">
        <div className="container mx-auto py-28">
          <div>
            <div className="md:w-2/5 w-full mx-auto bg-white rounded-xl p-7 shadow-lg text-gray-800">
              <h3 className="text-3xl font-extrabold text-center mb-2">
                Login
              </h3>
              <p className="text-center text-sm">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
              <form className="mt-10 text-left">
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Email<span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Please enter your email address"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Password<span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Please enter your password"
                  />
                </div>

                {/* <div className="mb-6">
                  <label className="block font-semibold text-sm mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span>
                      You accept our Terms and Conditions and Privacy Policy
                    </span>
                  </label>
                </div> */}
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

              <div class="flex items-center space-x-4 my-8">
                <hr class="flex-1 border-t border-gray-200" />
                <div class="text-sm font-medium uppercase">or</div>
                <hr class="flex-1 border-t border-gray-200" />
              </div>

              <button className="bg-gray-200 h-full py-4 px-10 rounded-xl font-semibold text-gray-700 hover:opacity-80 transition-colors text-sm w-full flex items-center justify-center gap-5">
                <span>
                  <img
                    src={require("../assets/google.png")}
                    alt=""
                    className="w-7 h-7"
                  />
                </span>
                <span>Sign In with Google</span>
              </button>
              <div className="flex gap-2 text-sm text-gray-400 justify-center mt-6">
                <span>Don't have an account?</span>
                <a href="s" className="text-nft-primary-light font-medium">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Login;
