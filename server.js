// Get dependencies
const express = require('express');
const path = require('path');
const app = express();
const http = require('http');

const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
const io = require('socket.io')(server);

const allEvents = ['user-added', 'chat-message'];
let users = [];
io.on('connection', function(socket){
	
	socket.on('disconnect', function(){
	});

	allEvents.forEach(event => {
		socket.on(event, function(eventData){
			console.log(event, eventData);
			if (event === 'user-added') {
				users.push(eventData);
				eventData = users;
			}
			socket.broadcast.emit(event, eventData);
		});
	});
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));