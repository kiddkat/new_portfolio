$(document).ready(function(){


  // Sticky Header
  $(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
  });

  //For navigation modal

  $("#trigger-modal").click(function(event){
    event.preventDefault();
    $('#navbar nav, #screen').toggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 800) {
      $('#navbar nav, #screen').removeAttr('style');
    }
  });

});