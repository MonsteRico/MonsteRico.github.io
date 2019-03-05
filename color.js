var randButtonID;
var p1Score = 0;
var p2Score = 0;
var level = 4;
var lives = 5;
var currentPlayer = 1;
var colorLevel = 20;

function playAgain() {
	p1Score = 0;
	level = 4;
	lives = 5;
	currentPlayer = 1;
	p2Score = 0;
	setText("score1_label", p1Score);
	setText("lives_label", lives);
	setScreen("play_Screen");
}

function checkLevelUp() {
  if (p1Score == 10) {
	level = 9
    showElement("button5");
	showElement("button6");
	showElement("button7");
	showElement("button8");
	showElement("button9");
  }
  else if (p1Score == 20) {
	  level = 16;
	  showElement("button10");
	  showElement("button11");
	  showElement("button12");
	  showElement("button13");
	  showElement("button14");
	  showElement("button15");
	  showElement("button16");
  }
  else if (p1Score == 30) {
	  level = 25;
	  showElement("button17");
	  showElement("button18");
	  showElement("button19");
	  showElement("button20");
	  showElement("button21");
	  showElement("button22");
	  showElement("button23");
	  showElement("button24");
	  showElement("button25");
  }
  else if (p1Score == 40) {
	  colorLevel = 15;
  }
  else if (p1Score == 50) {
	  colorLevel = 10;
  }
}

function updateScoreBy(amt) {
    p1Score = p1Score + amt;
    setText("score1_label", p1Score);
}

function subtractLife() {
	lives -= 1;
	setText("lives_label", lives);
	console.log(lives);
	if (lives == 0) {
		gameOver();
	}
}

function gameOver() {
	setScreen("gameOverScreen");
}

function  setBoard(){
  var red = randomNumber(0,235);
  var blue = randomNumber(0,235);
  var green = randomNumber(0,235);
  var color = "rgb(" + red + ", " + blue + ", " +green + ")";
  var diffColor = rgb((red+colorLevel), (blue+colorLevel), (green+colorLevel));
  randButtonID = "button"+randomNumber(1,level);
  document.getElementById("button1").style.backgroundColor = color;
  document.getElementById("button2").style.backgroundColor = color;
  document.getElementById("button3").style.backgroundColor = color;
  document.getElementById("button4").style.backgroundColor = color;
  document.getElementById("button5").style.backgroundColor = color;
  document.getElementById("button6").style.backgroundColor = color;
  document.getElementById("button7").style.backgroundColor = color;
  document.getElementById("button8").style.backgroundColor = color;
  document.getElementById("button9").style.backgroundColor = color;
  document.getElementById("button10").style.backgroundColor = color;
  document.getElementById("button11").style.backgroundColor = color;
  document.getElementById("button12").style.backgroundColor = color;
  document.getElementById("button13").style.backgroundColor = color;
  document.getElementById("button14").style.backgroundColor = color;
  document.getElementById("button15").style.backgroundColor = color;
  document.getElementById("button16").style.backgroundColor = color;
  document.getElementById("button17").style.backgroundColor = color;
  document.getElementById("button18").style.backgroundColor = color;
  document.getElementById("button19").style.backgroundColor = color;
  document.getElementById("button20").style.backgroundColor = color;
  document.getElementById("button21").style.backgroundColor = color;
  document.getElementById("button22").style.backgroundColor = color;
  document.getElementById("button23").style.backgroundColor = color;
  document.getElementById("button24").style.backgroundColor = color;
  document.getElementById("button25").style.backgroundColor = color;
  document.getElementById(randButtonID).style.backgroundColor = diffColor;
  console.log("different is " + randButtonID);
}

setBoard();

function checkButton(buttonId) {
  console.log("checking: " + buttonId);
  document.getElementById(buttonId).style.outline = "black solid 0px";
  if (buttonId == randButtonID) {
    console.log("Right");
    updateScoreBy(1);
  } else {
    console.log("Wrong");
    subtractLife();
  }
  setBoard();
  checkLevelUp();
}