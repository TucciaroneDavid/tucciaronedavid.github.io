// JavaScript Document

$(document).ready(function() {
	
	// Logo Header rollover function
    $(".logo") .mouseover(function () {
       this.src= "assets/logorollover.png"
    }).mouseout(function () {
        this.src= "assets/logo.png"
    });
	
	// Sticky scrolling nav

		$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
		$('nav').addClass("sticky");
	  }
	  else{
		$('nav').removeClass("sticky");
	  }
	})
	
	$(".menu-opener").click(function(){
 	 $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
	});
	
	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
	
	var lastScrollTop= 0;
	
	$(window).scroll(function () {
		var st = $(this).scrollTop();
		if (st <lastScrollTop){
			$('.scrolldown').fadeIn();
		}else{
			$('.scrolldown').fadeOut();
		}
		lastScrollTop = st;
	})
	

		
		// countdown timer
		$(function(){
	
			var note = $('#note'),
				ts = new Date(2015, 04, 04),
				newYear = true;
			
			if((new Date()) > ts){
				// The new year is here! Count towards something else.
				// Notice the *1000 at the end - time must be in milliseconds
				ts = (new Date()).getTime() + 10*24*60*60*1000;
				newYear = false;
			}
				
			$('#countdown').countdown({
				timestamp	: ts,
				callback	: function(days, hours, minutes, seconds){
					
					var message = "";
					
					message += days + " day" + ( days==1 ? '':'s' ) + ", ";
					message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
					message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
					message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
					
					if(newYear){
						message += "Left till the release of Intercept!";
					}
					else {
						message += "Left till the release of Intercept!";
					}
					
					note.html(message);
				}
			});
			
		});




		// form!
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

	
	});