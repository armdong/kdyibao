(function(window, document, $, undefined) {

  $(function() {
    
    // 底部推荐切换
    $('.recommand-wrapper').on('click', '.navs li', function(e) {
      var _index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(this).parent().siblings('.conts').find('>li').eq(_index).addClass('active').siblings().removeClass('active');
    });

  });

})(window, document, jQuery);