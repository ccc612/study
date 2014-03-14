window.onload = function() {
	if(window.postMessage){
		window.onmessage = function(event){
			if(event.origin === 'http://localhost:8080') {
				document.querySelector("#to").value = event.data;
			}
		};
	}
};























