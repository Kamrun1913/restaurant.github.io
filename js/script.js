$(document).ready(function() {


//toggler-btn

$('.navbar-toggler').click(function(){
	$('.navbar-toggler').toggleClass('change')
})


//sticky navbar
$(window).scroll(function(){
	let position = $(this).scrollTop();
    if (position>= 718) {
    	$('.navbar').addClass('navbar-background');
    	$('.navbar').addClass('fixed-top');

    }
    else{
    	$('.navbar').removeClass('navbar-background');
    	$('.navbar').removeClass('fixed-top');
    }
})


//smoth scroll for navbar item

$('.navbar-item a, .header-link, #back-to-top').click(function(link){
	link.preventDefault();

	let target = $(this).attr('href');

	$('html, body').stop().animate({
		scrollTop: $(target).offset().top - 25
	},1500);

})

//back-to-top
$(window).scroll(function(){
	let position = $(this).scrollTop();
    if (position>= 718) {
    	$('#back-to-top').addClass('scrollTop');
    	
    }
    else{
    	$('#back-to-top').removeClass('scrollTop');
    }
})





//rippls
$("#header, .info").ripples({
  dropRadius: 13,
  perturbance: 0.3,
  
});


//magnificPopup
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',

  gallery:{
  	enabled:true

  }
 
});
});

