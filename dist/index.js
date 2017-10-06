var express = require('express'),
app = express(),
mongoose = require('mongoose')
port = process.env.PORT || 3000
task = require('./api/models/userModel'),
bodyParser = require('body-parser'),

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/userdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route

app.listen(port)

console.log("user list RESTful API started on " + port)
