const peticionesProd = {};
let productos = [];

peticionesProd.agregarProducto = async (req, res) => {
  const producto = await req.body;
  if (!producto.nombre) {
    res.status(400).json({ msg: "El nombre del producto es obligatorio" });
  }
  if (!producto.precio) {
    res.status(400).json({ msg: "El precio del producto es obligatorio" });
  }
  if (!producto.id) {
    res.status(400).json({ msg: "El id del producto es obligatorio" });
  }
  productos.push(producto);
  res.status(200).json(producto);
};

peticionesProd.verProductos = async (req, res) => {
  return await res.status(200).json(productos);
};

peticionesProd.verProducto = async (req, res) => {
  const id = await req.params.id;
  const encontrar = productos.find((p) => p.id === id);
  if (!encontrar) {
    return res.status(400).json({ msg: "El producto no existe" });
  }
  const mostrar = productos.filter((p) => p.id === id);
  res.status(200).json(mostrar);
};

peticionesProd.editarProducto = async (req, res) => {
  const id = await req.params.id;
  const encontrar = productos.find((p) => p.id === id);
  if (!encontrar) {
    return res.status(400).json({ msg: "El producto no existe" });
  }
  res.status(200).json(productos.filter((p) => p.id === id));
};

peticionesProd.eliminarProducto = async (req, res) => {
  const id = await req.params.id;
  const encontrar = productos.find((p) => p.id === id);
  if (!encontrar) {
    return res.status(400).json("NaN");
  }
  const eliminar = productos.filter((e) => e.id !== id);
  productos = eliminar;
  res.status(200).json(`Se elimino el producto con id: ${id}`);
};

peticionesProd.recuperarProducto = (id) => {
  const producto = productos.find((p) => p.id === id);
  return producto;
};

module.exports = peticionesProd;
