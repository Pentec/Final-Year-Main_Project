var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Form = mongoose.model('forms');

var login = require('pims-login');
/* GET splash page. */
router.get('/', function(req, res, next) {
  res.render('splash', { title: 'Kalafong PIMS' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Kalafong PIMS' });
});


/*******************************LOGIN BELOW**********************************************/


/* GET login page */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'PIMS Login Page' });
});

 /*POST login page.*/
router.post('/login', function(req, res, next) {
    //res.render('login', { title: 'PIMS Login Page' });
    var username = req.body.userid;
    var password = req.body.pswd;
    console.log("Hello \n" + req.body.userid);
    console.log("Hello Again \n" + req.body.pswd);

    //login.authenticate(username, password);

    var getIt = login.authenticate(username, password, function(found) {
        console.log('Finished calling authenticate. \n' + found);
        //res.redirect('home');
        //
        //console.log(getIt + "  OK")
         if(found)
         {
             console.log("its true");
             res.redirect('home');
         }
         else
         {
             console.log("its false");
             res.redirect('login');
         }


    });



});
/*******************************LOGIN ABOVE**********************************************/


/* Add New User page */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Kalafong PIMS - Add New User' });
});

/* GET form page. */
router.get('/form', function(req, res, next) {
    res.render('formBuild', { title: 'Form Builder' });
 
});

router.post('/liz', function(req, res) {
    var object = JSON.stringify(req.body);
    console.log(object);

    new Form({form_name : "new form",data : object ,is_deleted : false})
        .save(function(err, forms) {
            console.log("New form added");
            res.redirect('formBuild');

        });

});


module.exports = router;
