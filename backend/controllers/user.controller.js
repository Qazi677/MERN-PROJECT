const bcrypt = require("bcryptjs");
const { user } = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.userRegiterd = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "All fields are required" });
  }
  const logedInUser = await user.findOne({ email });
  if (!logedInUser) {
    return res.status(404).json({ message: "invalid credential" });
  }
  const isMatch = await bcrypt.compare(password, logedInUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "invalid credentail" });
  }
  const token = jwt.sign({ id: logedInUser._id }, "zaidkhan");
  res.json({ token });
};
