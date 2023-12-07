import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AdminSidebar from "./components/AdminSidebar";

const AdminGigs = () => {
  const [Gigs, setGigs] = useState([]);
  const fetchAllGigs = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/admin-gigs`
    );
    const data = await res.json();
    console.log(data);
    setGigs(data);
  };

  useEffect(() => {
    fetchAllGigs();
  }, []);

  const deleteGig = async (gig) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${gig.title.substring(0, 10)}...?`
      )
    ) {
      console.log("Deleting gig");
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/user/admin-delete-gig`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gigId: gig._id }),
        }
      );

      const data = await res.json();
      if (data.error) {
        return console.log(data.error);
      }

      console.log(data);
      fetchAllGigs();
      window.location.reload();
    } else {
      console.log("Not deleting user");
    }
  };

  return (
    <>
      <Header />

      <div className="flex justify-between">
        <AdminSidebar />

        <div className="w-3/4 p-5">
          <h1>
            <span className="font-semibold text-xl">Admin</span> Dashboard
          </h1>

          <div className="mt-5">
            <h2 className="font-semibold text-lg">Gigs</h2>

            <div className="mt-5 overflow-hidden">
              <div className="overflow-auto">
                <table className="table-auto w-full overflow-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">User</th>
                      <th className="px-4 py-2">Category</th>
                      <th className="px-4 py-2">Created Date</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Gigs.map((gig) => (
                      <tr key={gig._id}>
                        <td className="border px-4 py-2">{gig.title}</td>
                        <td className="border px-4 py-2">
                          <img
                            src={gig.images[0]}
                            className="w-10 h-10"
                            alt=""
                          />
                        </td>
                        <td className="border px-4 py-2">{gig.user.name}</td>
                        <td className="border px-4 py-2">{gig.category}</td>
                        <td className="border px-4 py-2">{gig.createdAt}</td>
                        <td className="border px-4 py-2">
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => deleteGig(gig)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminGigs;
