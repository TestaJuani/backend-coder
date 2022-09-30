import express from "express";
import { apiRouter } from "./apiRouter.js";

export const app = express();

app.use("/api/productos", apiRouter);

app.listen(8080, () => {
  console.log("conectado! escuchando!");
});
