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
