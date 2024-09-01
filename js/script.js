$(document).ready(function() {
  // Function for accordion
  $('.accordion-title').click(function() {
    var $accordionContent = $(this).next('.accordion-content');
    $accordionContent.slideToggle().toggleClass('show');
    $(this).parent().toggleClass('active');
    $(this).find('.accordion-sign').text($(this).parent().hasClass('active') ? '–' : '+');
  });

  // Functionality for "Zine 1" accordion
  $('.accordion-btn').click(function() {
    $(this).toggleClass('active');
    var panel = $(this).next('.accordion-panel');
    panel.toggleClass('show');
  });

  // Function for school of glimmers
  $("#school-of-glimmers").addClass("grow");

  // Function to scroll to the top
  $('.scroll-to-top').click(function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

(function() {
  const interval = 1000;
  const timeout = 90;
  let idleCounter = 0;
  window.onload = document.onmousemove = document.onkeypress = function() {
    idleCounter = 0;
    document.documentElement.classList.remove('idle');
  };
  window.setInterval(function() {
    if (++idleCounter >= timeout) {
      document.documentElement.classList.add('idle');
      idleCounter = 0;
    }
  }, interval);
})();

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('footer').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('footer').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}