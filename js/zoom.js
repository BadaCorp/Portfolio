/* eslint-env jquery */

$(function() 
    {
/*        $("#project .zoom").click(function()
        {   
            $(this).css("-webkit-transform", "scale(2.0)");
            $(this).css("transform", "scale(2.0)");
            $(this).css("transition", "transform .5s");
            $(this).css("left", "50%");
            $(this).css("opacity", "1");
        });*/
    
        $(".carousel-inner").click(function() {
            $("#zoom").toggleClass("zoom");
        });
    
        $(".carousel-inner").mouseout(function() {
            $("#zoom").removeClass("zoom");
        });
    
/*        $("#project .zoom").mouseout(function()
        {
            $(this).css("transform", "");
            $(this).css("transition", "");
            $(this).css("left", "");
            $(this).css("opacity", "");  
        });*/
    }
 );