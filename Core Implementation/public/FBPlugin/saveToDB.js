
function alltogether(obj)
{

var mongoose = require('mongoose');
mongoose.connect('mongodb://Admin:qYMqsW5Z@ds033601.mongolab.com:33601/pentec_pims'); // connect to database

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) 
{
	console.log("connection established");
});

var form = require('./form.js');


	newForm = new Notification(
				{form_id: 1,
				form_name: "newform",
				is_deleted: false,
				data: obj });

				newForm.save(function(err,newForm)
				{
					if (err) 
					{
						success = false;
						console.log("Error Adding Form ");
					}
					else 
					{
						success = true;
					}
//                    mongoose.disconnect();
				});


}