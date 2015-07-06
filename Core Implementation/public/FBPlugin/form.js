var mongoose = require('mongoose');

var FormSchema = mongoose.Schema({
    form_id             : String,           
    form_name           : String,          
    is_deleted          : Boolean,  
	data				: String
    
});


module.exports = mongoose.model('form', FormSchema);
