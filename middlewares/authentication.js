const jwt = require("jsonwebtoken");
require("dotenv").config();

//authentication function
const auth = async (req, res, next) => {
  const authHeader = req.headers[`authorization`];
  let authString = authHeader.split(" ");
  const token = authString[1];
  console.log("auth token", token);
  if (!token) {
    res.status(403).send("Unauthorized user");
  }
  try {
    const data = jwt.verify(token);
    console.log(data);

    next();
  } catch (err) {}
  next();
};

module.exports = auth;
