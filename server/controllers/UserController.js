// import user model
import User from "../models/User.js";

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });

  res.status(201).json({ message: "User registered successfully", findUser });

  // Check if a user with the same email already exists
  // User.findOne({ email })
  //   .then((existingUser) => {
  //     if (existingUser) {
  //       // User with the same email already exists
  //       return res
  //         .status(409)
  //         .json({ message: "User with this email already exists" });
  //     }

  //     // Create a new user instance
  //     const newUser = new User({
  //       email,
  //       password,
  //     });

  //     // Save the user to the database
  //     newUser
  //       .save()
  //       .then((user) => {
  //         res
  //           .status(201)
  //           .json({ message: "User registered successfully", user });
  //       })
  //       .catch((error) => {
  //         res.status(500).json({ error: "Failed to register user" });
  //       });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ error: "Failed to check user existence" });
  //   });
};

// Generate a token
function generateToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, "your-secret-key", { expiresIn: "3h" });
  return token;
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email in the database
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        // User with the given email does not exist
        return res.status(404).json({ message: "User not found" });
      }

      if (user.password !== password) {
        // Incorrect password
        return res.status(401).json({ message: "Incorrect password" });
      }

      // Password is correct, generate a JWT token
      const token = generateToken(user);

      // Return the token and user details
      res.json({ message: "Success", token, user });
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to log in" });
    });
};

export { registerUser, loginUser };
