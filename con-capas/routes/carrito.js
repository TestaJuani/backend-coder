const { Router } = require("express");
const router = Router();

const {
  mostrarCarrito,
  agregarCarrito,
  eliminarCarrito,
} = require("../controllers/carrito.controllers");
const { isAuthenticated } = require("../helpers/auth");

router.route("/").get(isAuthenticated, mostrarCarrito).post(agregarCarrito);

router.route("/:id").delete(eliminarCarrito);

module.exports = router;
