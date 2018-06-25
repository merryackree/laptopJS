function slider() {
	

	let dotsWrap = document.querySelector('.slider-dots'),
			slides = document.getElementsByClassName('slider-item'),
			dots = dotsWrap.getElementsByClassName('dot'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			slideIndex = 1;


	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		} else if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
		
	}

	showSlides(slideIndex);

	function plusSlide(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	prev.addEventListener('click', function(){
		plusSlide(-1);
	});

	next.addEventListener('click', function(){
		plusSlide(1);
	});

	dotsWrap.addEventListener('click', function(e) {
		for (let i = 0; i < dots.length + 1; i++){
				if(e.target.classList.contains('dot') && event.target == dots[i-1]){
					currentSlide(i);
				}
		}
	});

	function autoSlide() {
		showSlides(slideIndex += 1);
	}

	setInterval(autoSlide, 6000);
}

module.exports = slider;