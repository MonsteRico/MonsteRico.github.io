class room {
  constructor(name, color, drawFunction, enemylist) {
    this.name = name;
    this.color = color;
    this.draw = drawFunction;
    this.enemyList = enemylist;
    this.drawMapVersion = function(x, y, width, height) {
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = this.color;
      ctx.fillRect(x, y, width, height);
    }
  }
}
var width = 1024;
var height = 512;
var walls = [];

var startRoom = new room("startRoom", "AliceBlue", function(x, y, width, height) {
  enemyList = this.enemyList;
  walls = [];
  drawWalls(["bottom", "right"], walls);
}, []);

var hallwayLRB = new room("startRoom", "AliceBlue", function(x, y, width, height) {
  enemyList = this.enemyList;
  walls = [];
  drawWalls(["bottom", "right", "left"], walls);
}, []);

var hallwayLRT = new room("startRoom", "AliceBlue", function(x, y, width, height) {
  enemyList = this.enemyList;
  walls = [];
  drawWalls(["top", "right", "left"], walls);
}, []);

var hallwayLR = new room("startRoom", "AliceBlue", function(x, y, width, height) {
  enemyList = this.enemyList;
  walls = [];
  drawWalls(["right", "left"], walls);
}, []);

var hallwayTB = new room("startRoom", "AliceBlue", function(x, y, width, height) {
  enemyList = this.enemyList;
  walls = [];
  drawWalls(["bottom", "top"], walls);
}, []);

var crossroads = new room("startRoom", "AliceBlue", function(x, y, width, height) {
  enemyList = this.enemyList;
  walls = [];
  drawWalls(["bottom", "right", "left", "top"], walls);
}, []);

var bedroom = new room("bedroom2", "AntiqueWhite", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
}, []);

var bedroom2 = new room("bedroom2", "AntiqueWhite", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
}, []);

var bedroom3 = new room("bedroom3", "Aqua", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
}, []);
// Hallway doors left right
var hallwayLR = new room("hallwayLR", "Brown", function(x, y, width, height) {
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, width, height / 3);

  ctx.fillStyle = "white";
  ctx.fillRect(x, y + height / 3, width, height / 3);

  ctx.fillStyle = "black";
  ctx.fillRect(x, y + height / 3 * 2, width, height / 3);
  enemyList = this.enemyList;
  walls = [{
      x: x,
      y: y,
      width: width,
      height: height / 3
    },
    {
      x: x,
      y: y + height / 3 * 2,
      width: width,
      height: height / 3
    }
  ];
}, []);

var testRoom = new room("testRoom", "DarkGrey", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
}, []);

var testRoom2 = new room("testRoom2", "DarkOrange", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
}, []);

var testRoom3 = new room("testRoom3", "DarkOrchid", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
}, []);

var exit = new room("exit", "Green", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
  walls = [];
  exitBarrier = [{
    x: x + width / 2,
    y: y,
    width: 32,
    height: height
  }];
  exitArea = [{
    x: width / 2 + 32,
    y: y,
    width: width / 2,
    height: height
  }];
}, []);

function drawWalls(entrances, walls) {
  var left, right, top, bottom;
  for (var i = 0; i < entrances.length; i++) {
    if (entrances[i] == "left") {
      left = true;
      continue;
    }
    if (entrances[i] == "bottom") {
      bottom = true;
      continue;
    }
    if (entrances[i] == "top") {
      top = true;
      continue;
    }
    if (entrances[i] == "right") {
      right = true;
      continue;
    }
  }
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, 32);
  ctx.fillRect(0, 0, 32, height);
  ctx.fillRect(0, height - 32, width, 32);
  ctx.fillRect(width - 32, 0, 32, height);
  ctx.fillStyle = 'white';
  ctx.fillRect(32, 32, width - 64, height - 64);
  if (left) {
    ctx.fillRect(0, height / 3, 32, height / 3);
    walls.push({
      x: 0,
      y: 0,
      width: 32,
      height: height / 3
    });
    walls.push({
      x: 0,
      y: height / 3 * 2,
      width: 32,
      height: height / 3
    });
  } else {
    walls.push({
      x: 0,
      y: 0,
      width: 32,
      height: height
    });
  }
  if (right) {
    ctx.fillRect(width - 32, height / 3, 32, height / 3);
    walls.push({
      x: width - 32,
      y: 0,
      width: 32,
      height: height / 3
    });
    walls.push({
      x: width - 32,
      y: height / 3 * 2,
      width: 32,
      height: height / 3
    });
  } else {
    walls.push({
      x: width - 32,
      y: 0,
      width: 32,
      height: height
    });
  }
  if (top) {
    ctx.fillRect(width / 3, 0, width / 3, 32);
    walls.push({
      x: 0,
      y: 0,
      width: width / 3,
      height: 32
    });
    walls.push({
      x: width / 3 * 2,
      y: 0,
      width: width / 3,
      height: 0
    });
  } else {
    walls.push({
      x: 0,
      y: 0,
      width: width,
      height: 32
    });
  }
  if (bottom) {
    ctx.fillRect(width / 3, height - 32, width / 3, 32);
    walls.push({
      x: 0,
      y: height - 32,
      width: width / 3,
      height: 32
    });
    walls.push({
      x: width / 3 * 2,
      y: height - 32,
      width: width,
      height: 32
    });
  } else {
    walls.push({
      x: 0,
      y: height - 32,
      width: width,
      height: 32
    });
  }

}