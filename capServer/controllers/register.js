const knex = require("../db/knex.js");
const axios = require("axios")
const key = "38E1B1D59915F46DC70BC35EB85EA54B"

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

  register: function(req, res)  {
    console.log("hit server",key, req.body);
    axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${req.body.steam_url}`).then((results)=>{
      console.log("results after axios.get", results.data.response.players[0]);
      let newb = {
          "steam_id": results.data.response.players[0].steamid,
          "steam_name": results.data.response.players[0].personaname,
          "email" : req.body.email,
          "password": req.body.password || "hello"
        }
        console.log('le newwwwb OK',newb)
    knex('user').insert(newb).returning('*')
      .then(inserted =>  {
        console.log(inserted)
        return res.json(inserted)
      })
      // console.log("newUser", newUser);
    })


  }

}
