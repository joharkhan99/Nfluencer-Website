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

export { allMessages, sendMessage };
