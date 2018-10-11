const knex = require("../db/knex.js");
const axios = require("axios")
const key = require('../ignore/Key')

module.exports = {

  random: function(req, res) {
    axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${req.params.id}&count=8&maxlength=200&format=json`).then((results) => {
      let theGame = results.data.appnews.appid
      axios.get(`http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${key}&appid=${theGame}`).then((newResults)=>{
        let newArr = []
        newArr.push("filler", results.data, newResults.data.game.gameName)
        res.json(newArr)

      })
    })
  },
  everything: function(req, res) {
    axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${req.params.id}`).then((results)=>{
      let newArr = []
       newArr.push(results.data.response.games[Math.floor(Math.random()*results.data.response.games.length)].appid)
       axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${newArr[0]}&count=8&maxlength=200&format=json`)
      .then((results)=>{
        newArr.push(results.data)
        axios.get(`http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${key}&appid=${newArr[0]}`).then((results)=>{
          newArr.push(results.data.game.gameName)
          res.json(newArr)
        })
      })
    })

  },

  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/')
  }
}
