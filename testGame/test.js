// This is the code for the entire game.
// NOT ALL CODE IS WRITTEN BY ME. I DO NOT KNOW THE OC'S OF EVERYTHING. W3, QUORA, AND GOOGLE ARE ALL MAJOR CONTRIBUTORS.
// Oiginal Base code written by Resistance Studio on Hackermoon.com for Unity. I converted the code to javascript and added a bunch of stuff.
// https://hackernoon.com/generating-a-level-from-an-image-in-unity3d-225b51a68172


// The size of the tiles in the background
var tileSize = 16;
// The X and Y coordinates of the start position for drawing the level.
var StartPoint = [0, 0];
// levelMap is the actual png that is turned into a level
var levelMap = new Image();
levelMap.src = './lvls/castle.png';
levelMap.height = 32;
levelMap.setAttribute('crossOrigin', '');
levelMap.width = 64;
// This is the spritesheet used, selected from an image with 'sprite' id. That images src can be changed to change spritesheet.
var spritesheet = document.getElementById('sprite');
console.log(levelMap.height);
console.log(levelMap.width);
// the size of the tiles in the texture with the level design
var levelMapTileSize = 1;

// If a level was previously loaded, then load it again.
if (sessionStorage.getItem('level') != null) {
    levelMap.src = sessionStorage.getItem('level');
    Test1();
}

// Converts image to canvas; returns new canvas element
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
			// If it was a level that has been reloaded, it will generate these based off of whats left.
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

