window.addEventListener('DOMContentLoaded', function(){

	let tab = require('./parts/tab.js');
	let modal = require('./parts/modal.js');
	let ajax = require('./parts/ajax.js');
	let slider = require('./parts/slider.js');
	let classConstructor = require('./parts/classConstructor.js');
	let calc = require('./parts/calc.js');
	let timer = require('./parts/timer.js');
	let scroll = require('./parts/scroll.js');

	tab();
	modal();
	ajax();
	slider();
	classConstructor();
	calc();
	timer();
	scroll();


});

