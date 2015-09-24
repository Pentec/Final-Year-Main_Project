/**
 * Index.js file
 */

/**
 * Node modules included.
 * For the purpose of login authenticate.
 * @type {*|exports|module.exports}
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userAuthentication = require('../controllers/authenticate.js');
var dataNormalizerCervical = require('../controllers/dataNormalizers/dataNormalizerCervical.js');

/**
 * The two variables in the global namespace called EmergencyCountGlobal and ElectiveCountGlobal.
 * It is used for all pims stats functionality.
 * @type {Integer}[EmergencyCountGlobal][ElectiveCountGlobal]
 */
var EmergencyCountGlobal;
var ElectiveCountGlobal;


/**
 * A variable in the global namespace called 'models'.
 * It is for the PIMS login functionality
 * @type {*|exports|module.exports}
 */
var models = require('pims-database');

/**
 * Required module d3 for the purpose of Statistical graphical representation.
 * Required module datejs for the purpose of time manipulation.
 * @type {*|exports|module.exports}
 */
require('datejs');
require('d3');

/**
 * A variable in the global namespace called 'login'.
 * It is for the PIMS login functionality
 * @type {exports|module.exports}
 */
var login = require('../lib/pims-login/login.js');

/**
 * A variable in the global namespace called 'notification'.
 * It is for the PIMS notification functionality
 * @type {exports|module.exports}
 */
var notification = require('pims-notification');


/**
 * A variable in the global namespace called 'userModel'.
 * It is for the PIMS User schema and has all the details pertaining to users of the system.
 * @type {exports|module.exports}
 */
var userModel = require('../models/userModel.js');
var User = userModel.user;

//var statsAIModel = require('../models/statisticsModel.js');
//var StatsAI = statsAIModel.statistics;

var Form = models.forms;
var GS = models.gynaecologySurgery;
var AD = models.addmissionDischarge;

/**
 * A variable in the global namespace called 'sess'.
 * It is used for all session related operations.
 * @type {Session}
 */
var sess;



/**
 * Route that invokes the /splash action
 * Sends back the response page splash
 * @type {GET request}
 */
router.get('/splash', function(req, res, next) {
    sess=req.session;
  res.render('splash', { title: 'Kalafong PIMS' });
});

router.get('/dataNormalizer', function(req, res, next) {

    dataNormalizerCervical.getNormalizedData(req.body.firstname, req.body.surname);

});

/**
 * Route that invokes the home page action
 * Sends back the home page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/', function(req, res, next){
    sess=req.session;

    sess.username;
    sess.password;
    res.render('countdown', { title: 'Kalafong Pims: Coming Soon!'})
});


/**
 * Route that invokes the home page 'index.jade' action
 * Sends back the index page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/home', login.isLoggedIn, function(req, res, next) {
    sess = req.session;
    res.render('index', { title: 'Kalafong PIMS' });
});

/**
 * Route that invokes the myAdminSpace page 'myAdminSpace.jade' 
 * First checks to see if the users is logged in and if they are admin. 
 * Admin user gets directed to myAdminSpace page, other user not logged into the session
 * gets redirected to login page.
 * Sends back the myAdminSpace page
 * @type {GET request}
 */
router.get('/myAdminSpace', login.isLoggedIn, login.isAdmin, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('pims_space/myAdminSpace', { title: 'My PIMS Space' });
    }
    else{
        res.redirect('/login');
    }

});

