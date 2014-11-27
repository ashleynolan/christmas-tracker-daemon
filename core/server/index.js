
/**
 * Declare our Module dependencies at the top
 */

var express = require('express'),
	timeout = require('connect-timeout'),
	pkg = require('package.json');


var server = {

	init : function (app, config) {
		app.set('showStackError', true);

		app.set('views', 'core/client/views');
		app.set('view engine', 'jade');
		app.set("view options", { layout: false });

		app.set('port', process.env.PORT || 3001);

		// expose package.json to views
		app.use(function (req, res, next) {
			res.locals.pkg = pkg;
			next();
		});
	}

};

module.exports = server.init;
