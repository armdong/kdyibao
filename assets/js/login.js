(function(window, document, $, undefined) {

  $(function() {
    
    // 自动登录切换
    $('.loginpage__form').on('click', '.auto-login', function(e) {
      var $icon = $(this).find('>i');
      var isChecked = $icon.hasClass('checked');
      if (isChecked) {
        $icon.removeClass('checked').addClass('uncheck');
      } else {
        $icon.removeClass('uncheck').addClass('checked');
      }
    });

  });

})(window, document, jQuery);