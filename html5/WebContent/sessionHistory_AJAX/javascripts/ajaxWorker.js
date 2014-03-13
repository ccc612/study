try {
	var xhr = new XMLHttpRequest();

	xhr.onload = function(event) {
		postMessage(xhr.responseText);
	};

	onmessage = function(event) {
		var url = '../' + event.data.substring(1) + '.html';
		xhr.open('GET', url, true);
		xhr.send();	
	};
}
catch(exception) {
	throw exception;
}
