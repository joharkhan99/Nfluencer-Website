import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import User from "../models/User.js";

const allMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name avatar email")
      .populate("chat");

    res.json(messages);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

const sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res
      .status(400)
      .json({ error: true, message: "Missing required information" });
  }

  var newMessage = {
    sender: req.body.sender,
    content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name avatar");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name avatar email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });

    res.json(message);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

const chatHistory = async (req, res) => {
  try {
    // Get the sender and receiver user IDs from the request body
    const { sender, receiver, chatId } = req.body;

    // Find the chat by chatId
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ error: true, message: "Chat not found" });
    }

    // Find all messages in the chat
    const messages = await Message.find({ chat: chat._id })
      .sort({ createdAt: 1 }) // Sort by message creation date
      .populate("sender"); // Populate sender details

    // console.log(messages);

    return res.status(200).json({ messages });
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
};

const fetchChatId = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    // First, check if a chat already exists between the users
    const existingChat = await Chat.findOne({
      users: { $all: [senderId, receiverId] },
    });

    console.log("Existing chat:", existingChat);
    if (existingChat) {
      return res.json({ chatId: existingChat._id });
    }

    // If no existing chat, create a new chat
    const newChat = new Chat({
      users: [senderId, receiverId],
    });

    // Save the new chat to the database
    await newChat.save();

    console.log("New chat created:", newChat);

    res.json({ chatId: newChat._id });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "An error occurred while fetching chat ID.",
    });
  }
};

export { allMessages, sendMessage, chatHistory, fetchChatId };
