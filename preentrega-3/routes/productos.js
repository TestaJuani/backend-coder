const { Router } = require("express");
const router = Router();

const { mostrarProductos } = require("../controllers/productos.controllers");

router.route("/").get(mostrarProductos);

module.exports = router;
