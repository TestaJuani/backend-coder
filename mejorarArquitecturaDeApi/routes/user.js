const { Router } = require("express");
const router = Router();

const {
  mostrarFormReg,
  registrarUsuario,
  mostrarFormLog,
  loguear,
  desloguear,
} = require("../controllers/user.controllers");

router.route("/").get(mostrarFormLog).post(loguear);
router.route("/desloguear").get(desloguear);

router.route("/registrar").get(mostrarFormReg).post(registrarUsuario);

module.exports = router;
