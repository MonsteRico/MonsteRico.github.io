<?php
$levelName = $_POST['name'];
$creator = $_POST['creator'];
// This is all from W3 Schools and is used to upload levels
$target_dir = "lvls/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "png") {
    echo "Sorry, only PNG files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
		echo $target_file;
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
		$sql = "INSERT INTO files VALUES ('" .$levelName ."','" . $target_file ."','" . $creator ."')";
		if($conn->query($sql) === TRUE) {
			echo "File was put into database";
		}
		$conn->close();



    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
echo "<script>setTimeout(function() {window.open('./test.php', '_top');}, 2000);</script>";
?>
