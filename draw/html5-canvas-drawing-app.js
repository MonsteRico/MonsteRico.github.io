var context = document.getElementById('canvas').getContext("2d");
var globalColor = "#df4b26";
$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});
$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});
$('#canvas').mouseup(function(e){
  paint = false;
});
$('#canvas').mouseleave(function(e){
  paint = false;
});


document.getElementById("canvas").addEventListener("touchstart", function(e){
	e.preventDefault();
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});
document.getElementById("canvas").addEventListener("touchmove", function(e){
	e.preventDefault();
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
}});
document.getElementById("canvas").addEventListener("touchend", function(e){
	e.preventDefault();
  paint = false;
});







var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(globalColor);
}
function redraw(){
 context.width = window.innerWidth-15;
 context.height = window.innerHeight-15;
  document.getElementById("canvas").width = window.innerWidth-15;
 document.getElementById("canvas").height = window.innerHeight-15;
 document.getElementById("div").style.width = window.innerWidth-15;
 document.getElementById("div").style.height = window.innerHeight-15;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  context.drawImage(document.getElementById("img"), 0, 0, window.innerWidth-15, window.innerHeight-15);
  
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
	 context.strokeStyle = clickColor[i];
     context.stroke();
  }
}

function showTools() {
	document.getElementById("canvas").style.display = "none";
	document.getElementById("blue").style.display = "block";
	document.getElementById("gold").style.display = "block";
	document.getElementById("red").style.display = "block";
	document.getElementById("button").style.display = "none";
	document.getElementById("div").style.display = "block";
}

function hideTools() {
		document.getElementById("canvas").style.display = "block";
	document.getElementById("button").style.display = "block";
	document.getElementById("div").style.display = "none";
	document.getElementById("blue").style.display = "none";
	document.getElementById("gold").style.display = "none";
	document.getElementById("red").style.display = "none";
}

function setColor(color) {
	switch (color) {
		case "blue": {
			globalColor = "#0f64fa"; 
			break;
		}
		case "red": {
			globalColor = "#df4b26";
			break;
		}
		case "gold": {
			globalColor = "#fac805";
			break;
		}
		case "white": {
			globalColor = "rgba(0,0,0,0)";
			break;
		}
	}
}