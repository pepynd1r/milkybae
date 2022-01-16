/* $(window).scroll(function(){
  var sticky = $('.logo'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');




});*/




$('.slider-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,

      }
    },
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,

      }
    }
  ]
});


$('.slider-items-2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});



$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);



$( ".desk-menu" ).mouseover(function() {
	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
	var $id = $(this).attr('aria-describedby');
	$('#'+$id).addClass('hover');
});

$( ".desk-menu" ).mouseout(function() {
	
	$('.bs-tooltip-left').removeClass('hover');
	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('hide');
});



if ($(window).width() > 991) {

    if ($(window).scrollTop() > 400) {
    	$( ".desk-menu" ).show();

    }
		else{
		$( ".desk-menu" ).hide();
	}


  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
    	$( ".desk-menu" ).show(500);

    }
		else{
		$( ".desk-menu" ).hide(500);
	}



	  });


}

});


/*  var video = $('#myVideo');
  if ((window.screen.width / window.screen.height) < 1.77){
    video.html('<source src="/static/media/space-background.mp4" type="video/mp4"></source>' );
 
  
  }
  else{
    video.html('<source src="/static/media/space-background.mp4" type="video/mp4"></source>' );
   
  }*/


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });