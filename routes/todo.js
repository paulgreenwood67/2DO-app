const express = require("express");
const router = express.Router();
const { create, remove, view } = require("../controllers/todo");
const auth = require("../middlewares/authentication");

router.use(auth);
//routes for creating, viewing and removing a todo
router.put("/todo/create", create);

router.get("/todo/view", view);

router.put("/todo/delete", remove);

module.exports = router;
