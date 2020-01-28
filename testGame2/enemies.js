class Enemy {
  constructor(x, y, color, speed, health, strength, draw) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.opacity = 1;
    this.color = color;
    this.speed = speed;
    this.health = health;
    this.strength = strength;
	this.draw = draw;
  }
}

class enemy extends Enemy{
  constructor(x, y, color,) {
	super(x,y,color,2,5,1,function() {
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    });
  }
}

class spider extends Enemy {
	constructor (x,y) {
		super(x,y,"black",3,2,1,function() {
			var spiderSheet = document.getElementById("spiderSheet");
			ctx.drawImage(spiderSheet, 0,0,32,32,x,y,32,32);
		});
	}
}
var testEnemyList = [new enemy(0, 0, "green"), new enemy(200, 300, "red")];