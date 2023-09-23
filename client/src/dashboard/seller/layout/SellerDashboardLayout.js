import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function SellerDashboardLayout({ children }) {
  return (
    <div className="flex h-screen false">
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">
        <Header />

        <main className="h-full overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SellerDashboardLayout;
