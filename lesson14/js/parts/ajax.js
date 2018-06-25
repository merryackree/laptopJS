function ajax(){
	


	let message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо! Скоро мы с вами свяжемся';
			message.failure = 'Что-то пошло не так';

	let form1 = document.getElementsByClassName('main-form')[0],	
			form2 = document.getElementById('form'),
			input1 = form1.getElementsByTagName('input'),
			input2 = form2.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

	function sendToServer(targetForm, targetInput) {

		targetForm.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open("POST", "server.php");
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(targetForm);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			} 
		}

		for (let i = 0; i < targetInput.length; i++){
			targetInput[i].value = '';
		}
	}

	form1.addEventListener('submit', function(e){
		e.preventDefault();
		sendToServer(form1,input1);
	});

	form2.addEventListener('submit', function(e){
		e.preventDefault();
		sendToServer(form2,input2);
	});

}

module.exports = ajax;