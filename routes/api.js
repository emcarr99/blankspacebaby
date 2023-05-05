// dependencies for middleware
const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const {readNotes, writeNote, readAndWrite} = require('../lib/notes');
const { json } = require('express');
// render saved notes from json file
router.get('/notes', (req, res) => {
  readNotes('./db/db.json')
  .then((notes) => res.json(JSON.parse(notes)))
});
// display specific note by id and read them -> convert json
router.get('/notes:id', (req, res) => {
  const nID = req.params.id;
  readNotes('./db/db/.json')
  .then((notes) => JSON.parse(notes))
  .then((json) => {
    const result = json.filter((note) => note.id === nID)
    return res.json(result); 
  });
});

router.post('/notes', (req, res) => {
  const {title, text} = req.body

  const newNote = {
    title,
    text,
    id: uuidv4()
  };

  readAndWrite(newNote, './db/db.json');
  res.json(newNote);

  console.log(newNote + 'new note added');
});

// remove individual notes by id uuid
router.delete("/notes/:id", (req, res) => {
  console.log("Note successfully deleted");
  const noteId = req.params.id;
  readNotes("./db/db.json")
    .then((notes) => JSON.parse(notes))
    .then((json) => {
      const result = json.filter((note) => note.id !== noteId);

      writeNote("./db/db.json", result);

      res.json({ message: "deleted" });
    });
});
  

// export router
module.exports = router;