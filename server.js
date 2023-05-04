// add dependencies 
const express = require('express');
const path = require('path');

// connect to route files
const routDir = require('./routes/index');
const api = require('./routes/api');

// turn on express
const app = express();

// set port to local host or heroku choice
const PORT = process.env.PORT || 3001;

// urlencoded/JSON form data

app.use(express.static(path.join(__dirname, "public")));

// GET route homepage

// listener verify PORT
app.listen(PORT, () => {
  console.log(`Live on ${PORT}!`);
});