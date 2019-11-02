// Dependencies
// =============================================================
var express = require("express");
//path is part of node standard library
var path = require("path");

var connection = require("./db/connection");
//console.log(connection);

// TODO: Import your route files from `route/`

// Sets up the Express App
// =============================================================
//Again, this is where we have to initialize express.
var app = express();
//TODO: This will need to change before it's loaded to Heroku. When we use this in Heroku, we can't define the PORT Number, Heroku will assign.

//This line allows you to deploy on localhost and if it's deployed on Heroku, so no changes need to be made.
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("Line 24 SERVER");
// TODO: Mount your HTML and API routes
// https://expressjs.com/en/api.html#app.use
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


//require("./routes/htmlRoutes")(app);
//require("./routes/apiRoutes")(app);


// Starts the server to begin listening and we know it's running from the console.log
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });