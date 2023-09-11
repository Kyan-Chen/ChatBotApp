$(document).ready(function(){

  $('.warning_container .check').click(function(){
    $(this).toggleClass('active');
    $('.warning_container').addClass('active animated fadeOut').delay(700).hide(0);
  });

  $('.warning_container .close').click(function(){
    $('.warning_container').addClass('animated fadeOutDown').delay(300).hide(0);
  });



  // go-top
  $(window).scroll(function(event){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".go-top").addClass("show");
    } else {
        $(".go-top").removeClass("show");
    }
  });

  $('a.go-top').click(function(){
    $('body,html').animate({
  	   scrollTop: 0
  	}, 800);
  });

})

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.warning_container').outerHeight();

$(window).scroll(function(event){
  var st = $(this).scrollTop();

  if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.warning_container').addClass('bottom');
  } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
          $('.warning_container').removeClass('bottom');
      }
  }
});
