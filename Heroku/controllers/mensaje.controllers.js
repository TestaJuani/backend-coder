const msjCtrl = {};

msjCtrl.getMensaje = async (req, res) => {
  res.render("mostrarMensaje");
};

module.exports = msjCtrl;
