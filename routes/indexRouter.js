//routes/indexRouter.js

const { Router } = require("express");
const indexRouter = Router();

// sample messages
const messages = [
  {
    id: Math.random().toString(16).slice(2),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: Math.random().toString(16).slice(2),
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

indexRouter.get("/message/:id", (req, res) => {
  const message = messages.find((message) => message.id === req.params.id);
  res.render("messageDetail", { message: message, username: username });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: Math.random().toString(16).slice(2),
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
