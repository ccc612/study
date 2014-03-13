var w = new Worker('javascripts/ajaxWorker.js');
var currentSection = '';

w.onmessage = function(event) {
	document.querySelector('#content').innerHTML = event.data;
};

w.onerror = function(event) {
	alert(event.message);
};

window.history.pushState( {tab: '#welcome'}, '#welcome');

window.onpopstate = function(event) {		
	if(event.state) {
		var tab = (event.state['tab']);
		w.postMessage(tab);
	}
};

window.onload = function() {
	w.postMessage('#welcome');
	
	document.querySelector('nav ul').onclick = function(event) {
		if(event.target.getAttribute('href')) {
			event.preventDefault();
			var href = event.target.getAttribute('href');
			
			if(currentSection != href) {
				currentSection = href;
				w.postMessage(href);
				
				var stateObject = {tab: href};          
				window.history.pushState(stateObject, href);
			}
		}
	};
};









