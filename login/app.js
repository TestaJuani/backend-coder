const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

//settings
app.set("port", process.env.PORT || 4001);
app.set("./views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Global variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use("/api/user", require("./routes/user"));

module.exports = app;
