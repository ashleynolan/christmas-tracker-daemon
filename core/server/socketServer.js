

var io = require('socket.io'),//socket.io - used for our websocket connection

	clientio  = require('socket.io-client'),

	twitter = require('core/server/controllers/twitterApiLinkController');


var SocketServer = {
	client : null,

	init : function (app, server, config) {

		//Start a Socket.IO listen
		var socketServer = io.listen(server);
		_self.client = clientio.connect(config.clientURL);

		//  ==================
		//  === ON CONNECT ===
		//  ==================

		//If a client connects, give them the current data that the server has tracked
		//so here that would be how many tweets of each type we have stored
		socketServer.sockets.on('connection', function(socket) {
			console.log('twitter.js: New connection logged');

			//Once we get a connection from our FE app, send it out the current state
			_self.emitCurrentState();
		});

		//  ============================
		//  === SERVER ERROR LOGGING ===
		//  ============================

		socketServer.sockets.on('close', function(socket) {
			console.log('twitter.js: socketServer has closed');
		});

		socketServer.client = SocketServer.client;

		return socketServer;
	},

	emitCurrentState : function () {

		console.log('sending new state');
		_self.client.emit('symbolState', twitter.state);

	}
};

var _self = SocketServer;

module.exports = SocketServer.init;