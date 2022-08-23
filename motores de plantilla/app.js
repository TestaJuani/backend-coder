const express = require("express");
const path = require("path");
const app = express();
const port = 3000 || process.env.PORT;
const hamburguesaRouter = require("./routes/hamburguesasRouter");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/hamburguesas", hamburguesaRouter);

const server = app.listen(port, () => {
  console.log(`Se esta escuchando el puerto: ${port}`);
});
server.on("error", (err) => {
  console.log(err);
});
