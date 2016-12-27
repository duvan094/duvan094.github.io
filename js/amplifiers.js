$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    slideshow: false,
  });
});

$(document).ready(function(){



	$("#hamburger-menu").click(function(event){
		event.preventDefault();
		$(this).toggleClass("clicked");
		$("#menu").toggleClass("clicked");
	});

/*	$(".flexslider>.slides>li>img").click(function(event){
		$(".modal").toggleClass("open");
		$(window).trigger('resize');
	});*/

	$(".close-button").click(function(event){
		event.preventDefault();
		$(".modal").removeClass("open");
	});

	$(".pilot-15h").click(function(event){
		$(".pilot-15h-modal").toggleClass("open");
		$(window).trigger('resize');
	});

	$(".uranus").click(function(event){
		$(".uranus-modal").toggleClass("open");
		$(window).trigger('resize');
	});

	$(".gt15h").click(function(event){
		$(".gt15h-modal").toggleClass("open");
		$(window).trigger('resize');
	});

	$(".gt5").click(function(event){
		$(".gt5-modal").toggleClass("open");
		$(window).trigger('resize');
	});

	$(".pilot-15h-bok").click(function(event){
		$(".pilot-15h-bok-modal").toggleClass("open");
		$(window).trigger('resize');
	});

	$(".gt15fur").click(function(event){
		$(".gt15fur-modal").toggleClass("open");
		$(window).trigger('resize');
	});

	$(".lil-rock").click(function(event){
		$(".lil-rock-modal").toggleClass("open");
		$(window).trigger('resize');
	});
});