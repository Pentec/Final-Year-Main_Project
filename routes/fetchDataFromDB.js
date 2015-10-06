var express = require('express');
var router = express.Router();
var submodules = "../sub-modules/";
var models = require(submodules + 'pims-database/database');
var https = require('https');
var userModel = require('../models/userModel.js');
var GS = models.gynaecologySurgery;
var AD = models.addmissionDischarge;


router.post('/', function(req, res) {
	
 console.log("This actually Works"); 
 var arr=[];
 
  GS.aggregate(
		   [
			 { $match : {"typeOfProcedure.Emergency": true } },
			  {
				  $group : { _id : { month: { $month: "$ProcedureDate" }, day: { $dayOfMonth: "$ProcedureDate" }, year: { $year: "$ProcedureDate" }} ,count: { $sum: 1 } ,  ourDate: { $first: "$ProcedureDate"  } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
			   var num = myResult.length;
			   
			   for (var i = 0; i < num; i++) { 
						
							 var newElement = {};
								newElement['value'] = myResult[i].count.toString();
								arr.push(newElement);
							
						}
						
						  
						   arr.sort(function(a,b){
								if (a.date < b.date)
									return -1;
								  if (a.date > b.date)
									return 1;
								  return 0;
								});
							
							  console.log(arr);
							  res.json(arr);
							  console.log("POST response sent.");
			   
		   }
		);


});

module.exports = router;