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

Math.seed = today;
randomNum = Math.round(Math.seededRandom() * 1000000);
randomNum = Array.from(randomNum.toString()).map(Number);
console.log(randomNum);

// Copy from templates based on the numbers
// Pick template based on number in array.

var totalTemplates = 2;
var totalSpritesheets = 3;
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

var tlTemplates = ['"TL1"', '"TL2"'];
var blTemplates = ['"BL1"', '"BL2"'];
var trTemplates = ['"TR1"', '"TR2"'];
var brTemplates = ['"BR1"', '"BR2"'];
console.log(topLeftTemplate, topRightTemplate, bottomLeftTemplate, bottomRightTemplate, spriteTemplate);


function GenerateRandomLevel() {
	var canvas = document.getElementById("test1"),
	ctx = canvas.getContext("2d");
	ctx.drawImage(document.getElementById(tlTemplates[topLeftTemplate]), 0, 0, 32, 16, 0, 0, 32, 16);
	ctx.drawImage(blTemplates[bottomLeftTemplate], 0, 0, 32, 16, 32, 0, 32, 16);
	ctx.drawImage(trTemplates[topRightTemplate], 0, 0, 32, 16, 0, 16, 32, 16);
	ctx.drawImage(brTemplates[bottomLeftTemplate], 0, 0, 32, 16, 32, 16, 32, 16);
	GenerateLevel();
	if (sessionStorage.getItem("coinArray") !== null) {
		coin = JSON.parse(sessionStorage.getItem("coinArray"));
		coinsCollected = sessionStorage.getItem("coinsCollected");
		coinsNeeded = sessionStorage.getItem("coinsNeeded");
	}
	if (sessionStorage.getItem("checkpointArray") !== null) {
		checkpoint = JSON.parse(sessionStorage.getItem("checkpointArray"));
	}
}


