//routes/indexRouter.js

const { Router } = require("express");

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

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All Indexes"));
indexRouter.get("/:index", (req, res) => {
  const { index } = req.params;
  res.send(`Index: ${index}`);
});

module.exports = indexRouter;
