import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
      <Route path="seller" Component={SellerDashboardLayout}>
        <Route path="/seller" Component={SellerHomePage} />
        <Route path="about" Component={SellerAbout} />
        <Route path="gigs" Component={SellerGigs} />
        <Route path="newgig" Component={SellerCreateGig} />
        <Route path="newnft" Component={SellerNewNFT} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
