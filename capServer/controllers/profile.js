const axios = require("axios")
const knex = require("../db/knex.js");
const key = "38E1B1D59915F46DC70BC35EB85EA54B"

module.exports = {

  games: function(req, res) {
    axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${req.params.id}`).then((results)=>{
      console.log('results of getownedgames', results.data);
      let gamesOnSteam = results.data.response.games ? results.data.response.games.map((item)=>{
        return item.appid
      }) : null
        knex("user").where("steam_id", req.params.id).then((results)=>{
          let currentUser = results[0].id
          knex("game").where("user_id", currentUser).then((results)=>{
            let dbGameIds = results.map((item)=>{
              return item.steam_app_id
            })
            let result = {}
              for(let i=0; i<gamesOnSteam.length; i++){
                result[gamesOnSteam[i]] = 1
              }

              for(let i=0; i<dbGameIds.length; i++){
                if(result[dbGameIds[i]]){
                  delete result[dbGameIds[i]]
                }
              }
              let newArr = []
                for(let id in result){
                  newArr.push({
                    steam_app_id: id,
                    user_id: currentUser,
                    is_mentor: false
                  })

                }
                newArr.length ? knex.batchInsert("game", newArr, newArr.length).then(()=>{
                  knex("game").where("user_id", currentUser).then((results)=>{
                    res.json(results)
                  })
                }) : knex("game").where("user_id", currentUser).then((results)=>{
                  console.log('final results', results);
                  res.json(results)
                })

          })
        })
    })
  },
  fetchMessages: function(req, res){
    knex("mentor_request").where("mentor_id", req.params.id).then((results)=>{
      res.json(results)
    })
  }

}
