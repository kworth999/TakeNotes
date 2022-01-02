// Call dependencies
const fs = require('fs');
const {v4: uuidv4 } = require('uuid');

// Define class for db handling
class Storage {

   read() {
      return JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
   }

   getNotes() {
      return this.read();
   }

   postNote(note) {
      note.id = uuidv4();
      const notes = this.read();
      notes.push(note);
      fs.writeFileSync('db/db.json', JSON.stringify(notes));
      return note;
   }

   deleteNote(id) {
      const allNotes = this.getNotes();
      const retainedNotes = allNotes.filter(note => note.id != id);
      fs.writeFileSync('db/db.json', JSON.stringify(retainedNotes));
      return retainedNotes
   }
}

module.exports = Storage;