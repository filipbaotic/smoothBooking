$(document).ready(function() {
    var one = $(".page.one");
    var two = $(".page.two");
    var three = $(".page.three");
    var four = $(".page.four");
    var start = $(".start");
    var body = $("body");
    var logo = $(".top");
    var circle = $(".circle");

    $(".start").click(function(e) {
        e.preventDefault();
        one.addClass("gone");
        start.addClass("activated");
        body.addClass("white");
        logo.addClass("clickable");
        two.addClass("pick");
    });

    $(".next-pack").click(function(e) {
        e.preventDefault();
        two.addClass("byebye");
        three.addClass("hello");
    });

    $(".send").click(function(e) {
        e.preventDefault();
        three.addClass("finish");
        body.addClass("back");
        circle.addClass("boom");
        four.addClass("ready");
    });

    $("input[name='pack']").change(function() {
        if ($(this).is(':checked')) {
            $('label.pack').addClass("after");
            $('.next-pack').addClass("clickable");
        }
    });
    $(':input[type="submit"]').prop('disabled', true);

    $('#name').keyup(function() { RequiredInput(); });
    $('#date').keyup(function() { RequiredInput(); });
    $('#location').keyup(function() { RequiredInput(); });
    $('#number').keyup(function() { RequiredInput(); });
    $('#mail').keyup(function() { RequiredInput(); });

    $('form').submit(function() {
        var formdata = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "book/submit.php",
            data: formdata
        });
        return false;
    });

});

function RequiredInput() {
    if (($('#name').val() != '') && ($('#date').val() != '') && ($('#location').val() != '') && ($('#number').val() != '') && ($('#mail').val() != '')) {
        $(':button[type="submit"]').prop('disabled', false);
        return true;
    } else {
        $(':button[type="submit"]').prop('disabled', true);
        return false;
    }
}
