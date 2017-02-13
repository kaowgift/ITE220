<?php 
	include "config.php";

	$conn = new mysqli($host, $db_username, $db_password, $db_name);
  if ($conn->connect_error) {
  	die($conn->connect_error);
  }

  	function getUsers(){
  		global $conn;
		$query  = "SELECT * FROM users";
	  	$result = $conn->query($query);
		  	if (!$result) {
			  	die($conn->error);
			}else{
				return $result->fetch_all();
			}
		return false;
  	}

	function checkLogin($uusername, $upassword) {
		global $conn;
		$query  = "SELECT * FROM users";
		$result = $conn->query($query);

		if (!$result) {
		  	die($conn->error);
		}
		if($result->num_rows > 0){
		    while($row = mysqli_fetch_array($result)) {
				//print_r($row);
				if ($row['USERNAME'] == $uusername && $row['PASSWORD'] == md5($upassword)) {
				  	return true;
				}
			}
		}
		return false;
	}
?>