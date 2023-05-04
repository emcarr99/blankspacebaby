// add dependencies 
const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});


// exports index to be accessible to other files
module.exports = router