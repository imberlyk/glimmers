$(document).ready(function(){
  // Function for accordion
  $('.accordion-title').click(function(){
    $(this).parent().toggleClass('active');
    $(this).next('.accordion-content').slideToggle();
    $(this).find('.accordion-sign').text($(this).parent().hasClass('active') ? '-' : '+');
  });
  
  // Function for school of glimmers
  $("#school-of-glimmers").addClass("grow");
});