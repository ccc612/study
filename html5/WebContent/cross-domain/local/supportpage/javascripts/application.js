window.onload = function() {
	if(window.postMessage){
		window.onmessage = function(event){
			if(event.origin === 'http://ccc612.github.io') {
				document.querySelector("#to").value = event.data;
			}
		};
	}
	
	document.querySelector("#supportform").onsubmit = function(e) {
		event.preventDefault();
		var origin = "*";
		
		var message = document.querySelector("#to").value;
		
		document.querySelector("#contactsFrame")
			.contentWindow.postMessage(message, origin);
		
		document.querySelector("#to").value = '';
		document.querySelector("#from").value = '';
		document.querySelector("#message").value = '';
		
	};
	
};























