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
      colorName.innerHTML = "Dark Grey - Color Code Starter";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This is to be finished. I need to write it.";
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
    case "white":
      box.style.background = "#fff";
      colorName.innerHTML = "White - Empty Space";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This color doesn't do anything. It's literally just empty space. Doesn't do anything else. Use it as eraser of sorts.";
      hex.innerHTML = "#ffffff";
      rgb.innerHTML = "RGB(255, 255, 255)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "lightGrey":
      box.style.background = "#B97A57";
      colorName.innerHTML = "Light Grey - Platform";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "A platform is the same as a normal wall block except you can jump through it from the bottom. They are about half the height of normal blocks.";
      hex.innerHTML = "#B97A57";
      rgb.innerHTML = "RGB(185, 122, 87)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "pink":
      box.style.background = "#FFAEC9";
      colorName.innerHTML = "Pink - Checkpoint";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "A checkpoint will set a new spawn point for the player. However, the player cannot go back to a previous checkpoint once they set one. Make sure they will have seen all the coins they can get up to that point!";
      hex.innerHTML = "#FFAEC9";
      rgb.innerHTML = "RGB(255, 174, 201)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "lightOrange":
      box.style.background = "#FFC90E";
      colorName.innerHTML = "Light Orange - Moving Blocks";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "These blocks will move right until they hit a solid block. Once they hit a solid block they will bounce backwards and start going left. They will repeat when going left and come back right. So they bounce back and forth until the end of time.";
      hex.innerHTML = "#FFC90E";
      rgb.innerHTML = "RGB(255, 201, 14)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "lightYellow":
      box.style.background = "#EFE4B0";
      colorName.innerHTML = "Light Yellow - Literally nothing yet";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This color is useless as of now. DM me any ideas?";
      hex.innerHTML = "#EFE4B0";
      rgb.innerHTML = "RGB(239, 228, 176)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "brightGreen":
      box.style.background = "#B5E61D";
      colorName.innerHTML = "Light Green - Goal";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "The goal is, well, the goal. Getting here, <i>with all the coins</i> will let the player finally leave the level. This should obviously go at the end of your level.";
      hex.innerHTML = "#B5E61D";
      rgb.innerHTML = "RGB(181, 230, 29)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "brightBlue":
      box.style.background = "#99D9EA";
      colorName.innerHTML = "Light Blue - Ice Block";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "The ice block increases the players friction. Which oddly lets the player slide even better. So obviously ice blocks will let the player slide. Momentum does carry through ice blocks, so if you jump from one to another then you will continue sliding.";
      hex.innerHTML = "#99D9EA";
      rgb.innerHTML = "RGB(153, 217, 234)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "blueGrey":
      box.style.background = "#7092BE";
      colorName.innerHTML = "Blue Grey - Blink Block (Blue)";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This block alternates between existing and not existing. You can fall right through it when it is invisible. When the red one is solid, the blue ones are not and vice versa.";
      hex.innerHTML = "#7092BE";
      rgb.innerHTML = "RGB(112, 146, 190)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
    case "lightPurple":
      box.style.background = "#C8BFE7";
      colorName.innerHTML = "Light Purple - Player 2";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "This color indicates the starting spawn point of Player 2. Player 2 is controlled using WASD instead of the arrow keys. Both players are on the same keyboard. Making a 2 Player level is not an easy task but is definitely not impossible.";
      hex.innerHTML = "#C8BFE7";
      rgb.innerHTML = "RGB(200, 191, 231)";
      colorName.style.color = "#000";
      description.style.color = "#000";
      hex.style.color = "#000";
      rgb.style.color = "#000";
      break;
  }
}

switchColor("black");