<?php
    session_start();
   
    
    $alert = "";
	if(isset($_REQUEST["thePatientName"] ))
	{
    if ($_REQUEST["theUsername"] != "" && $_REQUEST["thePassword"] != "")
    {
        $username = $_REQUEST["theUsername"];
        $password = $_REQUEST["thePassword"];
        
       // session_start();
        $sql = "SELECT username,password FROM users WHERE username = '".$username."' AND password = '".$password."'";
        if (!$sql)
        {
          die('Error: ' . mysql_error());
        }
        $con = mysql_connect("localhost","root","");
        if (!$con)
        {
          die('Could not connect: ' . mysql_error());
        }
        
        mysql_select_db("pims",$con);
        
        $query = mysql_query($sql,$con) or die("Error:".mysql_error());
        
        $row = mysql_fetch_row($query);
        
        if ($row)
        {
            $_SESSION["user"] = $username;
            $alert = "resend";
        }
        else if(($_REQUEST["theUsername"] != $row["username"]) || ($_REQUEST["thePassword"] != $row["password"]))
            $alert = "<p class='errormsgbox'>Please retype username or password!<p>";
            
            
        else if(($_REQUEST["theUsername"] == "") || ($_REQUEST["thePassword"] == ""))
            $alert = "<p class='errormsgbox'>Please retype username or password!<p>";
        }
        mysql_close($con);
    }
?>

<!DOCTYPE HTML>
<html>
<meta charset="UTF-8">
<head><title>Login to site</title>
<link rel="stylesheet" href="./qunit-1.18.0.css">

<script type="text/javascript" src="save.js"></script>
<style>
.form{
    /* Size & position */
    width: 300px;
 
    padding: 10px;
	align="left";
    /* position: relative; For the submit button positioning */

    /* Styles */
    box-shadow: 
        0 0 1px rgba(0, 0, 0, 0.3), 
        0 3px 7px rgba(0, 0, 0, 0.3), 
        inset 0 1px rgba(255,255,255,1),
        inset 0 -3px 2px rgba(0,0,0,0.25);
    border-radius: 5px;
    background: linear-gradient(#eeefef, #ffffff 10%);
}

</style>
 

</head>

<body style="background-color:#B0E0E6">
<script src="./qunit-1.18.0.js"></script>
<script type="text/javascript" src="script.js"></script>
<script src="test.js"></script>
 <div id="qunit"></div>
  <div id="qunit-fixture"></div>

<h3 style="color:grey; text-align: left;">PLEASE FILL IN FORM </h3>

<form class="form" method="post" name="theForm" id="theForm" onsubmit="return submitInfo(this)">
PatientName: <input type="text" name="thePatientName" id="thePatientName"><br>
Patient Age: <input type="text" name="thePatientAge" id="thePatientAge"><br>
Surgical Procedure: <input type="text" name="theSurgical" id="theSurgical"><br>
<input type="submit" value="Submit" name="submit" id="submit">
</form>


<div id ="show"></div>
<br></br>
<br></br>
<a href="home.php">Go to home page </a>

</body>
<html>