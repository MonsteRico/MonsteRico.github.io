var player = {x:0,y:100, width:32, height:32, opacity:1, color:"blue", speed:4};
var canvas = document.getElementById("test1");
var ctx = canvas.getContext("2d");
var map = [["bedroom", "hallway", "testRoom"],
          ["bedroom2", "hallway2", "testRoom2"],
          ["bedroom3", "hallway3", "testRoom3"]];
var mapWidth = map[0].length;
var mapHeight = map.length;
var currentRoom = "bedroom";
canvas.width = 1024;
canvas.height = 512;
var debug = false;
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();
var keys = [];
var width = canvas.width;
var height = canvas.height;
var showMap = false;
function update() {
	showMap = false;
	// Check for key presses
	if (keys[38]) {
        // up arrow
        player.y-=player.speed;
    }
    if (keys[39]) {
        // right arrow
        player.x+=player.speed;
    }
    if (keys[37]) {
        // left arrow
        player.x-=player.speed;
    }
	if (keys[40]) {
        // down arrow
        player.y+=player.speed;
    }
	if (keys[9]) {
		// tab
		showMap = true;
	}
	ctx.clearRect(0, 0, width, height);
	
	//GAME LOGIC
	if (player.y+player.height > height) {
		player.y = 9;
		nextRoom("down");
	}
	else if (player.y < 0) {
		player.y = height-player.height;
		nextRoom("up");
	}
	if (player.x+player.width > width) {
		player.x = 9;
		nextRoom("right");
	}
	else if (player.x < 0) {
		player.x = width-player.width;
		nextRoom("left");
	}
	//END GAME LOGIC
	
	//GAME DRAW
	
	draw(currentRoom);
	ctx.fill();
  ctx.fillStyle = player.color;
  ctx.globalAlpha = player.opacity;
  ctx.fillRect(player.x, player.y, player.width, player.height);
	if (showMap) {
		drawMap(map);	
	}
	//END GAME DRAW
	
	
	// Start the loop again
	requestAnimationFrame(update);
}

// Checks for keys moving down and up
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

// Runs update once game canvas loads again. Not sure what it does.
document.getElementById("test1").addEventListener("load", function() {
    update();
});

function drawMap(map) {
	console.log(map);	
}

function draw(location) {
  ctx.fill();
  ctx.globalAlpha = 1;
  switch (location) {
    case "bedroom": ctx.fillStyle="AliceBlue"; break;
    case "hallway": ctx.fillStyle="AntiqueWhite"; break;
    case "testRoom": ctx.fillStyle="Aqua"; break;
    case "bedroom2": ctx.fillStyle="Aquamarine"; break;
    case "hallway2": ctx.fillStyle="Brown"; break;
    case "testRoom2": ctx.fillStyle="Chartreuse"; break;
    case "bedroom3": ctx.fillStyle="DarkGrey"; break;
    case "hallway3": ctx.fillStyle="DarkOrange"; break;
    case "testRoom3": ctx.fillStyle="DarkOrchid"; break;
    default: ctx.fillStyle="black"; break;
  }
  ctx.fillRect(0,0,width,height);
}

function nextRoom(direction) {
  var x = 0;
  var y = 0;
  if (direction == "up") {
    for (var i =0; i<mapHeight; i++) {
      for (var j=0; j<mapWidth; j++) {
        if (currentRoom == map[i][j]) {
          x = j;
          y = i;
        }
      }
    }
    y--;
    if (y < 0) {
      y++;
      player.y = 0;
    }
    else {
      currentRoom = map[y][x];
    }
  }
  
  else if (direction == "down") {
    for (var i =0; i<mapHeight; i++) {
      for (var j=0; j<mapWidth; j++) {
        if (currentRoom == map[i][j]) {
          x = j;
          y = i;
        }
      }
    }
    y++;
    if (y >= mapHeight) {
      y = mapHeight-1;
      player.y = height-player.height;
    }
    else {
      currentRoom = map[y][x];
    }
  }
  
  else if (direction == "right") {
    for (var i =0; i<mapHeight; i++) {
      for (var j=0; j<mapWidth; j++) {
        if (currentRoom == map[i][j]) {
          x = j;
          y = i;
        }
      }
    }
    x++;
    if (x >= mapWidth) {
      x = mapWidth-1;
      player.x = width-player.width;
    }
    else {
      currentRoom = map[y][x];
    }
  }
  
  else if (direction == "left") {
    for (var i =0; i<mapHeight; i++) {
      for (var j=0; j<mapWidth; j++) {
        if (currentRoom == map[i][j]) {
          x = j;
          y = i;
        }
      }
    }
    x--;
    if (x < 0) {
      x++;
      player.x = 0;
    }
    else {
      currentRoom = map[y][x];
    }
  }
  
  if (debug == true) {
    console.log(direction);
    console.log(x);
    console.log(y);
    console.log(map);
    console.log(currentRoom);
  }
}
