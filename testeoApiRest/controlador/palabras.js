import ApiPalabras from "../api/palabras.js";

class ControladorPalabras {
  constructor() {
    this.apiPalabras = new ApiPalabras();
  }

  obtenerPalabras = async (req, res) => {
    try {
      let id = req.params.id;
      //console.log(id)
      let palabras = await this.apiPalabras.obtenerPalabras(id);

      res.send(palabras);
    } catch (error) {
      console.log("error obtenerPalabras", error);
    }
  };

  guardarPalabra = async (req, res) => {
    try {
      let palabra = req.body;
      //console.log(Palabra)
      let palabraGuardada = await this.apiPalabras.guardarPalabra(palabra);

      res.json(palabraGuardada);
    } catch (error) {
      console.log("error obtenerPalabras", error);
    }
  };
}

export default ControladorPalabras;
