
/**
 * Declare our Module dependencies at the top
 */

var express = require('express'),
	compress = require('compression'),
	timeout = require('connect-timeout'),
	pkg = require('package.json');


var server = {

	init : function (app, config) {
		app.set('showStackError', true);

		app.set("view options", { layout: false });

		app.set('port', process.env.PORT || 3001);
	}

};

module.exports = server.init;
