
var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	config,
	sharedConfig;

var sharedConfig = {
	root: rootPath
};

module.exports = {
	local: {
		mode: 'local',
		port: 3002,
		app: {
			name: 'Twitter vote counter - local'
		},
		twitter: require('./config-twitter').local,
		db : {
			path: 'mongodb://localhost/hashtag-watcher'
		},
		global: sharedConfig
	},

	dev: {
		mode: 'development',
		port: 3002,
		app: {
			name: 'Twitter vote counter - Dev'
		},
		twitter: require('./config-twitter').dev,
		db : {
			path: 'mongodb://localhost/hashtag-watcher'
		},
		global: sharedConfig
	},

	prod: {
		mode: 'production',
		port: 3002,
		app: {
			name: 'Twitter vote counter - Prod'
		},
		twitter: require('./config-twitter').prod,
		db : {
			path: process.env.MONGOLAB_URI
		},
		global: sharedConfig

	},

	hosts: [
		{
			domain: 'twitterpoll.local',
			target: ['localhost:3001']
		}
	]
};
