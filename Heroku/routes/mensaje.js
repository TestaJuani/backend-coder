const { Router } = require("express");
const router = Router();

const { getMensaje } = require("../controllers/mensaje.controllers");

router.route("/").get(getMensaje);

module.exports = router;
