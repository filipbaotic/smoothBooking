$(document).ready(function() {
    var one = $(".start");

    $(".start").click(function(e) {
        e.preventDefault();
        one.addClass("activated");
    });
});