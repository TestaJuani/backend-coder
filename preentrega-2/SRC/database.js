const mongoose = require("mongoose");

const mongodbConnection = `mongodb+srv://JUANITESTA:Jit43261134@cluster0.f5nzuen.mongodb.net/ecommerce?retryWrites=true&w=majority`;

mongoose
  .connect(mongodbConnection)
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
