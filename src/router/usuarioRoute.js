module.exports = function(app){
    const usuarios = require("../controller/usuarioController");

    app.route("/usuarios")
    .post(usuarios.createOne)
    .get(usuarios.listAll)

    app.route("/usuarios/:id")
    .get(usuarios.showOne)
    .put(usuarios.update)
    .delete(usuarios.delete)

    app.route("/usuario")
    .post(usuarios.login)
}