/**
 * Route that invokes the /mySpace action and directs a user to their mySpace page.
 * Checks to see if user is logged in to the session.
 * Sends back the index page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/mySpace', login.isLoggedIn, login.isNotAdmin, function(req, res, next) {
    sess=req.session;

    if(req.user)
    {
        res.render('pims_space/mySpace', { title: 'My PIMS Space' });
    }
    else{
        res.redirect('/login');
    }
});

/**
 * Route that invokes the /login action and directs a user to their login page.
 * If the user is not logged in they get redirected to the login page.
 * If they are logged in they get directed to the editProfile page.
 * Sends back the index page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/login', function(req, res) {
    sess = req.session;
    //user not logged in
    if(!req.user){

        var sendData = {found: "hello"};
        res.render('login', {
            title: 'PIMS Login Page',
            user: req.user,
            message: sess.messages,
            errors: {},
            send: sendData
        });
        sess.messages = null;

    }
    else if(req.user) {//user already logged in, may help sessions
        login.checkAdmin(req.user.username, req.user.password, function(isAdmin)
        {
                if(isAdmin)
                {
                    res.redirect('/myAdminSpace');
                }
                else
                {
                    res.redirect('/mySpace');
                }

        });

    }

});


/**
 * Route that invokes the /login action and directs a user to their login page.
 * This checks to see if the username and password is an empty string. 
 * If the username and password is empty it redirects the user back to login page.
 * @type {POST request}
 */
router.post('/login', login.postLogin, function(req, res, next) {
    /*sess = req.session;
    //checks if login fields are empty
    var username = req.body.username;
    var password = req.body.password;
    var sendData = "";

    if(username == '' || password == '')
    {
        var pageErrors = "User name or password is empty.";
        res.render('login', {
            title: 'Kalafong PIMS',
            message: pageErrors,
            errors: {},
            send: sendData

        });
        return;
    }*/



});


router.get('/logout', function(req,res){

    if(req.isAuthenticated()){
        req.logout();
        req.session.messages = "Log out successful";

    }
    res.redirect('/splash');
});

/* Add New User page */
router.get('/addUser', login.isLoggedIn, function(req, res, next) {
    sess=req.session;

    if(req.user)
    {
        res.render('addUser', { title: 'Kalafong PIMS - Add New User' });
    }
    else{
        res.redirect('/login');
    }

});

/* Settings page */
router.get('/editProfile', login.isLoggedIn, function(req, res, next) {
    sess=req.session;

    if(req.user)
    {
        User.find({username:"Leon"},function(err, users){
            res.render(
                'editProfile',
                {title : 'Edit Your Profile', user : users[0]}
            );
        });
    }
    else
    {
        res.redirect('/login');
    }
});

/* Add New User to database from add user page */
router.post('/updateProfile', login.isLoggedIn, function(req, res) {

    sess=req.session;

    if(req.user)
    {
        User.findOne({username: req.body.username}, function(err, contact) {
            if(!err) {
                contact.username = req.body.username;
                contact.email = req.body.email;
                contact.surname = req.body.surname;
                contact.department = req.body.department;
                if(req.body.password == req.body.confirmpassword && req.body.password != "")
                {
                    contact.password = req.body.confirmpassword;
                }
                contact.save(function(err) {
                    res.redirect('editProfile');

                });
            }
        });
    }
    else
    {
        res.redirect('/login');
    }


});


/* Add New User to database from add user page */
router.post('/create', login.isLoggedIn, function(req, res) {

    sess=req.session;

    if(req.user)
    {
        new User({username : req.body.username,surname : req.body.surname,email : req.body.email,user_rights : req.body.user_rights,password : req.body.password,department : req.body.department,staff_type : req.body.staff_type })
            .save(function(err, users) {
                console.log("New user added");
                res.redirect('addUser');
            });
    }
    else
    {
        res.redirect('/login');
    }


});

/* GET form builder page page. */
router.get('/viewForms', login.isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('viewForms', { title: 'Select Forms' });
    }
    else
    {
        res.redirect('/login');
    }

 
});

/* GET form builder page page. */
router.get('/form', login.isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('formBuild', { title: 'Form Builder' });
    }
    else
    {
        res.redirect('/login');
    }

});

/* Save the form obj into the database. */
router.post('/formsave', login.isLoggedIn, function(req, res) {

    sess=req.session;

    if(req.user)
    {
        var object = JSON.stringify(req.body);
        console.log(object);

        new Form({form_name : "new form",data : object ,is_deleted : false})
            .save(function(err, forms) {
                console.log("New form added");
                res.redirect('formBuild');

            });
    }
    else
    {
        res.redirect('/login');
    }


});


