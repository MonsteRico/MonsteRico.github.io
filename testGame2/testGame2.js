var player = {x:0,y:100, width:32, height:32, opacity:1, color:"blue", speed:4};
var canvas = document.getElementById("test1");
var ctx = canvas.getContext("2d");
var map = {"bedroom", "hallway"};
canvas.width = 512;
canvas.height = 512;
console.log(player.x);
console.log(player.y);
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();
var keys = [];
var width = canvas.width;
var height = canvas.height;
function update() {
	// Check for key presses
	if (keys[38]) {
        // up arrow
        player.y-=player.speed;
    }
    if (keys[39]) {
        // right arrow
        player.x+=player.speed;
    }
    if (keys[37]) {
        // left arrow
        player.x-=player.speed;
    }
	if (keys[40]) {
        // down arrow
        player.y+=player.speed;
    }
	ctx.clearRect(0, 0, width, height);
	
	//GAME CODE
	if (player.y > height) {
		player.y = 0;
	}
	else if (player.y < 0) {
		player.y = height;
	}
	if (player.x > width) {
		player.x = 0;
	}
	else if (player.x < 0) {
		player.x = width;
	}
	ctx.fill();
    ctx.fillStyle = player.color;
    ctx.globalAlpha = player.opacity;
    ctx.fillRect(player.x, player.y, player.width, player.height);
	
	//END GAME CODE
	
	
	// Start the loop again
	requestAnimationFrame(update);
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
