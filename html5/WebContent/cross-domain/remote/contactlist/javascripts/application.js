window.onload = function() {
	document.querySelector("#contacts").onclick = function(e) {
		var email = document.querySelector("li:hover > p.email").innerHTML;
		var origin = "*";
		
		window.parent.postMessage(email, origin);
	}
}