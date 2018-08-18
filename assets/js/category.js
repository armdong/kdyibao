$(function() {
    // 排序
    $('.sort_btn').on('click', 'a', function() {
        $('.sort_btn').find('a').removeClass('active');
        $(this).addClass('active');
    });

    // 翻页 begin
    var pageNum = 1;// 当前页
    var pageTotal = 528;// 总页码
    $('.page_number').text(pageNum + '/' + pageTotal)
    $('#pager_left').on('click', function() {
        pageNum--;
        if(pageNum <= 1) {
            pageNum = 1;
        }
        $('.page_number').text(pageNum + '/' + pageTotal);
    });
    $('#pager_right').on('click', function() {
        pageNum++;
        if(pageNum >= pageTotal) {
            pageNum = pageTotal;
        }
        $('.page_number').text(pageNum + '/' + pageTotal);
    });
    // 翻页 end
});