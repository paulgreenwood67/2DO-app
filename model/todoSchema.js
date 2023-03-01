const mongoose = require("mongoose");
//todo schema
const todoSchema = new mongoose.Schema({
  tid: {
    type: [String],
    // required: true
  },

  todo: {
    type: String,
    // required: true
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
