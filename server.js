// Call dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Map to routing files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`App listening on: http://localhost:${PORT}`));