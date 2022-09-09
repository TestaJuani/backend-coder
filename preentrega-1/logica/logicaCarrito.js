const {} = require("./logicaProductos");

const peticionesCarrito = {};
let carritos = [];

peticionesCarrito.crearCarrito = async (req, res) => {
  const carrito = await req.body;
  if (!carrito.id) {
    return res.status(400).json({ msg: "El id del carrito es obligatorio" });
  }
  if (!carrito.nombre) {
    return res
      .status(400)
      .json({ msg: "El nombre del carrito es obligatorio" });
  }
  carritos.push(carrito);
  res.status(200).json(carritos);
};

peticionesCarrito.verCarritos = async (req, res) => {
  res.status(200).json(carritos);
};

peticionesCarrito.verCarrito = async (req, res) => {
  const id = await req.params.id;
  const carritoEncontrado = carritos.find((c) => c.id === id);
  if (!carritoEncontrado) {
    return res.status(400).json({ msg: "El carrito no existe" });
  }
  const mostrarCarrito = carritos.filter((p) => p.id === id);
  res.status(200).json(mostrarCarrito);
};

peticionesCarrito.eliminarCarrito = async (req, res) => {
  const id = await req.params.id;
  const encontrarCarrito = carritos.find((p) => p.id === id);
  if (!encontrarCarrito) {
    return res.status(400).json("NaN");
  }
  const Eliminar = carritos.filter((c) => c.id !== id);
  res.status(200).json(Eliminar);
};

module.exports = peticionesCarrito;
