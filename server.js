const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Usuario = require("./src/model/usuarioModel");

const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ProjetoFeriasDB", {useNewUrlParser: true, useUnifiedTopology: true})

const routes = require("./src/router/usuarioRoute");

routes(app);

app.route("/").get((req,res) =>{
    res.send("Bem vindo(a) ao Projeto de Férias!")
})
const porta = process.env.PORT || 3000
app.listen(porta);
console.log("Aplicação iniciada na porta: "+porta)

