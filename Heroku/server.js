const express = require("express");
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/api/mensaje", require("./routes/mensaje"));

app.listen(app.get("port"));
