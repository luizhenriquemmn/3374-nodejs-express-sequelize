/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
//const database = require("../models");

const Controler = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controler {
  constructor() {
    super(pessoaServices);
  }
}

module.exports = PessoaController;
