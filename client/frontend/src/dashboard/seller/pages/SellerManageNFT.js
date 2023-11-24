import React, { useEffect } from "react";
import herobg from "../assets/img/vr-glasses2.PNG";
import BalanceChart from "../components/charts/BalanceChart";
import { Link } from "react-router-dom";
import TrendingNFTs from "../components/nft/TrendingNFTs";
import TopCreators from "../components/nft/TopCreators";
import YourNFTs from "../components/nft/YourNFTs";
import CryptoWalletsConnect from "../components/nft/CryptoWalletsConnect";
import { useSelector } from "react-redux";

const SellerManageNFT = () => {
  const user = useSelector((state) => state.user.user);
  const isWalletConnected = useSelector(
    (state) => state.user.isWalletConnected
  );

  useEffect(() => {
    window.ethereum.on("accountsChanged", async function (accounts) {
      window.location.reload();
    });
  }, []);

  return (
    <div className="w-full">
      {isWalletConnected ? (
        <div>
          <div className="lg:flex gap-4">
            <div
              className="lg:w-3/4 p-0 bg-nft-primary-light rounded-xl relative bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${herobg})`,
              }}
            >
              <div className="w-1/2 text-white relative py-12 px-10">
                <h2 className="text-3xl mb-2 font-medium">
                  Discover, Collect, and sell NFTs
                </h2>
                <div className="flex gap-3 items-center mt-10">
                  <a
                    href="d"
                    className="block bg-white text-gray-800 font-semibold rounded-full p-4 px-7 text-sm hover:opacity-80"
                  >
                    Discover now
                  </a>
                  <Link
                    to="/seller/newnft"
                    className="block border-transparent border text-white bg-white font-semibold rounded-full p-4 px-7 text-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 hover:opacity-80"
                  >
                    Create NFT
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="bg-white w-full h-full rounded-xl p-0 shadow-xl shadow-gray-200">
                <div className="flex flex-col justify-between h-full relative">
                  <div className="text-center pt-4 text-base font-light text-gray-400 absolute w-full">
                    Balance
                  </div>
                  <BalanceChart />
                  <div className="p-4 pt-0">
                    <button className="bg-purple-200 rounded-xl p-3 text-sm w-full text-nft-primary-dark font-semibold hover:bg-nft-primary-light hover:text-white transition-colors">
                      View Reports
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex gap-4 mt-10">
            <div className="lg:w-3/4 p-0 rounded-xl relative">
              <TrendingNFTs />
            </div>

            <div className="lg:w-1/4">
              <TopCreators />
            </div>
          </div>

          <YourNFTs user={user} />
        </div>
      ) : (
        <CryptoWalletsConnect user={user} />
      )}
    </div>
  );
};

export default SellerManageNFT;