/*View Stats */
router.get('/stats', login.isLoggedIn, login.isAdmin, function(req, res, next) {
   sess=req.session;
	var EmergencyCount;
	var ElectiveCount;
    if(req.user)
    {
	  
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
											
											 GS.count({"typeOfProcedure.Emergency": true},function(err, EmergencyCount) {
										     GS.count({"typeOfProcedure.Elective": true},function(err, ElectiveCount) {
										     res.render('stats', { avgAge: average , avgStay: averageStay, elCount : ElectiveCount, emCount: EmergencyCount });
											  });
											 });
										}
							});
						}
			}); 
   }
    else
   {
        res.redirect('/login');
   } 
  
});

router.post('/findSelectedQuery', function(req, res, next) {
	
   var startDate =JSON.stringify(req.body.forQuering.start);
    var endDate =JSON.stringify(req.body.forQuering.end);
	var period = JSON.stringify(req.body.forQuering.periodQuery);
	var stats =  JSON.stringify(req.body.forQuering.statsQuery);
	var EmergencyOp = "\"Emergency Operations\"";
	var ElectiveOp = "\"Elective Operations\"";
	var TypeOfSurg = "\"Type of Surgery\"";
	var HosPeriod = "\"Hospitalization Periods\"";
	var AdmissionOp = "\"Number of Admissions\"";

	
	var arr = [];
	var arrTwo = [];
	var arrThree = [];
	var arrFour = [];

		if(stats == EmergencyOp)
		{
			var one = checkEmergency(period,stats,startDate,endDate);
			
		}else if(stats == ElectiveOp)
		{
			var two = checkElective(period,stats,startDate,endDate);
		}else if(stats == TypeOfSurg)
		{
			var three = checkSurgery(period,stats,startDate,endDate);
		}else if(stats == HosPeriod)
		{
			var four = checkHosPeriod(period,stats,startDate,endDate);
		}else if(stats == AdmissionOp)
		{
			checkAdmission(period,stats,startDate,endDate);
		}
		

   function checkEmergency(period, stats, startDate, endDate)
	{

		 GS.aggregate(
		   [
			  { $match : {"typeOfProcedure.Emergency": true , "ProcedureDate": {'$gte': new Date(startDate),'$lte': new Date(endDate)}} },
			  
			  {
				  $group : { _id : { month: { $month: "$ProcedureDate" }, day: { $dayOfMonth: "$ProcedureDate" }, year: { $year: "$ProcedureDate" }} ,count: { $sum: 1 } ,  ourDate: { $first: "$ProcedureDate"  } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
			   var num = myResult.length;
			   
			   for (var i = 0; i < num; i++) { 
						
							 var newElement = {};
								newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
								newElement['close'] = myResult[i].count;
								arr.push(newElement);
							
						}
							 var resBody = { myStatsArry: arr};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
			   
		   }
		);
		  	
	}
	
	 function checkElective(period, stats, startDate, endDate)
	{
		 GS.aggregate(
		   [
			  { $match : {"typeOfProcedure.Elective": true , "ProcedureDate": {'$gte': new Date(startDate),'$lte': new Date(endDate)}} },
			  
			  {
				  $group : { _id : { month: { $month: "$ProcedureDate" }, day: { $dayOfMonth: "$ProcedureDate" }, year: { $year: "$ProcedureDate" }} ,count: { $sum: 1 } ,  ourDate: { $first: "$ProcedureDate"  } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
			   var num = myResult.length;
			   
			   for (var i = 0; i < num; i++) { 
						
							 var newElement = {};
								newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
								newElement['close'] = myResult[i].count;
								arr.push(newElement);
							
						}
							 var resBody = { myStatsArry: arr};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
			   
		   }
		);
	}
	
	
	function checkAdmission(period, stats, startDate, endDate)
	{
		
		 
		 AD.aggregate(
		   [
			  { $match : {"DateofAdmission": {'$gte': new Date(startDate),'$lte': new Date(endDate)}} },
			  {
				  $group : { _id : { month: { $month: "$DateofAdmission" }, day: { $dayOfMonth: "$DateofAdmission" }, year: { $year: "$DateofAdmission" }} ,count: { $sum: 1 } ,  ourDate: { $first: "$DateofAdmission"  } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
			  
			   var num = myResult.length;
			   
			   for (var i = 0; i < num; i++) { 
						
							 var newElement = {};
								newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
								newElement['close'] = myResult[i].count;
								arrThree.push(newElement);
							
						}
							 var resBody = { myStatsArry: arrThree};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
			   
		   }
		);
		
		
	}
	
	function checkSurgery(period, stats, startDate, endDate)
	{console.log("Surg");}
	
	function checkHosPeriod(period, stats, startDate, endDate)
	{
		
		AD.aggregate(
		   [
			  { $match : {"DateofDischarge": {'$gte': new Date(startDate),'$lte': new Date(endDate)}} },
			  {
				  $group : { _id : { month: { $month: "$DateofDischarge" }, day: { $dayOfMonth: "$DateofDischarge" }, year: { $year: "$DateofDischarge" }} ,count: { $sum: 1 } ,  ourDate: { $first: "$DateofDischarge"  } } 
			  
			  }
			  
		   ] , function(err, myResult)
		   {
			  
			   var num = myResult.length;
			   
			   for (var i = 0; i < num; i++) { 
						
								var newElement = {};
								newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
								newElement['close'] = myResult[i].count;
								arrFour.push(newElement);
							
						}
							 var resBody = { myStatsArry: arrFour};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
			   
		   }
		);
		
	
	}

});

/*View patient stats */
router.get('/forms', login.isLoggedIn, function(req, res, next) {

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

//forms
router.get('/forms', login.isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        res.render('forms', { title: 'FormSelect' });
        return next();
    }
    else
    {
        res.redirect('/login');
        return next();
    }

});




/* GET patient page*/
router.get('/findPatient', login.isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        var sendEmail = {found: "hello"};
        res.render('findPatient', {
            title: 'PIMS Notification Page',
            message: '',
            errors: {},
            send: sendEmail
        });
        return next();
    }
    else
    {
        res.redirect('/login');
        return next();
    }

});


/*POST patient page.*/
router.post('/findPatient/sendNotification', login.isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        var patientid = req.body.patientid;

        notification.findPatient(patientid, function(found) {
            if(found != "")
            {
                var sendEmail = {found: found, patient: patientid};
                res.render('sendNotification', {
                    title: 'PIMS Notification Page',
                    message: '',
                    errors: {},
                    send: sendEmail
                });
            }
            else
            {
                var pageErrors = "Sorry, an email address does not exist for the patient.\n Please enter in a different patient ID";
                var sendEmail = "";

                res.render('findPatient', {
                    title: 'PIMS Notification Page',
                    message: pageErrors,
                    errors: {},
                    send: sendEmail

                });
            }
        });
        return next();
    }
    else
    {
        res.redirect('/login');
        return next();
    }


});

router.post('/findPatient/sendEmail', login.isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        console.log('sendEmail');
        var recipientAdr =JSON.stringify(req.body.forMailing.recipient);
        var emailMsg =JSON.stringify(req.body.forMailing.message);
        var patientid =JSON.stringify(req.body.forMailing.name);
        notification.sendEmail(recipientAdr, emailMsg, patientid);
        return next();
    }
    else
    {
        res.redirect('/login');
        return next();
    }

});



router.get('/neural', function(req, res, next){
    //to collect the data from the statistics
    //model and then send it in JSON format to the client-side AngularJS

    /*StatsAI.find(function(err, stats){
       if(err)
       {
           return next(err);
       }

       res.json(stats);
    });*/

    res.render('pims_neuralnet/testAI');

});

var cervicalNeural = require('../controllers/dataNormalizers/dataNormalizerCervical');

router.post('/neural', function(req, res, next){
    var sendPatientName = {patient: req.body.patientNeural};

    res.render('pims_neuralnet/testAIPost', {
        title: 'PIMS Neural Network Page',
        send: sendPatientName.patient
    });
    console.log('Hello' + sendPatientName.patient);
    //cervicalNeural.getNormalizedData(req.body.patientNeural, '');

});






module.exports = router;
