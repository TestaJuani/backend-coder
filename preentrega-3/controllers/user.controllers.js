const usersCtrl = {};

const UserModel = require("../models/User");
const passport = require("passport");

usersCtrl.mostrarFormReg = (req, res) => {
  res.render("./usuario/mostrarReg");
};

usersCtrl.registrarUsuario = async (req, res) => {
  const { nombre, direccion, edad, telefono, email, password } = req.body;
  const newUser = new UserModel({
    nombre,
    direccion,
    edad,
    telefono,
    email,
    password,
  });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  res.redirect("/api/user");
};

usersCtrl.mostrarFormLog = (req, res) => {
  res.render("./usuario/mostrarLogIn");
};

usersCtrl.loguear = passport.authenticate("local", {
  failureRedirect: "/api/user",
  successRedirect: "/api/productos",
});

usersCtrl.desloguear = async (req, res, next) => {
  await req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.redirect("../../index.html");
};
module.exports = usersCtrl;
