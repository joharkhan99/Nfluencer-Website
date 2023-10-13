import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/tokenGenerator.js";
import transporter from "../utils/emailConfig.js";

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const sendRegistrationEmail = async (email, token) => {
  const emailLink = `http://localhost:3000/user-details/${token}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head></head>
    <body style="background:#6B46C1;height:100%;width:100%">
    <div style="margin-top:50px">
      <div style="width:100%;max-width:500px;margin:auto;height:100%;width:100%;border-radius:10px;overflow:hidden">
      <table style="text-align:center;background:#fff;width:100%;padding:20px;border-radius: 30px;font-family:sans-serif,Arial;margin-top: 30px;margin-bottom: 30px;box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);">
            <tbody>
              <tr style="width:100%;">
                <td style="width:100%;font-size:25px; font-weight:900;padding-bottom:20px;">Thanks for signing up for Nfluencer!</td>
              </tr>
              <tr style="width:100%">
                <td style="width:100%">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/miscellaneous-31/60/envelope-256.png"
                    style="width:80px;height:80px"
                    alt=""
                  />
                </td>
              </tr>
              <tr style="width:100%">
                <td style="width:100%;padding-top:30px">
                  <a href="${emailLink}" style="padding:15px 10px; background:#6B46C1;color:#fff;font-weight:600;border-radius:10px;text-decoration:none;display:inline-block">Click to Verify Email Address</a>
                </td>
              </tr>
              <tr style="width:100%">
                <td style="width:100%;padding-top:20px">
                  <p style="font-size:12px">
                    If you’re having trouble clicking the "Verify Email Address" button, copy and paste the URL below into your web browser:
                  <a href="${emailLink}">${emailLink}</a>
                  </p>
                </td>
              </tr>
              
            </tbody>
          </table>
    </div>
    </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: "joharkhan2001@gmail.com",
    to: email,
    subject: "Verify your email",
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return true;
      // console.log("Email sent:", info.response);
    }
  });
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return res
      .status(409)
      .json({ error: true, message: "User with this email already exists" });
  }
  const hashPassword = encryptPassword(password);
  const token = generateToken();
  await sendRegistrationEmail(email, token);

  const newUser = new User({
    email,
    password: hashPassword,
    validationToken: token,
    emailValidated: false,
  });
  await newUser.save();
  return res.status(201).json({
    message: "User registered successfully",
    user: newUser,
    error: false,
  });
};

// Generate jwt
function jwtToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, "your-secret-key", { expiresIn: "3h" });
  return token;
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
      }
      const token = jwtToken(user);
      res.json({ message: "Success", token, user });
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to log in" });
    });
};

export { registerUser, loginUser };
