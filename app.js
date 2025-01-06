const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
//had to move newrouter logic to indexrouter to POST new messages
const newRouter = require("./routes/newRouter");

//url encoding middleware
app.use(express.urlencoded({ extended: true }));

//routing for static pages eg styles.css
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//set views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routers
app.use("/", indexRouter);
app.use("/new", indexRouter);

//Listening to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
