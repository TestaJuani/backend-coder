const peticionesProd = {};
const prodModel = require("../models/productos");

peticionesProd.agregarProducto = async (req, res) => {
  const {
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  } = req.body;
  const nuevoProducto = new prodModel({
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  });
  if (!nuevoProducto.NombreHamburguesa) {
    return res
      .status(400)
      .json({ msg: "El nombre de la hamburguesa es obligatorio" });
  }
  if (!nuevoProducto.Contenido) {
    return res
      .status(400)
      .json({ msg: "El contenido de la hamburguesa es obligatorio" });
  }
  if (!nuevoProducto.PrecioSimple) {
    return res
      .status(400)
      .json({ msg: "El precio simple de la hamburguesa es obligatorio" });
  }
  if (!nuevoProducto.PrecioDoble) {
    return res
      .status(400)
      .json({ msg: "El precio doble de la hamburguesa es obligatorio" });
  }
  if (!nuevoProducto.PrecioTriple) {
    return res
      .status(400)
      .json({ msg: "El precio triple de la hamburguesa es obligatorio" });
  }
  await nuevoProducto.save();
  res.json({ msg: "Note save" });
};

peticionesProd.verProductos = async (req, res) => {
  const productos = await prodModel.find();
  res.json(productos);
};

peticionesProd.verProducto = async (req, res) => {
  const id = await prodModel.findById(req.params.id);
  res.status(200).json(id);
};

peticionesProd.editarProducto = async (req, res) => {
  const {
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  } = req.body;
  await prodModel.findByIdAndUpdate(req.params.id, {
    NombreHamburguesa,
    Contenido,
    PrecioSimple,
    PrecioDoble,
    PrecioTriple,
  });
  res.json({ message: "Note Updated" });
};

peticionesProd.eliminarProducto = async (req, res) => {
  await prodModel.findByIdAndUpdate(req.params.id);
  res.json(`Producto eliminado`);
};

peticionesProd.recuperarProducto = (id) => {
  const producto = productos.find((p) => p.id === id);
  return producto;
};

module.exports = peticionesProd;
