(function(window, document, $, undefined) {

  $(function() {
    
    // 注册类型切换
    $('.reg-types').on('click', 'li', function(e) {
      var _index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(this).parent().siblings('.reg-conts').find('>li').eq(_index).addClass('active').siblings().removeClass('active');
    });

    // 同意协议
    $('.reg-conts').on('click', '.protocol', function(e) {
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