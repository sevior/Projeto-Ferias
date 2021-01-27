const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuarios");

//Cadastrar um novo Usuário
exports.createOne = (req,res) =>{
  const {email, nome, senha} = req.body;
  const novoUsuario = new Usuario({email, nome, senha});

  novoUsuario.save((error, usuario) =>{
      if(error){
          res.send("Erro ao cadastrar usuário! "+error)
      }
      const response = {
          message: "Usuário cadastrado com sucesso!",
          data: usuario
      };
      res.status(201).json(response);
  });
}

//Listar todos os Usuários
exports.listAll = (req,res) =>{
    Usuario.find({},(error, usuarios) =>{
        if(error){
            res.send("Erro ao listar usuários! "+error)
        }
        const response = {
            message: "Usuários listados com sucesso!",
            data: usuario
        };
        res.json(response);
    })
}

// Lista usuário por ID
exports.showOne = (req,res) => {
    Usuario.findById(req.params.id, (error, usuario) =>{
        if(error){
            res.send("Erro ao listar Usuário"+ error)
        }
        const response = {
            message: "Usuário encontrado com sucesso!",
            data: usuario
        };
        res.json(response);
    })
}

// Login do Usuário
exports.login = async (req,res) => {
    const usuario = await Usuario.findOne({
        email: req.body.email,
        senha: req.body.senha,
      });
    
      console.log(req.body.email + " - " + req.body.senha);
    
      if (usuario !== null) {
        console.log("Login efetuado com Sucesso!");
        res.json(usuario);
      } else {
        console.log("Erro ao efetuar Login!");
        res.status(404);
      }
}

//Atualiza dados de um Usuário
exports.update = (req,res) =>{
    Usuario.findOneAndUpdate({_id: req.params.id}, req.body,{new: true}, (error,usuario) =>{
        if(error){
            res.send("Erro ao atualizar Usuário"+error)
        }
        const response = {
            message: "Dados atualizados com sucesso!",
            data: usuario
        };
        res.json(response);
    })
}

//Deleta um usuário do banco de dados
exports.delete = (req,res) =>{
    Usuario.remove({_id: req.params.id}, (error, usuario) =>{
        if(error){
            res.send("Erro ao deletar o usuário "+error)
        }
        const response = {
            message: "Usuários deletado com sucesso!",
            data: usuario
        };
        res.json(response);
    })
}