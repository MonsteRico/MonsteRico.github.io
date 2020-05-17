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
      colorName.innerHTML = "Black - Wall Block";
      image.src = "../gamePics/color.PNG";
      description.innerHTML = "The Wall block doesn't just have to be used as walls. This block is your standard block. You can't go through it at all and it doesn't let you slide. It will also slow your momentum or speed from ice or slime blocks.";
      hex.innerHTML = "#000000";
      rgb.innerHTML = "RGB(0, 0, 0)";
      colorName.style.color = "#fff";
      description.style.color = "#fff";
      hex.style.color = "#fff";
      rgb.style.color = "#fff";
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