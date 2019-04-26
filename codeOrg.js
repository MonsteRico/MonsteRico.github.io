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
	console.log(random);
	return random;
}

function rgb(r, g, b){
  return ["rgb(",r,",",g,",",b,")"].join("");
}

function getNumber(id) {
	var set = document.getElementById(id).value;
	return set;
}

function setNumber(id, number) {
	var set = document.getElementById(id);
	set.value = number;
}

function getChecked(id) {
	if (document.getElementById(id).checked = true) {
		return true;
	}
	else {
		return false;
	}
}

function setChecked(id, check) {
	document.getElementById(id).checked = check;
}

function getImageURL(id) {
	var source = document.getElementById(id);
	return source;
}

function setImageURL(id, url) {
	var source = document.getElementById(id).src = url;
}

function deleteElement(id) {
	var toDelete = document.getElementById(id);
    toDelete.parentNode.removeChild(toDelete);
}

function setPosition(id, x, y, width, height) {
	// (0, 0) is always in the top left corner of the screen
	// (x, y) is the top left corner of the element
	var set = document.getElementById(id);
	set.style.height = height;
	set.style.width = width;
	set.style.left = x;
	set.style.top = height;
}

function setSize(id, width, height) {
	var set = document.getElementById(id);
	set.style.height = height;
	set.style.width = width;
}

function insertItem(list, index, item) {
	list.splice(index, 0, item);
}

function appendItem(list, item) {
	list.push(item);
}

function removeItem(list, index) {
	list.splice(index, 1);
}

function getProperty(id, property) {
	return document.getElementById(id).property;
}