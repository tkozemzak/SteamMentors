const knex = require("../db/knex.js");
const axios = require("axios")
const key = require("../ignore/Key")

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

  register: function(req, res)  {
    console.log("hit server",key, req.body);
    axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${req.body.steam_url}`).then((results)=>{
      console.log("results after axios.get", results.data.response.players[0]);
    const newUser = knex('user').insert({
        "steam_id": results.data.response.players[0].steamid,
        "steam_name": results.data.response.players[0].personaname,
        "email" : req.body.email,
        "password": req.body.password || "hello"
      })
      // console.log("newUser", newUser);
       res.json(newUser)
    })


  }

}
