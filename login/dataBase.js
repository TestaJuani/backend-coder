const mongoose = require("mongoose");

const mongodbConnection = `mongodb+srv://coderh:coderhpassword@cluster0.6turh9h.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongodbConnection)
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
