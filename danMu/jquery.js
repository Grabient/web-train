$(document).ready(function() {
    $('.send').click(function() {
        var val = $('.content').val();
        //将文本框的内容赋值给val后，将文本框的内容清除，以便用户下一次输入
        $('.content').val('');
        //将文本框内容用div包裹起来，便于后续处理
        var $content = $('<div class="text">' + val + '</div>');
        //获取弹幕墙对象
        var $screen = $(document.getElementById("screen"));
        //设置弹幕体出现时的上边距，为任意值
        var top = Math.random() * $screen.height()+20;
        var color = "#"+(Math.random()*0x1000000<<0).toString(16);
        var font = Math.floor(Math.random()*20 + 12);
        //设置弹幕体的上边距和左边距
        $content.css({
            top: top + "px",
            left: 80,
            color: color,
            fontSize: font
        });
        //将弹幕体添加到弹幕墙中
        $('.dm_show').append($content);
        //弹幕体从左端移动到最右侧，时间为8秒，然后直接删除该元素
        $content.animate({
            left: $screen.width()+80-$content.width()
        }, 8000, function() {
            $(this).remove();
        });
    });
    //按下回车发送弹幕
    $(".content").keydown(function (e){
        if(e.keyCode == 13){
            $(".send").click();
        }
    });
    //设置“清屏”点击事件，清除弹幕墙中的所有内容
    $('.clear').click(function() {
        $('.dm_show').empty();
    })
})
