 $(window).scroll(function(){
  var sticky = $('.logo'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');




});


$( window ).on('load', function() {
  var video = $('#myVideo');
  if ((window.screen.width / window.screen.height) < 1.77){

    video.src = "/static/media/image-background-vertical.mp4";
    console.log('dasd');
  }
  else{
    console.log('dasd1');
    video.src = "/static/media/image-background.mp4";
  }
  
});