// Just an RGB to Hex converter.
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Generates the level
function GenerateLevel() {
    for (var x = 0; x < levelMap.width; x += levelMapTileSize) {
        for (var y = 0; y < levelMap.height; y += levelMapTileSize) {
            var pixelColor = GetPixel(x, y);
            var objectName = GetGameObject(pixelColor, x, y);
            if (objectName == null) {
                continue;
            }

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
    // hideThings() hides all of the start screen stuff.
	document.getElementById("hide").style.display = "none";
    document.getElementById("canvas").style.display = "inline";
}


function GetPixel(x, y) {
	// Using the x and y it checks the color and returns the hex value of it.
    var ctx = document.getElementById('test1');
    if (ctx.getContext) {
        ctx = ctx.getContext('2d');
    }
    var imgData = ctx.getImageData(x, y, 1, 1);
    var red = imgData.data[0];
    var green = imgData.data[1];
    var blue = imgData.data[2];
    var returnVar = rgbToHex(red, green, blue);
    return returnVar;
}

function TileToPoint(x, y) {
	// Used to find the position of a tile from paint to level.
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
	// Takes the color from earlier and returns its associated object. X and Y values used for color code lookup.
    // refer to the colors.jpeg for what each color exactly is etc.
    switch (color) {
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
        case "#00a2e8": // Turquoise - Portals! - 1st Row 8th Color
        {
            return "portal";
        }
        case "#c3c3c3": // Light Grey - Platform - 2nd Row 2nd Color
        {
            return "platform";
        }
        case "#ffc90e": // Gold - Moving Block - 2nd Row 5th Color
        {
            return "moving";
        }
        default:
            return null;
    }
}

function codeLookup(x, y) {
	// Takes in an x and y value of the codes start position. Looks three blocks left and checks that series against codes to change different factors.
    var canvas = document.getElementById("test1"),
        ctx = canvas.getContext("2d");
    var code = [];
    code.push(GetGameObject(GetPixel(x + 1, y), x, y));
    code.push(GetGameObject(GetPixel(x + 2, y), x, y));
    code.push(GetGameObject(GetPixel(x + 3, y), x, y));
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillRect(x + 1, y, 3, 1);
    switch (code.join(" ")) {
        case "coin coin coin": {
            document.getElementById("sprite").src = "./spritesheets/spritesheet4.png";
            break;
        }
        case "antigravDown wall wall": {
            gravity = 0.1;
            break;
        }
        case "antigravDown antigravDown wall": {
            gravity = 0.05;
            break;
        }
        case "antigravDown antigravDown antigravDown": {
            gravity = 0.01;
            break;
        }
        case "antigravUp wall wall": {
            gravity = 0.3;
            break;
        }
        case "antigravUp antigravUp wall": {
            gravity = 0.5;
            break;
        }
        case "antigravUp antigravUp antigravUp": {
            gravity = 0.8;
            break;
        }
        case "ice wall wall": {
            friction = 0.85;
            break;
        }
        case "ice ice wall": {
            friction = 0.9;
            break;
        }
        case "ice ice ice": {
            friction = 1;
            break;
        }
        case "slime wall wall": {
            speed = 3.2;
            break;
        }
        case "slime slime wall": {
            speed = 3.5;
            break;
        }
        case "slime slime slime": {
            speed = 4;
            break;
        }
        default:
            console.log("code invalid");
            console.log(code.join(" "));
            break;
    }
}

// Here are the arrays and variables for all game objects. (Boxes are walls)
var boxes = [];
var lava = [];
var ice = [];
var coin = [];
var goal = [];
var slime = [];
var checkpoint = [];
var portal = [];
var platform = [];
var antigrav = [];
var moving = [];
var player;
var player2;
var player2Exists = false;
var coinsNeeded = 0;

function Instantiate(object, xPos, yPos, h, w) {
	// Takes the object returned from GetGameObject(), an xPos and yPos from TileToPoint() and a height and width from the tileSize.
	// Then returns an actual object in the game
    if (object == "player") {
        player = {
            opacity: 1,
            friction: friction,
            x: xPos,
            y: yPos,
            width: w - 2,
            height: h - 2,
            speed: speed,
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
            friction: friction,
            x: xPos,
            y: yPos,
            width: w - 2,
            height: h - 2,
            speed: speed,
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
            opacity: friction,
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
            type: 144,
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
            type: 128,
            x: xPos,
            y: yPos,
            width: w,
            height: h,
            color: "brown"
        });
    }
    if (object == "portal") {
        portal.push({
            opacity: 1,
            x: xPos,
            y: yPos,
            width: w,
            height: h,
            color: "blue"
        });
    }
    if (object == "platform") {
        platform.push({
            opacity: 1,
            x: xPos,
            y: yPos,
            width: w,
            height: h,
            color: "grey"
        });
    }
	if (object == "moving") {
        moving.push({
            opacity: 1,
            x: xPos,
            y: yPos,
            width: w,
            height: h,
            speed: speed,
            velX: 0.5
        });
    }
}

// Animation stuff I don't fully understand. I think it just sets up variables to use for request and cancel animation. not sure how
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();

// Sets up the game world canvas
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = levelMap.width * tileSize,
    height = levelMap.height * tileSize,
    keys = [],
    gravity = 0.2,
    speed = 3,
    friction = 0.8,
    coinsCollected = 0;

canvas.width = width;
canvas.height = height;

function update() {
	// The function that Runs the entire game
	
    // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            if (gravity > 0) {
                player.velY = -player.speed * 2;
            } else {
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

	// Collisions with player 2
    if (player2Exists == true) {
        colCheck(player, player2);
    }

    ctx.clearRect(0, 0, width, height);

    player.grounded = false;
	
	// Code to make Wall Blocks work
    for (var i = 0; i < boxes.length; i++) {
        ctx.drawImage(spritesheet, 0, 0, 16, 16, boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            player.grounded = false;
        } else if (dir === "b") {
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
            if (gravity > 0) {
                player.grounded = true;
                player.jumping = false;
            } else {
                player.velY *= -1;
            }
        } else if (dir === "t") {
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
            if (gravity > 0) {
                player.velY *= -1;
            } else {
                player.grounded = true;
                player.jumping = false;
            }
        }

    }
	
	// Code to make Platforms work
    for (var i = 0; i < platform.length; i++) {
        ctx.drawImage(spritesheet, 160, 0, 16, 16, platform[i].x, platform[i].y, platform[i].width, platform[i].height);
        var dir = noColCheck(player, platform[i]);

        if (dir === "b") {
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
            if (gravity > 0) {
                player.grounded = true;
                player.jumping = false;
            } else {
                player.velY *= -1;
            }
        } else if (dir === "t") {
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
        }

    }

	// Code to make Lava (Both Types) Work
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

	// Code to make Portals Work
    for (var i = 0; i < portal.length; i++) {
        ctx.drawImage(spritesheet, 176, 0, 16, 16, portal[i].x, portal[i].y, portal[i].width, portal[i].height);
        var dir = colCheck(player, portal[i]);

        if (dir === "l" || dir === "r" || dir === "t" || dir === "b") {
            var teleportTo = randomNumber(0, portal.length);
            var x = portal[teleportTo].x / 16;
            var y = portal[teleportTo].y / 16;
            y += 1;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            y -= 1;
            x += 1;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            y -= 1;
            x -= 1;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            x -= 1;
            y += 1;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            x += 2;
            y += 1;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            y -= 2;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            x -= 2;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            y += 2;
            if (isOpen(x, y)) {
                player.x = x * 16;
                player.y = y * 16;
            }
            console.log(x);
            console.log(y);
            console.log(teleportTo);
        }
    }

	// Code to make the Antigravity stuff work.
    for (var i = 0; i < antigrav.length; i++) {
        ctx.drawImage(spritesheet, antigrav[i].type, 0, 16, 16, antigrav[i].x, antigrav[i].y, antigrav[i].width, antigrav[i].height);
        var dir = colCheck(player, antigrav[i]);

        if (dir === "l" || dir === "r") {

        } else if (dir === "b") {
            gravity = gravity * -1;
            player.velY = -player.speed;
            player.grounded = false;
        } else if (dir === "t") {
            gravity = gravity * -1;
            player.velY = player.speed;
            player.grounded = false;
        }
    }

	// Code to make Checkpoints work
    for (var i = 0; i < checkpoint.length; i++) {
        ctx.drawImage(spritesheet, 112, 0, 16, 16, checkpoint[i].x, checkpoint[i].y, checkpoint[i].width, checkpoint[i].height);
        var dir = colCheck(player, checkpoint[i]);

        if (dir === "l" || dir === "r" || dir === "b" || dir === "t") {
            setCheckpoint(dir, i);
        }
    }

	// Code to make Goals work
    for (var i = 0; i < goal.length; i++) {
        ctx.drawImage(spritesheet, 80, 0, 16, 16, goal[i].x, goal[i].y, goal[i].width, goal[i].height);

        var dir = colCheck(player, goal[i]);

        if (dir === "l") {
            if (checkAllCoins() == 1) {
                alert("Level Complete!");
                goal.splice(i, 1);
                sessionStorage.clear();
                player.velX = 0;
            } else {
                player.velX += 0.1;
            }
        } else if (dir === "r") {
            if (checkAllCoins() == 1) {
                alert("Level Complete!");
                goal.splice(i, 1);
                sessionStorage.clear();
                player.velX = 0;
            } else {
                player.velX -= 0.1;
            }
        } else if (dir === "b") {
            if (checkAllCoins() == 1) {
                alert("Level Complete!");
                goal.splice(i, 1);
                sessionStorage.clear();
                player.velY = 0;
            } else {
                player.velY -= 0.1;
            }
        } else if (dir === "t") {
            if (checkAllCoins() == 1) {
                alert("Level Complete!");
                goal.splice(i, 1);
                sessionStorage.clear();
                player.velY = 0;
            } else {
                player.velY += 0.1;
            }
        }

    }

	// Code to make Coins work
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

	// Code to make Ice work
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
            } else {
                player.velY *= -1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
        } else if (dir === "t") {
            if (gravity > 0) {
                player.velY *= -1;
            } else {
                player.friction = 1;
                player.grounded = true;
                player.jumping = false;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
        }

    }

	// Code to make Slime Work
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
            } else {
                player.velY *= -1;
            }
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
        } else if (dir === "t") {
            if (gravity > 0) {
                player.velY *= -1;
            } else {
                player.speed = 4;
                player.grounded = true;
                player.jumping = false;
            }
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
        }

    }
	
	// Code to make Moving Blocks work
    for (var i = 0; i < moving.length; i++) {
        ctx.drawImage(spritesheet, 0, 0, 16, 16, moving[i].x, moving[i].y, moving[i].width, moving[i].height);
		for (var j = 0; j < boxes.length; j++) {
			var dir = colCheck(moving[i], boxes[j]);
			if (dir === "l" || dir === "r") {
				moving[i].velX *= -1;
			}
		}
		for (var j = 0; j < ice.length; j++) {
			var dir = colCheck(moving[i], ice[j]);
			if (dir === "l" || dir === "r") {
				moving[i].velX *= -1;
			}
		}
		for (var j = 0; j < slime.length; j++) {
			var dir = colCheck(moving[i], slime[j]);
			if (dir === "l" || dir === "r") {
				moving[i].velX *= -1;
			}
		}
		for (var j = 0; j < antigrav.length; j++) {
			var dir = colCheck(moving[i], antigrav[j]);
			if (dir === "l" || dir === "r") {
				moving[i].velX *= -1;
			}
		}
		for (var j = 0; j < portal.length; j++) {
			var dir = colCheck(moving[i], portal[j]);
			if (dir === "l" || dir === "r") {
				moving[i].velX *= -1;
			}
		}
		for (var j = 0; j < platform.length; j++) {
			var dir = colCheck(moving[i], platform[j]);
			if (dir === "l" || dir === "r") {
				moving[i].velX *= -1;
			}
		}
		
		var dir = colCheck(player, moving[i]);
		if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
            player.grounded = false;
        } else if (dir === "b") {
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
            if (gravity > 0) {
				if (moving[i].velX == 0.5) {
					player.velX = moving[i].velX + 0.055555555;
				}
				else if (moving[i].velX == -0.5) {
					player.velX = moving[i].velX - 0.055555555;
				}
                player.grounded = true;
                player.jumping = false;
            } else {
                player.velY *= -1;
            }
        } else if (dir === "t") {
            while (player.friction != friction) {
                player.friction -= 0.1;
            }
            while (player.speed != speed) {
                player.speed -= 1;
            }
            if (gravity > 0) {
                player.velY *= -1;
            } else {
				if (moving[i].velX == 0.5) {
					player.velX = moving[i].velX + 0.055555555;
				}
				else if (moving[i].velX == -0.5) {
					player.velX = moving[i].velX - 0.055555555;
				}
                player.grounded = true;
                player.jumping = false;
            }
        }
		moving[i].x += moving[i].velX;
    }

    if (player.grounded) {
        player.velY = 0;
    }

    player.x += player.velX;
    player.y += player.velY;

	// Draw players new position
    ctx.fill();
    ctx.fillStyle = "blue";
    ctx.globalAlpha = player.opacity;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // if Player 2 exists, do all player 1 stuff but minus the drawing and extra movements
    if (player2Exists == true) {
        if (keys[87]) {
            // w
            if (!player2.jumping && player2.grounded) {
                player2.jumping = true;
                player2.grounded = false;
                if (gravity > 0) {
                    player2.velY = -player2.speed * 2;
                } else {
                    player2.velY = player2.speed * 2;
                }
            }
        }
        if (keys[68]) {
            // d
            if (player2.velX < player2.speed) {
                player2.velX++;
            }
        }
        if (keys[65]) {
            // a
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
                while (player2.friction != friction) {
                    player2.friction -= 0.1;
                }
                while (player2.speed != speed) {
                    player2.speed -= 1;
                }
                if (gravity > 0) {
                    player2.grounded = true;
                    player2.jumping = false;
                } else {
                    player2.velY *= -1;
                }
            } else if (dir === "t") {
                while (player2.friction != friction) {
                    player2.friction -= 0.1;
                }
                while (player2.speed != speed) {
                    player2.speed -= 1;
                }
                if (gravity > 0) {
                    player2.velY *= -1;
                } else {
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

        for (var i = 0; i < portal.length; i++) {
            ctx.drawImage(spritesheet, 176, 0, 16, 16, portal[i].x, portal[i].y, portal[i].width, portal[i].height);
            var dir = colCheck(player2, portal[i]);

            if (dir === "l" || dir === "r" || dir === "t" || dir === "b") {
                var teleportTo = randomNumber(0, portal.length);
                var x = portal[teleportTo].x / 16;
                var y = portal[teleportTo].y / 16;
                y += 1;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                y -= 1;
                x += 1;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                y -= 1;
                x -= 1;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                x -= 1;
                y += 1;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                x += 2;
                y += 1;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                y -= 2;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                x -= 2;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                y += 2;
                if (isOpen(x, y)) {
                    player2.x = x * 16;
                    player2.y = y * 16;
                }
                console.log(x);
                console.log(y);
                console.log(teleportTo);
            }
        }

        for (var i = 0; i < antigrav.length; i++) {
            var dir = colCheck(player2, antigrav[i]);

            if (dir === "l" || dir === "r") {

            } else if (dir === "b") {
                gravity = gravity * -1;
                player2.velY = -player2.speed;
                player2.grounded = false;
            } else if (dir === "t") {
                gravity = gravity * -1;
                player2.velY = player2.speed;
                player2.grounded = false;
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
                } else {
                    player2.velX += 0.1;
                }
            } else if (dir === "r") {
                if (checkAllCoins() == 1) {
                    alert("Level Complete!");
                    goal.splice(i, 1);
                    sessionStorage.clear();
                    player2.velX = 0;
                } else {
                    player2.velX -= 0.1;
                }
            } else if (dir === "b") {
                if (checkAllCoins() == 1) {
                    alert("Level Complete!");
                    goal.splice(i, 1);
                    sessionStorage.clear();
                    player2.velY = 0;
                } else {
                    player2.velY -= 0.1;
                }
            } else if (dir === "t") {
                if (checkAllCoins() == 1) {
                    alert("Level Complete!");
                    goal.splice(i, 1);
                    sessionStorage.clear();
                    player2.velY = 0;
                } else {
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
                } else {
                    player2.velY *= -1;
                }
                while (player2.speed != speed) {
                    player2.speed -= 1;
                }
            } else if (dir === "t") {
                if (gravity > 0) {
                    player2.velY *= -1;
                } else {
                    player2.friction = 1;
                    player2.grounded = true;
                    player2.jumping = false;
                }
                while (player2.speed != speed) {
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
                } else {
                    player2.velY *= -1;
                }
                while (player2.friction != friction) {
                    player2.friction -= 0.1;
                }
            } else if (dir === "t") {
                if (gravity > 0) {
                    player2.velY *= -1;
                } else {
                    player2.speed = 4;
                    player2.grounded = true;
                    player2.jumping = false;
                }
                while (player2.friction != friction) {
                    player2.friction -= 0.1;
                }
            }

        }
		
    for (var i = 0; i < moving.length; i++) {		
		var dir = colCheck(player2, moving[i]);
		if (dir === "l" || dir === "r") {
            player2.velX = 0;
            player2.jumping = false;
            player2.grounded = false;
        } else if (dir === "b") {
            while (player2.friction != friction) {
                player2.friction -= 0.1;
            }
            while (player2.speed != speed) {
                player2.speed -= 1;
            }
            if (gravity > 0) {
				if (moving[i].velX == 0.5) {
					player2.velX = moving[i].velX + 0.055555555;
				}
				else if (moving[i].velX == -0.5) {
					player2.velX = moving[i].velX - 0.055555555;
				}
                player2.grounded = true;
                player2.jumping = false;
            } else {
                player2.velY *= -1;
            }
        } else if (dir === "t") {
            while (player2.friction != friction) {
                player2.friction -= 0.1;
            }
            while (player2.speed != speed) {
                player2.speed -= 1;
            }
            if (gravity > 0) {
                player2.velY *= -1;
            } else {
				if (moving[i].velX == 0.5) {
					player2.velX = moving[i].velX + 0.055555555;
				}
				else if (moving[i].velX == -0.5) {
					player2.velX = moving[i].velX - 0.055555555;
				}
                player2.grounded = true;
                player2.jumping = false;
            }
        }
    }

        if (player2.grounded) {
            player2.velY = 0;
        }

        player2.x += player2.velX;
        player2.y += player2.velY;

        ctx.fill();
        ctx.fillStyle = "green";
        ctx.globalAlpha = player2.opacity;
        ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
    }

	// dont understand this but updates the animation
    requestAnimationFrame(update);
}

