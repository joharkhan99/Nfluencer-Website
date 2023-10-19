import React from "react";
import ChatWindow from "../components/chat/ChatWindow";
import ChatUsersList from "../components/chat/ChatUsersList";
import ChatUserInfo from "../components/chat/ChatUserInfo";

const SellerInbox = () => {
  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center gap-1.5 h-full">
        <div className="w-2/6 h-full">
          <ChatUsersList />
        </div>

        <div className="w-3/6 h-full relative">
          <ChatWindow />
        </div>

        <div className="w-1/6 h-full">
          <ChatUserInfo />
        </div>
      </div>
    </div>
  );
};

export default SellerInbox;
