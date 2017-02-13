<?php include("header.php") ?>
<?php include("includes/connection.php") ?>
<h1>Welcome bro!</h1>
<?php
	$users = getUsers();
	echo "<table class='table'>";
		echo "<tr>";
			echo "<td>Id</td>";
			echo "<td>Username</td>";
			echo "<td>Firstname</td>";
		echo "</tr>";
	
	foreach ($users as $item) {
		echo "<tr>";
			echo "<td>".$item[0]."</td>";
			echo "<td>".$item[1]."</td>";
			echo "<td>".$item[3]."</td>";
		echo "</tr>";
	}
	echo "</table>";
?>

<?php include("footer.php") ?>