function calc() {
	
	let peopleInput = document.getElementsByClassName('counter-block-input')[0],
			daysInput = document.getElementsByClassName('counter-block-input')[1],
			place = document.querySelector('#select'),
			totalSum = document.getElementById('total'),
			people = null,
			days = null;


	blockChars(peopleInput);
	blockChars(daysInput);

	peopleInput.addEventListener('change', function() {

					people = this.value;
					if (days == null) {
						totalSum.innerHTML = 0;
					} else {
						calcSum(people,days);
					}
		
	});

	daysInput.addEventListener('change', function() {

				days = this.value;
					if (people == null) {
						totalSum.innerHTML = 0;
					} else {
						calcSum(people,days);
					}
 				
	});	

	place.addEventListener('change', function() {
			calcSum(people,days);
	});

		function calcSum(x,y) {
		let start = parseInt(totalSum.innerHTML);
		let value = place.options[place.selectedIndex].value;
		let end = x * y * value * 2000;

		let interval = setInterval(function() {
        if (start == end) { 
        clearInterval(interval);
      	} else if (start < end) {
        start = start + 100;
        totalSum.innerHTML = start;
      	} else {
      	start = start - 100;
        totalSum.innerHTML = start;
      	}
    }, 5);

		}


	function blockChars(input){
		let invalidChars = ['-', '+', 'e', ',' ,'.', ' '];
		input.addEventListener('keydown', function(e){
			if(invalidChars.includes(e.key)) {
				e.preventDefault();
			}
		});
	}


}

module.exports = calc;