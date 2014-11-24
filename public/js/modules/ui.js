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
		//
		this.handleZooming();

	},


	updateSymbol : function (name, data) {

		// log(name, data);
		var symbolTotal = $('.symbol--' + name + ' .symbol-total');

		if (symbolTotal.length > 0) {
			symbolTotal[0].innerHTML = data.total;
		}

	},


	handleZooming : function () {

		// only proceed if CSS transforms are supported
		if ( !Modernizr.csstransforms ) { return; }

		var zoomContent = $('.illust-container')[0];

		ZUI = new Zoomer(zoomContent);

	}
};

// the constructor that will do all the work
function Zoomer( content ) {

	// keep track of DOM
	this.content = content;

	// position of vertical scroll
	this.scrolled = 0;
	// zero-based number of sections
	this.levels = 2;

	var body = document.body,
		html = document.documentElement;

	// height of document
	this.docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

	// bind Zoomer to scroll event
	window.addEventListener( 'scroll', this, false);
}

// enables constructor to be used within event listener
// like obj.addEventListener( eventName, this, false )
Zoomer.prototype.handleEvent = function( event ) {
	if ( this[event.type] ) {
		this[event.type](event);
	}
};

// triggered every time window scrolls
Zoomer.prototype.scroll = function( event ) {

	// normalize scroll value from 0 to 1
	this.scrolled = window.scrollY / ( this.docHeight - window.innerHeight );

	var transformValue;

	if (this.scrolled < 0.5) {
		var scale = Math.pow( 3, this.scrolled * this.levels );
		transformValue = 'scale('+scale+')';
	} else {
		var scale = Math.pow( 3, 0.5 * this.levels );
		var percentageTranslate = ((this.scrolled - 0.5) / 0.5);
		// log(this.scrolled, percentageTranslate);
		var translate = -(percentageTranslate * 1000);
		transformValue = 'scale('+scale+') translate('+translate+'px)';
	}

	// log(this.scrolled);

	this.content.style.WebkitTransform = transformValue;
	this.content.style.MozTransform = transformValue;
	this.content.style.OTransform = transformValue;
	this.content.style.transform = transformValue;
};

module.exports = UI;