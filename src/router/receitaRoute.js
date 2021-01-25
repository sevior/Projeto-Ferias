module.exports = function(app){
    const receitas = require("../controller/receitaController");

    app.route("/receitas")
    .get(receitas.listAll)
    .post(receitas.createOne)

    app.route("/receitas/:id")
    .get(receitas.showOne)
    .put(receitas.update)
    .delete(receitas.delete)
}