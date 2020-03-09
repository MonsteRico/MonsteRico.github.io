// This is the code for the entire game.
// NOT ALL CODE IS WRITTEN BY ME. I DO NOT KNOW THE OC'S OF EVERYTHING. W3, QUORA, AND GOOGLE ARE ALL MAJOR CONTRIBUTORS.


// Animation stuff I don't fully understand. I think it just sets up variables to use for request and cancel animation. not sure how
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();

// Sets up the game world canvas
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  keys = [],
  screenWidth = canvas.width,
  screenHeight = canvas.height,
  maxX = screenWidth,
  maxY = screenHeight,
  minX = 0,
  minY = 0;

function update() {
  // The function that Runs the entire game

  // check keys
  if (keys[38]) {
    // up arrow or space
  }
  if (keys[39]) {
    // right arrow

  }
  if (keys[37]) {
    // left arrow
  }
  ctx.fillRect(0,0,10,10);
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