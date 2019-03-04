var randButtonID;
var p1Score = 0;
var p2Score = 0;
var currentPlayer = 1;
function checkGameOver() {
  if (p1Score >= 10) {
    setScreen("gameOver_screen");
    showElement("player1Win_label");
  } else if (p2Score >= 1) {
    setScreen("gameOver_screen");
    showElement("player2Win_label");
  }
}
function updateScoreBy(amt) {
  if(currentPlayer == 1) {
    p1Score = p1Score + amt;
    setText("score1_label", p1Score);
  } else {
    p2Score = p2Score + amt;
    setText("score2_label", p2Score);
  }
  console.log(p1Score);
  console.log(p2Score);
}
function  setBoard(){
  var red = randomNumber(0,235);
  var blue = randomNumber(0,235);
  var green = randomNumber(0,235);
  var color = "rgb(" + red + ", " + blue + ", " +green + ")";
  var diffColor = rgb((red+20), (blue+20), (green+20));
  randButtonID = "button"+randomNumber(1,4);
  document.getElementById("button1").style.backgroundColor = color;
  document.getElementById("button2").style.backgroundColor = color;
  document.getElementById("button3").style.backgroundColor = color;
  document.getElementById("button4").style.backgroundColor = color;
  document.getElementById(randButtonID).style.backgroundColor = diffColor;
  console.log("different is " + randButtonID);
}
function switchPlayer(){
    if(currentPlayer==1){
        currentPlayer=2;
    } else {
        currentPlayer=1;
    }
    console.log("current player is: "+currentPlayer);
}
setBoard();
function checkButton(buttonId) {
  console.log("checking: " + buttonId);

  if (buttonId == randButtonID) {
    console.log("Right");
    updateScoreBy(1);
  } else {
    console.log("Wrong");
    updateScoreBy(-3);
  }
  setBoard();
  switchPlayer();
  checkGameOver();
}

