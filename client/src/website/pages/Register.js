import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Perform AJAX request to the backend using fetch or axios
      // Replace the URL and data with your actual endpoint and payload
      fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Handle the response from the backend
          alert(data.message);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <div className="bg-transparent hombg">
        <Header transparent={true} />
      </div>

      <div className="authbg">
        <div className="container mx-auto py-28">
          <div>
            <div className="md:w-1/2 w-full mx-auto bg-white rounded-xl p-5 px-14 py-10 shadow-lg text-gray-800">
              <h3 className="text-3xl font-extrabold text-center mb-2">
                Register
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
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Confirm Password
                    <span className="text-red-500 ml-2">*</span>
                  </label>
                  <input
                    type="email"
                    className="rounded-xl bg-gray-50 focus:bg-white border-2 border-gray-200 hover:bg-gray-100 focus:border-nft-primary-light w-full p-4 outline-none"
                    placeholder="Please confirm your password"
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
                    <span>Register Now</span>
                    <ArrowSmallRightIcon className="inline-block w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Register;
