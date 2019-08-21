<?php
	// The message
	$msg = "Name: " + $_POST["fullname"] +
			"\nEmail: " + $_POST["email"] +
			"\n" + $_POST["message"];

	// The Subject
	$sub = "Web Email-- " + $_POST["subject"];

	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg, 70);

	// send email
	mail("techhounds868@gmail.com", $sub, $msg);
?>