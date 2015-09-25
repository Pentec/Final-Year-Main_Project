var express = require('express');
var router = express.Router();
var submodules = "../sub-modules/"
var models = require(submodules + 'pims-database/database');
var userModel = require('../models/userModel.js');
var User = userModel.user;
var Form = models.forms;
var GS = models.gynaecologySurgery;
var AD = models.addmissionDischarge;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    if (!req.isAuthenticated())
    {
        req.session.messages = "You need to login to view this page";
        res.redirect('/login');
    }
    next();


}; 

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

/*View Stats */
router.get('/', function(req, res, next) {
   //sess=req.session;

 //   if(req.user)
    //{
		  var EmergencyCount;
		  var ElectiveCount;
	  
		  AD.aggregate(
				{
					$group: {
						"_id": 1,
						avgAge   : { $avg: "$Age"  }
						}
				}, function(err, avg) 
				{
						if (err)
						{
							throw err;
							res.redirect('stats');
						}
						else{
							
											
							 AD.aggregate(
								{
									$group: {
										"_id": 1,
										avgStay   : { $avg: "$TotalNumberOfDaysHospital"  }
										}
								}, function(err, avgStay) 
								{
										if (err)
										{
											throw err;
											res.redirect('stats');
										}
										else{
											var average = JSON.stringify(avg[0].avgAge);
											var averageStay = JSON.stringify(avgStay[0].avgStay);
											 res.render('stats', { avgAge: average , avgStay: averageStay });
											
										}
							});
	
						}
			}); 
 /*  }
    else
   {
        res.redirect('/login');
   }*/
  
});

router.post('/findSelectedQuery', function(req, res, next) {
	
   var startDate =JSON.stringify(req.body.forQuering.start);
    var endDate =JSON.stringify(req.body.forQuering.end);
	var period = JSON.stringify(req.body.forQuering.periodQuery);
	var stats =  JSON.stringify(req.body.forQuering.statsQuery);
	var EmergencyOp = "\"Emergency Operations\"";
	var ElectiveOp = "\"Elective Operations\"";
	var AvAgeOp = "\"Average Age\"";
	var AvStayOp = "\"Average Hospital Stay\"";
	var AvAdmissionOp = "\"Average Number Of Admissions\"";
	
	var arr = [];
	var arrTwo = [];

		if(stats == EmergencyOp)
		{
			var one = checkEmergency(period,stats,startDate,endDate);
			
		}else if(stats == ElectiveOp)
		{
			var two = checkElective(period,stats,startDate,endDate);
		}
		
		
   function checkEmergency(period, stats, startDate, endDate)
	{
		 GS.count({"typeOfProcedure.Emergency": true ,"ProcedureDate": {'$gte': new Date(startDate),'$lte': new Date(endDate)}},function(err, EmergencyCount) {
				 if(err) {
						console.log("DB error");
						callback(err);
					}
					
				GS.find({"typeOfProcedure.Emergency": true ,"ProcedureDate": {'$gte': new Date(startDate),'$lte': new Date(endDate)}},function(err, dates){
						
						for (i = 0; i < EmergencyCount; i++) { 
							var obj = {stats: new Date(dates[i].ProcedureDate).toString('dd-mm-yyyy'), value: 1};
							arr.push(obj);
							//console.log(arr[i]);
							//console.log(" - ");
						}
							 var resBody = { myStatsArry: arr};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
				});
					
					EmergencyCountGlobal = EmergencyCount;
		  });
		  	
	}
	
	 function checkElective(period, stats, startDate, endDate)
	{
		 GS.count({"typeOfProcedure.Elective": true ,"ProcedureDate": {'$gte': new Date(startDate),'$lte': new Date(endDate)}},function(err, ElectiveCount) {
				 if(err) {
						console.log("DB error");
						callback(err);
					}
					
				GS.find({"typeOfProcedure.Elective": true ,"ProcedureDate": {'$gte': new Date(startDate),'$lte': new Date(endDate)}},function(err, dates){
						
						for (i = 0; i < ElectiveCount; i++) { 
							var obj = {stats: new Date(dates[i].ProcedureDate).toString('dd-mm-yyyy'), value: 1};
							arrTwo.push(obj);
							console.log(arrTwo[i]);
							console.log(" - ");
						}
						
						      var resBody = { myStatsArry: arrTwo};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
						
				});
					
					ElectiveCountGlobal = ElectiveCount;
		  });
		  
	}
	
       // res.redirect('/stats');
	
});

/*View patient stats */
router.get('/forms', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('forms', { title: 'FormSelect' });
    }
    else
    {
        res.redirect('/login');
    }
});

module.exports = router;