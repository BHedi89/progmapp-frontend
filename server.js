//Install express server
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5001;

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/progmapp-frontend'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/progmapp-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
