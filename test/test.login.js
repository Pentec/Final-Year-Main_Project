var expect = require('chai').expect;
var mongoose = require('mongoose');
var login = require('pims-login');
var notification = require('pims-notification');

var Schema   = mongoose.Schema;
var Users = new Schema({
    username				: String,
    surname				    : String,
    email					: String,
    profile_pic				: String,
    user_rights				: Number,
    password				: String,
    department				: String,
    staff_type				: String
});


mongoose.model('users', Users);
var User = mongoose.model('users');



describe("login user", function(){
   it("authenticate should login user", function(done){
       login.authenticate("a", "g", function(err){
           User.findOne({username: "a", password: "g"}, function(found){
                found.username.should.equal("a");
                found.password.should.equal("g");
           });

       });
       done();
   });

    it("authenticate should retrieve username", function(done){
       login.authenticate("a", "g", function(err){
           User.findOne({username: "a", password: "g"}, function(found){
                found.username.should.equal("a");
           });

       });
       done();
   });


    it("authenticate should retrieve password", function(done){
         login.authenticate("a", "g", function(err){
             User.findOne({username: "a", password: "g"}, function(found){
                found.password.should.equal("g");
             });

         });
         done();
     });


    it("authenticate should fail with empty username", function(done){
        login.authenticate("", "g", function(err){
            User.findOne({username: ""}, function(found){
                found.username.should.equal("a");
            });

        });
        done();
   });

    it("authenticate should fail with empty password", function(done){
        login.authenticate("", "g", function(err){
            User.findOne({password: ""}, function(found){
                found.password.should.equal("g");
            });

        });
        done();
   });

    it("authenticate should fail with empty username and empty password", function(done){
        login.authenticate("", "g", function(err){
            User.findOne({username: "", password: ""}, function(found){
                expect(err).to.be.null;
                found.username.should.equal("a");
                found.password.should.equal("g");
            });

        });
        done();
   });


     it("authenticate should return a boolean", function(done){
         login.authenticate("a", "g", function(found){
             assert.isBoolean(found, 'is the user logged in');
         });
         done();
     });

    /*checkAdmin test*/

    it("checkAdmin should return a boolean", function(done){
         login.checkAdmin("a", "g", function(found){
             assert.isBoolean(found, 'is the user logged in');
         });
         done();
    });

});



describe("send notification to patient", function(){
   it("findPatient should retrieve email address", function(done){
       notification.findPatient("sue", function(err){
           notification.Patient.findOne({patient_name: "sue"}, function(err, found){
                found.email_address.should.equal("nodemailingtest@gmail.com");
           });

       });
       done();
   });


    it("findPatient should return email address", function(done){
       notification.findPatient("sue", function(found){
           found.should.equal("nodemailingtest@gmail.com");
       });
       done();
   });




});

