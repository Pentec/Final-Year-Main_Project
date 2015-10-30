function query(username){
    $.ajax({
        type: 'POST',
        url: '/removeUser',
        beforeSend: function (xhr) {
                $("#search").html("<img src='/images/loader.gif' height = '30px' />");
        },
        data: JSON.stringify({
            "username": username
        }),
        success: function (data, textStatus, jqXHR) {
            $("#search").html("Remove User");
            var res = JSON.parse(jqXHR.responseText);
            if(!res.found)
                $("#notificationDiv").html('<div class="alert alert-danger"><button data-dismiss="alert" type="button" class="close">x</button><p>User does not exist or could not be removed</p></div>')
            else
                $("#notificationDiv").html('<div class="alert alert-success"><button data-dismiss="alert" type="button" class="close">x</button><p>User was successfully removed</p></div>')
        },
        dataType: "json",
        contentType: "application/json"
    });
}

function submit() {
    $("#remove_user").submit();
}

$(document).ready(function () {
    $("#remove_user").on("submit", function (e) {
        e.preventDefault();
        query($("#username").val());
    });
});

