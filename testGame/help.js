var box = document.getElementById("colorInfo");
var colorName = document.getElementById("colorName");
var image = document.getElementById("image");
var description = document.getElementById("description");
var hex = document.getElementById("hexValue");
var rgb = document.getElementById("rgbValue");

function switchColor(color) {
  switch (color) {
    case "black":
      box.style.background = "#000000";
      colorName.innerHTML = "Black - Wall";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "The Wall block doesn't just have to be used as walls. This block is your standard block. You can't go through it at all and it doesn't let you slide. It will also slow your momentum or speed from ice or slime blocks.";
      hex.innerHTML = "#000000";
      rgb.innerHTML = "RGB(0, 0, 0)";
      colorName.style.color = "#fff";
      description.style.color = "#fff";
      hex.style.color = "#fff";
      rgb.style.color = "#fff";
      break;
    case "darkGrey":
      box.style.background = "#7F7F7F";
      colorName.innerHTML = "Dark Grey - Platform";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "A platform is the same as a normal wall block except you can jump through it from the bottom. They are about half the height of normal blocks.";
      hex.innerHTML = "#7F7F7F";
      rgb.innerHTML = "RGB(127, 127, 127)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "darkBrown":
      box.style.background = "#880015";
      colorName.innerHTML = "Dark Brown - Antigravity w/ Down Arrow";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This block will reverse gravity as soon as you touch it. It works both ways regardless of what the arrow says. The arrows can be used to denote what way you are supposed to go.";
      hex.innerHTML = "#880015";
      rgb.innerHTML = "RGB(136, 0, 21)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "red":
      box.style.background = "#ED1C24";
      colorName.innerHTML = "Red - Lava (Inset)";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This lava block will kill you on contact. It is inset into the ground a bit.";
      hex.innerHTML = "#ED1C24";
      rgb.innerHTML = "RGB(237, 28, 36)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "orange":
      box.style.background = "#FF7F27";
      colorName.innerHTML = "Orange - Lava (Full Size)";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This lava block will kill you on contact. It is the full size of a wall block, making it useful for walling areas off or building up a deadly zone.";
      hex.innerHTML = "#FF7F27";
      rgb.innerHTML = "RGB(255, 127, 39)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "yellow":
      box.style.background = "#FFF200";
      colorName.innerHTML = "Yellow - Coin";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "A coin will be placed anywhere you put this color. To finish the level you must collect all the coins first. Without all the coins the goal will do nothing.";
      hex.innerHTML = "#FFF200";
      rgb.innerHTML = "RGB(255, 242, 0)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "darkGreen":
      box.style.background = "#22B14C";
      colorName.innerHTML = "Dark Green - Slime";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "Dark Green will create a slime block. Slime blocks increase the players 'speed', moving you slightly faster. However, they actually increase your jump height by a lot. ";
      hex.innerHTML = "#22B14C";
      rgb.innerHTML = "RGB(34, 177, 76)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "turquoise":
      box.style.background = "#00A2E8";
      colorName.innerHTML = "Turquoise - Portal";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "A portal requires other portals to work. Entering one portal will teleport you to the best place around another portal. It picks a random portal out of all the ones on the level. Try and leave one empty space around each portal or they won't work very well.";
      hex.innerHTML = "#00A2E8";
      rgb.innerHTML = "RGB(0, 162, 232)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "indigo":
      box.style.background = "#3F48CC";
      colorName.innerHTML = "Indigo - Blink Block (Red)";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This block alternates between existing and not existing. You can fall right through it when it is invisible. When the red one is solid, the blue ones are not and vice versa.";
      hex.innerHTML = "#3F48CC";
      rgb.innerHTML = "RGB(63, 72, 204)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "purple":
      box.style.background = "#A349A4";
      colorName.innerHTML = "Purple - Player 1";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This color indicates the place that the player will spawn at every time until they get a checkpoint or finish the level. Nothing too special about this color other then that you should only put ONE per level, it just creates the player.";
      hex.innerHTML = "#A349A4";
      rgb.innerHTML = "RGB(163, 73, 164)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
  }
}

switchColor("black");