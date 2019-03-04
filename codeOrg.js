function setScreen(id) {
	var current = document.getElementsByClassName("currentScreen");
	var screenToSet = document.getElementById(id);
	current.className = "notActive";
	screenToSet.className = "active";
}

function showElement(id) {
	var set = document.getElementById(id);
	set.classList.add("active");
}

function hideElement(id) {
    var set = document.getElementById(id);
	set.classList.add("notActive");
	set.classList.remove("active");
}

function setText(id, txt) {
	var txtToSet = txt;
	var set = document.getElementById(id);
	set.innerHTML = txtToSet;
}

function setProperty(id, property, value) {
	var propertySet = parseFloat(property);
	document.getElementById(id).style.property = value;
}

function randomNumber(min, max) {
	var random = Math.floor(Math.random() * (+max - +min)) + +min;
	return random;
}

function rgb(r, g, b){
  return ["rgb(",r,",",g,",",b,")"].join("");
}

