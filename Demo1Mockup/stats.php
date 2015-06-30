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
<head><title>PIMS Mockup</title>
<script>
function show() {
    document.getElementById("bar").style.visibility = "visible";
}
</script>
</head>
<body style="background-color:#B0E0E6">
<h3 style="color:grey; text-align: center;">HERE ARE THE STATISTICS</h3>

Search by:  <input type="text" name="Ucode" id="u">
Include: <select>
  <option value="volvo">Age</option>
  <option value="saab">Date</option>
  <option value="mercedes">Hospital</option>
  <option value="audi">Procedure</option>
</select> 
 <input type="text" name="Ucode" id="u">
Include: <select>
  <option value="volvo">Age</option>
  <option value="saab">Date</option>
  <option value="mercedes">Hospital</option>
  <option value="audi">Procedure</option>
</select> 
 <input type="text" name="Ucode" id="u">
 Choose Data Display: <select>
  <option value="volvo">Pie Graph</option>
  <option value="saab">Bar Graph</option>
  <option value="mercedes">Scatter Graph</option>
</select> 
<button type="button" onclick="show()">Display</button>
<br></br>
<br></br>
<img src="bar.jpg" id="bar" style="width:600px;height:400px;visibility:hidden;"/>

<br></br>

<button type="button" >Download Statistical Graph</button>
<br></br>
<a href="home.php">Go back </a>
</body>
<html>