
$(window).load(function(){
	$('.flexslider').flexslider({
		slideshowSpeed: 3000,
		animation: "slide"
	});
});

$(document).ready(function(){

	$("#hamburger-menu").click(function(event){
		event.preventDefault();
		$(this).toggleClass("clicked");
		$("#menu").toggleClass("clicked");
	});
});