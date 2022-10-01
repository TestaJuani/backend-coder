const { Router } = require("express");
const router = Router();

const {
  getProductos,
  createProductos,
  updateProductos,
  getProducto,
  deleteProductos,
} = require("../controllers/productos.controllers");

router.route("/").get(getProductos).post(createProductos);

router
  .route("/:id")
  .get(getProducto)
  .delete(deleteProductos)
  .put(updateProductos);

module.exports = router;
