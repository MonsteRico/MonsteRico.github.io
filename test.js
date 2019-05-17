// The size of the tiles in the background
var tileSize = 16;
var StartPoint = [0,0];
// The texture 2D containing the level design
var levelMap = new Image();
levelMap.src = './castle.png';
levelMap.height = 32;
levelMap.setAttribute('crossOrigin', '');
levelMap.width = 64;
var spritesheet = document.getElementById('sprite');
console.log(levelMap.height);
console.log(levelMap.width);
// the size of the tiles in the texture with the level design
var levelMapTileSize = 1;
// The X and Y coordinates of the start position for drawing the level.
// public Vector2 StartPoint = new Vector2(144,100);
// Converts image to canvas; returns new canvas element
if (sessionStorage.getItem('level') != null) {
	levelMap.src = sessionStorage.getItem('level');
	Test1();
}


function Test1() {
    var ctx = document.getElementById('test1');
    if (ctx.getContext) {

        ctx = ctx.getContext('2d');

        //Loading of the home test image - img1
        var img1 = new Image();

        //drawing of the test image - img1
			img1.onload = function() {
            //draw background image
            ctx.drawImage(img1, 0, 0);
			GenerateLevel();
			if (sessionStorage.getItem("coinArray") !== null) {
				coin = JSON.parse(sessionStorage.getItem("coinArray"));
				coinsCollected = sessionStorage.getItem("coinsCollected");
				coinsNeeded = sessionStorage.getItem("coinsNeeded");
			}
			if (sessionStorage.getItem("checkpointArray") !== null) {
				checkpoint = JSON.parse(sessionStorage.getItem("checkpointArray"));
			}
        };

        img1.src = levelMap.src;
    }
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function GenerateLevel() {
	for (var x = 0; x < levelMap.width; x+= levelMapTileSize)
	{
		for (var y = 0; y < levelMap.height; y+= levelMapTileSize)
		{
			var pixelColor = GetPixel(x, y);
			var objectName = GetGameObject(pixelColor, x, y);
			if (objectName == null) { continue;	}

			var tilePoint = TileToPoint(x, y);	
			Instantiate(objectName, tilePoint[0], tilePoint[1], tileSize, tileSize);
		}
	}
	if (sessionStorage.getItem("playerx") !== null) {
		player.x = JSON.parse(sessionStorage.getItem("playerx"));
		player.y = JSON.parse(sessionStorage.getItem("playery"));
	}
	update();
	hideThings();
}

function hideThings() {
	document.getElementById("hide").style.display = "none";
	document.getElementById("canvas").style.display = "inline";
}


function GetPixel(x, y) {
    var ctx = document.getElementById('test1');
    if (ctx.getContext) {
		ctx = ctx.getContext('2d');
    }
	var imgData = ctx.getImageData(x, y, 1,1);
	var red = imgData.data[0];
	var green = imgData.data[1];
	var blue = imgData.data[2];
	var returnVar = rgbToHex(red, green, blue);
	return returnVar;
}

function TileToPoint(x,y) {
	if (x == 0 && y == 0) {
		return StartPoint;
	} 

 // We do this to calculate the position based on our current tileSize and the tile size in the texture level map. 
  // We need that in case we use tiles in the level map of 10x10 for example. 
 //In our case is 1x1 but this is a bit more flexible
	var posX = x / levelMapTileSize * tileSize;
	var posY = y / levelMapTileSize * tileSize;

	var newPoint = [StartPoint[0], StartPoint[1]];
	newPoint[0] += posX;
	newPoint[1] += posY;
	return newPoint;
}


  function GetGameObject(color, x, y) {
	// refer to the colors.jpeg for what each color exactly is etc.
	switch (color)
	{
		case "#a349a4": // Purple - Player - 1st Row 10th Color
		{
			return "player";
		}
		case "#c8bfe7": // Light Purple - Player 2 - 2nd Row 10th Color
		{
			return "player2";
		}
		case "#b5e61d": // Bright Green - Goal/Flag - 2nd Row 7th Color
		{
			return "goal";
		}
		case "#fff200": // Yellow - Coin - 1st Row 6th Color
		{
			return "coin";
		}
		case "#000000": // Black - Wall Block - 1st Row 1st Color
		{
			return "wall";
		}
		case "#ed1c24": // Red - Lava (Inset into ground a bit) - 1st Row 4th Color
		{
			return "lava";
		}
		case "#ff7f27": // Orange - Lava (Full Size) - 1st Row 5th Color
		{
			return "lava-stack";
		}
		case "#99d9ea": // Bright Blue - Ice Block - 2nd Row 8th Color
		{
			return "ice";
		}
		case "#22b14c": // Dark Green - Slime block - 1st Row 7th Color
		{
			return "slime";
		}
		case "#ffaec9": // Pink - Checkpoint - 2nd Row 4th Color
		{
			return "checkpoint";
		}
		case "#b97a57": // Light Brown - Antigravity W/ Up Arrow - 2nd Row 3rd Color
		{
			return "antigravUp";
		}
		case "#880015": // Dark Brown - Antigravity W/ Down Arrow - 1st Row 3rd Color
		{
			return "antigravDown";
		}
		case "#7f7f7f": // Dark Grey - Code starter for next three pixels - 1st Row 2nd Color
		{
			codeLookup(x, y);
			return "wall";
		}
		default:
			return null;
	}	
}

function codeLookup(x, y) {
	var canvas = document.getElementById("test1"),
    ctx = canvas.getContext("2d");
	var code = [];
	code.push(GetGameObject(GetPixel(x+1,y), x, y));
	code.push(GetGameObject(GetPixel(x+2,y), x, y));
	code.push(GetGameObject(GetPixel(x+3,y), x, y));
	ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillRect(x+1, y, 3, 1);
	switch (code.join()) {
		case "coin, coin, coin":
		{
			document.getElementById("sprite").src = spritesheet4.png;
		}
		default:
			console.log("code inalid");
			console.log(code.join());
	}
}

var boxes = [];
var lava = [];
var ice = [];
var coin = [];
var goal = [];
var slime = [];
var checkpoint = [];
var antigrav = [];
var player;
var player2;
var player2Exists = false;
var coinsNeeded = 0;

function Instantiate(object, xPos, yPos, h, w) {
	if (object == "player") {
	   player = {
	    opacity: 1,
		friction: 0.8,
        x: xPos,
        y: yPos,
        width: w-2,
        height: h-2,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
		};
	}
	if (object == "player2") {
	   player2Exists = true;
	   player2 = {
	    opacity: 1,
		friction: 0.8,
        x: xPos,
        y: yPos,
        width: w-2,
        height: h-2,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
		};
	}
	if (object == "wall") {
		boxes.push({
		opacity: 1,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "black"
		});
	}
	if (object == "lava") {
		lava.push({
		type: 32,
		opacity: 1,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "red"
		});
	}
	if (object == "lava-stack") {
		lava.push({
		type: 48,
		opacity: 1,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "red"
		});
	}
	if (object == "ice") {
		ice.push({
		opacity: 1,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "blue"
		});
	}
	if (object == "coin") {
		coinsNeeded++;
		coin.push({
		opacity: 1,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "yellow"
		});
	}
	if (object == "goal") {
		goal.push({
		opacity: 0.4,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "green"
		});
	}
	if (object == "slime") {
		slime.push({
		opacity: 0.8,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "forestgreen"
		});
	}
	if (object == "checkpoint") {
		checkpoint.push({
		opacity: 1,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "lime"
		});
	}
	if (object == "antigravDown") {
		antigrav.push({
		opacity: 1,
		type:144,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "brown"
		});
	}
	if (object == "antigravUp") {
		antigrav.push({
		opacity: 1,
		type:128,
		x: xPos,
		y: yPos,
		width: w,
		height: h,
		color: "brown"
		});
	}
}

var friction = 0.8;


(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
	var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = levelMap.width * tileSize,
    height = levelMap.height * tileSize,
    keys = [],
    gravity = 0.2,
	coinsCollected = 0;

canvas.width = width;
canvas.height = height;

function update() {
    // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
			if (gravity > 0) {
            player.velY = -player.speed * 2;
			}
			else {
			player.velY = player.speed * 2;
			}
        }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= player.friction;
    player.velY += gravity;
	
	if (player2Exists == true) {
	colCheck(player, player2);
    }
	
    ctx.clearRect(0, 0, width, height);
    
    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
		ctx.drawImage(spritesheet, 0, 0, 16, 16, boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
			player.grounded = false;
        } else if (dir === "b") {
			while (player.friction != 0.8) {
				player.friction -= 0.1;
			}
			while (player.speed != 3) {
				player.speed -= 1;
			}
			if (gravity > 0) {
			player.grounded = true;
            player.jumping = false;
			}
			else {
			player.velY *= -1;
			}
        } else if (dir === "t") {
			while (player.friction != 0.8) {
				player.friction -= 0.1;
			}
			while (player.speed != 3) {
				player.speed -= 1;
			}
			if (gravity > 0) {
            player.velY *= -1;
			}
			else {
			player.grounded = true;
			player.jumping = false;
			}
        }

    }
	
	for (var i = 0; i < lava.length; i++) {
		ctx.drawImage(spritesheet, lava[i].type, 0, 16, 16, lava[i].x, lava[i].y, lava[i].width, lava[i].height);
        var dir = colCheck(player, lava[i]);

        if (dir === "l" || dir === "r") {
			cancelAnimationFrame(update);
			reset();
			return;
        } else if (dir === "b") {
			cancelAnimationFrame(update);
			reset();
			return;
        } else if (dir === "t") {
			cancelAnimationFrame(update);
            reset();
			return;
        }
    }
	
	for (var i = 0; i < antigrav.length; i++) {
		ctx.drawImage(spritesheet, antigrav[i].type, 0, 16, 16, antigrav[i].x, antigrav[i].y, antigrav[i].width, antigrav[i].height);
        var dir = colCheck(player, antigrav[i]);

        if (dir === "l" || dir === "r") {
		
        } else if (dir === "b") {
			gravity = gravity * -1;
			player.velY = -player.speed;
			player.grounded=false;
		}
		else if (dir === "t") {
			gravity = gravity * -1;
			player.velY = player.speed;
			player.grounded=false;
		}
    }
	
	for (var i = 0; i < checkpoint.length; i++) {
		ctx.drawImage(spritesheet, 112, 0, 16, 16, checkpoint[i].x, checkpoint[i].y, checkpoint[i].width, checkpoint[i].height);
        var dir = colCheck(player, checkpoint[i]);

        if (dir === "l" || dir === "r" || dir === "b" || dir === "t") {
			setCheckpoint(dir, i);
		}
    }
	
	for (var i = 0; i < goal.length; i++) {
		ctx.drawImage(spritesheet, 80, 0, 16, 16, goal[i].x, goal[i].y, goal[i].width, goal[i].height);
        
        var dir = colCheck(player, goal[i]);

        if (dir === "l") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player.velX = 0;
			}
			else {
				player.velX += 0.1;
			}
        }
		else if (dir === "r") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player.velX = 0;
			}
			else {
				player.velX -= 0.1;
			}
		}
		else if (dir === "b") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player.velY = 0;
			}
			else {
				player.velY -= 0.1;
			}
        } else if (dir === "t") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player.velY = 0;
			}
			else {
				player.velY += 0.1;
			}
        }

    }
	
	for (var i = 0; i < coin.length; i++) {
        ctx.drawImage(spritesheet, 16, 0, 16, 16, coin[i].x, coin[i].y, coin[i].width, coin[i].height);
        var dir = colCheck(player, coin[i]);

        if (dir === "l" || dir === "r") {
			coinsCollected++;
			coin.splice(i, 1);
        } else if (dir === "b") {
			coinsCollected++;
			coin.splice(i, 1);
        } else if (dir === "t") {
            coinsCollected++;
			coin.splice(i, 1);
        }

    }
	
    for (var i = 0; i < ice.length; i++) {
		ctx.drawImage(spritesheet, 96, 0, 16, 16, ice[i].x, ice[i].y, ice[i].width, ice[i].height);
        var dir = colCheck(player, ice[i]);
        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
			if (gravity > 0) {
			player.friction = 1;
            player.grounded = true;
            player.jumping = false;
			}
			else {
			player.velY *= -1;
			}
			while (player.speed != 3) {
				player.speed -= 1;
			}
        } else if (dir === "t") {
			if (gravity > 0) {
            player.velY *= -1;
			}
			else {
			player.friction = 1;
			player.grounded = true;
			player.jumping = false;
			}
			while (player.speed != 3) {
				player.speed -= 1;
			}
        }

    }
	
    for (var i = 0; i < slime.length; i++) {
		ctx.drawImage(spritesheet, 64, 0, 16, 16, slime[i].x, slime[i].y, slime[i].width, slime[i].height);
        var dir = colCheck(player, slime[i]);
        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
			if (gravity > 0) {
			player.speed = 4;
            player.grounded = true;
            player.jumping = false;
			}
			else {
			player.velY *= -1;
			}
			while (player.friction != 0.8) {
				player.friction -= 0.1;
			}
        } else if (dir === "t") {
			if (gravity > 0) {
            player.velY *= -1;
			}
			else {
			player.speed = 4;
			player.grounded = true;
			player.jumping = false;
			}
			while (player.friction != 0.8) {
				player.friction -= 0.1;
			}
        }

    }
    
    if(player.grounded){
         player.velY = 0;
    }
    
    player.x += player.velX;
    player.y += player.velY;

    ctx.fill();
    ctx.fillStyle = "blue";
	ctx.globalAlpha = player.opacity;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Player 2
	if (player2Exists == true) {
    if (keys[87]) {
        // up arrow or space
        if (!player2.jumping && player2.grounded) {
            player2.jumping = true;
            player2.grounded = false;
			if (gravity > 0) {
            player2.velY = -player2.speed * 2;
			}
			else {
			player2.velY = player2.speed * 2;
			}
        }
    }
    if (keys[68]) {
        // right arrow
        if (player2.velX < player2.speed) {
            player2.velX++;
        }
    }
    if (keys[65]) {
        // left arrow
        if (player2.velX > -player2.speed) {
            player2.velX--;
        }
    }

    player2.velX *= player2.friction;
    player2.velY += gravity;
    
	colCheck(player2, player);
	
    player2.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        var dir = colCheck(player2, boxes[i]);

        if (dir === "l" || dir === "r") {
            player2.velX = 0;
            player2.jumping = false;
			player2.grounded = false;
        } else if (dir === "b") {
			while (player2.friction != 0.8) {
				player2.friction -= 0.1;
			}
			while (player2.speed != 3) {
				player2.speed -= 1;
			}
			if (gravity > 0) {
			player2.grounded = true;
            player2.jumping = false;
			}
			else {
			player2.velY *= -1;
			}
        } else if (dir === "t") {
			while (player2.friction != 0.8) {
				player2.friction -= 0.1;
			}
			while (player2.speed != 3) {
				player2.speed -= 1;
			}
			if (gravity > 0) {
            player2.velY *= -1;
			}
			else {
			player2.grounded = true;
			player2.jumping = false;
			}
        }

    }
	
	for (var i = 0; i < lava.length; i++) {
        var dir = colCheck(player2, lava[i]);

        if (dir === "l" || dir === "r") {
			cancelAnimationFrame(update);
			reset();
			return;
        } else if (dir === "b") {
			cancelAnimationFrame(update);
			reset();
			return;
        } else if (dir === "t") {
			cancelAnimationFrame(update);
            reset();
			return;
        }
    }
	
	for (var i = 0; i < antigrav.length; i++) {
        var dir = colCheck(player2, antigrav[i]);

        if (dir === "l" || dir === "r") {
		
        } else if (dir === "b") {
			gravity = gravity * -1;
			player2.velY = -player2.speed;
			player2.grounded=false;
		}
		else if (dir === "t") {
			gravity = gravity * -1;
			player2.velY = player2.speed;
			player2.grounded=false;
		}
    }
	
	for (var i = 0; i < checkpoint.length; i++) {
        var dir = colCheck(player2, checkpoint[i]);

        if (dir === "l" || dir === "r" || dir === "b" || dir === "t") {
			setCheckpoint(dir, i);
		}
    }
	
	for (var i = 0; i < goal.length; i++) {
        
        var dir = colCheck(player2, goal[i]);

        if (dir === "l") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player2.velX = 0;
			}
			else {
				player2.velX += 0.1;
			}
        }
		else if (dir === "r") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player2.velX = 0;
			}
			else {
				player2.velX -= 0.1;
			}
		}
		else if (dir === "b") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player2.velY = 0;
			}
			else {
				player2.velY -= 0.1;
			}
        } else if (dir === "t") {
			if (checkAllCoins() == 1) {
				alert("Level Complete!");
				goal.splice(i, 1);
				sessionStorage.clear();
				player2.velY = 0;
			}
			else {
				player2.velY += 0.1;
			}
        }

    }
	
	for (var i = 0; i < coin.length; i++) {
        var dir = colCheck(player2, coin[i]);

        if (dir === "l" || dir === "r") {
			coinsCollected++;
			coin.splice(i, 1);
        } else if (dir === "b") {
			coinsCollected++;
			coin.splice(i, 1);
        } else if (dir === "t") {
            coinsCollected++;
			coin.splice(i, 1);
        }

    }
	
    for (var i = 0; i < ice.length; i++) {
        var dir = colCheck(player2, ice[i]);
        if (dir === "l" || dir === "r") {
            player2.velX = 0;
            player2.jumping = false;
        } else if (dir === "b") {
			if (gravity > 0) {
			player2.friction = 1;
            player2.grounded = true;
            player2.jumping = false;
			}
			else {
			player2.velY *= -1;
			}
			while (player2.speed != 3) {
				player2.speed -= 1;
			}
        } else if (dir === "t") {
			if (gravity > 0) {
            player2.velY *= -1;
			}
			else {
			player2.friction = 1;
			player2.grounded = true;
			player2.jumping = false;
			}
			while (player2.speed != 3) {
				player2.speed -= 1;
			}
        }

    }
	
    for (var i = 0; i < slime.length; i++) {
        var dir = colCheck(player2, slime[i]);
        if (dir === "l" || dir === "r") {
            player2.velX = 0;
            player2.jumping = false;
        } else if (dir === "b") {
			if (gravity > 0) {
			player2.speed = 4;
            player2.grounded = true;
            player2.jumping = false;
			}
			else {
			player2.velY *= -1;
			}
			while (player2.friction != 0.8) {
				player2.friction -= 0.1;
			}
        } else if (dir === "t") {
			if (gravity > 0) {
            player2.velY *= -1;
			}
			else {
			player2.speed = 4;
			player2.grounded = true;
			player2.jumping = false;
			}
			while (player2.friction != 0.8) {
				player2.friction -= 0.1;
			}
        }

    }
    
    if(player2.grounded){
         player2.velY = 0;
    }
    
    player2.x += player2.velX;
    player2.y += player2.velY;

    ctx.fill();
    ctx.fillStyle = "green";
	ctx.globalAlpha = player2.opacity;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
	}
	
    requestAnimationFrame(update);
}

