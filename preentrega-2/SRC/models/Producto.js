const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
  id: String,
  NombreHamburguesa: String,
  Contenido: String,
  PrecioSimple: Number,
  PrecioDoble: Number,
  PrecioTriple: Number,
});

module.exports = model("Producto", productoSchema);
