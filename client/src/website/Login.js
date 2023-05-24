import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Perform AJAX request to the backend using fetch or axios
      // Replace the URL and data with your actual endpoint and payload
      fetch("http://localhost:8080/login", {
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
          if (data.message === "Success") {
            Cookies.set("token", data.token, { expires: 7 });
            console.log(Cookies.get("token"));
            setEmail("");
            setPassword("");
          }
          console.log(data);
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
          <h3 className="text-3xl font-extrabold text-center mb-2">Login</h3>
          <p className="text-center text-sm">
            Give your visitor a smooth online experience with a solid UX design
          </p>

          <div>
            <div className="w-1/2 mx-auto bg-white mt-10 rounded-xl p-5 px-14 py-10">
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
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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
                    value={password}
                  />
                </div>

                <div className="mt-10">
                  <button
                    className="bg-web-primary-light h-full py-5 px-10 rounded-md font-semibold text-white hover:bg-web-primary-dark transition-colors text-sm w-full"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    <span> {isSubmitting ? "Submitting..." : "Login"}</span>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Login;
