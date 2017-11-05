const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./users/user.routes');
const database = require('./database');
const app = express();

app.use(bodyParser.json());
app.database = database();

userRoutes(app);

module.exports = app;