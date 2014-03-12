/**
 * 
 */

var obj = {	num : 0 };
var no = 0;
var del = 0;
var workers = [];

function timedCount () {
	++obj.num;
	postMessage(obj);
		
	setTimeout("timedCount()", 500);
}

function messageHandler(e) {
	if (e.data.key === "subStart") {
		timedCount();
	} else if (e.data.key === "start") {
		workers[no] = new Worker("demoWorker.js");
		workers[no].onmessage = function (event) {
			postMessage(event);
		}
		workers[no].postmssage({key:"subStart"});
		
		++no;
	} else if (e.data.key === "stop") {
		workers[del].terminate();		
		++del;
	}
		
}

addEventListener("message", messageHandler, true);
