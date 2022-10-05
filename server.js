var express = require("express");
var app = express();


// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// controller
const addressController = require("./controller/address");
app.use("/api", addressController);

app.listen(8003);
console.log("Server is listening on port 8003");
