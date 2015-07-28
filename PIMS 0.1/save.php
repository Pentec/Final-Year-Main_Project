<?php 

    dbCon();
	$naam="";

    function dbCon()
    {
		
        mysql_connect("localhost", "root", "") or die('Could not connect: ' . mysql_error());
        mysql_select_db("pims") or die('Error:' . mysql_error());
    }

    if (isset($_REQUEST['Uinfo']))
    {
		
        $json = json_decode($_REQUEST['Uinfo']);
        $age = $json->UAge;
		
        $query = mysql_query("INSERT INTO patientForm (patientName, Age, SurgicalProcedure) 
        VALUES ('$json->Uname', '$json->UAge','$json->USurg')");
        
        if(!$query)
        {
            die("Error: ".mysql_error());
        }

        else
        {
            echo "<p class='success'>Your form has been added successfully!</p>";
        }
		
    }
?>