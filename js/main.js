var setInfos = function() {

    $('.social2, .social3, .line-right2, .line-right3').each(function() {
      $(this).css('top',
        $('.social, .line-right').offset().top -
        $(this).closest('#container').offset().top
      );

    }) 
  };

$(document).scroll(function() {
  setInfos();
});

setInfos();

$(document).ready(function () {
  $('.arrow').click(function() {
  $('html, body').animate({
    scrollTop: $('#container.dark').offset().top
  }, 2000)}),
    $('body').fadeIn(1000);
    $('.arrow').delay(2000).fadeIn(1000);
    $(".copyright, .copyright2, .copyright3").animate({right: '0px'}, 2000);
    $(".social, .social2, .social3").animate({left: '0px'}, 2000);
    $(".dark-description").animate({bottom: '10px', opacity: '1'}, 3000);

});
