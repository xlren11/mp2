// Write any custom javascript functions here
$(document).ready(function(){
    var buttons = ["sec-1", "sec-2", "sec-3"];
    $("#"+buttons[0]).click(function(){
        var s_id = "#" + buttons[0] + "s";
        $('html, body').animate({
            scrollTop: $(s_id).position().top
        }, 1000)
    });
    $("#"+buttons[1]).click(function(){
        var s_id = "#" + buttons[1] + "s";
        $('html, body').animate({
            scrollTop: $(s_id).position().top - 50
        }, 1000)
    });
    $("#"+buttons[2]).click(function(){
        var s_id = "#" + buttons[2] + "s";
        $('html, body').animate({
            scrollTop: $(s_id).position().top - 50
        }, 1000)
    });
    $(window).scroll(function(){
        var scroll_pos = [$('#sec-1s').position().top - 80, $('#sec-2s').position().top - 80, $('#sec-3s').position().top - 80];
        var scroll_height = [$('#sec-1s').outerHeight(true),$('#sec-2s').outerHeight(true),$('#sec-3s').outerHeight(true)];

        var pos = $(document).scrollTop();
        if (pos > 50) {
            $(".top-menu").addClass("shrink");
            $("#title-text").addClass("shrink-text");

        } else {
            $(".top-menu").removeClass("shrink");
            $("#title-text").removeClass("shrink-text");
        }
        if (pos >= scroll_pos[0]) {
            $("#navbar").css("background-color", "white");
            $("#navbar").css("box-shadow","0 0 8px blue");
        }
        else {
            $("#navbar").css("background-color", "transparent");
            $("#navbar").css("box-shadow","");
        }

        if (pos >= scroll_pos[0] && pos < scroll_pos[0] + scroll_height[0]) {
            $("#"+buttons[0]).css("text-shadow", "1px 1px 2px black, 0 0 10px blue");
        }
        else {
            $("#"+buttons[0]).css("text-shadow", "1px 1px 2px black, 0 0 10px red");
        }
        if (pos >= scroll_pos[1] && pos < scroll_pos[1] + scroll_height[1]) {
            $("#"+buttons[1]).css("text-shadow", "1px 1px 2px black, 0 0 10px blue");
        }
        else {
            $("#"+buttons[1]).css("text-shadow", "1px 1px 2px black, 0 0 10px red");
        }
        if (pos >= scroll_pos[2] && pos < scroll_pos[2] + scroll_height[2]) {
            $("#"+buttons[2]).css("text-shadow", "1px 1px 2px black, 0 0 10px blue");
        }
        else {
            $("#"+buttons[2]).css("text-shadow", "1px 1px 2px black, 0 0 10px red");
        }
    });
    $('#slide').slick({
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        //dots: true,
        speed: 200,
        //slidesToShow: 3,
        //adaptiveHeight: true,
    });
    $("a[href|='#sec']").hover(
        function() {
            $(this).addClass("bhov");
        }, function() {
            $(this).removeClass("bhov");
        }
    );
    $('#prev').hover(
        function() {
            $(this).css("opacity", "0.9");
        },
        function() {
            $(this).css("opacity", "0.5");
        }
    );
    $('#next').hover(
        function() {
            $(this).css("opacity", "0.9");
        },
        function() {
            $(this).css("opacity", "0.5");
        }
    );
    $("img[id|='modal']").hover(
        function() {
            $(this).css("width", "90%")
        }, function() {
            $(this).css("width", "80%");
        }
    );
});