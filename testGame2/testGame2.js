var player = {
  x: 0,
  y: 100,
  width: 32,
  height: 32,
  opacity: 1,
  color: "blue",
  speed: 4,
  health: 10,
  strength:1
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
var arrowExists = false;
var arrow = {};
var attackCooldown = 1000;
var attackOnCooldown = false;
var attack = false;
var attackHitbox = {};

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
  if (keys[16]) {
    if (!arrowExists) {
      switch (direction) {
        case "right":
          arrow = {
            x: player.x + player.width,
            y: player.y + player.height / 2 - 2,
            width: player.width,
            height: 4,
            direction: "right"
          };
          arrowExists = true;
          break;
        case "left":
          arrow = {
            x: player.x,
            y: player.y + player.height / 2 - 2,
            width: player.width,
            height: 4,
            direction: "left"
          };
          arrowExists = true;
          break;
        case "up":
          arrow = {
            x: player.x + player.width / 2 - 2,
            y: player.y,
            width: 4,
            height: player.height,
            direction: "up"
          };
          arrowExists = true;
          break;
        case "down":
          arrow = {
            x: player.x + player.width / 2 - 2,
            y: player.y + player.height,
            width: 4,
            height: player.height,
            direction: "down"
          };
          arrowExists = true;
          break;
        default:
          arrow = {
            x: player.x + player.width,
            y: player.y + player.y / 2 - 2,
            width: player.width,
            height: 4,
            direction: "right"
          };
          arrowExists = true;
          break;
      }
    }
  }
  if (keys[32]) {
    if (!attack && !attackOnCooldown) {
      attack = true;
      attackOnCooldown = true;
      setTimeout(function() {
        attackOnCooldown = false;
      }, attackCooldown);
    }
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
  for (var i = 0; i < walls.length; i++) {
    var dir = colCheck(player, walls[i]);
    if (dir == "r") {
      player.x -= 2;
    } else if (dir == "l") {
      player.x += 2;
    } else if (dir == "t") {
      player.y -= 2;
    } else if (dir == "b") {
      player.y += 2;
    }
    if (arrowExists) {
      var arrowCheck = colCheck(arrow, walls[i]);
      if (arrowCheck == "r" || arrowCheck == "l" || arrowCheck == "t" || arrowCheck == "b") {
        arrowExists = false;
      }
    }
  }
  
  //END GAME LOGIC

  //GAME DRAW

  currentRoom.draw(0, 0, width, height);
  ctx.fill();
  ctx.fillStyle = player.color;
  ctx.globalAlpha = player.opacity;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  enemyList = currentRoom.enemylist;
  try {
    for (var i = 0; i < enemyList.length; i++) {
      var enemy = enemyList[i];
      ctx.fillStyle = enemy.color;
      ctx.globalAlpha = enemy.opacity;
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height); //put this in a draw function
      console.log(enemy.health);
      if (enemy.health <= 0) {
        enemyList.splice(i,1);
      }
      var dir = colCheck(player, enemy);
      if (dir == "r") {
        player.x -= 2;
        player.health -= 1;
      } else if (dir == "l") {
        player.x += 2;
        player.health -= 1;
      } else if (dir == "t") {
        player.y -= 2;
        player.health -= 1;
      } else if (dir == "b") {
        player.y += 2;
        player.health -= 1;
      }
    }
  } catch (e) {}
  if (arrowExists) {
    ctx.fillStyle = "purple";
    if (!showMap) {
      switch (arrow.direction) {
        case "right":
          arrow.x += player.speed + 2;
          break;
        case "left":
          arrow.x -= player.speed + 2;
          break;
        case "up":
          arrow.y -= player.speed + 2;
          break;
        case "down":
          arrow.y += player.speed + 2;
          break;
      }
    }
    if (arrow.y + arrow.height > height) {
      arrowExists = false;
    } else if (arrow.y < 0) {
      arrowExists = false;
    }
    if (arrow.x + arrow.width > width) {
      arrowExists = false;
    } else if (arrow.x < 0) {
      arrowExists = false;
    }
    try {
      for (var i = 0; i < enemyList.length; i++) {
        if (debug) {
          console.log("enemy checking collision");
        }
        var enemy = enemyList[i];
        var c = colCheck(arrow, enemy);
        if (c == "r" || c == "l" || c == "t" || c == "b") {
          if (debug) {
            console.log("enemy collision");
          }
          arrowExists = false;
          enemy.health-=2;
        }
      }
    } catch (e) {}
    ctx.fillRect(arrow.x, arrow.y, arrow.width, arrow.height);
  }
  if (attack) {
    ctx.fillStyle = "purple";
    switch (direction) {
      case "right":
        hitbox = {
          x: player.x + player.width,
          y: player.y,
          width: player.width,
          height: player.height,
          direction: "right"
        };
        break;
      case "left":
        hitbox = {
          x: player.x - player.width,
          y: player.y,
          width: player.width,
          height: player.height,
          direction: "left"
        };
        break;
      case "up":
        hitbox = {
          x: player.x,
          y: player.y - player.height,
          width: player.width,
          height: player.height,
          direction: "up"
        };
        break;
      case "down":
        hitbox = {
          x: player.x,
          y: player.y + player.height,
          width: player.width,
          height: player.height,
          direction: "down"
        };
        break;
      default:
        hitbox = {
          x: player.x + player.width,
          y: player.y,
          width: player.width,
          height: player.height,
          direction: "right"
        };
        break;
    }
    if (!showMap) {
    try {
      for (var i = 0; i < enemyList.length; i++) {
        if (debug) {
          console.log("enemy checking collision");
        }
        var enemy = enemyList[i];
        var c = colCheck(hitbox, enemy);
        if (c == "r" || c == "l" || c == "t" || c == "b") {
          if (debug) {
            console.log("enemy hit");
          }
          enemy.health-=player.strength;
        }
      }
    } catch (e) {}
    for (var i = 0; i < walls.length; i++) {
      var hitboxCheck = colCheck(hitbox, walls[i]);
      if (hitboxCheck == "r" || hitboxCheck == "l" || hitboxCheck == "t" || hitboxCheck == "b") {
        attack = false;
        ctx.clearRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
      }
    }
    ctx.fillRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
    setTimeout(function() {
      attack = false;
      ctx.clearRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
    }, 500);
    }
  }
  if (showMap) {
    drawMap(map);
  }
  //END GAME DRAW
  document.getElementById("health").innerHTML = player.health;

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
  if (debug) {
    console.log("colDir");
  }
  return colDir;
}
