import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-1/4 flex flex-col gap-5 p-3">
      <Link
        to={`/admin`}
        className="block p-4 border-b border-gray-100 bg-gray-100"
      >
        Home
      </Link>
      <Link
        to={`/admin-users`}
        className="block p-4 border-b border-gray-100 bg-gray-100"
      >
        Users
      </Link>
      <Link
        to={`/admin-gigs`}
        className="block p-4 border-b border-gray-100 bg-gray-100"
      >
        Gigs
      </Link>
      {/* <Link
        to={`/admin-tickets`}
        className="block p-4 border-b border-gray-100 bg-gray-100"
      >
        Tickets
      </Link> */}
    </aside>
  );
};

export default AdminSidebar;
