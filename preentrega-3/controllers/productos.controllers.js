const prodCtrl = {};

prodCtrl.mostrarProductos = (req, res) => {
  const Productos = [
    {
      nombre: "Televisor",
      marca: "LG",
      descripcion: "50 pulgadas",
      precio: 200.0,
    },
    {
      nombre: "Televisor",
      marca: "SAMSUNG",
      descripcion: "55 pulgadas",
      precio: 225.0,
    },
    {
      nombre: "Televisor",
      marca: "BGH",
      descripcion: "32 pulgadas",
      precio: 120.0,
    },
    {
      nombre: "Televisor",
      marca: "LG",
      descripcion: "32 pulgadas",
      precio: 145.0,
    },
  ];
  res.render("productos", { productos: Productos });
};

module.exports = prodCtrl;
