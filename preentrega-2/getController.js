import { contenedorProductos } from "./contenedores/index.js";

export async function getController(req, res) {
  const productos = await contenedorProductos.obtenerTodas();
  res.json(productos);
}
