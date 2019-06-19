function wait(ms)
{
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}

function randomNumber(min, max) {
	var random = Math.floor(Math.random() * (+max - +min)) + +min;
	console.log(random);
	return random;
}

function setDisplay(className, displayValue) {
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].style.display = displayValue;
  }
}