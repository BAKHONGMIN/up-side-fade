// ///////////////////////1번째 적용/////////////////////
$(document).ready(function(){
    var Topslide = $("#TopBanner ul");

    setInterval(function(){
        Topslide.animate({
            "marginTop":"-="+ 350}, 400,
            function(){
            Topslide.find('li').eq(0).appendTo(Topslide);
            Topslide.css({"marginTop":0});
        });
    }, 3000)
});
// ///////////////////////////1번째 적용/////////////////////

// ////////////////////////2번째 적용////////////////////////////
$(document).ready(function(){
    var Leftslide = $("#SideBanner ul");

    setInterval(function(){
        Leftslide.animate({
            "marginLeft":"-="+ 1200}, 400,
            function(){
                Leftslide.find('li').eq(0).appendTo(Leftslide);
                Leftslide.css({"marginLeft":0});
        });
    }, 3000)
});
// //////////////////////////2번째 적용////////////////////////


// ////////////////////////3번째 적용////////////////////////////
$(document).ready(function(){
    var Fadeslide = $("#FadeBanner ul");
    var count = 0;

    setInterval(function(){
        count++;
        count = count % 3;
        Fadeslide.find('li').eq(count).addClass('on').siblings().removeClass('on');
    }, 3000);
});
// //////////////////////////3번째 적용////////////////////////