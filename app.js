const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const trashcanRoutes = require('./api/routes/trashcans');


app.use(bodyParser.json());
app.use('/trashcans', trashcanRoutes);

module.exports = app;
