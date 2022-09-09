const express = require("express");
const app = express();
const { routerProductos } = require("./router/routerProductos.js");
const { routerCarrito } = require("./router/routerCarrito.js");

app.use(express.json());
app.use("/api/productos", routerProductos);
app.use("/api/carrito", routerCarrito);

const server = app.listen(8080, () => {
  console.log(`Se esta escuchando el puerto: ${server.address().port}`);
});
