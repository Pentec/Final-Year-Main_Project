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
// as well as hashing patient names and surnames
//hashes password and stores in DB
//stores the hash and salt value of password
/**
 *
 * @param saltDone
 * @param getSalt --> the salt value from the database
 * @param username
 * @param pswd
 * @param callback
 */
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
                    };
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
                        };
                        //console.log("salting " + salt.toString('hex').slice(0, config.saltBytes));
                        //console.log("salting " + hash.toString('hex').slice(0, config.saltBytes));
                        return callback(sendSaltHash);

                    }
                }
            });
        });

    }

};





//to be called when hashing patient names and surnames
//hashes password and stores in DB
//stores the hash and salt value of password
/**
 *
 * @param saltDone
 * @param getSaltFName --> to be used for validating already hashed content
 * @param getSaltLName --> to be used for validating already hashed content
 * @param patientName --> to get before putting in DB
 * @param patientSurname  --> to get before putting in DB
 * @param callback
 */
var saltHashGenPatients = function(saltDone, getSaltFName, getSaltLName, patientName, patientSurname, callback){

    if(getSaltFName == "" && getSaltLName == ""){

        //pbkdf2 hashing algorithm
        crypto.randomBytes(config.saltBytes, function(err, saltFName){
            if(err){
                return callback(err)
            }

            crypto.pbkdf2(patientName, saltFName.toString('hex').slice(0, config.saltBytes), config.iterations, config.hashBytes, function(err, hashFName){
                if(err){
                    return callback(err);
                }
                if(!err){ //hash firstname

                    if(patientName != "" || patientName != null){

                        /*********************************hash surname******************************************/
                        crypto.randomBytes(config.saltBytes, function(err, saltLName){
                            if(err){
                                return callback(err)
                            }

                            crypto.pbkdf2(patientSurname, saltLName.toString('hex').slice(0, config.saltBytes), config.iterations, config.hashBytes, function(err, hashLName){
                                if(err){
                                    return callback(err);
                                }
                                if(!err){ //hash surname

                                    if(patientSurname != "" || patientSurname != null){//adding user; no username field needed
                                        var sendSaltHash = {
                                            sendSaltFName: saltFName.toString('hex').slice(0, config.saltBytes),
                                            sendHashFName: hashFName.toString('hex').slice(0, config.saltBytes),
                                            sendSaltLName: saltLName.toString('hex').slice(0, config.saltBytes),
                                            sendHashLName: hashLName.toString('hex').slice(0, config.saltBytes)
                                        };
                                        console.log("salting FName " + saltFName.toString('hex').slice(0, config.saltBytes));
                                        console.log("hashing FName " + hashFName.toString('hex').slice(0, config.saltBytes));
                                        console.log("salting LName " + saltLName.toString('hex').slice(0, config.saltBytes));
                                        console.log("hashing LName " + hashLName.toString('hex').slice(0, config.saltBytes));
                                        return callback(sendSaltHash);

                                    }
                                    else{
                                        return callback(null);
                                    }
                                }
                            });
                        });

                    }
                    else{
                        return callback(null);
                    }
                }
            });
        });

    }
    else{
        console.log("you cannot do that!!!!!");
    }

};




var generateInitVector = function(){
    var initVector = crypto.randomBytes(Math.ceil(12/2)).toString('hex').slice(0, 12);
    console.log("Generating " + initVector);

    return initVector;

};


module.exports = {
    saltHashGen: saltHashGen,
    saltHashGenPatients: saltHashGenPatients

};
