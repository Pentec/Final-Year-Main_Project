/**
 * Created by Ruth on 2015-07-23.
 */
var mongoose = require('mongoose');

var User = mongoose.model('users');

describe("update profile", function(){
    it("should retrieve username", function(done){
        User.findOne({username: "Leon"}, function(err, contact) {
            should.not.exist(err);
            contact.username.should.equal("Leon");
        });
        done();
    });

    it("should modify profile details [surname]", function(done){
        User.findOne({username: "Leon"}, function(err, contact) {
            contact.surname = "Snymanss";
            should.not.exist(err);
            contact.surname.should.equal("Snymanss");

        });
        done();
    });

    it("should modify profile details [password]", function(done){
        User.findOne({username: "Leon"}, function(err, contact) {
            contact.password = "leonSnyman";
            should.not.exist(err);
            contact.password.should.equal("leonSnyman");

        });
        done();
    });

    it("should modify profile details [email]", function(done){
        User.findOne({username: "Leon"}, function(err, contact) {
            contact.email = "rojo67@yahoo.com";
            should.not.exist(err);
            contact.email.should.equal("rojo67@yahoo.com");

        });
        done();
    });

    it("should modify profile details [user_rights]", function(done){
        User.findOne({username: "Leon"}, function(err, contact) {
            contact.user_rights = 2;
            should.not.exist(err);
            contact.user_rights.should.equal(2);

        });
        done();
    });





});




describe("add new user", function(){
    it("should save user details in database", function(done){
        new User({username : "Simon",surname : "Peter",email : "u12042804@tuks.co.za",user_rights : 2,password : "sPeter",department : "Obstetrics and Gynaecology",staff_type : "Intern" })
            .save(function(err, users) {
                should.not.exist(err);
                contact.username.should.equal("Simon");
                contact.surname.should.equal("Peter");
                contact.email.should.equal("u12042804@tuks.co.za");
                contact.user_rights.should.equal(2).which.is.a.Number();
                contact.password.should.equal("sPeter");
                contact.department.should.equal("Obstetrics and Gynaecology");
                contact.staff_type.should.equal("Intern");
            });
        done();
    });

});


