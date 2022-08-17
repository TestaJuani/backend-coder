const express = require("express");
const router = express.Router();
//Llamo al archivo que tengo la clase para añadir las hamburguesas
const ContenedorMemoria = require("../Contenedor/contenedorMemoria");
//Variable donde voy a generar las hamburguesas
const hamburguesa = new ContenedorMemoria();
//Devuelve todos los productos
router.get("/", (req, res, next) => {
  res.send({ hamburguesas: hamburguesa.getAll() });
});
//Devuelve el producto seleccionado mediante su id
router.get("/:id", (req, res) => {
  let mostrarHamburguesa = hamburguesa.getOne(req.params.id);
  if (mostrarHamburguesa.length === 0) {
    res.send("No se encontro la hamburguesa");
  } else {
    res.send({ hamburguesa: mostrarHamburguesa });
  }
});

//Guardamos los datos
router.post("/", ({ body }, res) => {
  hamburguesa.addOne(body);
  res.send({ hamburguesas: body });
});

//Editar un producto mediante su id
router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send({ hamburguesa: req.body });
});

//Eliminar un producto mediante su id
router.delete("/:id", (req, res) => {
  let mostrarHamburguesas = hamburguesa.deleteOne(req.params.id);
  res.send({ hamburguesa: mostrarHamburguesas });
});

module.exports = router;
