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
var bedroom = new room("bedroom", "AliceBlue", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var bedroom2 = new room("bedroom2", "AntiqueWhite", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var bedroom3 = new room("bedroom3", "Aqua", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var hallway = new room("hallway", "Aquamarine", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var hallway2 = new room("hallway2", "Brown", function(x, y, width, height) {
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, width / 3, height / 3);
  ctx.fillStyle = "white";
  ctx.fillRect(x + width / 3, y, width / 3, height / 3);
  ctx.fillStyle = "black";
  ctx.fillRect(x + width / 3 * 2, y, width / 3, height / 3);

  ctx.fillStyle = "white";
  ctx.fillRect(x, y + height / 3, width / 3, height / 3);
  ctx.fillRect(x + width / 3, y + height / 3, width / 3, height / 3);
  ctx.fillRect(x + width / 3 * 2, y + height / 3, width / 3, height / 3);

  ctx.fillStyle = "black";
  ctx.fillRect(x, y + height / 3 * 2, width / 3, height / 3);
  ctx.fillStyle = "white";
  ctx.fillRect(x + width / 3, y + height / 3 * 2, width / 3, height / 3);
  ctx.fillStyle = "black";
  ctx.fillRect(x + width / 3 * 2, y + height / 3 * 2, width / 3, height / 3);
  enemyList = this.enemyList;
}, [new enemy(width / 2, height / 2, "red")]);

var hallway3 = new room("hallway3", "Chartreuse", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var testRoom = new room("testRoom", "DarkGrey", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var testRoom2 = new room("testRoom2", "DarkOrange", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);

var testRoom3 = new room("testRoom3", "DarkOrchid", function(x, y, width, height) {
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(x, y, width, height);
  enemyList = this.enemyList;
}, []);