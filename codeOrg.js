function setScreen(id) {
	var idUse = id;
	var current = document.getElementsByClassName("currentScreen");
	var set = document.getElementsByName(id);
	document.getElementsByClassName("currentScreen")[0].className = "notActive";
	document.getElementById(id).setAttribute("class", "currentScreen");
}

function showElement(id) {
	var set = document.getElementById(id);
	set.removeAttribute("hidden");
}

function hideElement(id) {
	var set = document.getElementById(id);
	set.setAttribute("hidden");
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

