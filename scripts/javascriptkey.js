// JavaScript Document

$(document).ready(function() {
	// Logo Header rollover function

		$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
		$('nav').addClass("sticky");
	  }
	  else{
		$('nav').removeClass("sticky");
	  }
	})

});