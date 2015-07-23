var expect = require('chai').expect;
var mocha = require('mocha');
var mongoose = require('mongoose');
var login = require('pims-login');

describe("login user", function(){
   it("should fail with less than 6 characters", function(done){
       login.authenticate("ruthie", "busyb", function(err){
           mongoose.model('users').findOne();
          expect(err).to.exist;
           done();
       });
   }) ;
});

//var authenticate = function(username, password, callback) {
/*var user = mongoose.model('users');
 user.findOne({username: username, password: password}, function(err, found){*/