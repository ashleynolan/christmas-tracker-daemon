
var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	config,
	sharedConfig;

var sharedConfig = {
	root: rootPath,
	twitter: {
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN,
		access_token_secret: process.env.TWITTER_ACCESS_SECRET
	}
};

module.exports = {
	local: {
		mode: 'local',
		clientURL: 'http://localhost:5000',
		port: 3002,
		app: {
			name: 'Twitter vote counter - local'
		},
		db : {
			path: 'mongodb://localhost/hashtag-watcher'
		},
		global: sharedConfig
	},

	dev: {
		mode: 'development',
		clientURL: 'http://localhost:3002',
		port: 3002,
		app: {
			name: 'Twitter vote counter - Dev'
		},
		db : {
			path: 'mongodb://localhost/hashtag-watcher'
		},
		global: sharedConfig
	},

	prod: {
		mode: 'production',
		clientURL: 'https://christmas-tracker.herokuapp.com',
		port: 3002,
		app: {
			name: 'Twitter vote counter - Prod'
		},
		db : {
			path: process.env.MONGOLAB_URI
		},
		global: sharedConfig

	},

	hosts: [
		{
			domain: 'christmastracker.local',
			target: ['localhost:3001']
		}
	]
};
