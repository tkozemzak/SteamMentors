const knex = require("../db/knex.js");

module.exports = {
  checkUser: function(req, res) {
    knex("user").where("id", req.params.id).then((results) => {
    })
  },
  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/')
  }
}
