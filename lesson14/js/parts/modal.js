function modal() {
	


 let more =  document.querySelector('.more'),
 		 overlay = document.querySelector('.overlay'),
 		 popup = document.querySelector('.popup-close'),
 		 desc_btn = document.querySelectorAll('.description-btn');

 		 more.addEventListener('click', function() {
 		 		overlay.style.display = 'block';
 		 		document.body.style.overflow = 'hidden';
 		 	
 		 });

 		 popup.addEventListener('click', function() {
 		 		overlay.style.display = 'none';
 		 		document.body.style.overflow = '';

 		 });

 		 for (let i = 0; i < desc_btn.length; i++){
 		 	 	desc_btn[i].addEventListener('click', function() {
 		 		overlay.style.display = 'block';
 		 		document.body.style.overflow = 'hidden';
 		 }); 	
 		 }

 		 more.addEventListener('touchstart', function(e) {
 		 		e.preventDefault();
 		 		overlay.classList.remove('fade');
 		 	 	overlay.style.display = 'block';
 		 		document.body.style.overflow = 'hidden';
 		 });
}

module.exports = modal;