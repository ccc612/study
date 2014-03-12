function supportsHistory() {
	return !!(window.history && window.history.pushState);
}

function visibleFromHidden(tab) {
	var hidden = document.querySelector(tab);
     
	hidden.setAttribute('class', 'visible');
	hidden.style.display = 'block';
}

function hiddenFromVisible() {
	var visible = document.querySelector('.visible');      
	visible.setAttribute('class', 'hidden');
	visible.style.display = 'none';
}

window.onload = function(){
	var welcome = document.querySelector('#welcome');
	var services = document.querySelector('#services');
	var about = document.querySelector('#about');
	var contact = document.querySelector('#contact');
	
	var arry = [services, about, contact];
	arry.forEach(function(element) {
		element.style.display = 'none';
		element.setAttribute('class', 'hidden');
	});
	
	welcome.setAttribute('class', 'visible');

	document.querySelector('nav ul').onclick = function(event) {
		var target = event.target;
		if(target.getAttribute('href')) {   
			event.preventDefault();
			var href = target.getAttribute('href');      
			if(document.querySelector(href).getAttribute('class') === 'hidden') {
				hiddenFromVisible();
				visibleFromHidden(href);
				
				if (supportsHistory())
					window.history.pushState({tab:href}, href);
			}
		}    
	};	
};

if (supportsHistory()) {
	window.history.pushState({tab:"#welcome"}, "#welcome");
	
	window.onpopstate = function (event) {
		if(event.state) {			
			hiddenFromVisible();
			visibleFromHidden(event.state.tab);
		}
	}
}
















