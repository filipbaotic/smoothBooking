$(document).ready(function() {
    var one = $(".page.one");
    var two = $(".page.two");
    var start = $(".start");
    var body = $("body");
    var logo = $(".top");

    $(".start").click(function(e) {
        e.preventDefault();
        one.addClass("gone");
        start.addClass("activated");
        body.addClass("white");
        logo.addClass("clickable");
        two.addClass("pick");
    });
});
