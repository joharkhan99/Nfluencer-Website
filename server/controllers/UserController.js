import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/tokenGenerator.js";
import transporter from "../utils/emailConfig.js";
import cloudinary from "../utils/cloudinaryConfig.js";

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};
function jwtToken(username) {
  const payload = {
    sub: username,
    iat: Date.now(),
    exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
  };
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secretKey);

  return token;
}

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "nfluencer-users",
  });
  return res.url;
}
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

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.body;

  const findUser = await User.findOne({ validationToken: verificationToken });
  if (!findUser) {
    return res.status(409).json({ error: true });
  }

  if (findUser.emailValidated) {
    return res.status(409).json({ error: false, emailValidated: true });
  }

  return res.status(200).json({ error: false, userId: findUser._id });
};

const userDetails = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);

    const { name, username, languages, location, bio, userId } = req.body;

    // check if username exists
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.status(409).json({
        error: true,
        usernameExist: true,
        message: "Username exists. Try again.",
      });
    }

    const findUser = await User.findOne({ _id: userId });
    if (!findUser) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    const updatedUser = await User.updateOne(
      { _id: userId },
      {
        name,
        username,
        languages,
        location,
        bio,
        avatar: cldRes,
        emailValidated: true,
        validationToken: "",
      }
    );

    const jwttoken = jwtToken(username);

    return res.status(200).json({
      error: false,
      message: "User updated",
      user: {
        name,
        username,
        languages,
        location,
        bio,
        avatar: cldRes,
        jwtToken: jwttoken,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({
      error: true,
      message: error,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User email not found",
        emailNotFound: true,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: true,
        message: "Incorrect password",
        incorrectPassword: true,
      });
    }

    const token = jwtToken(user.username);

    res.json({
      error: false,
      message: "Login successful",
      token,
      user: {
        name: user.name,
        username: user.username,
        languages: user.languages,
        location: user.location,
        bio: user.bio,
        avatar: user.avatar,
        jwtToken: token,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: true, message: "Failed to log in" });
  }
};

const getUser = async (req, res) => {
  const { jwtToken } = req.body;
  console.log(jwtToken);

  const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
  const user = await User.findOne({ username: decoded.sub });

  if (!user) {
    return res.status(404).json({
      error: true,
      message: "User not found",
    });
  }

  return res.status(200).json({
    error: false,
    message: "User found",
    user: {
      name: user.name,
      username: user.username,
      languages: user.languages,
      location: user.location,
      bio: user.bio,
      avatar: user.avatar,
      jwtToken: jwtToken,
      email: user.email,
    },
  });
};

export { registerUser, loginUser, verifyEmail, userDetails, getUser };
