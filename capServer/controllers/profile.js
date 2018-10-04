const axios = require("axios")
const knex = require("../db/knex.js");
const key = "38E1B1D59915F46DC70BC35EB85EA54B"

module.exports = {
  games: function(req, res) {
    axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${req.params.id}`).then((results)=>{
        res.json(results.data.response.games)
    })
  }

}
