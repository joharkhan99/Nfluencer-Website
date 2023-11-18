import React from "react";

const TopCreators = () => {
  const [topCreators, setTopCreators] = React.useState([
    {
      id: 1,
      name: "Shahida Masood",
      totalItems: 6400,
      totalUSD: 5500,
      avatar: require("../../../../website/assets/man.jpg"),
    },
    {
      id: 2,
      name: "Golbert Andi",
      totalItems: 10300,
      totalUSD: 500000,
      avatar: require("../../../../website/assets/herobg.jpg"),
    },
    {
      id: 3,
      name: "Ali Iqbal",
      totalItems: 2300,
      totalUSD: 40000,
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1697794574~exp=1697795174~hmac=2095b5658ae44162bce7f2cf5b0742e3a7dedae48fddc40d5ed39256a08686e1",
    },
  ]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-800">
          Top Creators
        </h2>

        <button className="text-nft-primary-light font-medium text-sm block">
          View All
        </button>
      </div>

      <div className="rounded-xl p-0 bg-white">
        <div className="shadow-lg rounded-xl shadow-gray-200">
          {topCreators.map((creator) => (
            <div className="flex justify-between items-center text-sm p-2 text-gray-800 hover:bg-gray-100 cursor-pointer py-3">
              <div className="flex h-full gap-2">
                <div>
                  <img
                    src={creator.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between h-fulls">
                  <span className="font-semibold">{creator.name}</span>
                  <span className="text-gray-500 text-xs">
                    {creator.totalItems} Items
                  </span>
                </div>
              </div>
              <div className="h-full">
                <div className="flex flex-col justify-between h-full gap-1">
                  <span className="font-semibold">${creator.totalUSD}</span>
                  <span className="text-gray-500 text-xs">Total USD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
