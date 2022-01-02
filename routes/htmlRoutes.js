// Call dependencies
const path = require('path');

module.exports = (app) => {

   //Route to load the notes.html file
   app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
   });  
   
   //Route to load the index.html file
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
   });
}