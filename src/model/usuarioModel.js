const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email: {
        type: String,
        require: true
    }, 
    nome: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }    
});

module.exports = mongoose.model("Usuarios", UsuarioSchema);