import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyDisputes = () => {
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    window.ethereum.on("accountsChanged", async function (accounts) {
      window.location.reload();
    });
  }, []);

  const formatDate = (date) => {
    const originalDate = new Date(date);
    const options = {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const [buyerOrders, setBuyerOrders] = useState({});
  const getAllBuyerOrders = async (seller) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/gig/getAllBuyerOrders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": seller.jwtToken,
        },
        body: JSON.stringify({
          userId: seller._id,
        }),
      }
    );
    const data = await res.json();
    if (data.error) {
      return;
    }

    setBuyerOrders(data);
    console.log(data);
  };

  useEffect(() => {
    if (user) {
      getAllBuyerOrders(user);
    }
  }, [user]);

  return (
    <div className="w-full">
      <div>
        <h2 className="font-extrabold tracking-tight text-3xl text-gray-800 block mb-10">
          My Disputes
        </h2>

        <div>
          <div className="bg-white rounded-xl shadow-lg shadow-gray-200">
            <div className="p-4">
              <div className="relative w-full h-full rounded-xl shadow-lg shadow-gray-50">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs text-gray-500 uppercase border-b">
                    <tr className="uppercase">
                      <th scope="col" className="p-3">
                        Seller
                      </th>
                      <th scope="col" className="p-3">
                        Gig
                      </th>
                      <th scope="col" className="p-3">
                        NFT
                      </th>
                      <th scope="col" className="p-3">
                        Due On
                      </th>
                      <th scope="col" className="p-3">
                        Price
                      </th>
                      <th scope="col" className="p-3">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-3 py-5 text-gray-800"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDisputes;
