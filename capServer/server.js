// const express = require("express");
// const path = require("path");
// const app = express();
// const bodyParser = require('body-parser');
// const port = process.env.PORT || 8000;
// app.use(bodyParser.json({
//   extended: true
// }));
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
//
// app.use('/static', express.static(path.join(__dirname, 'public')))
//
//
// require('./config/sessions')(app);
//
//
// var routes_setter = require('./config/routes.js');
// routes_setter(app);
//
// app.listen(port, function() {
//   console.log('Listening on', port);
// });

const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/sessions')(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
