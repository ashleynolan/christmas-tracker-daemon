
/*!
 * Declare our Module dependencies at the top
 */

var async = require('async'),
	symbol = require('./controllers/symbolController');


/**
 * Expose routes
 */

module.exports = function (app) {

	// assume "not found" in the error msgs
	// is a 404. this is somewhat silly, but
	// valid, you can do whatever you like, set
	// properties, use instanceof etc.
	app.use(function(err, req, res, next){
		// treat as 404
		if (err.message
			&& (~err.message.indexOf('not found')
			|| (~err.message.indexOf('Cast to ObjectId failed')))) {
			return next();
		}

		// log it
		// send emails if you want
		console.error(err.stack);
	});

};