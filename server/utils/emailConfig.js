import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "joharkhan2001@gmail.com",
    pass: "majd lysj jpib htoa",
  },
});

export default transporter;
