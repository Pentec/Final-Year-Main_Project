<?php
    session_start();
       
?>

<!DOCTYPE HTML>
<html>
<meta charset="UTF-8">
<head><title>Login to site</title>
<script src="http://wcetdesigns.com/assets/javascript/jquery.js"></script>

</head>
<script type="text/javascript">  

</script>
<body style="background-color:#B0E0E6">
<h3 style="color:grey; text-align: center;">WELCOME TO THE PATIENT INFORMATION MANAGEMENT SYSTEM</h3>


<a href="addPatient.php" target="">Fill in Form</a><br><br>

<div>
<?php

$level = "";

mysql_connect("localhost", "root", "") or die(mysql_error()) ;  
mysql_select_db("pims") or die(mysql_error()) ;   

$datatwo = mysql_query("SELECT levels FROM users WHERE username = '" . $_SESSION["user"] ."'") or die(mysql_error());

 while($info = mysql_fetch_array( $datatwo )) { 

 $level = $info['levels']; 

}
 

if($level == 1)
{
	echo("<a href='stats.php' target=''>View Statistics</a><br><br>");
	echo("<a href='#' target=''>View Existing Forms</a><br><br>");
	echo("<a href='#' target=''>Add New User</a><br><br>");
	echo("<p>Welcome Prof Synman<p>");
	echo("<img src='profile.jpg'  style='width:170px;height:250px;' /><br><br>");
	echo("<p>Email: leonsnyman@gmail.com<p>");
	echo("<p>Department: Department of Obstetrics & Gynaecologic Oncology Unit<p>");
	echo("<p>Hospital: Kalafong Hospital <p>");	

}

if($level == 2)
	{
		echo("<p>Welcome Dr Heisenburg<p>");
		echo("<img src='staff.jpg'  style='width:170px;height:250px;'/><br><br>");
		echo("<p>Email: heisenburg@gmail.com<p>");
		echo("<p>Department: Department of Obstetrics & Gynaecologic Oncology Unit<p>");
		echo("<p>Hospital: Kalafong Hospital <p>");
	
	}

?>
</div>
<br>

<input type='button' id='x' value='Edit Profile'/>
<br><br>
<a href="logoff.php" >Log Out</a><br><br>
				
</body>
<html>