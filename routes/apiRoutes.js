// Call dependencies
const Storage = require('../db/db');

// Define variable from Storage class to access db-related functions
const store = new Storage;

module.exports = (app) => {

   // API route to read db.json file and return all saved notes to the client
   app.get('/api/notes', (req, res) => {
      const notes = store.getNotes();

      if (!notes) {
         res.statusCode(500);
      }
      return res.json(notes);
   });   
   
   // API route to store a new note to the db.json file and return the new note to the client
   app.post('/api/notes', (req, res) => {
      const newNote = store.postNote(req.body);
      return res.json(newNote);
   })
      
   // API route to delete a note by reading notes from the db.json file, matching the appropriate ID, removing the corresponding note, and refreshing the list
   app.delete('/api/notes/:id', (req, res) => {
      const retained = store.deleteNote(req.params.id);
      return res.json(retained);
   })

}