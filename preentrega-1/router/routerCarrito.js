const express = require("express");
const router = express.Router();

const {
  crearCarrito,
  verCarrito,
  verCarritos,
  eliminarCarrito,
  agregarProdAlCarrito,
  verProdDelCarrito,
  eliminarProdDelCarrito,
} = require("../logica/logicaCarrito");

router.route("/").post(crearCarrito).get(verCarritos);
router.route("/:id").get(verCarrito).delete(eliminarCarrito);
router
  .route("/:id/productos")
  .post(agregarProdAlCarrito)
  .get(verProdDelCarrito);

router.route("/:id/productos/:id_prod").delete(eliminarProdDelCarrito);

exports.routerCarrito = router;
