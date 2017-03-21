$(document).ready(function(){

	$('a').click(function(){
	    $('html, body').animate({
	           scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
	    return false;
	});

});


$(document).on('scroll', function() {

	var reached = false;

    if($(this).scrollTop()>=$('#nav-target').position().top-33){

        var navLinks = document.querySelectorAll("nav>ul>li>a");

	    for(var i = 0; i<navLinks.length; i++){
	       	navLinks[i].style.color = "#222";
	       	navLinks[i].classList.remove("white-line");
	       	navLinks[i].className = "black-line";
	    }

    }else{
    	var navLinks = document.querySelectorAll("nav>ul>li>a");

        for(var i = 0; i<navLinks.length; i++){
        	navLinks[i].style.color = "#FFF";
	       	navLinks[i].classList.remove("black-line");
	       	navLinks[i].className = "white-line";
        }
    }


    if($(this).scrollTop()>=($(document).height() - $(window).innerHeight())-100){
    	var backToTopButton = document.getElementById("back-to-top");
    	backToTopButton.className = "displayBTT";
    }

    if($(this).scrollTop()<($(document).height() - $(window).innerHeight())-150){
    	var backToTopButton = document.getElementById("back-to-top");
    	backToTopButton.className = "hideBTT";
    }



});