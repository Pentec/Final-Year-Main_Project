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
var submodules = "../sub-modules/";
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
var models = require(submodules + 'pims-database/database');

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
var login = require(submodules + 'pims-login/login');

/**
 * A variable in the global namespace called 'notification'.
 * It is for the PIMS notification functionality
 * @type {exports|module.exports}
 */
var notification = require(submodules + 'pims-notification/notifications');
var https = require('https');

/**
 * A variable in the global namespace called 'userModel'.
 * It is for the PIMS User schema and has all the details pertaining to users of the system.
 * @type {exports|module.exports}
 */
var userModel = require('../models/userModel.js');
var User = userModel.user;
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
 * A variable in the global namespace called 'SECRET'.
 * It captures the secret key for Google reCAPTCHA
 * @type {string}
 */
var SECRET = "6Lc9mAsTAAAAAOyPr1IUrfH30n-YoT1m_f4u0KIf";


/**
 * @function verifyRecaptcha
 * This function verifies the two keys pertaining to the Google reCAPTCHA add-on
 * @param secretKey
 * @param callback
 */
var verifyRecaptcha = function (secretKey, callback){
    https.get("https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET + "&response=" + secretKey, function(res){
        var data = "";
        res.on('data', function(text){
            data += text.toString();
        });

        res.on('end', function(){
            try {
                var jsonData = JSON.parse(data);
                callback(jsonData.success);
            } catch(e) {
                callback(false);
            }
        });
    });
};



/**
 * @function 
 * This helper function verifies if a user is logged in whilst accessing
 * the url endpoints of the system. If a user is authenticated, they are
 * allowed to proceed to the next page, otherwise they are requested
 * to login and thus redirected to the login page.
 * @param req
 * @param res
 * @param next
 * @returns {next()}
 */
 
 
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


/**
 * @function postLogin
 * This helper function handles the authentication of the Login form post.
 * It makes use of the Passport.js Local Strategy in order to authenticate
 * a users credentials. The req.logIn function used here is provided by
 * Passport.js and authenticates the user. A local function 'checkAdmin',
 * provided by the pims-login private module checks for a users access
 * rights and depending on that, they are redirected to a particular page.
 * @param req
 * @param res
 * @param next
 */

function postLogin(req, res, next)
{
    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err);
        }

        if(!user){
            sess.messages = info.message;
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                sess.messages = "Error";
                return next(err);
            }

            sess.messages = "Login Success!!";
            sess.username = req.body.username;
            sess.password = req.body.password;

            login.checkAdmin(req.body.username, req.body.password, function(isAdmin)
            {
                if(req.user.username && req.user.password)
                {
                    if(isAdmin)
                    {
                        verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                             if(success){
                                 res.redirect('/myAdminSpace');
                                 res.end("Recaptchaed!!!");
                             }
                             else
                             {
                                 res.redirect('/login');
                                 res.end("Captcha failed sorry");

                             }
                         });
                    }
                    else
                    {
                        verifyRecaptcha(req.body['g-recaptcha-response'], function(success){
                             if(success){
                                 res.redirect('/mySpace');
                                 res.end("Recaptchaed!!!");
                             }
                             else
                             {
                                 res.redirect('/login');
                                 res.end("Captcha failed sorry");
                             }
                         });
                    }
                }
                else
                {
                    res.redirect('/login');
                }
            });

        })

    })(req, res, next);
};

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
router.get('/home', isLoggedIn, function(req, res, next) {
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
router.get('/myAdminSpace', isLoggedIn, function(req, res, next) {

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
router.get('/mySpace', isLoggedIn, function(req, res, next) {
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
router.post('/login', postLogin, function(req, res, next) {
    sess = req.session;
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
    }



});


router.get('/logout', function(req,res){

    if(req.isAuthenticated()){
        req.logout();
        req.session.messages = "Log out successful";

    }
    res.redirect('/splash');
});

/* Add New User page */
router.get('/addUser', isLoggedIn, function(req, res, next) {
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
router.get('/editProfile', isLoggedIn, function(req, res, next) {
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
router.post('/updateProfile', isLoggedIn, function(req, res) {

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
router.post('/create', isLoggedIn, function(req, res) {

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
router.get('/viewForms', isLoggedIn, function(req, res, next) {

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
router.get('/form', isLoggedIn, function(req, res, next) {

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
router.post('/formsave', isLoggedIn, function(req, res) {

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
router.get('/stats', isLoggedIn, function(req, res, next) {
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
											var av = JSON.stringify(avg[0].avgAge);
											var average =Math.round(av);

											var avs = JSON.stringify(avgStay[0].avgStay);
											var averageStay = Math.round(avs);
											
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
						console.log(arr);
						  
						   arr.sort(function(a,b){
								if (a.date < b.date)
									return -1;
								  if (a.date > b.date)
									return 1;
								  return 0;
								});
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
								arrTwo.push(newElement);
							
						}
						
						console.log(arrTwo);
						  
						   arrTwo.sort(function(a,b){
								if (a.date < b.date)
									return -1;
								  if (a.date > b.date)
									return 1;
								  return 0;
								});
								
							 var resBody = { myStatsArry: arrTwo};
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
						  console.log(arrThree);
						  
						   arrThree.sort(function(a,b){
								if (a.date < b.date)
									return -1;
								  if (a.date > b.date)
									return 1;
								  return 0;
								});
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
						console.log(arrFour);
						  
						   arrFour.sort(function(a,b){
								if (a.date < b.date)
									return -1;
								  if (a.date > b.date)
									return 1;
								  return 0;
								});
							 var resBody = { myStatsArry: arrFour};
							  console.log(resBody);
							  res.json(resBody);
							  console.log("POST response sent.");
			   
		   }
		);
		
	
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




/* GET patient page*/
router.get('/findPatient', isLoggedIn, function(req, res, next) {

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
    }
    else
    {
        res.redirect('/login');
    }

});


/*POST patient page.*/
router.post('/findPatient/sendNotification', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        console.log('Yaaaaay ' + req.user);
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
    }
    else
    {
        res.redirect('/login');
    }


});

router.post('/findPatient/sendEmail', isLoggedIn, function(req, res, next) {

    sess=req.session;

    if(req.user)
    {
        console.log('sendEmail');
        var recipientAdr =JSON.stringify(req.body.forMailing.recipient);
        var emailMsg =JSON.stringify(req.body.forMailing.message);
        var patientid =JSON.stringify(req.body.forMailing.name);
        notification.sendEmail(recipientAdr, emailMsg, patientid);
    }
    else
    {
        res.redirect('/login');
    }

});

var AI = require(submodules + 'pims-neuralnetwork/neuralnetwork');
router.get('/testAI', function(req, res){
    //var AI = require("../neuralnetwork");
    //C:\Users\Ruth\Documents\GitHub\Main\Pentec_PIMS\lib\pims-neuralnetwork\UnitTests\test.json
    var ai = new AI('./lib/pims-neuralnetwork/UnitTests/test.json');
    ai.train();

});




module.exports = router;
