var skillList = ["arrow", "heal", "color"];

function colorSkill() {
  player.color = rgbToHex(randomNumber(0, 250), randomNumber(0, 250), randomNumber(0, 250));
}

function arrowSkill() {
  if (!arrowExists) {
    switch (player.direction) {
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
var counter = 0;

function healSkill() {
  if (counter == 0) {
    if (player.health < player.maxHealth) {
      player.health++;
    }
    counter = 1;
    setTimeout(function() {
      counter = 0;
    }, 5000);
  }
}

function runSkill(skill) {
  switch (skill) {
    case "arrow":
      arrowSkill();
      break;
    case "heal":
      healSkill();
      break;
    case "color":
      colorSkill();
      break;
    default:
      break;
  }
}