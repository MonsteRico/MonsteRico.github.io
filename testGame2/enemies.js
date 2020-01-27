class enemy {
  constructor(x, y, color) {
    this.x = x - 16;
    this.y = y - 16;
    this.width = 32;
    this.height = 32;
    this.opacity = 1;
    this.color = color;
    this.speed = 2;
    this.health = 5;
  }
}
var testEnemyList = [new enemy(0, 0, "green"), new enemy(200, 300, "red")];
