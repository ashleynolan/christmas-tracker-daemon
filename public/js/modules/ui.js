/*
	UI.js
	Example module to show how to include other JS files into you browserify build
*/

// dependencies for this module go here
var $ = require('traversty'),
	qwery = require('qwery'),

	d3 = require('d3');



//give us old IE selector support (<8)
$.setSelectorEngine(qwery);

var UI = {
	init : function () {
		console.debug('KO.UI module is being initialised');

		// d3.selectAll(".symbol").style("color", function() {
  // 			return "hsl(" + Math.random() * 360 + ",100%,50%)";
		// });

	},


	updateSymbol : function (name, data) {

		//log(name, data)
		var symbolTotal = $('.symbol--' + name + ' .symbol-total');

		symbolTotal[0].innerHTML = data.total;

	}
};

module.exports = UI;