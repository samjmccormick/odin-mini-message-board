const express = require("express");
const app = express();
const path = require("node:path");

//routing for static pages eg styles.css
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//set views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

//Listening to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
