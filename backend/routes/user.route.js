const express = require("express");
const user = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { userRegiterd, login } = require("../controllers/user.controller");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/register", userRegiterd);
router.post("/login", login);
router.get("/", authMiddleware, async (req, res) => {
  const users = await user.find({}).select("-password");
  res.json({ users });
});

module.exports = router;
