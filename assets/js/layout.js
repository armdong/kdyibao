(function(window, document, $, undefined) {

  $(function() {
    
    // 回到顶部
    $('.layout__sidebar').on('click', '.back2top', function(e) {
      $('html, body').animate({scrollTop: 0}, 700);
    });

  });

})(window, document, jQuery);