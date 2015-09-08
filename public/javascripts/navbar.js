/**
 * Created by Trevor on 2015/09/07.
 */
$(document).ready(function(){
    $(".has-sub a").click(function(event){
        event.preventDefault();
        var id = $(this).parent().attr('id');
        $("." + id).toggleClass("sub-hide");
        $("." + id).toggleClass("sub-show");
    });
    focusLoss();
});


function focusLoss(){
    $("#usersub a").focusout(function(){
        $(".sub").hide();
    })
}

