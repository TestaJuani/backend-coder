const { recuperarProducto } = require("./logicaProductos");

const peticionesCarrito = {};
let carritos = [];

peticionesCarrito.crearCarrito = async (req, res) => {
  const datosCarrito = await req.body;
  if (!datosCarrito.nombre) {
    return res
      .status(400)
      .json({ msg: "El nombre del carrito es obligatorio" });
  }
  const carrito = {
    id: "1",
    nombre: datosCarrito.nombre,
    productos: [],
  };
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

peticionesCarrito.agregarProdAlCarrito = async (req, res) => {
  const idCarrito = await req.params.id;
  const idProducto = await req.body.id;
  const carrito = carritos.find((c) => c.id === idCarrito);
  if (!carrito) {
    return res
      .status(400)
      .json({ msg: `el carrito con id '${idCarrito}' no existe` });
  }

  const producto = recuperarProducto(idProducto);
  carrito.productos.push(producto);
  res.status(200).json(carrito);
};

peticionesCarrito.verProdDelCarrito = async (req, res) => {
  const id = await req.params.id;
  const carrito = carritos.find((c) => c.id === id);
  if (!carrito) {
    return res.status(400).json({ msg: `el carrito con id '${id}' no existe` });
  }
  res.status(200).json(carrito.productos);
};

peticionesCarrito.eliminarProdDelCarrito = async (req, res) => {
  const id = await req.params.id;
  const idProducto = await req.params.id_prod;
  const carrito = carritos.find((c) => c.id === id);
  if (!carrito) {
    return res.status(400).json({ msg: `el carrito con id '${id}' no existe` });
  }
  const encontrarProdEnElCarrito = carrito.productos.find(
    (p) => p.id === idProducto
  );
  if (!encontrarProdEnElCarrito) {
    return res
      .status(400)
      .json({ msg: `el carrito no tiene el producto con id ${idProducto}` });
  }
  const eliminarProd = carrito.productos.filter((p) => p.id !== idProducto);
  carrito.productos = eliminarProd;
  res.status(200).json(carrito.productos);
};

module.exports = peticionesCarrito;
