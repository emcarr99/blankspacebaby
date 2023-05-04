// add dependencies 
const express = require('express');
const path = require('path');

// connect to route files
const routeDir = require('./routes/index');
const api = require('./routes/api');

// turn on express
const app = express();

// set port to local host or heroku choice
const PORT = process.env.PORT || 3001;

// urlencoded/JSON form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api', api);
app.use('/', routeDir);

// GET route homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html')));

  
// listener verify PORT
app.listen(PORT, () => {
  console.log(`Live on ${PORT}!`);
});