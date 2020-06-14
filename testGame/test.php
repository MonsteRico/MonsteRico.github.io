<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>The Test Game</title>.
	<link href="https://fonts.googleapis.com/css?family=Anton|Josefin+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./test.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
	<div class="container">
<div id="hide">
	<h1 class="title">The Test Game</h1>
	<div class="row justify-content-center">
		<a href="./upload.html">Upload a Level</a>
	</div>
	<div class="row justify-content-center">
		<p>Or play one of these other levels</p>
	</div>
	<div class="row justify-content-center">
				<button class="btn btn-light mr-3" id="daily">Daily Level</button>
		<a href="./help.html"><button href="./help.html" class="btn btn-light mr-3">Info on Making Levels</button></a>
		<a href="./changelog.html"><button href="./changelog.html" class="btn btn-light mr-3">Changelog</button></a>
	</div>
	<canvas style="display:none;" id="test1"></canvas>
	<img src="./spritesheets/spritesheet1.png" id="sprite" style="display:none">
<?php
$delete = $_GET['delete'];
$servername = "localhost";
$username = "psfsbdan_files";
$password = "Mallory1031";
$dbname = "psfsbdan_files";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM files";
$result = mysqli_query($conn,$sql);
$numRows = (int)(mysqli_num_rows($result)/3)+1;
for ($i = 0; $i<$numRows; $i++) {
	echo "<div class='row'>";
	for ($p = 0; $p<3; $p++) {
		$row = mysqli_fetch_assoc($result);
		if ($row) {
		echo "<div onclick='chooseLevel(\".\/" .$row['fileName']."\")' class='col-3 container card'>";
			if ($delete == "true") {
				echo "<form method='post' action='delete.php' enctype='multipart/form-data'><input style='display:none;' name='fileName' value='". $row['fileName'] . "' /><input type='submit' value='X' /></form>";
			}
			echo "<div class='row  justify-content-center'>";
				echo "<img class='col-12 image' src='./" . $row['fileName'] . "'>";
			echo "</div>";
			echo "<div class='row  justify-content-end'>";
				echo "<p>By " .$row['creator']. "</p>";
			echo "</div>";
			echo "<div class='row  justify-content-center'>";
				echo "<h1>" .$row['name']."</h1>";
			echo "</div>";
		echo "</div>";
	}
	}
	echo "</div>";

}
$conn->close();
?>
<div class="row">

</div>
	<h1 class="title">Test Levels</h1>
			<div class="row justify-content-center">
				<p>Levels testing different features around the game.</p>
			</div>
			<div class="row">
				<div onclick="chooseLevel('./lvls/iceTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/iceTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Ice/Slime Testing</h1>
					</div>
				</div>
				<div onclick="chooseLevel('./lvls/coinTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/coinTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Coin Testing</h1>
					</div>
				</div>
				<div onclick="chooseLevel('./lvls/gravity.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/gravity.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Gravity Testing</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div onclick="chooseLevel('./lvls/player2.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/player2.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Player 2 Testing</h1>
					</div>
				</div>
				<div onclick="chooseLevel('./lvls/colorCodeTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/colorCodeTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Color Code Testing</h1>
					</div>
				</div>
				<div onclick="chooseLevel('./lvls/portalTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/portalTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Portal Testing</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div onclick="chooseLevel('./lvls/movingBlockTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/movingBlockTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Moving Block Testing</h1>
					</div>
				</div>
				<div onclick="chooseLevel('./lvls/shooterTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/shooterTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Beam Testing</h1>
					</div>
				</div>
				<div onclick="chooseLevel('./lvls/blinkTest.png')" class="col-3 container card">
					<div class="row  justify-content-center">
						<img class="col-12 image" src="./lvls/blinkTest.png">
					</div>
					<div class="row  justify-content-end">
						<p>By MonsteRico</p>
					</div>
					<div class="row  justify-content-center">
						<h1>Blink Block Testing</h1>
					</div>
				</div>
			</div>
<canvas style="display:none;" id="test1"></canvas>
<img src="./spritesheets/spritesheet1.png" id="sprite" style="display:none">
</div>
</div>
<div class="container">
<div style="display:none;" id="deathCount">
	<div class="row">
		<h1 class="">Deaths: </h1><h1 id="deaths">0</h1>
	</div>
</div>
<canvas style="display:none;" id="canvas"></canvas>
</div>
<script>
// This stuff is how levels are started and thats it.
function chooseLevel(level) {
  removeStorage(true);
  levelMap.src = level;
  sessionStorage.setItem('level', levelMap.src);
  Test1();
}

document.getElementById('daily').onclick = function(e) {
  removeStorage(true);
  GenerateRandomLevel();
};
</script>
<script src="./delete.js"></script>
<script src="./test.js"></script>
<script src="../universalFunctions.js"></script>
<script src="./random.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