function isOpen(x, y) {
	// Used for color codes
    if (GetGameObject(GetPixel(x, y), x, y) !== null) {
        return false;
    } else {
        return true;
    }
}

function setCheckpoint(dir, i) {
	// Used to set checkpoints
    var d = dir;
    var q = i;
    if (confirm('Would you like to set this as a checkpoint? Can only be done once! Make sure you have all the coins you can up to this point! If Yes press Ok. If No press cancel. Pressing either will permanently remove the checkpoint so choose carefully!')) {
        checkpoint.splice(q, 1);
        wait(100);
        sessionStorage.setItem("playerx", JSON.stringify(player.x));
        sessionStorage.setItem("playery", JSON.stringify(player.y - 16));
        player.velY = 0;
        player.velX = 0;
    } else {
        checkpoint.splice(q, 1);
        player.velY = 0;
        player.velX = 0;
    }
}

function removeStorage() {
	// Resets the storage if the level is finishe
    sessionStorage.removeItem("playerx");
    sessionStorage.removeItem("playery");
    sessionStorage.removeItem("checkpointArray");
    sessionStorage.removeItem("coinArray");
    sessionStorage.removeItem("coinsNeeded");
    sessionStorage.removeItem("coinsCollected");
    sessionStorage.removeItem("dailyLevel");
}

function reset() {
	// Reloads the game if player dies
    sessionStorage.setItem("checkpointArray", JSON.stringify(checkpoint));
    sessionStorage.setItem("coinArray", JSON.stringify(coin));
    sessionStorage.setItem("coinsCollected", coinsCollected);
    sessionStorage.setItem("coinsNeeded", coinsNeeded);
    location.reload();
}

function ejectPlayer(dir) {
	// Pushes player off of goal if they dont have all coins
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
	// DONT FULLY UNDERSTAND Collisions yet but here they are.
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

function noColCheck(shapeA, shapeB) {
	// My attempt at one without actually colliding but still testing if they touched. Don't think it works.
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
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
            } else {
                colDir = "r";
            }
        }
    }
    return colDir;
}

function checkAllCoins() {
	// Checks if player has all coins to end the level
    var collected = 0;
    if (coinsCollected == coinsNeeded) {
        collected = 1;
        return collected;
    } else {
        collected = 0;
        return collected;
    }
}

function back() {
	// Allows you to leave the level without finishing it. Only usable from console.
    sessionStorage.clear();
    location.reload();
}

// Checks for keys moving down and up
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

// Runs update once game canvas loads again. Not sure what it does.
document.getElementById("test1").addEventListener("load", function() {
    update();
});