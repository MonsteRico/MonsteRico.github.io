if (sessionStorage.getItem("pagesLeft") === null) {
	sessionStorage.setItem("pagesLeft", 9);	
}
var pagesLeft = sessionStorage.getItem("pagesLeft");
console.log(pagesLeft);
document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");

function parseQuote(response) {
	console.log(response);
	$("#quote").text(response.quoteText);
	$("#author").text(response.quoteAuthor);
}
var tag = document.createElement("script");
tag.src="https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";
$('#quote').html(tag);
		
// Set the date we're counting down to
var countDownDate = new Date("May 30, 2019 15:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();
				
// Find the distance between now and the count down date
var distance = countDownDate - now;
	
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";
	
	// If the count down is over, write some text 
	if (distance < 1213065075) {
		document.getElementById("celebrate").innerHTML = "WE ARE ALMOST THERE";
	}
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Have a good break!";
	}
}, 1000);

	x = 0;
	console.log(this);
	function theTest(id) {
		console.log(id);
		if (x == id) {
			document.getElementById(id).style.backgroundColor = "green";
			x += 1;
		}
		else {
			document.getElementById("0").style.backgroundColor = "purple";
			document.getElementById("1").style.backgroundColor = "purple";
			document.getElementById("2").style.backgroundColor = "purple";
			document.getElementById("3").style.backgroundColor = "purple";	
			x=0;
		}

		if (x == 4) {
			document.getElementById('victory').innerHTML = "You won";
		}
	}
	var ids = [0,1,2,3];
	var shuffledIds = shuffle(ids);
	console.log(shuffledIds);
	document.getElementById("one").id = shuffledIds[0];
	document.getElementById("two").id = shuffledIds[1];
	document.getElementById("three").id = shuffledIds[2];
	document.getElementById("four").id = shuffledIds[3];
	function shuffle(array) {
		var rand, index = -1,
			length = array.length,
			result = Array(length);
		while (++index < length) {
			rand = Math.floor(Math.random() * (index + 1));
			result[index] = result[rand];
			result[rand] = array[index];
		}
		return result;

	}



function site() {
	var something = document.getElementById("test3").value;
	switch (something) {
		case "truth": 
		{
			window.open("./truth.html");
			console.log(pagesLeft);
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "test":
		{
			window.open("./test.html");
			console.log(pagesLeft);
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "quote":
		{
			window.open("./quote.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "cookies":
		{
			window.open("./cookies.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "black": 
		{
			window.open("./black.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
    case "white": 
		{
			window.open("./white.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "braden": 
		{
			window.open("./OhYeAh.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "color": 
		{
			window.open("./colorSleuth.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		case "vod": 
		{
			window.open("./vods.html");
			pagesLeft = pagesLeft - 1;
			console.log(pagesLeft);
			sessionStorage.setItem("pagesLeft", pagesLeft);
			document.getElementById("left").innerHTML = sessionStorage.getItem("pagesLeft");
			break;
		}
		default: {
			alert("That is not a page!");
			break;
		}
	}	
	sessionStorage.setItem("pagesLeft", pagesLeft);	
}

