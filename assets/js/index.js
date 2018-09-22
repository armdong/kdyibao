(function(window, document, $, undefined) {

  $(function() {

    // banner
    new Swiper('.swiper-container', {
      speed: 400,
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
    
    // 首页红包关闭事件
    $('.homepage__hongbao').on('click', '.close', function(e) {
      $(this).parent().hide();
    });

    // 首页底部友情链接、协会机构、行业新闻切换事件
    $('.homepage__maps').on('click', '.titles li', function(e) {
      var _index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(this).parent('.titles').next('.contents').find('>li').eq(_index).addClass('active').siblings().removeClass('active');
    });

  });

})(window, document, jQuery);