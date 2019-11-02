var path = require('path');
var router = require('express').Router();

// https://expressjs.com/en/guide/routing.html

// "/notes" responds with the notes.html file
// TODO: Define a route for your `notes.html` file
//    and serve it from `public/`

console.log("Line 10 HTML ROUTES")

router.get('/', function(req, res) {
  console.log("Home page sent");
  res.sendFile(path.join(__dirname, './index.html'));
});

router.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, './notes.html'));
});
// https://expressjs.com/en/4x/api.html#app.get.method
// https://expressjs.com/en/api.html#res.sendFile

// All other routes respond with the index.html file
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

module.exports = router; 

