const carritoCtrl = {};
const CarritoModel = require("../models/Carrito");

carritoCtrl.mostrarCarrito = async (req, res) => {
  const carritos = await CarritoModel.find({ user: req.user._id });
  res.render("carrito", { carritos: carritos });
};

carritoCtrl.agregarCarrito = async (req, res) => {
  const { nombre, marca, descripcion, precio } = req.body;
  const newCarrito = new CarritoModel({
    nombre,
    marca,
    descripcion,
    precio,
  });
  newCarrito.user = req.user._id;
  await newCarrito.save();
  res.redirect("/api/productos");
};

carritoCtrl.eliminarCarrito = async (req, res) => {
  await CarritoModel.findByIdAndDelete(req.params.id);
  res.redirect("/api/carrito");
};

module.exports = carritoCtrl;
