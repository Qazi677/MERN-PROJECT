const jwt = require("jsonwebtoken");
exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(400).json({ message: "access denied,no token found" });
  }
  try {
    const decodd = jwt.verify(token, process.env.token);
    req.user = decodd;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
