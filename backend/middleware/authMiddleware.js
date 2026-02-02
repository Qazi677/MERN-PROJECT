const jwt = require("jsonwebtoken");
exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "access denied,no token found" });
  }
  try {
    const decodd = jwt.verify(token, "zaidkhan");
    req.user = decodd;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
