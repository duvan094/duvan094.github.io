/*@author Jacob Duvander @date 2016-12-16*/

$(document).ready(function(){

	$("#hamburger-button").click(function(event){
		event.preventDefault();
		$("#menu").toggleClass("clicked");
	});

	$(document).ready(function(){
  		$('.bxslider').bxSlider({
  			auto: true,
  		});
	});


	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    return false;
	});

});
