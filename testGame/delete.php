<?php
// This deletes the file whose x was clicked.
$file = $_GET['z'];
unlink($file);
?>