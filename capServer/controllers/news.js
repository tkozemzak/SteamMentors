const knex = require("../db/knex.js");
const axios = require("axios")

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  news: function(req, res) {
    axios.get(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=6&maxlength=300&format=json`).then((results) => {
      console.log("works", results.data);
      res.json(results.data)
    })
  },
  logout: function(req, res) {
    req.session.destroy();
    res.redirect('/')
  }
}
