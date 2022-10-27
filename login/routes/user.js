const { Router } = require("express");
const router = Router();

const {
  mostrarFormReg,
  registrarUsuario,
  mostrarFormLog,
  loguear,
  userLogueado,
} = require("../controllers/user.controllers");

router.route("/").get(mostrarFormLog);
router.route("/logueado").get(userLogueado);
router.route("/").post(loguear);

router.route("/registrar").get(mostrarFormReg).post(registrarUsuario);

module.exports = router;
