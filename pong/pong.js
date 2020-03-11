// This is the code for the entire game.
// NOT ALL CODE IS WRITTEN BY ME. I DO NOT KNOW THE OC'S OF EVERYTHING. W3, QUORA, AND GOOGLE ARE ALL MAJOR CONTRIBUTORS.
// Sets up the game world canvas
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  keys = [];
  canvas.width = window.innerWidth - 100;
  canvas.height = window.innerHeight - 100;
  var screenWidth = canvas.width,
  screenHeight = canvas.height,
  maxX = screenWidth,
  maxY = screenHeight,
  minX = 0,
  minY = 0;


class paddle {
	constructor (x,y,vel,width,height,direction,color) {
		this.x = x;
		this.y = y;
		this.vel = vel;
		this.width = width;
		this.height = height;
		this.direction = direction;
		this.color = color;
		this.draw = function() {
		  ctx.fill();
		  ctx.globalAlpha = 1;
		  ctx.fillStyle = this.color;
		  ctx.fillRect(this.x, this.y, this.width, this.height);
		}
		this.checkBounds = function() {
			if (this.x > maxX-this.width || this.x < minX || this.y > maxY-this.height || this.y < minY) {
				return true;
			}
			else {
				return false
			}
		}
		this.move = function(posOrNeg) {
		  //console.log(posOrNeg);
		  var multiplier = 0;
			if (posOrNeg == "pos") {
				multiplier = -1;
			}
			else {
				multiplier = 1;
			}
			//console.log("multiplier is " + multiplier);
		  var lastX = this.x;
		  var lastY = this.y;
		  if (this.direction == "LR") {
			  this.x += (vel*multiplier);
		  }
		  else {
			  this.y += (vel*multiplier);
		  }
		  if (this.checkBounds()) {
			  this.x = lastX;
			  this.y = lastY;
		  }
		  this.centerX = this.x+this.width/2;
		  this.centerY = this.y+this.height/2;
		  //console.log("centerX is " + this.centerX);
		  //console.log("centerY is " + this.centerY);
		}
	}
}

class ball {
	constructor (x,y,radius,velX, velY,color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.velX = velX;
		this.velY = velY;
		this.color = color;
		this.draw = function() {
		  ctx.fillStyle = this.color;
		  ctx.beginPath();
		  ctx.arc(this.x, this.y, this.radius, 0, 360);
		  ctx.fill();
		}
		this.clear = function() {
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius+.4, 0, 360);
			ctx.fill();
		}
		this.colChecks = function() {
			if (this.x > maxX-this.radius || this.x < minX) {
				this.velX*=-1;
			}
			if (this.y > maxY-this.radius || this.y < minY) {
				this.velY*= -1;
			}
		}
		this.move = function() {
			this.x+=this.velX;
			this.y+=this.velY;
			this.colChecks();
		}
	}
}

var paddle1 = new paddle(10,screenHeight/2,10,10,100,"UD","blue");
var paddle2 = new paddle(screenWidth-20,screenHeight/2,10,10,100,"UD","purple");
var ball1= new ball(screenWidth/2,screenHeight/2,10,2,2,"green");
// Animation stuff I don't fully understand. I think it just sets up variables to use for request and cancel animation. not sure how
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();


function update() {
  // The function that Runs the entire game

  // check keys
  if (keys[87]) {
    // w
	paddle1.move("pos");	
  }
  if (keys[83]) {
    // s
	paddle1.move("neg");
  }
  if (keys[38]) {
    // w
	paddle2.move("pos");	
  }
  if (keys[40]) {
    // s
	paddle2.move("neg");
  }
  ctx.clearRect(0,0,screenWidth,screenHeight);
  paddle1.draw();
  paddle2.draw();
  ball1.clear();
  ball1.move();
  ball1.draw();
  // dont understand this but updates the animation
  requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB, extra) {
  // DONT FULLY UNDERSTAND Collisions yet but here they are.
  // get the vectors to check against
  if (!extra) {
    extra = 0;
  }
  var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
    vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2) + extra),
    // add the half widths and half heights of the objects
    hWidths = (shapeA.width / 2) + (shapeB.width / 2),
    hHeights = (shapeA.height / 2) + (shapeB.height / 2),
    colDir = null;
  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    // figures out on which side we are colliding (top, bottom, left, or right)
    var oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
    if (oX >= oY) {
      if (vY > 0) {
        colDir = "t";
        shapeA.y += oY;
      } else {
        colDir = "b";
        shapeA.y -= oY;
      }
    } else {
      if (vX > 0) {
        colDir = "l";
        shapeA.x += oX;
      } else {
        colDir = "r";
        shapeA.x -= oX;
      }
    }
  }
  return colDir;
}

// Checks for keys moving down and up
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});