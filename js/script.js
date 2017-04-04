$(document).ready(function(){

    $("#hamburger-button").click(function(event){
        event.preventDefault();
        $("#hamburger-button").toggleClass("clicked");


        $("#hamburger-button").toggleClass("hamburger-black");
        $("nav").toggleClass("clicked");
    });

    $("nav>ul>li>a").click(function(event){
        $("#hamburger-button").toggleClass("clicked");
        $("#hamburger-button").toggleClass("hamburger-black");
        $("nav").toggleClass("clicked");
    });



	$('nav>ul>li>a, #back-to-top, #down-arrow').click(function(){
	    $('html, body').animate({
	           scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
	    return false;
	});

    if($(this).scrollTop()>=$('#nav-target').position().top-33){

        var navLinks = document.querySelectorAll("nav>ul>li>a");

        for(var i = 0; i<navLinks.length; i++){
            navLinks[i].classList.remove("white-line");
            navLinks[i].className = "black-line";
        }
        document.getElementById("hamburger-button").classList.remove("hamburger-white");
        document.getElementById("hamburger-button").className = "hamburger-black";
    }else{
        var navLinks = document.querySelectorAll("nav>ul>li>a");

        for(var i = 0; i<navLinks.length; i++){
            navLinks[i].classList.remove("black-line");
            navLinks[i].className = "white-line";
        }
        document.getElementById("hamburger-button").classList.remove("hamburger-black");
        document.getElementById("hamburger-button").className = "hamburger-white";
    }



});

$(document).on('scroll', function() {

	var reached = false;

    if($(this).scrollTop()>=$('#nav-target').position().top-33){

        var navLinks = document.querySelectorAll("nav>ul>li>a");

	    for(var i = 0; i<navLinks.length; i++){
	       	navLinks[i].classList.remove("white-line");
	       	navLinks[i].className = "black-line";
        }


        document.getElementById("hamburger-button").classList.remove("hamburger-white");
        document.getElementById("hamburger-button").className = "hamburger-black";   


   
        
    }else{
    	var navLinks = document.querySelectorAll("nav>ul>li>a");

        for(var i = 0; i<navLinks.length; i++){
	       	navLinks[i].classList.remove("black-line");
	       	navLinks[i].className = "white-line";
        }

        document.getElementById("hamburger-button").classList.remove("hamburger-black");
        document.getElementById("hamburger-button").className = "hamburger-white";
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


