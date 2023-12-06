import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const OrderChatWindow = ({ orderChatUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const chatContainerRef = useRef(null);

  const user = useSelector((state) => state.user.user);
  const selectedUser = orderChatUser;

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);
    setSocket(socket);
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    socket.on("user-disconnected", async (disconnectedUserId) => {
      console.log("User disconnected:", disconnectedUserId);
      fetchChatId(user._id, selectedUser._id)
        .then(async (data) => {
          setSelectedChatId(data);
          await fetchChatHistory(data);
        })
        .catch((error) => {
          console.error("Error fetching chat ID:", error);
        });
    });
  }, [orderChatUser, user]);

  const fetchChatHistory = async (chatId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/message/chat-history`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user.jwtToken,
          },
          body: JSON.stringify({
            sender: user._id,
            receiver: selectedUser._id,
            chatId,
          }),
        }
      );
      const data = await response.json();
      console.log("DIS", data.messages);
      if (data.error) {
        setMessages([]);
        return;
      }
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const [selectedChatId, setSelectedChatId] = useState(null);

  const fetchChatId = async (senderId, receiverId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/message/fetch-chat-id`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": user.jwtToken,
          },
          body: JSON.stringify({
            senderId,
            receiverId,
          }),
        }
      );

      const data = await response.json();
      return data.chatId;
    } catch (error) {
      console.error("Error fetching chat ID:", error);
      return null;
    }
  };

  useEffect(() => {
    if (user && selectedUser) {
      fetchChatId(user._id, selectedUser._id)
        .then(async (data) => {
          setSelectedChatId(data);
          await fetchChatHistory(data);
        })
        .catch((error) => {
          console.error("Error fetching chat ID:", error);
        });
    }
  }, [user, orderChatUser]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(user);

    socket.emit("message", {
      text: newMessage,
      sender: user._id,
      receiver: selectedUser._id,
      chatId: selectedChatId,
      socketId: socket.id,
      avatar: user.avatar,
    });

    setNewMessage("");
  };

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formattedDate;
  }

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-white rounded-xl w-full h-full overflow-y-auto">
      <>
        {loading && selectedUser ? (
          <span>Loading...</span>
        ) : (
          <div className="flex flex-col h-full">
            <div className="bg-white text-gray-800 text-sm h-full w-full overflow-hidden">
              <div
                className="flex flex-col justify-end h-full w-full overflow-auto"
                ref={chatContainerRef}
              >
                <div className="flex-1 h-full flex-col">
                  {messages.map((message, index) => {
                    return (
                      <div
                        className={`flex justify-start w-full py-5 border-b border-gray-100 p-3 ${
                          user._id !== message.sender._id && "bg-gray-100"
                        }`}
                        key={index}
                      >
                        <div className="w-full flex justify-start">
                          <div>
                            <div className="flex gap-3">
                              <img
                                src={
                                  user._id === message.receiver
                                    ? selectedUser.avatar
                                    : user.avatar
                                }
                                alt=""
                                className="w-10 h-10 rounded-full object-cover bg-gray-100"
                              />
                              <div className="flex flex-col items-start gap-4">
                                <div className="flex flex-col items-start">
                                  {user._id === message.receiver ? (
                                    <span className="font-semibold">
                                      <span className="text-nft-primary-light">
                                        {selectedUser.username}
                                      </span>{" "}
                                      sent a message
                                    </span>
                                  ) : (
                                    <span className="font-semibold">
                                      You sent a message
                                    </span>
                                  )}

                                  <span className="text-xs text-gray-500">
                                    {formatDate(message.createdAt)}
                                  </span>
                                </div>

                                <div className="w-fit text-black">
                                  {message.text}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <form className="w-full z-50 bg-white p-3 " onSubmit={sendMessage}>
              <div className="relative w-full">
                <textarea
                  type="text"
                  className="text-sm rounded-xl block bg-gray-50 w-full p-3  outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70 resize-none h-40"
                  placeholder="Send a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end items-center mt-3">
                <button
                  className="flex gap-2 bg-nft-primary-light text-white p-3 px-6 rounded-xl items-center text-base hover:opacity-80"
                  type="submit"
                >
                  <span>Send</span>
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    </div>
  );
};

export default OrderChatWindow;
