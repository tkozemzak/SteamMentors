const homepage = require("../controllers/homepage.js");
const login = require("../controllers/login.js");
const register = require("../controllers/register.js");
const news = require("../controllers/news.js");

module.exports = function(app) {


//register
app.post('/register', register.register)

//Login
  app.post('/login', login.login)

//news
  app.get("/news", news.news)


}

// function authenticateUser(req, res, next) {
//   if (!req.session.user) {
//     res.redirect('/');
//   } else {
//     next();
//   }
// }
