const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport");
require("./config/passport");

app.set("port", process.env.PORT || 4001);
app.set("./views", "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

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

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use("/api/user", require("./routes/user"));
app.use("/api/productos", require("./routes/productos"));
app.use("/api/carrito", require("./routes/carrito"));

module.exports = app;