function setCheckpoint(dir, i) {
	var d = dir;
	var q = i;
	if (confirm('Would you like to set this as a checkpoint? Can only be done once! Make sure you have all the coins you can up to this point! If Yes press Ok. If No press cancel. Pressing either will permanently remove the checkpoint so choose carefully!')) {
		checkpoint.splice(q, 1);
		wait(100);
		sessionStorage.setItem("playerx", JSON.stringify(player.x));
		sessionStorage.setItem("playery", JSON.stringify(player.y-16));
		player.velY = 0;
		player.velX = 0;
	}
	else {
		checkpoint.splice(q, 1);
		player.velY = 0;
		player.velX = 0;
	}
}

function removeStorage() {
	sessionStorage.removeItem("playerx");
	sessionStorage.removeItem("playery");
	sessionStorage.removeItem("checkpointArray");
	sessionStorage.removeItem("coinArray");
	sessionStorage.removeItem("coinsNeeded");
	sessionStorage.removeItem("coinsCollected");
	sessionStorage.removeItem("dailyLevel");
}

function reset() {
	sessionStorage.setItem("checkpointArray", JSON.stringify(checkpoint));
	sessionStorage.setItem("coinArray", JSON.stringify(coin));
	sessionStorage.setItem("coinsCollected", coinsCollected);
	sessionStorage.setItem("coinsNeeded", coinsNeeded);
	location.reload();
}

function ejectPlayer(dir) {
    if (dir === "t") {
		player.y -= 2;
	}
    if (dir === "b") {
		player.y += 2;
	}
    if (dir === "l") {
		player.x += 2;
	}
    if (dir === "r") {
		player.x -= 2;
	}
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
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
    return colDir;
}

function checkAllCoins() {
	var collected = 0;
	if (coinsCollected == coinsNeeded) {
		collected = 1;
		return collected;
	}
	else {
		collected = 0;
		return collected;
	}
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


document.getElementById("test1").addEventListener("load", function () {
    update();
});