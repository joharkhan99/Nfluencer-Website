import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./nftmarketplace/Home";
import "./index.css";
import Explore from "./nftmarketplace/Explore";
import NFTDetail from "./nftmarketplace/NFTDetail";
import NewNFT from "./nftmarketplace/NewNFT";
import LandingPage from "./website/LandingPage";
import Register from "./website/Register";
import Services from "./website/Services";
import GigDetails from "./website/GigDetails";
import Login from "./website/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/marketplace" Component={Home} />
      <Route path="/explore" Component={Explore} />
      <Route path="/nftdetails" Component={NFTDetail} />
      <Route path="/create" Component={NewNFT} />
      <Route path="/signup" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/services" Component={Services} />
      <Route path="/gigdetails" Component={GigDetails} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
