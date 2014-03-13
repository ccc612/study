var audio = null;

var start = null;
var mute = null;
var pause = null;
var volume = null;
var range = null;
var currentTime = null;

function initFunc() {
	audio = document.createElement('audio');
	audio.src =  'johann_sebastian_bach_air.mp3';
	audio.load();
	audio.autobuffer = true;
	
	start = document.querySelector('#start');
	pause = document.querySelector('#pause');
	mute = document.querySelector('#mute');
	volume = document.querySelector('#volume');
	range = document.querySelector('#range');
	currentTime = document.querySelector('#currentTime');
	
	start.onclick = startHandler;	
	pause.onclick = pauseHandler;	
	mute.onclick = muteHandler;
	volume.onchange = volumeHandler;
	range.onchange = rangeHandler;
}

function startHandler() {
	
	if(audio.currentTime === 0) {
		audio.volume = volume.value;
		range.max = Math.floor(audio.duration);
	}
	
	audio.play();
	
	var minutes = '';
	var seconds = '';
	
	var intervalID = setInterval(function() {
		if(!audio.paused) {
			range.value = Math.floor(audio.currentTime);
			
			minutes = parseInt(range.value / 60);
			seconds = parseInt(range.value % 60);
			
			if(minutes < 10 && seconds < 10) {
				minutes = '0' + minutes;
				seconds = '0' + seconds;
			}
			else if(minutes < 10) {
				minutes = '0' + minutes;
			}
			else if(seconds < 10) {
				seconds = '0' + seconds;
			}
			
			currentTime.value = minutes + ':' + seconds;
		}
		
		if(range.value === range.max) {
			clearInterval(intervalID);
		}
	}, 1000);
}

function pauseHandler() {
	audio.pause();
}

function muteHandler() {
	if(audio.muted) {
		audio.muted = false;
	}
	else {
		audio.muted = true;
	}
}

function volumeHandler() {
	audio.volume = volume.value;
}

function rangeHandler() {
	audio.currentTime = range.value;
}







