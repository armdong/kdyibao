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

    // 底部翻页 begin
    var pagingNum = 1;// 当前页
    var pagingTotal = 10;// 总页码
    $('.category_paging').on('click', 'a', function() {
        if($(this).hasClass('first')) {
            pagingNum = 1;
            $(this).siblings('span').text(pagingNum);
        }
        if($(this).hasClass('prev')) {
            pagingNum--;
            if(pagingNum <= 1) {
                pagingNum = 1;
            }
            $(this).siblings('span').text(pagingNum);
        }
        if($(this).hasClass('next')) {
            pagingNum++;
            if(pagingNum >= pagingTotal) {
                pagingNum = pagingTotal;
            }
            $(this).siblings('span').text(pagingNum);
        }
        if($(this).hasClass('last')) {
            pagingNum = pagingTotal;
            $(this).siblings('span').text(pagingNum);
        }
    });


    // 底部翻页 end
});