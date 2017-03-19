$(document).ready(function(){

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    return false;
	});

});


$(document).on('scroll', function() {

    if($(this).scrollTop()>=$('#nav-target').position().top){
        var navLinks = document.querySelectorAll("nav>ul>li>a");

        for(var i = 0; i<navLinks.length; i++){
        	navLinks[i].style.color = "#000";
        }
    }else{
    	var navLinks = document.querySelectorAll("nav>ul>li>a");

        for(var i = 0; i<navLinks.length; i++){
        	navLinks[i].style.color = "#FFF";
        }
    }

})