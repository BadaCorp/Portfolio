/* eslint-env jquery */

var nav = document.getElementById("navbar");
var links = nav.getElementsByClassName("nav-item");

console.log(links);

function replaceActive()
{
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
}

for(var i=0; i<links.length; i++)
{
    links[i].addEventListener("click", replaceActive);
}

/*var navr = document.getElementById("navbar");
console.log(navr);

$(function()
{
    var nav = $("#navbar");
    var links = ;
    console.log(nav);
    $("#start").html("Go!");
});*/

$(function() 
    {
        // Add smooth scrolling to all links
        $("a").on('click', function(event) 
        {
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
        } // End if
        });
    

    /*$("#project .zoom").click(function()
    {   
        $(this).css("-webkit-transform", "scale(2.0)");
        $(this).css("transform", "scale(2.0)");
        $(this).css("transition", "transform .5s");
        $(this).css("left", "50%");
        $(this).css("opacity", "1");
    });
    
    $("#project .zoom").mouseout(function()
    {
        $(this).css("transform", "");
        $(this).css("transition", "");
        $(this).css("left", "");
        $(this).css("opacity", "");  
    });*/
});
