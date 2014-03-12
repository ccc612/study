if(!('Worker' in window)) {
	alert('Current browser is not supporting webworker!');
}

var worker = new Worker('javascripts/worker.js');
worker.onmessage = function (event) {
	document.querySelector('#content').innerHTML = event.data;
};
worker.onerror = function (e) {
	alert(e.message);
};

var currentSession = null;

function supportsHistory() {
	return !!(window.history && window.history.pushState);
}

window.onload = function(){
	document.querySelector('nav ul').onclick = function(event) {
		var target = event.target;
		if(target.getAttribute('href')) {   
			event.preventDefault();
			var href = target.getAttribute('href');
			
			if(currentSession != href) {				
				worker.postMessage({key: href});

				if (supportsHistory()) {
					window.history.pushState({tab:href}, href);
					currentSession = href;
				}
			}
		}
	};
	
	worker.postMessage({key: 'welcome.html'});
};

if (supportsHistory()) {
	window.history.pushState({tab:"#welcome"}, "#welcome");
	
	window.onpopstate = function (event) {
		if(event.state) {			
			worker.postMessage({key:event.state.tab});
		}
	};
}