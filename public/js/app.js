$(document).ready(function () {
  var trigger = $('.menuBar'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      menuBar_cross();      
    });

    function menuBar_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  

   $('.overlay').click(function () {
        $('#wrapper').toggleClass('toggled');
        menuBar_cross();
  }); 
});