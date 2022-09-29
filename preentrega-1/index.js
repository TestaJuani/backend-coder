import mongoose from "mongoose";
import * as model from "./models/modelProducto";

CRUD();

const CRUD = async () => {
  try {
    const URL = "mongodb://localhost:27017/ecommerce";
    let rta = await mongoose.connect(URL, {
      userNewUrlParser: true,
      userUnifiedTopology: true,
    });
    console.log("Base de datos conectada");

    console.log("Create");
    const producto = {
      nombre: "CheeseBurger",
      contenido: "con queso",
      precioSimple: 700,
      precioDoble: 800,
      precioTriple: 900,
    };
    const productoSaveModel = new model.productos(producto);
    console.log(productoSaveModel);

    console.log("Read All");
    let productos = await model.producto.find({});
    console.log(productos);

    console.log("Update");
    let productoUpdate = await model.productos.updateOne({
      nombre: "CheeseBurger",
    });
    console.log(productoUpdate);
  } catch (error) {
    console.log(`Error en el CRUD ${error}`);
  }
};
