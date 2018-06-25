function timer() {
	let deadline = '2018-06-23';

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
				seconds = addZero (Math.floor( t / 1000 % 60)),
				minutes = addZero (Math.floor( t / 1000 / 60 % 60)),
				hours = addZero(Math.floor( t / (1000 * 60 * 60)));

				if (t == 0 || t < 0){
					return {
					'total': 0,
					};
				} else {
					return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds

				};
				}
				
	};

	function setClock(id, endTime) {

		let timer = document.getElementById(id);
		    hours = document.querySelector('.hours'),
			  minutes = document.querySelector('.minutes'),
			  seconds = document.querySelector('.seconds');

			  function updateClock() {

			  	let t = getTimeRemaining(endTime);
			  		if (t.total == 0) {
			  		clearInterval(timeInterval);
			  		hours.innerHTML = '00',
			  		minutes.innerHTML = '00',
			  		seconds.innerHTML = '00';
			  		} else {
			  		hours.innerHTML = t.hours,
			  		minutes.innerHTML = t.minutes,
			  		seconds.innerHTML = t.seconds;
			  		}	
			  }

			  let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);


	function addZero(n) {
		if (n < 10) {
		n = '0' + n;	
		}
		return n
	}
}


module.exports = timer;