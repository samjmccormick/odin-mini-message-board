//routes/indexRouter.js

const { Router } = require("express");
const indexRouter = Router();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// sample username
const username = "Sam";

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages, username: username });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { username: username });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
