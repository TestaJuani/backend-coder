const {Schema, model}= require("mongoose");

const userSchema = new Schema ({
    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    Contraseña:{
        type: password,
        required:true
    }
});

module.exports = model("user",userSchema);
