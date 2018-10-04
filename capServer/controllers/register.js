const knex = require("../db/knex.js");
const axios = require("axios")
const key = "38E1B1D59915F46DC70BC35EB85EA54B"

module.exports = {

  register: function(req, res)  {
    axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${req.body.steam_url}`).then((results)=>{
      let newUser = {
          "steam_id": results.data.response.players[0].steamid,
          "steam_name": results.data.response.players[0].personaname,
          "email" : req.body.email,
          "password": req.body.password
        }
    knex('user').insert(newUser).returning('*')
      .then(inserted =>  {
        return res.json(inserted)
      })
    })
  }

}
