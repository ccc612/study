/**
 * 
 */

try {
var page = new XMLHttpRequest();

page.onload = function() {
	postMessage(page.responseText);
};

function messageHandler(e) {
	if (e.data.key) {
		page.open('GET', '../' + e.data.key, true);
		page.send();
	}		
}

addEventListener("message", messageHandler, true);
} catch(exception) {
	throw exception;	
}