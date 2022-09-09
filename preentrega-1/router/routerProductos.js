const express = require("express");
const router = express.Router();

const {
  agregarProducto,
  verProductos,
  verProducto,
  editarProducto,
  eliminarProducto,
} = require("../logica/logicaProductos");

router.route("/").get(verProductos).post(agregarProducto);

router
  .route("/:id")
  .get(verProducto)
  .put(editarProducto)
  .delete(eliminarProducto);

exports.routerProductos = router;
