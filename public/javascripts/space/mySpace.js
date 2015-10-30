/**
 * Created by Trevor on 2015/10/07.
 */
var lastClicked = null;
var prevWidth = null;
$(function(){
    init();
});

$(window).resize(function () {
    init();
});

/*-----------------------------------------------Functions-----------------------------------------------*/

function left() {
    if ($(".item").siblings() > 0) {
        $(".carousel-control").hide();
    }
    $(".item").removeClass("slideInLeft");
    $(".item.active").addClass("prevo");
    $(".item.active").addClass("slideInRight");
    setTimeout(function () {
        $(".item").removeClass("slideInRight");
        $(".prevo").removeClass("prevo");
        $(".item.active").addClass("slideInRight");

    }, 500)
}
function right() {
    if ($(".item").siblings() > 0) {
        $(".carousel-control").hide();
    }
    $(".item").removeClass("slideInRight");
    $(".item.active").addClass("prevo");
    $(".item.active").addClass("slideInLeft");
    setTimeout(function () {
        $(".item").removeClass("slideInLeft");
        $(".prevo").removeClass("prevo");
        $(".item.active").addClass("slideInLeft");
    }, 500)
}
function rightKey() {
    if ($(".item").siblings() > 0) {
        $(".carousel-control").hide();
    }
    $(".item").removeClass("slideInRight");
    $(".item.active").addClass("prevo");
    $(".item.active").addClass("slideInLeft");
    setTimeout(function () {
        $(".item").removeClass("slideInLeft");
        $(".prevo").removeClass("prevo");
        if ($(".item.active").next(".item").is(".item")) {
            $(".item.active").removeClass("active").next().addClass("active").addClass("slideInLeft");
        } else {
            $(".item").removeClass("active");
            $(".item").first().addClass("active").addClass("slideInLeft");
        }

    }, 490)
}
function leftKey() {
    if ($(".item").siblings() > 0) {
        $(".carousel-control").hide();
    }
    $(".item").removeClass("slideInLeft");
    $(".item.active").addClass("prevo");
    $(".item.active").addClass("slideInRight");
    setTimeout(function () {
        $(".item").removeClass("slideInRight");
        $(".prevo").removeClass("prevo");
        if ($(".item.active").prev().is(".item")) {
            $(".item.active").removeClass("active").prev().addClass("active").addClass("slideInRight");
        } else {
            $(".item").removeClass("active");
            $(".item:last-of-type").addClass("active").addClass("slideInRight");
        }
    }, 490)
}

function rotate(clas){
    $("#" + clas + " img").toggleClass("rotate");
    lastClicked=clas;
    setTimeout(function () {
        $("#" + clas).hide();

        $(".options."+clas).toggleClass("show");
    }, 0)
}


function init(){
    var width = $(document).width();
    if(width == prevWidth){
        return;
    }
    var pills  = $(".item").children();
    var totalPills = $(".item > a").length + $(".item > ul").length;
    $(".item").remove();
    switch(true){
        case width < 600:
            createItems(totalPills, pills, totalPills);
            break;
        case width < 900:
            createItems(totalPills/2, pills, totalPills);
            break;
        default:
            createItems(1, pills, totalPills);
    }
    $("a.left.carousel-control").click(left);
    $("a.right.carousel-control").click(right);
    $(window).keyup(function (event) {
        if (event.which == 37) {
            leftKey();
        }
        if (event.which == 39) {
            rightKey();
        }
    });
    $("#formIcon").click(function (event) {
        event.preventDefault();
        rotate("formIcon");
    });
    $("#tutorial").click(function (event) {
        event.preventDefault();
        rotate("tutorial");
    });
    $("#activities").click(function (event) {
        event.preventDefault();
        rotate("activities");

    });
    $("#statistics").click(function (event) {
        event.preventDefault();
        rotate("statistics");

    });
    $(".options").mouseleave(function () {
        var recentlyClicked = lastClicked;
        $('.options.' + recentlyClicked).addClass("rotate");
        setTimeout(function () {
                $(".options." + recentlyClicked).toggleClass("show");
                $(".options." + recentlyClicked).removeClass("rotate");
                $("#" + recentlyClicked + " img").toggleClass("rotate");
                $("#" + recentlyClicked).show();
            }, 450
        );
    });
    prevWidth = width;
}

function createItems(noOfItems, pills, totalPills){
    var counter = 0;
    var pillsPerItem = Math.ceil(totalPills / noOfItems);
    for(var i = 0; i < noOfItems; i++){
        $(".carousel-inner").append("<div class='item'> </div>");
        var currItems = $(".item");
        if(i==0){
            currItems.addClass("slideInRight active");
        }
        currItems = $(".item:eq("+i+")");
        for(var j = 0; j < pillsPerItem && counter < pills.length; j++){
            currItems.append(pills[counter++]);
            if($("div", pills[counter]).length>0){
                currItems.append(pills[counter++]);
            }
        }
    }
}
