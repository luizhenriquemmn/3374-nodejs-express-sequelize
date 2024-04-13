/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const { Router } = require("express");

const PessoaController = require("../controllers/PessoaController.js");

const pessoaController = new PessoaController();

const router = Router();

//router.get("/pessoas", PessoaController.pegaTodas);
router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));

module.exports = router;
