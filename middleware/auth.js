const jwt = require("jsonwebtoken");
const { UnauthenticatedRequest } = require("../errors/index");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedRequest(
      "No token provided or you are having a typo"
    );
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedRequest("Not authorized to access this route");
  }
};
module.exports = authenticationMiddleware;
