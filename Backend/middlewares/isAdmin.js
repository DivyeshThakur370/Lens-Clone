const jwt = require("jsonwebtoken");
const isAdmin = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "No access token!" });
  }
  try {
    const decoded = jwt.verify(token, "zxcvbnm");
    if (decoded?.user?.role !== "admin") {
      return res.status(403).json({ message: "Access denied!" });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    console.log(`🚀 ~ isAdmin.js:10 ~ isAdmin ~ error:`, error);
  }
};

module.exports = { isAdmin };
