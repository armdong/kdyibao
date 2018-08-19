(function(window, document, $, undefined) {

  $(function() {

    // 注册下拉框
    $('.select2').select2();
    
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

    // 上传附件按钮点击事件
    $("body a").on("change","input[type='file']",function(){
      var filePath=$(this).val();
      var $fullPath = $(this).parent('.file').prev('.fullPath');
      $fullPath.val(filePath);
      if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
        $(".fileerrorTip").html("").hide();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        $(".showFileName").html("文件名："+fileName);
      }else{
        $(".showFileName").html("");
        $(".fileerrorTip").html("非jpg,png格式：您未上传文件，或者您上传文件类型有误！").show();
        return false
      }
    });

  });

})(window, document, jQuery);