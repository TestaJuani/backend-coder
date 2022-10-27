const usersCtrl = {};

const UserModel = require("../models/User");
const passport = require("passport");

usersCtrl.mostrarFormReg = (req, res) => {
  res.render("mostrarReg");
};

usersCtrl.registrarUsuario = async (req, res) => {
  const { email, password } = req.body;
  const newUser = new UserModel({ email, password });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  res.redirect("/api/user");
};

usersCtrl.mostrarFormLog = (req, res) => {
  res.render("mostrarLogIn");
};

usersCtrl.loguear = passport.authenticate("local", {
  failureRedirect: "/api/user",
  successRedirect: "/api/user/logueado",
});

usersCtrl.userLogueado = (req, res) => {
  res.render("usuarioLogueado");
};
module.exports = usersCtrl;
