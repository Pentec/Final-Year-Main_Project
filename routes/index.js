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

var nn = require(submodules + 'pims-neuralnetwork/testNN2.js');

var dataNormalizerEndometrial = require('../controllers/dataNormalizers/dataNormalizerEndometrial.js');

var dataNormalizerFallopianTube = require('../controllers/dataNormalizers/dataNormalizerFallopianTube.js');
var dataNormalizerVulva = require('../controllers/dataNormalizers/dataNormalizerVulva.js');
var dataNormalizerVaginal = require('../controllers/dataNormalizers/dataNormalizerVaginal.js');
var dataNormalizerOvarian = require('../controllers/dataNormalizers/dataNormalizerOvarian.js');
var dataNormalizerGTN = require('../controllers/dataNormalizers/dataNormalizerGTN.js');


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
 * A variable in the global namespace called 'cervCan'.
 * enables access of the Cervical Cancer collection
 * @type {cervicalCancer}
 */
var cervCan = models.cervicalCancer;

var endometrial = models.endometrialCancer;
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
var logging = require('../utils/logging.js').logger();

/**
 * Route that invokes the /splash action
 * Sends back the response page splash
 * @type {GET request}
 */
router.get('/splash', function (req, res, next) {
    sess = req.session;
    res.render('splash', {title: 'Kalafong PIMS'});
});



//get FormSubmitted page
router.get('/FormSubmited', function (req, res, next) {
    //sess = req.session;
    res.render('FormSubmited', {title: 'FormSubmitted'});
});

//get FormSavedForLater page
router.get('/FormSaved', function (req, res, next) {
    //sess = req.session;
    res.render('FormSaved', {title: 'FormSaved'});
});

//get mySubmittedForms page
router.get('/mySubmittedForms', function (req, res, next) {
    //sess = req.session;
    res.render('mySubmittedForms', {title: 'mySubmittedForms'});
});

//get mySubmittedForms page
router.get('/myIncompleteForms', function (req, res, next) {
    //sess = req.session;
    res.render('myIncompleteForms', {title: 'myIncompleteForms'});
});




router.get('/dataNormalizer', function (req, res, next) {

    //dataNormalizerCervical.getNormalizedData(req.body.firstname, req.body.surname);
    dataNormalizerGTN.getNormalizedData(req.body.firstname, req.body.surname);

});

/**
 * Route that invokes the home page action
 * Sends back the home page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/', function (req, res, next) {
    sess = req.session;

    sess.username;
    sess.password;
    res.render('countdown', {title: 'Kalafong Pims: Coming Soon!'})
});


/**
 * Route that invokes the home page 'index.jade' action
 * Sends back the index page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/home', login.isLoggedIn, function (req, res, next) {
    sess = req.session;
    res.render('index', {title: 'Kalafong PIMS'});
});

/**
 * Route that invokes the myAdminSpace page 'myAdminSpace.jade'
 * First checks to see if the users is logged in and if they are admin.
 * Admin user gets directed to myAdminSpace page, other user not logged into the session
 * gets redirected to login page.
 * Sends back the myAdminSpace page
 * @type {GET request}
 */
router.get('/myAdminSpace', login.isLoggedIn, login.isAdmin, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        login.checkAdmin(req.user.username, req.user.password, function (isAdmin) {
            if (isAdmin) {
                res.render('pims_space/myAdminSpace', {title: 'My PIMS Space', active : 'home', notAdmin: !login.isAdmin});
            }
            else {
                res.redirect('/mySpace');
            }
        })
    }
    else {
        res.redirect('/login');
    }

});

/**
 * Route that invokes the /mySpace action and directs a user to their mySpace page.
 * Checks to see if user is logged in to the session.
 * Sends back the index page which is temporarily the 'countdown' page
 * @type {GET request}
 */
