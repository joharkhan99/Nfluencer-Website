import React from "react";
import Header from "./components/Header";
import AdminSidebar from "./components/AdminSidebar";

const AdminHome = () => {
  return (
    <>
      <Header />

      <div className="flex justify-between">
        <AdminSidebar />

        <div className="w-3/4 p-5">
          <h1>
            <span className="font-semibold text-xl">Admin</span> Dashboard
          </h1>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-purple-300 p-6 rounded-xl text-center">
              <h2 className="text-xl font-semibold">Total Users</h2>
              <p>100</p>
            </div>

            <div className="bg-purple-300 p-6 rounded-xl text-center">
              <h2 className="text-xl font-semibold">Total Gigs</h2>
              <p>100</p>
            </div>

            <div className="bg-purple-300 p-6 rounded-xl text-center">
              <h2 className="text-xl font-semibold">Tickets</h2>
              <p>100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
