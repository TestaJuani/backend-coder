const mongoose = require("mongoose");

const mongodbConnection = ``;

mongoose
  .connect(mongodbConnection)
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
