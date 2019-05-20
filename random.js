// in order to work 'Math.seed' must NOT be undefined,
// so in any case, you HAVE to provide a Math.seed
Math.seededRandom = function(max, min) {
    max = max || 1;
    min = min || 0;
 
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280;
 
    return min + rnd * (max - min);
}


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + dd + yyyy;



// Copy from templates based on the numbers
// Pick template based on number in array.

var TL1 = new Image();
TL1.src = "./Templates/TL1.png";
var TL2 = new Image();
TL2.src = "./Templates/TL2.png";
var TL3 = new Image();
TL3.src = "./Templates/TL3.png";
var TL4 = new Image();
TL4.src = "./Templates/TL4.png";
var TR1 = new Image();
TR1.src = "./Templates/TR1.png";
var TR2 = new Image();
TR2.src = "./Templates/TR2.png";
var TR3 = new Image();
TR3.src = "./Templates/TR3.png";
var TR4 = new Image();
TR4.src = "./Templates/TR4.png";
var BL1 = new Image();
BL1.src = "./Templates/BL1.png";
var BL2 = new Image();
BL2.src = "./Templates/BL2.png";
var BL3 = new Image();
BL3.src = "./Templates/BL3.png";
var BL4 = new Image();
BL4.src = "./Templates/BL4.png";
var BR1 = new Image();
BR1.src = "./Templates/BR1.png";
var BR2 = new Image();
BR2.src = "./Templates/BR2.png";
var BR3 = new Image();
BR3.src = "./Templates/BR3.png";
var BR4 = new Image();
BR4.src = "./Templates/BR4.png";
// Add new templates above here. Change total templates and spritesheets below here
var totalTemplates = 4;
var totalSpritesheets = 8;
var topLeftChoice = randomNum[0];
var topRightChoice = randomNum[1];
var bottomLeftChoice = randomNum[2];
var bottomRightChoice = randomNum[3];
var spriteChoice = randomNum[4];

var topLeftTemplate = topLeftChoice % totalTemplates;
var topRightTemplate = topRightChoice % totalTemplates;
var bottomLeftTemplate = bottomLeftChoice % totalTemplates;
var bottomRightTemplate = bottomRightChoice % totalTemplates;
var spriteTemplate = spriteChoice % totalSpritesheets;
// Add the new templates to these arrays
var tlTemplates = [TL1, TL2, TL3, TL4];
var blTemplates = [BL1, BL2, BL3, BL4];
var trTemplates = [TR1, TR2, TR3, TR4];
var brTemplates = [BR1, BR2, BR3, BR4];
var spriteTemplates = ["./spritesheet1.png", "./spritesheet2.png", "./spritesheet3.png", "./spritesheet4.png", "./spritesheet5.png", "./spritesheet6.png", "./spritesheet7.png", "./spritesheet8.png"];
console.log(topLeftTemplate, topRightTemplate, bottomLeftTemplate, bottomRightTemplate, spriteTemplate);

if ((sessionStorage.getItem('dailyLevel') != null) && (sessionStorage.getItem('dailyLevel') == today)) {
	GenerateRandomLevel();
}

function GenerateRandomLevel() {
	Math.seed = today;
	var randomNum = Math.round(Math.seededRandom() * 100000000000000);
	randomNum = Array.from(randomNum.toString()).map(Number);
	console.log(randomNum);
	var canvas = document.getElementById("test1"),
	ctx = canvas.getContext("2d");
	ctx.drawImage(tlTemplates[topLeftTemplate], 0, 0, 32, 16, 0, 0, 32, 16);
	ctx.drawImage(trTemplates[topRightTemplate], 0, 0, 32, 16, 32, 0, 32, 16);
	ctx.drawImage(blTemplates[bottomLeftTemplate], 0, 0, 32, 16, 0, 16, 32, 16);
	ctx.drawImage(brTemplates[bottomRightTemplate], 0, 0, 32, 16, 32, 16, 32, 16);
	document.getElementById("sprite").src = spriteTemplates[spriteTemplate];
	GenerateLevel();
	if (sessionStorage.getItem("coinArray") !== null) {
		coin = JSON.parse(sessionStorage.getItem("coinArray"));
		coinsCollected = sessionStorage.getItem("coinsCollected");
		coinsNeeded = sessionStorage.getItem("coinsNeeded");
	}
	if (sessionStorage.getItem("checkpointArray") !== null) {
		checkpoint = JSON.parse(sessionStorage.getItem("checkpointArray"));
	}
	sessionStorage.setItem("dailyLevel", today);
}

function GenerateDate(m,d,y) {
	today = m + d + y;

	Math.seed = today;
	var randomNum = Math.round(Math.seededRandom() * 100000000000000);
	randomNum = Array.from(randomNum.toString()).map(Number);
	console.log(randomNum);
	topLeftChoice = randomNum[0];
	topRightChoice = randomNum[1];
	bottomLeftChoice = randomNum[2];
	bottomRightChoice = randomNum[3];
	spriteChoice = randomNum[4];

	topLeftTemplate = topLeftChoice % totalTemplates;
	topRightTemplate = topRightChoice % totalTemplates;
	bottomLeftTemplate = bottomLeftChoice % totalTemplates;
	bottomRightTemplate = bottomRightChoice % totalTemplates;
	spriteTemplate = spriteChoice % totalSpritesheets;
	GenerateRandomLevel();
}

