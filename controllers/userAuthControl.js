var crypto = require('crypto'),
    algorithm = 'aes-256-gcm';



// larger numbers mean better security, less
var config = {
    // size of the generated hash
    hashBytes: 32,
    // larger salt means hashed passwords are more resistant to rainbow table, but
    // you get diminishing returns pretty fast
    saltBytes: 32,
    // more iterations means an attacker has to take longer to brute force an
    // individual password, so larger is better. however, larger also means longer
    // to hash the password. tune so that hashing the password takes about a
    // second
    iterations: 1000 //make to 7000 later
};


//to be called when adding user and editing user
//hashes password and stores in DB
//stores the hash and salt value of password
var saltHashGen = function(saltDone, getSalt, username, pswd, callback){

    //pbkdf2 hashing algorithm
    if(saltDone == true && getSalt != ""){
        crypto.pbkdf2(pswd, getSalt, config.iterations, config.hashBytes, function(err, hash){
            if(err){
                return callback(err);
            }
            if(!err){
                if(username != "" || username != null){//adding user; no username field needed
                    var sendSaltHash = {
                        sendSalt: getSalt,
                        sendHash: hash.toString('hex').slice(0, config.saltBytes)
                    }
                    //console.log("salt in hashing "+ getSalt);
                    //console.log("hashing "+ hash.toString('hex').slice(0, config.saltBytes));
                    return callback(sendSaltHash);

                }
            }
        });

    }
    else{
        //hashing password
        //var initVector = crypto.randomBytes(Math.ceil(12/2)).toString('hex').slice(0, 12);
        crypto.randomBytes(config.saltBytes, function(err, salt){
            if(err){
                return callback(err)
            }

            crypto.pbkdf2(pswd, salt.toString('hex').slice(0, config.saltBytes), config.iterations, config.hashBytes, function(err, hash){
                if(err){
                    return callback(err);
                }

                /*var combo = new Buffer(hash.length + salt.length + 8);

                 combo.writeUInt32BE(salt.length, 0, true);
                 combo.writeUInt32BE(config.iterations, 4, true);

                 salt.copy(combo, 8);

                 hash.copy(combo, salt.length + 8);*/

                //return callback(null, hash);

                //store hash and salt in db
                if(!err){
                    if(username != "" || username != null){//adding user; no username field needed
                        var sendSaltHash = {
                            sendSalt: salt.toString('hex').slice(0, config.saltBytes),
                            sendHash: hash.toString('hex').slice(0, config.saltBytes)
                        }
                        //console.log("salting " + salt.toString('hex').slice(0, config.saltBytes));
                        //console.log("salting " + hash.toString('hex').slice(0, config.saltBytes));
                        return callback(sendSaltHash);

                    }
                }
            });
        });

    }

}




var generateInitVector = function(){
    var initVector = crypto.randomBytes(Math.ceil(12/2)).toString('hex').slice(0, 12);
    console.log("Generating " + initVector);

    return initVector;

}


module.exports = {
    saltHashGen: saltHashGen

}
