/**
 * Created by Trevor on 2015/09/07.
 */
$(document).ready(function(){
    $(".has-sub a").click(function(event){
        event.preventDefault();
        var id = $(this).parent().attr('id');
        var c = "." + id;
        if(!$(c).hasClass("sub")){
            $(c).animate({opacity: 1}, {
                duration: 500,
                step:function(now, fn){
                    fn.start = 0;
                    fn.end = 210;
                    $(c).css({
                        '-webkit-transform':'translateX('+now+'%)'
                        ,'-moz-transform':'translateX('+now+'%)'
                        ,'transform':'translateX('+now+'%)'
                    });
                },
                complete:function(){
                    $(c).removeAttr("style");
                    $(c).addClass("sub");
                    $(c).removeClass("sub-show");
                }
            },'linear');
        }else{
            if($(".sub-show").length){
                $(".sub-show").animate({opacity: 1}, {
                    duration: 500,
                    step:function(now, fn){
                        fn.start = 0;
                        fn.end = 210;
                        $(this).css({
                            '-webkit-transform':'translateX('+now+'%)'
                            ,'-moz-transform':'translateX('+now+'%)'
                            ,'transform':'translateX('+now+'%)'
                        });
                    },
                    complete:function(){
                        $(this).removeAttr("style");
                        $(this).addClass("sub");
                        $(this).removeClass("sub-show");
                        setTimeout(
                            function()
                            {
                                $(c).removeClass("sub");
                                $(c).addClass("sub-show");
                            }, 300);
                    }
                },'linear');
            }else{
                $(c).toggleClass("sub");
                $(c).toggleClass("sub-show");
            }
        }
    });
});

