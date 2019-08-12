<?php
$file = $_POST['fileName'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "files";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
} 
$sql = "DELETE FROM files WHERE fileName='" . $file ."'";
if($conn->query($sql) === TRUE) {
} else {
}
$conn->close();
unlink("./" . $file);

echo "<script>setTimeout(function() {window.open('./test.php', '_top');}, 2000);</script>";
?>