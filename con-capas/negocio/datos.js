const { recuperarTodos, guardar } = require("../persistencia/datos.js");

async function obtenerDatos() {
  return await recuperarTodos();
}

async function crearDato(dato) {
  dato.added = Date.now();
  await guardar(dato);
  return dato;
}

module.exports = { obtenerDatos, crearDato };
