const express = require("express");
const router = express.Router();
let id = 0;
let listaHamburguesas = [];

router.get("/mostrarHamburguesas", (req, res) => {
  res.render("mostrarHamburguesas", { hamburguesas: listaHamburguesas });
});
router.get("/agregarHamburguesa", (req, res) => {
  res.render("agregarHamburguesa");
});

router.get("/detalle/:id", (req, res) => {
  let id = req.params.id;
  let miHamburguesa = listaHamburguesas.filter((el) => el.id == id);
  if (miHamburguesa.length == 0) {
    res.send("No se encontro el producto");
  } else {
    res.send(miHamburguesa);
  }
});

//Guardar las hamburguesas
router.post("/", (req, res) => {
  let hamburguesa = req.body;
  hamburguesa.id = id++;
  listaHamburguesas = [...listaHamburguesas, hamburguesa];
  res.redirect("/hamburguesas/agregarHamburguesa");
});

module.exports = router;
