const productoCtrl = {};

const ProductoModel = require("../models/Producto");

productoCtrl.getProductos = async (req, res) => {
  const productos = await ProductoModel.find();
  res.json(productos);
};

productoCtrl.createProductos = async (req, res) => {
  const {
    id,
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  } = req.body;
  const newProducto = new ProductoModel({
    id,
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  });
  if (!newProducto.id) {
    return res
      .status(400)
      .json({ msg: "El id de la hamburguesa es obligatorio" });
  }
  if (!newProducto.NombreHamburguesa) {
    return res
      .status(400)
      .json({ msg: "El nombre de la hamburguesa es obligatorio" });
  }
  if (!newProducto.Contenido) {
    return res
      .status(400)
      .json({ msg: "El contenido de la hamburguesa es obligatorio" });
  }
  if (!newProducto.PrecioSimple) {
    return res
      .status(401)
      .json({ msg: "El precio simple de la hamburguesa es obligatorio" });
  }
  if (!newProducto.PrecioDoble) {
    return res
      .status(400)
      .json({ msg: "El precio doble de la hamburguesa es obligatorio" });
  }
  if (!newProducto.PrecioTriple) {
    return res
      .status(400)
      .json({ msg: "El precio triple de la hamburguesa es obligatorio" });
  }
  await newProducto.save();
  res.json({ menssage: "Note save" });
};

productoCtrl.getProducto = async (req, res) => {
  const producto = await ProductoModel.findById(req.params.id);
  res.json(producto);
};

productoCtrl.updateProductos = async (req, res) => {
  const {
    id,
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  } = req.body;
  await ProductoModel.findByIdAndUpdate(req.params.id, {
    id,
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  });
  res.json({ message: "Note Updated" });
};

productoCtrl.deleteProductos = async (req, res) => {
  await ProductoModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Deleted" });
};

module.exports = productoCtrl;
