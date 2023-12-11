import { Server } from "socket.io";
import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

const socketSetup = (server, clientURL) => {
  const io = new Server(server, {
    cors: {
      origin: clientURL,
    },
  });

  const saveMessage = async (data) => {
    if (data.chatType === "order") {
      const message = new Message({
        sender: data.sender,
        receiver: data.receiver,
        text: data.text,
        chat: data.chatId,
        chatType: data.chatType,
      });

      await message.save();
      return message;
    } else {
      const message = new Message({
        sender: data.sender,
        receiver: data.receiver,
        text: data.text,
        chat: data.chatId,
        chatType: "single",
      });

      await message.save();
      return message;
    }
  };

  io.on("connection", (socket) => {
    socket.on("message", async (data) => {
      try {
        const message = await saveMessage(data);
        const chat = await Chat.findByIdAndUpdate(message.chat, {
          latestMessage: message._id,
        });

        if (message && chat) {
          io.emit("message", message);
        }
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("disconnect", () => {
      io.emit("user-disconnected", socket.id);
    });
  });
};

export default socketSetup;
