import mongoose from "mongoose";

export class contenedorProductos {
  constructor(nombreCollection, esquema) {
    this.elementos = mongoose.model(nombreCollection, mongoose.Schema(esquema));
    console.log(nombreCollection);
  }
}
