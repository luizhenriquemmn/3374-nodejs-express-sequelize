/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const dataSource = require("../models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }
}

module.exports = Services;
