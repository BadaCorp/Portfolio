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

	$(function() {
  	// Add smooth scrolling to all links
  	$("a").on('click', function(event) {
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
	});