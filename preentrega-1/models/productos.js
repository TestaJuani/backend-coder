const { Schema, model } = require("mongoose");

const prodCollection = "productos";

const prodSchema = new Schema({
  NombreHamburguesa: { type: String, require: true },
  Contenido: { type: String, require: true },
  PrecioSimple: { type: Number, require: true },
  PrecioDoble: { type: Number, require: true },
  PrecioTriple: { type: Number, require: true },
});

module.exports = model(prodCollection, prodSchema);
