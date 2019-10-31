// Dependencies
// =============================================================
var express = require("express");
//path is part of node standard library
var path = require("path");

var connection = require("./db/connection");
//console.log(connection);

// Sets up the Express App
// =============================================================
//Again, this is where we have to initialize express.
var app = express();
//TODO: This will need to change before it's loaded to Heroku. When we use this in Heroku, we can't define the PORT Number, Heroku will assign.

//This line allows you to deploy on localhost and if it's deployed on Heroku, so no changes need to be made.
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Starts the server to begin listening and we know it's running from the console.log
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });