const prodCtrl = {};

const { obtenerDatos, crearDato } = require("../negocio/datos.js");

prodCtrl.getDatosController = async (req, res) => {
  const datos = await obtenerDatos();
  res.render("productos", { productos: datos });
};
prodCtrl.postDatosController = async (req, res) => {
  const dato = req.body;
  await crearDato(dato);
  res.status(201).json(dato);
};

module.exports = prodCtrl;
