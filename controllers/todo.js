const Todo = require("../model/todoSchema");
const jwt = require("jsonwebtoken");
const { findOneAndUpdate } = require("../model/todoSchema");
const User = require("../model/userSchema");

// controller create a to-do
exports.create = (req, res) => {
  console.log(req.body.todo);

  const getToken = req.headers["authorization"].split(" ")[1];

  const modifyToken = getToken.split(" ")[1];
  const decode = jwt.verify(getToken, "jwt-secret");

  User.findOneAndUpdate(
    {
      email: req.body.email,
    },
    { $addToSet: { todo: req.body.todo } },
    { new: true },
    (err, data) => {
      console.log("err", err);
      console.log("data", data);
      if (err) {
        console.log("ERROR", err);
      } else {
        res.send(data);
        console.log(data);
      }
    }
  );
};

// controller to delete to-do
exports.remove = (req, res) => {
  console.log("remove a todo");
    const getToken = req.headers["authorization"].split(" ")[1];
    const modifyToken = getToken.split(" ")[1];
    const decode = jwt.verify(getToken, "jwt-secret");

  console.log("to be removed ", req.body.todo);

  User.findOneAndUpdate(
    {
      email: req.body.email,
    },
    { $pull: { todo: req.body.todo } },
    { new: true },
    (err, data) => {
      if (err) {
        console.log("ERROR", err);
      } else {
        res.send([data]);
        console.log(data);
      }
    }
  );
};

exports.view = async (req, res) => {
  console.log("view todo");
  try {
    const userid = req.cookies.uid;
    const user = await User.find({ tid: userid });
    let todos = [];
    user.map((items) => {
      todos.push(items.todo);
    });
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send("something went wrong");
    console.log(err);
  }
};
