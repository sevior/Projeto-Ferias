const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReceitaSchema = new Schema({
    tempoPreparo: {
        type: String,
        require: true
    }, 
    rendimento: {
        type: String,
        require: true
    },
    ingredientes: {
        type: String,
        require: true
    },
    modoPreparo:{
        type: String,
        require: true
    }    
});

module.exports = mongoose.model("Receitas", ReceitaSchema);