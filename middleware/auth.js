// const CustomAPIError = require("../errors/custom-error");
// const jwt = require("jsonwebtoken");

// const authMiddleware = async (req, res, next) => {
//   console.log(req.headers.authorization);
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     throw new CustomAPIError("No token provided", 401);
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const { id, username } = decoded;
//     req.user = { id, username };
//     next();
//     console.log("decoded", decoded);
//   } catch (error) {
//     throw new CustomAPIError("Not authorized to access this route", 401);
//   }
// };

// module.exports = authMiddleware;
