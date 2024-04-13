const database = require("../models");

class PessoaController {
  static async pegaTodas(req, res) {
    try {
      console.log("teste");
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    } catch (erro) {
      console.log(erro);
    }
  }
}

module.exports = PessoaController;
