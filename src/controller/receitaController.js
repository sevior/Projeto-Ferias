const mongoose = require("mongoose");
const Receita = mongoose.model("Receitas");

//Cadastrar um nova Receita
exports.createOne = (req,res) =>{
    const {tempoPreparo, rendimento, ingredientes, modoPreparo} = req.body;
    const novaReceita = new Receita({tempoPreparo, rendimento, ingredientes, modoPreparo});
  
    novaReceita.save((error, receita) =>{
        if(error){
            res.send("Erro ao cadastrar receita! "+error)
        }
        const response = {
            message: "Receita cadastrado com sucesso!",
            data: receita
        };
        res.status(201).json(response);
    });
  }

  //Listar todas as Receitas
exports.listAll = (req,res) =>{
    Receita.find({},(error, receitas) =>{
        if(error){
            res.send("Erro ao listar as Receitas! "+error)
        }
        const response = {
            message: "Receitas listadas com sucesso!",
            data: receitas
        };
        res.json(response);
    })
}

// Lista Receita por ID
exports.showOne = (req,res) => {
    Receita.findById(req.params.id, (error, receita) =>{
        if(error){
            res.send("Erro ao listar Receita"+ error)
        }
        const response = {
            message: "Receita encontrado com sucesso!",
            data: receita
        };
        res.json(response);
    })
}

//Atualiza dados de uma Receita
exports.update = (req,res) =>{
    Receita.findOneAndUpdate({_id: req.params.id}, req.body,{new: true}, (error,receita) =>{
        if(error){
            res.send("Erro ao atualizar Receita"+error)
        }
        const response = {
            message: "Receita atualizados com sucesso!",
            data: receita
        };
        res.json(response);
    })
}

//Deleta uma Receita do banco de dados
exports.delete = (req,res) =>{
    Receita.remove({_id: req.params.id}, (error, receita) =>{
        if(error){
            res.send("Erro ao deletar a receita "+error)
        }
        const response = {
            message: "Receita deletada com sucesso!",
            data: receita
        };
        res.json(response);
    })
}