<?php
	require_once("includes/connection.php");
	//print_r($_POST)
	$username = $_POST['username'];
	$password = $_POST['password'];
	if ($username =="" || $password == "") {
		header("location:error.php");
	}else{
		if(checklogin($username, $password)){
			//successfully logged in
			header("location:welcome.php");
		}else{
			header("location:error.php");
		}

	}
?>