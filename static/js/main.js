 $(window).scroll(function(){
  var sticky = $('.logo'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');




});





