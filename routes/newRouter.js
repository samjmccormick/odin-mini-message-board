const { Router } = require("express");
const newRouter = Router();

const username = "Sam";

newRouter.get("/", (req, res) => {
  res.render("form", { username: username });
});

module.exports = newRouter;
