// read more button //

$(document).ready(function () {
   $('.read-more-content').addClass('hide');
   $('.read-more-toggle').on('click', function () {
      $(this).next('.read-more-content').toggleClass('hide');
   })
})

// smooth scroll //

$(document).ready(function () {
   $("a[href^='#']").click(function (e) {
      e.preventDefault();
      var position = $($(this).attr('href')).offset().top;
      $('body,html').animate({
         scrollTop: position
      }, 1000);
   })
})
