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
    const message = new Message({
      sender: data.sender,
      receiver: data.receiver,
      text: data.text,
      chat: data.chatId,
    });

    await message.save();
    return message;
  };

  io.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

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
