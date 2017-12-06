'use strict';

// Load the express library from node_modules
const express = require('express');

// Instantiate express so we can use its functionality
const app = express();

// Designate a port to serve our app on
// "process" is in the Node environment, use a port if it is set up, or set your own
// const PORT = process.env.PORT || 3000;
// to set up your own PORT in your terminal type: export PORT=3000
const PORT = process.env.PORT;

// Tell the server which directory to serve files from
app.use(express.static('./public'));

// Set up a route to send a message
app.get('/demi', (request, response) => {
  response.send('<h1>This will show up in the browser</h1>');
  console.log('This will show up in Node terminal window');
})

// Set up a route to send a file
app.get('/demi', (req, res) => {
  res.sendFile('/public/demi.html', {root: '.'});
  res.sendFile('demi.html', {root: './public'});
})

// Can we perform other methods on the same route?

// Start the app so it listens for changes
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
