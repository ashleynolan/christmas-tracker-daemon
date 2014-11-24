

var io = require('socket.io'); //socket.io - used for our websocket connection


var socketServer = {

	init : function (app, server) {

		io.enable('browser client minification');  // send minified client
		// io.enable('browser client etag');          // apply etag caching logic based on version number
		io.enable('browser client gzip');          // gzip the file
		io.set('log level', 1);                    // reduce logging

		//Start a Socket.IO listen
		var socketServer = io.listen(server);

		//  ==================
		//  === ON CONNECT ===
		//  ==================

		//If a client connects, give them the current data that the server has tracked
		//so here that would be how many tweets of each type we have stored
		socketServer.sockets.on('connection', function(socket) {
			console.log('twitter.js: New connection logged');

			//needs to emit a state from our twitter controller
			//socket.emit('data', twitterController.getState);
		});

		//  ============================
		//  === SERVER ERROR LOGGING ===
		//  ============================

		socketServer.sockets.on('close', function(socket) {
			console.log('twitter.js: socketServer has closed');
		});

		return socketServer;
	}
}

module.exports = socketServer.init;