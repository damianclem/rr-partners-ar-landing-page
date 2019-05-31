(function ($) {
  "use strict"; // Start of use strict

  $('#submitpassword').on('click touchend', function(){

    var password = $('#password').val();

    if (password === 'brian') {

      $('.enter-exp').fadeOut();
      $('.targets').removeClass('hide');

    } else {
      $('#password').css({
        'border': '1px solid red'
      })
    }
  
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var $triggerOn = $('#open_targets_modal');
  var $triggerOff = $('.button--close');
  var $modal   = $('aside');
  
  function toggleModal(e){
    
    console.log('click');

    e.preventDefault()
    $modal.toggleClass('is-open');
  
    if ($('.targets_modal').hasClass('is-open')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
    }
  }
  
  $triggerOn.on('click', toggleModal );
  
  $triggerOff.on('click', toggleModal );
  

})(jQuery); // End of use strict


// Slide in effects for page content
AOS.init({
  duration: 800,
  once: false
});

// Slick Slider
$('.ar-chalise').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
  // rtl: true
});

$('.targets').slick({
  arrows: true,
  nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
  prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
  autoplay: false,
  dots: true
});


// Play or Pause videos when in view
$(window).scroll(function () {
  $('video').each(function () {
    if ($(this).visible(true)) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
  })
});


// Targets Modal

// new Vivus('rr-logo', {
//   type: 'async',
//   duration: 100,
// }, function () {

//   $('#rr-logo').fadeOut(200);
  $('.preloader-container').addClass('is-over');

  setTimeout(function(){
    $('.preloader-container').fadeOut(200);
  }, 1500)

// });
