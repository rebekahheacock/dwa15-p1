// jQuery plugin adapted from
// http://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page
(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 400);
        return this; // for chaining...
    };
})(jQuery);

var followInternalLink = (event) => {
  event.preventDefault();
  let target = '';
  if ($(event.target).is('a')) {
    target = $(event.target).attr('href');
  }
  else if ($(event.target).is('img')) {
    target = $(event.target).parents('a').attr('href');
  }
  $(target).goTo();
};

$(() => {
  $('a[href^="#"').on('click', followInternalLink); 
});


