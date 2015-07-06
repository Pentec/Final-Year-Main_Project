var send = require('./saveToDB.js');
var express = require('express'),
    app = express();
	
var path = require('path')
app.use(express.static(path.join(__dirname, '/')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
var http = require('http'), fs = require('fs');

// as only one page can use res.sendfile to render the page which will contain the drop   downs
app.post('/', function (req, res) {
    res.sendfile('PIMS.html');
});

//Builds the content used to send the email using the appraisal type
app.post('/save', function (req, res) {
   
   
	//var body = req.body;
	console.log("Well hello there");
	alert("Well hello there");
	//res.sendfile('PIMS.html');
    //send.alltogether(options);
	
});

//Gets the specific action and opens the html page
app.get('/', function (req, res) {
    res.sendfile('PIMS.html');
});

//Listens to the port
app.listen(3000,'127.0.0.1',function(){
    console.log('Server is running.');
});
