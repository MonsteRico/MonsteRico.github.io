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
	<form action="upload.php" method="post" enctype="multipart/form-data">
		Select image to upload:
		<input type="file" name="fileToUpload" id="fileToUpload">
		<input type="submit" value="Upload Image" name="submit">
	</form>
	<p>Or play one of these other levels</p>
<?php
// Pulls all the levels from files and puts them onto the screen to be played. Needs finished (Names need to work right and designing needs to be done).
$dir = "lvls/";
$a = scandir($dir);
array_splice($a, 0, 1);
array_splice($a, 0, 1);
$b = array();
$i = 0;
for ($i; $i < count($a); $i++) {
	$b[$i] = strval($a[$i]);
}
$r = 0;
for ($r; $r < count($a); $r++) {
	echo "<div id='lvls/" . $a[$r] . "'>";
	echo "<img src = './lvls/" . $a[$r] . "'>";
	echo "<button onclick=chooseLevel('lvls/" . $a[$r] . "')>" . $b[$r] . "</button>";
	echo "<p class='hidden' style='display:none;' onclick=deleteFile('lvls/" . $a[$r] . "')>X</p>";
	echo "</div>";
}
?>
	<canvas style="display:none;" id="test1"></canvas>
	<img src="./spritesheets/spritesheet1.png" id="sprite" style="display:none">
	<a  href="./documents/colorList.txt"><button>Info on Making Levels</button></a>
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
function deleteFile(file) {
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	}
  };
  xhttp.open("GET", "delete.php?z="+file, true);
  xhttp.send();
   var elem = document.getElementById(file);
   elem.parentElement.removeChild(elem);
   setDisplay('hidden', 'none');
}
</script>
<script src="./delete.js"></script>
<script src="./test.js"></script>
<script src="../universalFunctions.js"></script>
<script src="./random.js"></script>
</body>
</html>
