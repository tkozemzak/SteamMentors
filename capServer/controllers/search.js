const axios = require("axios")
const knex = require("../db/knex.js");
const key = "38E1B1D59915F46DC70BC35EB85EA54B"

module.exports = {
  searchUsers: function(req, res) {
    knex("user").where("steam_name", "like", `%${req.body.searchInput}%`).then((results)=>{
      let promiseArr = []
      for(let i=0; i<results.length; i++){
        promiseArr.push(axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${results[i].steam_id}`))
      }
      Promise.all(promiseArr).then((results)=>{
        let finalArr = []
        for(let j=0; j<results.length; j++){
          finalArr.push(results[j].data.response.players)
        }
        res.send(finalArr)
      })
    })
  },
  message: function(req, res) {
console.log("req.body", req.body);
    knex.insert(req.body).into("mentor_request").then(()=>{
      res.json("Sent!")
    })
  }

}
