var http = getHTTPObject();

function getHTTPObject() 
{ 
    if (typeof XMLHttpRequest != 'undefined') 
    { 
        return new XMLHttpRequest(); 
    } 
    try 
    { 
        return new ActiveXObject("Msxml2.XMLHTTP"); 
    } 
    catch (e) 
    { 
        try 	
        { 
            return new ActiveXObject("Microsoft.XMLHTTP"); 
        } 
        catch (e) {} 
    } 
    return false; 
}

function Msg()
{
    if(http.readyState == 4)
    {
        document.getElementById('show').innerHTML = http.responseText;
        clearForm();
    }
}

function submitInfo(form)
{
    if (fieldCheck())
    {
        if (http.readyState == 4 || http.readyState == 0)
        {
            var Uinfo = 'Uinfo={"Uname" : "' + form.thePatientName.value + '", "UAge" : "' + form.thePatientAge.value + '", "USurg" : "' 
                                                + form.theSurgical.value + '"}';
												
            http.open("POST", "save.php", true);
            http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            http.onreadystatechange = Msg;
            http.send(Uinfo);
        }
    }
    return false;
}

