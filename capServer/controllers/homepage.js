const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  checkUser: function(req, res) {
    knex("user").where("id", req.params.id).then((results) => {
      console.log("works");
    })
  },
  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/')
  }
}