router.get('/mySpace', login.isLoggedIn, login.isNotAdmin, function (req, res, next) {
    sess = req.session;
    if (req.user) {
        login.checkAdmin(req.user.username, req.user.password, function (isAdmin) {
            if (isAdmin) {
                res.redirect('/myAdminSpace');
            }
            else {
                res.render('pims_space/mySpace', {title: 'My PIMS Space', active: 'home', notAdmin: login.isNotAdmin});
            }
        });
    }
    else {
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
router.get('/login', function (req, res) {
    sess = req.session;

    //user not logged in
    if (!req.user) {
        var sendData = {found: "hello"};
        res.render('login/login', {
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


router.get('/loginR', function (req, res) {
    sess = req.session;

    //user not logged in
    if (!req.user) {
        var sendData = {found: "hello"};
        res.render('login/rssLogin', {
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

router.get('/loginI', function (req, res) {
    sess = req.session;

    //user not logged in
    if (!req.user) {
        var sendData = {found: "hello"};
        res.render('login/intLogin', {
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
router.post('/login', login.postLogin, function (req, res, next) {

});


router.get('/logout', function (req, res) {

    if(req.isAuthenticated()){
        logging.info("User ["+ req.user.username + "] is now logging out ");
        req.logout();
        req.session.messages = "Log out successful";

    }
    res.redirect('/splash');
});

/* Add New User page */
router.get('/addUser', login.isLoggedIn, function (req, res, next) {
    sess = req.session;

    if (req.user) {
        res.render('addUser', {title: 'Kalafong PIMS - Add New User', active: 'user'});
    }
    else {
        res.redirect('/login');
    }

});

/* Settings page */
router.get('/editProfile', login.isLoggedIn, function (req, res, next) {
    sess = req.session;

    if (req.user) {
        User.find({username: "Leon"}, function (err, users) {
            res.render(
                'editProfile',
                {title: 'Edit Your Profile', user: users[0], active: 'editProfile'}
            );
        });
    }
    else {
        res.redirect('/login');
    }
});

/* Add New User to database from add user page */
router.post('/updateProfile', login.isLoggedIn, function (req, res) {

    sess = req.session;

    if (req.user) {
        User.findOne({username: req.body.username}, function (err, contact) {
            if (!err) {
                contact.username = req.body.username;
                contact.email = req.body.email;
                contact.surname = req.body.surname;
                contact.department = req.body.department;
                if (req.body.password == req.body.confirmpassword && req.body.password != "") {
                    contact.password = req.body.confirmpassword;
                }
                contact.save(function (err) {
                    res.redirect('editProfile');

                });
            }
        });
    }
    else {
        res.redirect('/login');
    }


});


/* Add New User to database from add user page */
router.post('/create', login.isLoggedIn, function (req, res) {

    sess = req.session;

    if (req.user) {
        new User({
            username: req.body.username,
            surname: req.body.surname,
            email: req.body.email,
            user_rights: req.body.user_rights,
            password: req.body.password,
            department: req.body.department,
            staff_type: req.body.staff_type
        })
            .save(function (err, users) {
                console.log("New user added");
                res.redirect('addUser');
            });
    }
    else {
        res.redirect('/login');
    }


});

router.post('/fetchDataFromMongo', function (req, res, next) {


    console.log("I was here");
    res.redirect('/dash');


});


/* GET form builder page page. */
router.get('/viewForms', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        res.render('viewForms', {title: 'Select Forms'});
    }
    else {
        res.redirect('/login');
    }


});

/* GET form builder page page. */
router.get('/form', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        res.render('formBuild', {title: 'Form Builder'});
    }
    else {
        res.redirect('/login');
    }

});

/* Save the form obj into the database. */
router.post('/formsave', login.isLoggedIn, function (req, res) {

    sess = req.session;

    if (req.user) {
        var object = JSON.stringify(req.body);
        console.log(object);

        new Form({form_name: "new form", data: object, is_deleted: false})
            .save(function (err, forms) {
                console.log("New form added");
                res.redirect('formBuild');

            });
    }
    else {
        res.redirect('/login');
    }


});


/*View Stats */
router.get('/stats', login.isLoggedIn, login.isAdmin, function (req, res, next) {
    sess = req.session;
    var EmergencyCount;
    var ElectiveCount;
    if (req.user) {

        AD.aggregate(
            {
                $group: {
                    "_id": 1,
                    avgAge: {$avg: "$Age"}
                }
            }, function (err, avg) {
                if (err) {
                    throw err;
                    res.redirect('stats');
                }
                else {


                    AD.aggregate(
                        {
                            $group: {
                                "_id": 1,
                                avgStay: {$avg: "$TotalNumberOfDaysHospital"}
                            }
                        }, function (err, avgStay) {
                            if (err) {
                                throw err;
                                res.redirect('stats');
                            }
                            else {
                                var av = JSON.stringify(avg[0].avgAge);
                                var average = Math.round(av);

                                var avs = JSON.stringify(avgStay[0].avgStay);
                                var averageStay = Math.round(avs);

                                GS.count({"typeOfProcedure.Emergency": true}, function (err, EmergencyCount) {
                                    GS.count({"typeOfProcedure.Elective": true}, function (err, ElectiveCount) {
                                        res.render('stats', {
                                            title: "Statistics",
                                            avgAge: average,
                                            avgStay: averageStay,
                                            elCount: ElectiveCount,
                                            emCount: EmergencyCount,
                                            active: 'stats'
                                        });
                                    });
                                });
                            }
                        });
                }
            });
    }
    else {
        res.redirect('/login');
    }

});

router.post('/findSelectedQuery', function (req, res, next) {

    var startDate = JSON.stringify(req.body.forQuering.start);
    var endDate = JSON.stringify(req.body.forQuering.end);
    var period = JSON.stringify(req.body.forQuering.periodQuery);
    var stats = JSON.stringify(req.body.forQuering.statsQuery);
    var EmergencyOp = "\"Emergency Operations\"";
    var ElectiveOp = "\"Elective Operations\"";
    var TypeOfSurg = "\"Type of Surgery\"";
    var HosPeriod = "\"Hospitalization Periods\"";
    var AdmissionOp = "\"Number of Admissions\"";


    var arr = [];
    var arrTwo = [];
    var arrThree = [];
    var arrFour = [];

    if (stats == EmergencyOp) {
        var one = checkEmergency(period, stats, startDate, endDate);

    } else if (stats == ElectiveOp) {
        var two = checkElective(period, stats, startDate, endDate);
    } else if (stats == TypeOfSurg) {
        var three = checkSurgery(period, stats, startDate, endDate);
    } else if (stats == HosPeriod) {
        var four = checkHosPeriod(period, stats, startDate, endDate);
    } else if (stats == AdmissionOp) {
        checkAdmission(period, stats, startDate, endDate);
    }


    function checkEmergency(period, stats, startDate, endDate) {

        GS.aggregate(
            [
                {
                    $match: {
                        "typeOfProcedure.Emergency": true,
                        "ProcedureDate": {'$gte': new Date(startDate), '$lte': new Date(endDate)}
                    }
                },

                {
                    $group: {
                        _id: {
                            month: {$month: "$ProcedureDate"},
                            day: {$dayOfMonth: "$ProcedureDate"},
                            year: {$year: "$ProcedureDate"}
                        }, count: {$sum: 1}, ourDate: {$first: "$ProcedureDate"}
                    }

                }

            ], function (err, myResult) {
                var num = myResult.length;

                for (var i = 0; i < num; i++) {

                    var newElement = {};
                    newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
                    newElement['close'] = myResult[i].count;
                    arr.push(newElement);

                }
                console.log(arr);

                arr.sort(function (a, b) {
                    if (a.date < b.date)
                        return -1;
                    if (a.date > b.date)
                        return 1;
                    return 0;
                });
                var resBody = {myStatsArry: arr};
                console.log(resBody);
                res.json(resBody);
                console.log("POST response sent.");

            }
        );

    }

    function checkElective(period, stats, startDate, endDate) {
        GS.aggregate(
            [
                {
                    $match: {
                        "typeOfProcedure.Elective": true,
                        "ProcedureDate": {'$gte': new Date(startDate), '$lte': new Date(endDate)}
                    }
                },

                {
                    $group: {
                        _id: {
                            month: {$month: "$ProcedureDate"},
                            day: {$dayOfMonth: "$ProcedureDate"},
                            year: {$year: "$ProcedureDate"}
                        }, count: {$sum: 1}, ourDate: {$first: "$ProcedureDate"}
                    }

                }

            ], function (err, myResult) {
                var num = myResult.length;

                for (var i = 0; i < num; i++) {

                    var newElement = {};
                    newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
                    newElement['close'] = myResult[i].count;
                    arrTwo.push(newElement);

                }

                console.log(arrTwo);

                arrTwo.sort(function (a, b) {
                    if (a.date < b.date)
                        return -1;
                    if (a.date > b.date)
                        return 1;
                    return 0;
                });

                var resBody = {myStatsArry: arrTwo};
                console.log(resBody);
                res.json(resBody);
                console.log("POST response sent.");

            }
        );
    }


    function checkAdmission(period, stats, startDate, endDate) {


        AD.aggregate(
            [
                {$match: {"DateofAdmission": {'$gte': new Date(startDate), '$lte': new Date(endDate)}}},
                {
                    $group: {
                        _id: {
                            month: {$month: "$DateofAdmission"},
                            day: {$dayOfMonth: "$DateofAdmission"},
                            year: {$year: "$DateofAdmission"}
                        }, count: {$sum: 1}, ourDate: {$first: "$DateofAdmission"}
                    }

                }

            ], function (err, myResult) {

                var num = myResult.length;

                for (var i = 0; i < num; i++) {

                    var newElement = {};
                    newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
                    newElement['close'] = myResult[i].count;
                    arrThree.push(newElement);

                }
                console.log(arrThree);

                arrThree.sort(function (a, b) {
                    if (a.date < b.date)
                        return -1;
                    if (a.date > b.date)
                        return 1;
                    return 0;
                });
                var resBody = {myStatsArry: arrThree};
                console.log(resBody);
                res.json(resBody);
                console.log("POST response sent.");

            }
        );


    }

    function checkSurgery(period, stats, startDate, endDate) {
        console.log("Surg");
    }

    function checkHosPeriod(period, stats, startDate, endDate) {

        AD.aggregate(
            [
                {$match: {"DateofDischarge": {'$gte': new Date(startDate), '$lte': new Date(endDate)}}},
                {
                    $group: {
                        _id: {
                            month: {$month: "$DateofDischarge"},
                            day: {$dayOfMonth: "$DateofDischarge"},
                            year: {$year: "$DateofDischarge"}
                        }, count: {$sum: 1}, ourDate: {$first: "$DateofDischarge"}
                    }

                }

            ], function (err, myResult) {

                var num = myResult.length;

                for (var i = 0; i < num; i++) {

                    var newElement = {};
                    newElement['date'] = new Date(myResult[i].ourDate).toString('dd-MM-yyyy');
                    newElement['close'] = myResult[i].count;
                    arrFour.push(newElement);

                }
                console.log(arrFour);

                arrFour.sort(function (a, b) {
                    if (a.date < b.date)
                        return -1;
                    if (a.date > b.date)
                        return 1;
                    return 0;
                });
                var resBody = {myStatsArry: arrFour};
                console.log(resBody);
                res.json(resBody);
                console.log("POST response sent.");

            }
        );


    }
});

/*View patient stats */
router.get('/forms', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        res.render('forms', {title: 'FormSelect'});
    }
    else {
        res.redirect('/login');
    }
});


/*View patient stats */
router.get('/forms', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        res.render('forms', {title: 'FormSelect'});
    }
    else {
        res.redirect('/login');
    }
});

//forms
router.get('/forms', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        res.render('forms', {title: 'FormSelect'});
        return next();
    }
    else {
        res.redirect('/login');
        return next();
    }

});


/* GET patient page*/
router.get('/findPatient', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        var sendEmail = {found: "hello"};
        res.render('findPatient', {
            title: 'PIMS Notification Page',
            message: '',
            errors: {},
            send: sendEmail
        });
        return next();
    }
    else {
        res.redirect('/login');
        return next();
    }

});


/*POST patient page.*/
router.post('/findPatient/sendNotification', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        var patientid = req.body.patientid;

        notification.findPatient(patientid, function (found) {
            if (found != "") {
                var sendEmail = {found: found, patient: patientid};
                res.render('sendNotification', {
                    title: 'PIMS Notification Page',
                    message: '',
                    errors: {},
                    send: sendEmail
                });
            }
            else {
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
    else {
        res.redirect('/login');
        return next();
    }


});

router.post('/findPatient/sendEmail', login.isLoggedIn, function (req, res, next) {

    sess = req.session;

    if (req.user) {
        console.log('sendEmail');
        var recipientAdr = JSON.stringify(req.body.forMailing.recipient);
        var emailMsg = JSON.stringify(req.body.forMailing.message);
        var patientid = JSON.stringify(req.body.forMailing.name);
        notification.sendEmail(recipientAdr, emailMsg, patientid);
        return next();
    }
    else {
        res.redirect('/login');
        return next();
    }

});


router.get('/neural', login.isLoggedIn, login.isAdmin, function (req, res, next) {
    res.render('pims_neuralnet/testAI', {title: "Synaptic Neural Network", active: "predict"});
});

router.post('/neuralOne', login.isLoggedIn, login.isAdmin, function (req, res, next) {
    var sendPatientName = {patient: req.body.patientNeural};
    var sendPatientSurname = {patientLname: req.body.patientSNameNeural};
    var sendCancerForm = {form: req.body.cancerforms};
    var getFormVal = (sendCancerForm.form).split(':');

    if (getFormVal[1] == "Cervical Cancer" && sendPatientName.patient != "") {
        //data normalizer
        var check = dataNormalizerCervical.getNormalizedData(sendPatientName.patient, '', function (array) {
            if (array != null) {
                nn.testNetwork(req, array, function (found) {
                    if (found) {
                        if (found >= 0.143) {
                            //most probably to live with cancer long time
                            res.render('pims_neuralnet/testAI', {
                                title: 'PIMS Neural Network',
                                patientName: sendPatientName.patient,
                                patientLName: sendPatientSurname.patientLname,
                                outcome: "Survive",
                                formName: getFormVal[1],
                                year: "5 years"
                            });
                        }
                        else {
                            //most probably to die form cancer soon
                            res.render('pims_neuralnet/testAI', {
                                title: 'PIMS Neural Network',
                                patientName: sendPatientName.patient,
                                outcome: "Die",
                                formName: getFormVal[1],
                                year: "5 years"
                            });
                        }

                    }
                });
            }
            else {
                throw new Error("Unable to process data");
                err.status = 400;
                return next(err);
            }
        });
    }
    else if (getFormVal[1] == "Endometrial Cancer") {
        console.log('Endometrial Cancer');
        //data normalizer
        var check = dataNormalizerEndometrial.getNormalizedData(sendPatientName.patient, sendPatientSurname.patientLname, function (array) {
            if (array != null) {
                nn.testNetwork(req, array, function (found) {
                    if (found) {
                        if (found >= 0.143) {
                            //most probably to live with cancer long time
                            res.render('pims_neuralnet/testAI', {
                                title: 'PIMS Neural Network',
                                patientName: sendPatientName.patient,
                                patientLName: sendPatientSurname.patientLname,
                                outcome: "Survive",
                                formName: getFormVal[1],
                                year: "5 years"
                            });
                        }
                        else {
                            //most probably to die form cancer soon
                            res.render('pims_neuralnet/testAI', {
                                title: 'PIMS Neural Network',
                                patientName: sendPatientName.patient,
                                outcome: "Die",
                                formName: getFormVal[1],
                                year: "5 years"
                            });
                        }

                    }
                });
            }
            else {
                throw new Error("Unable to process data");
                err.status = 400;
                return next(err);
            }
        });

    }
    else if (getFormVal[1] == "Fallopian Tube Cancer") {
        console.log('Fallopian Tube Cancer');

    }
    else if (getFormVal[1] == "Ovarian Cancer") {
        console.log('Ovarian Cancer');

    }
    else if (getFormVal[1] == "Vaginal Cancer") {
        console.log('Vaginal Cancer');

    }
    else if (getFormVal[1] == "Vulva Cancer") {
        console.log('Vulva Cancer');

    }
    else {
        console.log("I don't know");
        var err = new Error('Unable to process option');
        err.status = 404;
        return next(err);
    }

});


router.post('/neuralAll', login.isLoggedIn, login.isAdmin, function (req, res, next) {
    var sendCancerForm = {form: req.body.cancerforms};
    var getFormVal = (sendCancerForm.form).split(':');
    var totalPatients = 0;
    var countSurvive = 0;
    var countDie = 0;

    if (getFormVal[1] == "Cervical Cancer") {
        //data normalizer; foreach name, aggregate data to get percentage of patients who are
        // likely to die and percentage that are likely to live
        cervCan.find({}, function (err, docs) {
            if (err) {
                var err = new Error('Unable to process data');
                err.status = 400;
                //logger.error("127.0.0.1 - there's no place like home");
                return next(err);
            }
            docs.forEach(function (doc) {
                //console.log("hey " + doc.Name + " "+ doc.Surname);
                //console.log('size '+ docs.length);
                if(doc.Name != null && doc != null){
                    dataNormalizerCervical.getNormalizedData(doc.Name, doc.Surname, function (array) {
                        if (array == null) {
                            throw new Error('Array empty');
                        }
                        else {
                            //console.log('fetching '+ array);
                            nn.testNetwork(req, array, function (found) {
                                if (found) {
                                    totalPatients = docs.length;
                                    if (found >= 0.143) {
                                        //most probably to live with cancer long time
                                        ++countSurvive;
                                    }
                                    else {
                                        //most probably to die form cancer soon
                                        ++countDie;

                                    }

                                    if ((countDie + countSurvive) == totalPatients) {
                                        console.log('Why!!!!!!!!1');
                                        nn.calculatePercentage(req, totalPatients, countSurvive, countDie, function (value) {
                                            if (value.percentSurvive == 0 && value.percentDie == 0) {
                                                console.log('nothing');
                                            }
                                            else {
                                                console.log(value.percentSurvive + "   " + value.percentDie);

                                                res.render('pims_neuralnet/testAI', {
                                                    title: 'PIMS Neural Network',
                                                    die: value.percentDie,
                                                    survive: value.percentSurvive,
                                                    formName: getFormVal[1],
                                                    year: "5 years"
                                                });
                                                countDie = 0;
                                                countSurvive = 0;

                                            }
                                        });


                                    }

                                }
                            });
                        }
                    });
                }

            });

        });

    }
    else if (getFormVal[1] == "Endometrial Cancer") {
        console.log('Endometrial Cancer');
        endometrial.find({}, function (err, docs) {
            if (err) {
                var err = new Error('Unable to process data');
                err.status = 400;
                return next(err);
            }
            docs.forEach(function (doc) {
                //console.log("hey " + doc.Name + " "+ doc.Surname);
                //console.log('size '+ docs.length);
                if(doc.Name != null && doc != null){
                    dataNormalizerEndometrial.getNormalizedData(doc.Name, doc.Surname, function (array) {
                        if (array == null) {
                            throw new Error('Array empty');
                        }
                        else {
                            //console.log('fetching '+ array);
                            nn.testNetwork(req,array, function (found) {
                                if (found) {
                                    totalPatients = docs.length;
                                    if (found >= 0.143) {
                                        //most probably to live with cancer long time
                                        ++countSurvive;
                                    }
                                    else {
                                        //most probably to die form cancer soon
                                        ++countDie;

                                    }

                                    if ((countDie + countSurvive) == totalPatients) {
                                        console.log('Why!!!!!!!!1');
                                        nn.calculatePercentage(req, totalPatients, countSurvive, countDie, function (value) {
                                            if (value.percentSurvive == 0 && value.percentDie == 0) {
                                                console.log('nothing');
                                            }
                                            else {
                                                console.log(value.percentSurvive + "   " + value.percentDie);

                                                res.render('pims_neuralnet/testAI', {
                                                    title: 'PIMS Neural Network',
                                                    die: value.percentDie,
                                                    survive: value.percentSurvive,
                                                    formName: getFormVal[1],
                                                    year: "5 years"
                                                });
                                                countDie = 0;
                                                countSurvive = 0;

                                            }
                                        });


                                    }

                                }
                            });
                        }
                    });
                }

            });

        });

    }
    else if (getFormVal[1] == "Fallopian Tube Cancer") {
        console.log('Fallopian Tube Cancer');

    }
    else if (getFormVal[1] == "Ovarian Cancer") {
        console.log('Ovarian Cancer');

    }
    else if (getFormVal[1] == "Vaginal Cancer") {
        console.log('Vaginal Cancer');

    }
    else if (getFormVal[1] == "Vulva Cancer") {
        console.log('Vulva Cancer');

    }
    else {
        console.log("I don't know");
    }


});


//to train network,i should probably have a seperate train file
//that will have functions that can be called after some set time.
//------------------------------------------------------------------
//at button onclick, NN wil train; only for admin access;
// OR after some time period just call function
router.get('/neuraltrain', function (req, res, next) {
    //var sendPatientName = {patient: req.body.patientNeural};

    //console.log('Hello' + sendPatientName.patient);
    cervCan.find({}, function (err, docs) {
        if (err) {
            throw err;
        }
        docs.forEach(function (doc) {
            console.log("hey " + doc.Name + " " + doc.Surname);
            //console.log('size '+ docs.length);
            dataNormalizerCervical.getNormalizedData(doc.Name, doc.Surname, function (array) {
                if (array == null) {
                    throw new Error('Array empty');
                }
                else {
                    console.log('fetching ' + array);
                    //call train network
                    /*nn.trainMany(req, array, docs.length,function(trained){
                     if(trained){
                     //propagate that NN is trained to UI
                     //perhaps show how far training is; iterations maybe
                     }
                     else{
                     //new Error(unable to train NN)
                     //page 404
                     }
                     });*/
                }
            });

        });

    });

    res.render('pims_neuralnet/testAI');

});

router.get("/userManual", login.isLoggedIn, function (req, res, next) {
    res.download('../Documentation/User_Manual/UserManual.pdf');
});

module.exports = router;
