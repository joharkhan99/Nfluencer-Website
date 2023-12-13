import React, { useState } from "react";
import Header from "./components/Header";
import AdminSidebar from "./components/AdminSidebar";

const AdminHome = () => {
  const [adminStats, setAdminStats] = useState({});

  const getAdminStats = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/getAdminStats`
    );
    const data = await res.json();
    console.log(data);
    if (data.error) {
      return;
    }

    setAdminStats(data.stats);
  };

  useState(() => {
    getAdminStats();
  }, []);

  return (
    <>
      <Header />

      <div className="flex">
        <AdminSidebar />

        <div className="w-5/6 p-5 bg-gray-100">
          <div className="flex justify-center items-center gap-5 flex-wrap">
            <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Total Users
              </h2>
              <p className="text-gray-700 text-3xl font-bold">
                {adminStats.users}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Total Gigs
              </h2>
              <p className="text-gray-700 text-3xl font-bold">
                {adminStats.gigs}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Total Disputes
              </h2>
              <p className="text-gray-700 text-3xl font-bold">
                {adminStats.disputes}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Total Invoices
              </h2>
              <p className="text-gray-700 text-3xl font-bold">
                {adminStats.invoices}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-5">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">
                Total Orders
              </h2>
              <p className="text-gray-700 text-3xl font-bold">
                {adminStats.orders}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
