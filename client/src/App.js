import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./nftmarketplace/pages/Home";
import Explore from "./nftmarketplace/pages/Explore";
import NFTDetail from "./nftmarketplace/pages/NFTDetail";
import NewNFT from "./nftmarketplace/pages/NewNFT";
import LandingPage from "./website/pages/LandingPage";
import Register from "./website/pages/Register";
import Services from "./website/pages/Services";
import GigDetails from "./website/pages/GigDetails";
import Login from "./website/pages/Login";
import Stats from "./nftmarketplace/pages/Stats";
import { SellerHomePage } from "./dashboard/seller/pages/SellerHomePage";
import SellerDashboardLayout from "./dashboard/seller/layout/SellerDashboardLayout";
import { SellerAbout } from "./dashboard/seller/pages/SellerAbout";
import { SellerGigs } from "./dashboard/seller/pages/SellerGigs";
import SellerCreateGig from "./dashboard/seller/pages/SellerCreateGig";
import SellerNewNFT from "./dashboard/seller/pages/SellerNewNFT";
import RegisterUserDetails from "./website/pages/RegisterUserDetails";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/UserSlice";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  const getUser = async (jwtAuthId) => {
    await fetch("http://localhost:8080/api/user/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jwtToken: jwtAuthId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.error) {
        //   console.log(data.message);
        // } else {
        //   return data.user;
        // }
      });
  };

  const fetchUser = async () => {
    if (Cookies.get("authId") === undefined) {
      localStorage.removeItem("user");
      dispatch(setUser(null));
      return;
    }

    const jwtAuthId = Cookies.get("authId");
    if (localStorage.getItem("user") === null) {
      const user = getUser(jwtAuthId);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(setUser(user));
      return;
    } else {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
  };

  useEffect(() => {
    fetchUser();
    // console.log(Cookies.get("authId"));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/marketplace" Component={Home} />
        <Route path="/stats" Component={Stats} />
        <Route path="/explore" Component={Explore} />
        <Route path="/nftdetails" Component={NFTDetail} />
        <Route path="/create" Component={NewNFT} />
        <Route path="/signup" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/services" Component={Services} />
        <Route path="/gigdetails" Component={GigDetails} />

        <Route
          path="/user-details/:verificationToken"
          Component={RegisterUserDetails}
        />

        {/* Dashboard Section */}
        <Route
          path="seller"
          element={
            <ProtectedRoute>
              <SellerDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/seller" Component={SellerHomePage} />
          <Route path="about" Component={SellerAbout} />
          <Route path="gigs" Component={SellerGigs} />
          <Route path="newgig" Component={SellerCreateGig} />
          <Route path="newnft" Component={SellerNewNFT} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
