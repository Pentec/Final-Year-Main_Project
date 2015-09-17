var mongoose = require('mongoose');

var authenticate = function(username, password, callback) {
    var foundUser = false;

    var user = mongoose.model('users');
    user.findOne({username: username, password: password}, function(err, found){
        if(err) {
            console.log("DB error");
            callback(err);
        }

        if(found) {
            foundUser = true;
            return callback(foundUser);

        }
        else
        {
            foundUser = false;
            return callback(foundUser);
        }

    });

}


var checkAdmin = function(username, password, callback) {
    var isAdmin = false;

    var user = mongoose.model('users');
    user.findOne({username: username, password: password}, function(err, found){
        if(err) {
            console.log("DB error");
            callback(err);
        }

        if(found) {

            if(found.user_rights == 1)
            {
                isAdmin = true;
                return callback(isAdmin);

            }
            else
            {
                isAdmin = false;
                return callback(isAdmin);
            }


        }

    });

}


module.exports.authenticate = authenticate;
module.exports.checkAdmin = checkAdmin;
