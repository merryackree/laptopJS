function scroll() {
	

function smoothScroll(anchor, duration){

            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            if ( increments >= 0 ) {

                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            else {

                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            var runAnimation = setInterval(animateScroll, 16);
       
        };

        	let menu = document.getElementsByTagName('ul')[0],
							scrollToggle = menu.getElementsByTagName('a');

        [].forEach.call(scrollToggle, function (toggle) {

            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);

                if (dataTarget) {
                    smoothScroll(dataTarget, 500);
                }

            }, false);

        });
}

module.exports = scroll;