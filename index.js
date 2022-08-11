const express = require("express");
const app = express();
const Archivos = require("./contenedor/Contenedor");
let data = new Archivos("./productos.txt");

//end point
app.get("/", (req, res) => {
  data
    .getAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => err);
});

//end point
app.get("/productosRandom", (req, res) => {
  data
    .getRandom()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => err);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto ${PORT}`);
});
server.on("error", (err) => console.log(`Error en el servidor: ${err}`));
