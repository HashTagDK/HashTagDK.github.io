$(document).ready(function() {
var stickyNavTop = $('.top_menu').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.top_menu').addClass('sticky');
} else {
    $('.top_menu').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});