$(function () {
    //$function可以共用，一個檔案只需要寫一次
    //滑動至指定位置
    $('#navbar .menu a,footer a').click(function () {
        let btn = $(this).attr('href');
        let pos = $(btn).offset();/* 抓btn的相對座標位置 top left */
        $('html,body').animate({ scrollTop: pos.top }, 1000);
    });

    //滑動置頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });


});

/* ----------換圖輪播----------- */
///// Section-1 CSS-Slider /////    
// Auto Switching Images for CSS-Slider
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
}
var bannerTimer = setInterval(bannerSwitcher, 5000);
$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
});


//---漢堡按鈕---
$(document).ready(function () {
    $('.hamburger').click(function () {
        //  切換 三 & X
        $(this).toggleClass('is-active');
        // 切換 顯示 & 隱藏
        $('.navigation').toggleClass('show');
    });
});


$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 650) {
        $('.bar').css("background-color", "black");
    }
    else {
        $('.bar').css("background-color", "white");
    }
})

$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 650) {
        $('.logo').css("color", "black");
    }
    else {
        $('.logo').css("color", "white");
    }
})


$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 900) {
        $('.de_1').stop().animate({ right: "-30px" });
    }
})  
$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 1500) {
        $('.de_2').stop().animate({ left: "-10px" });
    }
})  
$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 1500) {
        $('.de_3').stop().animate({ right: "-30px" });
    }
})  
$(window).scroll(function () {
    //stop為了防止程式多次重複循環
    if ($(this).scrollTop() > 900) {
        $('.de_4').stop().animate({ left: "-10px" });
    }
})  

//jquery smoove
$('.smoove').smoove();