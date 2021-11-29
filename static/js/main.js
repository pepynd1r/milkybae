 $(window).scroll(function(){
  var sticky = $('.logo'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');




});

$( document ).ready(function() {
  console.log( "ready!" );


  
$( window ).on('load', function() {
  var video = $('#myVideo');
  if ((window.screen.width / window.screen.height) < 1.77){
    video.html('<source src="/static/media/image-background-vertical.mp4" type="video/mp4"></source>' );
 
    console.log('dasd');
  }
  else{
    video.html('<source src="/static/media/milky-bae-background.mp4" type="video/mp4"></source>' );
    console.log('dasd1');
   
  }
  
});
});






