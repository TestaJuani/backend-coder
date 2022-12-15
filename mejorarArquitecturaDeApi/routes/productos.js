const { Router } = require("express");
const router = Router();

const {
  getDatosController,
  postDatosController,
} = require("../controllers/productos.controllers");

router.route("/").get(getDatosController).post(postDatosController);

module.exports = router;
