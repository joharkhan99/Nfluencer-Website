import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const ChatUserInfo = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full overflow-y-auto text-sm text-gray-800 p-3">
      <div className="flex items-center w-full flex-col gap-1">
        <img
          src={require("../../../../website/assets/man.jpg")}
          alt=""
          className="w-20 h-20 mx-auto rounded-full object-cover"
        />
        <span className="font-semibold">Syeda Afifa</span>
      </div>

      <div className="flex justify-between items-center border-b border-t border-gray-100 py-2 my-4">
        <div className="font-semibold">Orders with you</div>
        <a href="d" className="text-gray-500 underline">
          (23)
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-semibold flex gap-1">
          <span>About</span>
          <a href="d" className="underline">
            carozIntel
          </a>
        </div>

        <div className="justify-between flex">
          <span className="text-gray-500">From</span>
          <span className="font-semibold">United States</span>
        </div>

        <div className="justify-between flex">
          <span className="text-gray-500">Joined On</span>
          <span className="font-semibold">Jul 2022</span>
        </div>

        <div className="justify-between flex">
          <span className="text-gray-500">English</span>
          <span className="font-semibold">Basic</span>
        </div>

        <div className="justify-between flex">
          <span className="text-gray-500">Rating</span>
          <div className="flex gap-0.5 items-center">
            <StarIcon className="w-4 h-4 fill-gray-500 stroke-gray-500" />
            <span className="font-semibold">5</span>
            <a href="d" className="underline text-gray-500">
              (25)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUserInfo;
