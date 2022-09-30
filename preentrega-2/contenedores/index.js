import mongoose from "mongoose";
import { CNX_STR } from "../config.js";
import { ContenedorMongoDb } from "./ContenedorMongoDb.js";

await mongoose.connect(CNX_STR);

export const contenedorProductos = new ContenedorMongoDb("productos", {
  nombre: { type: String, required: true },
});
