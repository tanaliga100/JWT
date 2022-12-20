const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  //validate here on custom error handler
  if (!username || !password) {
    throw new BadRequest("Please enter a username and password");
  }
  //make id for demo
  const id = new Date().getTime();
  //issued token here
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({
    msg: `User Created`,
    token,
  });
};

const dashboard = async (req, res) => {
  //verify
  console.log("from auth", req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username.toUpperCase()}`,
    secret: `Hello , this is your lucky number ${luckyNumber}`,
  });
};
module.exports = {
  login,
  dashboard,
};
