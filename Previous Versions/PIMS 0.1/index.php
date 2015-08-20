<?php
    session_start();
   
    $alert = "";
	if(isset($_REQUEST["Uname"] ))
	{
    if ($_REQUEST["Uname"] != "" && $_REQUEST["Upassword"] != "" && $_REQUEST["Ucode"] != "")
    {
        $username = $_REQUEST["Uname"];
        $password = $_REQUEST["Upassword"];
		 $user_id = $_REQUEST["Ucode"];
        
       // session_start();
        $sql = "SELECT username,password, user_id FROM users WHERE username = '".$username."' AND password = '".$password."' AND user_id = '".$user_id."'";
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
        else if(($_REQUEST["Uname"] != $row["username"]) || ($_REQUEST["Upassword"] != $row["password"]) || ($_REQUEST["Ucode"] != $row["user_id"]))
            $alert = "<p class='errormsgbox'>Please retype username or password or authentication code!<p>";
            
            
        else if(($_REQUEST["Uname"] == "") || ($_REQUEST["Upassword"] == "") || ($_REQUEST["Ucode"] == ""))
            $alert = "<p class='errormsgbox'>Please retype username or password or authentication code!<p>";
        }
        mysql_close($con);
    }
?>
<!DOCTYPE HTML>
<html>

<meta charset="UTF-8">
<head>
<title>PIMS Mockup</title>
<script>
.form{
    /* Size & position */
    width: 300px;
    margin: 60px auto 30px;
    padding: 10px;
    position: relative; /* For the submit button positioning */

    /* Styles */
    box-shadow: 
        0 0 1px rgba(0, 0, 0, 0.3), 
        0 3px 7px rgba(0, 0, 0, 0.3), 
        inset 0 1px rgba(255,255,255,1),
        inset 0 -3px 2px rgba(0,0,0,0.25);
    border-radius: 5px;
    background: linear-gradient(#eeefef, #ffffff 10%);
}

</script>
</head>
<body style="background-color:#B0E0E6">
<h2 style="color:grey; text-align: center;">WELCOME TO THE PATIENT INFORMATION MANAGEMENT SYSTEM</h2>

<div class="form">
<form action="index.php" method="post"">
Username: <input type="text" name="Uname" id="Uname"><br>
Password: <input type="password" name="Upassword" id="Upassword"><br>
AuthenticationCode: <input type="text" name="Ucode" id="Ucode"><br>
<input type="submit" value="Login" class="loginbutton"/>
 <?php 
                if ($alert == "resend")
                {
                    echo "<script>window.location = 'home.php'</script>";
                }  
                echo $alert; 
  ?>

</form>
</div>

</body>
<html>