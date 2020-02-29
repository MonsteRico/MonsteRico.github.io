<!DOCTYPE html>
<html>
<head>
<title>The Test Game</title>
<style>
button {
	padding:5px;
	margin:5px;
	}
#hidden {
	display:none;
}
.notHidden {
	display:block;
}
</style>
</head>
<body>
<div id="hide">
	<a href="upload.html">Upload Files Here</a>
	<p>Or play one of these other levels</p>
	<canvas style="display:none;" id="test1"></canvas>
	<img src="./spritesheets/spritesheet1.png" id="sprite" style="display:none">
	<a  href="./documents/colorList.txt"><button>Info on Making Levels</button></a>
	
	
<?php
$servername = "localhost";
$username = "psfsbdan_files";
$password = "Mallory1031";
$dbname = "psfsbdan_files";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "SELECT * FROM files";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		echo "<div id='" . $row['fileName']. "'>";
		echo "<img src = './" . $row['fileName'] . "'>";
		echo "<button onclick=chooseLevel('" . $row['fileName']. "')>" . $row['name'] . "</button>";
		echo "<form method='post' action='delete.php' enctype='multipart/form-data'><input style='display:none;' name='fileName' value='". $row['fileName'] . "' /><input class='hidden' style='display:none;' type='submit' value='X' /></form>";
		echo "</div>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
<button id="daily">Daily Level</button>
</div>
<div style="display:none;" id="deathCount">
	<h1>Deaths: </h1><h1 id="deaths">0</h1>
</div>
<canvas style="display:none;" id="canvas"></canvas>
<script>
// This stuff is how levels are started and thats it.
function chooseLevel(level) {
  removeStorage();
  levelMap.src = level;
  sessionStorage.setItem('level', levelMap.src);
  Test1();
}

document.getElementById('daily').onclick = function(e) {
  removeStorage();
  GenerateRandomLevel();
};
</script>
<script src="./delete.js"></script>
<script src="./test.js"></script>
<script src="../universalFunctions.js"></script>
<script src="./random.js"></script>
</body>
</html>
