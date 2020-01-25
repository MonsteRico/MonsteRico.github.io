var player = {
  x: 0,
  y: 100,
  width: 32,
  height: 32,
  opacity: 1,
  color: "blue",
  speed: 4
};

var canvas = document.getElementById("test1");
var ctx = canvas.getContext("2d");
var map = [
  [bedroom, hallway, testRoom],
  [bedroom2, hallway2, testRoom2],
  [bedroom3, hallway3, testRoom3]
];

var mapWidth = map[0].length;
var mapHeight = map.length;
var currentRoom = bedroom;
var enemyList = currentRoom.enemylist;
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
var direction = "up";

function update() {
  showMap = false;
  // Check for key presses
  if ((keys[87] || keys[38]) && !keys[9]) {
    // up arrow
    player.y -= player.speed;
    direction = "up";
  }
  if ((keys[68] || keys[39]) && !keys[9]) {
    // right arrow
    player.x += player.speed;
    direction = "right";
  }
  if ((keys[65] || keys[37]) && !keys[9]) {
    // left arrow
    player.x -= player.speed;
    direction = "left";
  }
  if ((keys[83] || keys[40]) && !keys[9]) {
    // down arrow
    player.y += player.speed;
    direction = "down";
  }
  if (keys[9]) {
    // tab
    showMap = true;
  }
  // key code for space is 32
  // key code for tab is 9
  // key code for lshift is 16
  // key code for rshift is 16
  // key code for enter is 13
  ctx.clearRect(0, 0, width, height);

  //GAME LOGIC
  if (player.y + player.height > height) {
    player.y = 9;
    nextRoom("down");
  } else if (player.y < 0) {
    player.y = height - player.height;
    nextRoom("up");
  }
  if (player.x + player.width > width) {
    player.x = 9;
    nextRoom("right");
  } else if (player.x < 0) {
    player.x = width - player.width;
    nextRoom("left");
  }
  enemyList = currentRoom.enemylist;
  //END GAME LOGIC

  //GAME DRAW

  currentRoom.draw(0, 0, width, height);
  ctx.fill();
  ctx.fillStyle = player.color;
  ctx.globalAlpha = player.opacity;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  try {
    for (var i = 0; i < enemyList.length; i++) {
      var enemy = enemyList[i];
      ctx.fillStyle = enemy.color;
      ctx.globalAlpha = enemy.opacity;
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }
  } catch (e) {

  }
  if (showMap) {
    drawMap(map);
  }
  //END GAME DRAW


  // Start the loop again
  requestAnimationFrame(update);
}

// Checks for keys moving down and up
document.body.addEventListener("keydown", function(e) {
  e.preventDefault();
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
  e.preventDefault();
  keys[e.keyCode] = false;
});

// Runs update once game canvas loads again. Not sure what it does.
document.getElementById("test1").addEventListener("load", function() {
  update();
});

function drawMap(map) {
  if (debug) {
    console.log(map);
    console.log(currentRoom);
  }
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width / 4, height);
  // ACTUAL MAP STUFF
  ctx.fillStyle = "green";
  ctx.fillRect(width / 4, 0, width / 2, height);
  var mapDrawWidth = width / 2;
  var mapDrawHeight = height
  var mapDrawX = width / 4;
  var mapDrawY = 0;
  var mapSectionWidth = mapDrawWidth / mapWidth;
  var mapSectionHeight = mapDrawHeight / mapHeight;
  for (var i = 0; i < mapWidth; i++) {
    for (var j = 0; j < mapHeight; j++) {
      map[j][i].drawMapVersion(mapDrawX + mapSectionWidth * i, mapDrawY + mapSectionHeight * j, mapSectionWidth, mapSectionHeight);
      if (map[j][i] == currentRoom) {
        ctx.fillStyle = "blue";
        ctx.fillRect(mapDrawX + mapSectionWidth * i + mapSectionWidth / 2, mapDrawY + mapSectionHeight * j + mapSectionHeight / 2, mapSectionWidth / 8, mapSectionHeight / 8);
      }
    }
  }
  for (var i = 0; i < mapWidth; i++) {
    for (var j = 0; j < mapHeight; j++) {
      ctx.fillStyle = "black";
      ctx.fillRect(mapDrawX + mapSectionWidth * i, mapDrawY, 10, mapDrawHeight);
      ctx.fillRect(mapDrawX, mapDrawY + mapSectionHeight * j, mapDrawWidth, 10);

    }
  }


  ctx.fillStyle = "black";
  ctx.fillRect((width / 4) * 3, 0, width / 4, height);
}

function nextRoom(direction) {
  var x = 0;
  var y = 0;
  if (direction == "up") {
    for (var i = 0; i < mapHeight; i++) {
      for (var j = 0; j < mapWidth; j++) {
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
    } else {
      currentRoom = map[y][x];
    }
  } else if (direction == "down") {
    for (var i = 0; i < mapHeight; i++) {
      for (var j = 0; j < mapWidth; j++) {
        if (currentRoom == map[i][j]) {
          x = j;
          y = i;
        }
      }
    }
    y++;
    if (y >= mapHeight) {
      y = mapHeight - 1;
      player.y = height - player.height;
    } else {
      currentRoom = map[y][x];
    }
  } else if (direction == "right") {
    for (var i = 0; i < mapHeight; i++) {
      for (var j = 0; j < mapWidth; j++) {
        if (currentRoom == map[i][j]) {
          x = j;
          y = i;
        }
      }
    }
    x++;
    if (x >= mapWidth) {
      x = mapWidth - 1;
      player.x = width - player.width;
    } else {
      currentRoom = map[y][x];
    }
  } else if (direction == "left") {
    for (var i = 0; i < mapHeight; i++) {
      for (var j = 0; j < mapWidth; j++) {
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
    } else {
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