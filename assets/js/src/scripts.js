// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// Projects Menu
$('.projects-menu-icon').click(function() {
  $('html').toggleClass('no-scroll');
  $(this).toggleClass('active');
  $('.overlay').toggleClass('show');
});

// All others
$(document).ready(function() {
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

// Scroll animations

$('html,body').animate({
    scrollTop: $('#anchor').offset().top
});

$(window).on('hashchange', function(e) {
    e.preventDefault();
    var $target = $(window.location.hash);
    if ( $target.length ) {
        $('html,body').animate({scrollTop: $target.offset().top});
    }
});
