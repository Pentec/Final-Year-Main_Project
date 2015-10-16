    var field = function fieldCheck()
    {
        var username    = document.getElementById("thePatientName"); //username
        var surg       = document.getElementById("theSurgical"); //email
        var age    = document.getElementById("thePatientAge"); //password
        
       	if(isEmpty(username, "patient name is empty")==true)
			{
				return false;
			}
        
        return true;
    };

    var isEmpty = function isEmpty(data, alettxt)
    {
	
        if(data == 0)
        {
            alert(alettxt);
           data.focus();
            return false;
        }
        return true;
    };
  
 
    function reset()
    {
        var field = document.forms[0].getElementsByTagName("input");
        
        for (var i=0; i < 7; i++)
        {
           field[i].value = "";
        }
    }

    var submit = function submitInfo(form)
    {
	
        if (fieldCheck())
        {
            if (http.readyState == 4 || http.readyState == 0)
            {
                    
				var Uinfo = 'Uinfo={"Uname" : "' + form.thePatientName.value + '", "UAge" : "' + form.thePatientAge.value + '", "USurg" : "' 
                                                + form.theSurgical.value + '"}';
				
                http.open("POST", "save.php", true);
                http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                http.onreadystatechange = ready;
                http.send(Uinfo);
            }   
        }
        return false;
    };
	
	
	function ready()
    {
        if(http.readyState == 4)
        {
            document.getElementById('show').innerHTML = http.responseText;
            reset();
        }
    }
