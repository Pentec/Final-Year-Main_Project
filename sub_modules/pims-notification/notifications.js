var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Schema   = mongoose.Schema;

var Patient = new Schema({
    patient_name			: String,
    patient_surname			: String,
    contact_number			: Number,
    email_address			: String,
    physical_address		: String
});


mongoose.model('patients', Patient);
var Patient = mongoose.model('patients');

var findPatient = function(patientid, callback) {
    var sendTo = "";

    Patient.findOne({patient_name: patientid}, function(err, found){
        if(err) {
            console.log("DB error");
            callback(err);
        }

        if(found) {
            sendTo = found.email_address;
            return callback(sendTo);

        }
        else
        {
            sendTo = "";
            return callback(sendTo);
        }

    });

}


var sendEmail = function(email, msg, patientname){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            "user": "pentecpims@gmail.com",
            "pass": "Pentec2015"
        }

    });

    var mailOptions = {
        from: 'pentecpims@gmail.com',
        to: patientname + ' ' + email,
        subject: 'Kalafong PIMS Patient Follow Up Visit', // Subject line
        text: msg, // pass message here

    }

    transporter.sendMail(mailOptions, function(err, info){
        if(err) {
            return console.log(err);
        }
        else{
            console.log('Mesg sent: ' + info.response);
            //redirect
        }

    });

}

module.exports.findPatient = findPatient;
module.exports.sendEmail = sendEmail;

