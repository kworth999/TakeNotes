const fs = require('fs');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
  

router.get('/api/notes', (req, res) => {
    try {
        const jsonString = fs.readFileSync('./db/db.json', 'utf-8');
        const db = JSON.parse(jsonString);
        res.json(db);
    }   catch (err) {
        console.log(err);
    }
  });

  


  router.post('/api/notes', (req, res) => {
    try {
        const jsonString = fs.readFileSync('./db/db.json', 'utf-8');
        const db = JSON.parse(jsonString);
        const noteData = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4(),
        };
        db.push(noteData);
        const parsedNotes = JSON.stringify(db);   
        fs.writeFileSync('./db/db.json', parsedNotes);
        res.json({ ok: true });
    }   catch (err) {
        console.log(err);
    }
  });


  router.delete('/api/notes/:id', (req, res) => {
    try {
        const jsonString = fs.readFileSync('./db/db.json', 'utf-8');
        const db = JSON.parse(jsonString);
        const noteId = req.params.id
        const filteredNotes = db.filter(note => note.id !== noteId)
        const parsedNotes = JSON.stringify(filteredNotes);   
        fs.writeFileSync('./db/db.json', parsedNotes);
        res.json({ ok: true });
    }   catch (err) {
        console.log(err);
    }
  });

  module.exports = router
