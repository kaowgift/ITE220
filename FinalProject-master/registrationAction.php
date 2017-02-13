<?php
	require_once("includes/connection.php");
	//print_r($_POST)
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	if ($username =="" || $email == "" || $password == "" || $passwordConfirm == "") {
		header("location:error.php");
	}else{
		if(checklogin($username, $email, $password, $passwordConfirm)){
			if ($password == $passwordConfirm) {
				//successfully logged in
				header("location:welcome.php");
			}else{
				header("location:error.php");
			}
		}else{
			header("location:error.php");
		}

	}
?>