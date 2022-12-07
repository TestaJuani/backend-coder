const mongoose = require("mongoose");

URL_MONGODB = process.env.MONGO_DB;

const mongodbConnection = URL_MONGODB;

mongoose
  .connect(mongodbConnection)
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
