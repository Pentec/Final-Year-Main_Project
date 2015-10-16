/**
 * This function is used for the page countdown until the final demo for COS 301.
 */
$(function(){

	var note = $('#note');
    var ts = (new Date("16 October, 2015").setUTCHours(22,0,0));

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' );
			message += " left until website is complete!";

			note.html(message);
			if(days==0 & hours == 0 && minutes == 0 && seconds == 0){
				window.location.replace("/splash");
				exit();
			}
		}
	});
});
