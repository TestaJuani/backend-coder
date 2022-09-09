const express = require("express");
const router = express.Router();

const {
  crearCarrito,
  verCarrito,
  verCarritos,
  eliminarCarrito,
} = require("../logica/logicaCarrito");

router.route("/").post(crearCarrito).get(verCarritos);
router.route("/:id").get(verCarrito).delete(eliminarCarrito);

exports.routerCarrito = router;
