$(document).ready(function() {
    var one = $(".start");
    var body = $("body");

    $(".start").click(function(e) {
        e.preventDefault();
        one.addClass("activated");
        body.addClass("white");
    });
});
