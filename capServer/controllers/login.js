const knex = require("../db/knex.js");

module.exports = {

login: function(req, res){
    knex('user').where('email', req.body.email).then((results)=>{
      let user = results[0];
      if(user && user.password === req.body.password){
        res.json(user)
      } else {
        res.sendStatus(400);
      }
    })
  }
}
