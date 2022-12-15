const { Schema, model } = require("mongoose");

const CarritoSchema = new Schema({
  nombre: String,
  marca: String,
  descripcion: String,
  precio: Number,
  user: String,
});

module.exports = model("Carrito", CarritoSchema);
