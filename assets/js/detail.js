(function(window, document, $, undefined) {
    $(function() {
        // 初始化图片预览功能模块
        fnInitPreview();

        // 注册下拉框
        $('.select2').select2();

        // 详情与评价切换
        $('.right-side .top').on('click', 'li', function(e) {
            var _index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
           $(this).parent().siblings('.bottom').find('>li').eq(_index).addClass('active').siblings().removeClass('active');
        });
    });

    // 初始化图片预览功能模块
    function fnInitPreview() {
        $('.jqzoom').jqzoom({
            zoomWidth: 400,
            zoomHeight: 400,
            zoomType: 'reverse',
            lens: true,
            preloadImages: false,
            alwaysOn: false,
            title: false,
            // showEffect: 'fadein',
            // hideEffect: 'fadeout'
        });

        var $thumblist = $('#thumblist'),
            $thumbli = $thumblist.children('li'),
            $thumbs = $thumblist.closest('.thumbs'),
            $btnPrev = $thumbs.find('.btn-prev'),
            $btnNext = $thumbs.find('.btn-next');

        // init thumblist width
        (function() {
            var totalW = 0;
            $thumblist.find('li').each(function(idx, ele) {
                totalW += $(ele).width() + parseInt($(ele).css('margin-right'), 10);
            });
            $thumblist.width(totalW);
        })();

        // init thumbs
        (function() {
            var listLen = $thumbli.length,
                currIndex = 0;
            $btnPrev.addClass('disabled');
            if (listLen <= 4) {
                $btnNext.addClass('disabled');
            } else if (listLen > 4) {
                currIndex = 3;
            }

            var liW = 110,
                liM = 10,
                iLeft = 0,
                tl = new TimelineLite();

            // handler for next thumb
            $btnNext.on('click', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                $btnPrev.removeClass('disabled');
                currIndex++;
                if (currIndex == listLen - 1) { // last item
                    $(this).addClass('disabled');
                }
                iLeft += liW + liM;
                tl.clear();
                tl.to($thumblist, 0.5, {
                    x: -iLeft + 'px'
                });
            });

            // handler for prev thumb
            $btnPrev.on('click', function(e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                $btnNext.removeClass('disabled');
                currIndex--;
                if (currIndex == 3) { // first item
                    $(this).addClass('disabled');
                }
                iLeft -= liW + liM;
                tl.clear();
                tl.to($thumblist, 0.5, {
                    x: -iLeft + 'px'
                });
            });

        })();
    }
})(window, document, jQuery);
