import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
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

      <div className="bg-web-secondary-light">
        <div className="container mx-auto py-28">
          <h3 className="text-3xl font-extrabold text-center mb-2">Register</h3>
          <p className="text-center text-sm">
            Give your visitor a smooth online experience with a solid UX design
          </p>

          <div>
            <div className="w-1/2 mx-auto bg-white mt-10 rounded-xl p-5 px-14 py-10">
              <Tabs
                className="w-full text-center"
                selectedTabClassName="active-form-look"
              >
                <TabList className="border-gray-200 w-full flex justify-center gap-3">
                  <Tab className="list-none font-semibold  border p-4 border-white cursor-pointer px-8">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <span>Freelancer</span>
                    </div>
                  </Tab>
                  <Tab className="list-none font-semibold  border p-4 border-white cursor-pointer px-8">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>

                      <span>Employer</span>
                    </div>
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="mt-10 text-left">
                    <div className="mb-6">
                      <label className="block text-md font-semibold mb-2">
                        Email<span className="text-red-500 ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        className={`border ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } rounded w-full p-4 outline-none`}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block text-md font-semibold mb-2">
                        Password<span className="text-red-500 ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        className={`border ${
                          errors.password ? "border-red-500" : "border-gray-200"
                        } rounded w-full p-4 outline-none`}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-md font-semibold mb-2">
                        Confirm Password
                        <span className="text-red-500 ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        className={`border ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-gray-200"
                        } rounded w-full p-4 outline-none`}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block font-semibold text-sm mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span>
                          You accept our Terms and Conditions and Privacy Policy
                        </span>
                      </label>
                    </div>
                    <div className="mt-10">
                      <button
                        className="bg-web-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm w-full"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                      >
                        <span>
                          {" "}
                          {isSubmitting ? "Submitting..." : "Register Now"}
                        </span>
                        {/* <span>Register Now</span> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 inline-block stroke-1 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="mt-10 text-left">
                    <div className="mb-6">
                      <label className="block text-md font-semibold mb-2">
                        Email<span className="text-red-500 ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        className="border border-gray-200 rounded w-full p-4 outline-none"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-md font-semibold mb-2">
                        Password<span className="text-red-500 ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        className="border border-gray-200 rounded w-full p-4 outline-none"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-md font-semibold mb-2">
                        Confirm Password
                        <span className="text-red-500 ml-2">*</span>
                      </label>
                      <input
                        type="email"
                        className="border border-gray-200 rounded w-full p-4 outline-none"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block font-semibold text-sm mb-2">
                        <input type="checkbox" className="mr-2" />
                        <span>
                          You accept our Terms and Conditions and Privacy Policy
                        </span>
                      </label>
                    </div>
                    <div className="mt-10">
                      <button className="bg-web-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm w-full">
                        <span>Register Now</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 inline-block stroke-1 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Register;
