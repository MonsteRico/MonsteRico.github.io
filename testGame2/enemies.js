class Enemy {
  constructor(x, y, color, speed, health, strength, draw, move) {
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
	this.move = move;
  }
}

class enemy extends Enemy{
  constructor(x, y, color,) {
	super(x,y,color,2,5,1,function() {
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }, function(param1,param2) {});
  }
}

class spider extends Enemy {
	constructor (x,y) {
		super(x,y,"black",3,2,1,function() {
			var spiderSheet = document.getElementById("spiderSheet");
			var dir = 0;
			switch (this.direction) {
				case "left": dir = 3; break;
				case "right": dir = 1; break;
				case "up": dir = 2; break;
				case "down": dir = 0; break;
				default: dir = 3; break;
			}
			ctx.drawImage(spiderSheet, this.frameIndex*32,dir*32,32,32,this.x,this.y,32,32);
		}, function(playerX, playerY) {
			this.attackCooldown++;
			if (this.attackCooldown == 5) {
				this.attackCooldown = 0;
					if (playerX > this.x) {
						this.x+=this.speed;
					}
					else {
						this.x-=this.speed;
					}
					if (playerY < this.y) {
						this.y-=this.speed;
					}
					else {
						this.y+=this.speed;
					}
			}
		});
		this.frameIndex = 1;
		this.cooldown = 7;
		this.attackCooldown = 0;
		this.finalFrame = 3;
		this.initialFrame = 1;
		this.timer = 0;
		this.direction = "left";
		// 0 is straight
		// 1 is right
		// 2 is back
		// 3 is left
	}
}
var testEnemyList = [new enemy(0, 0, "green"), new enemy(200, 300, "red")];
