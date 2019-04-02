var listHeadlines;

$.ajax({
    url: "data.json",
    success: function(allLinks) {
        var allReady = "";
        for (var i = 0; i < allLinks.length; i++) {
            allReady +=
                "<a href=" +
                allLinks[i]["href"] +
                ">" +
                allLinks[i]["text"] +
                "</a>";
        }
        $("#headlines").html(allReady);
        listHeadlines = $("#headlines a");

        animate();
    }
});

var headlines = $("#headlines");
var left = headlines.offset().left;

var howFarAreWe;

function animate() {
    left--;

    if (headlines.offset().left < -listHeadlines.eq(0).outerWidth()) {
        left += listHeadlines.eq(0).outerWidth();
        headlines.append(listHeadlines.eq(0));
        listHeadlines = $("#headlines a");
    }

    headlines.css("left", left + "px");
    howFarAreWe = requestAnimationFrame(animate);
}

headlines.on("mouseenter", function() {
    cancelAnimationFrame(howFarAreWe);
});
headlines.on("mouseleave", function() {
    animate();
});

//--------------bottom ticker--------------------------------

// var bottomlines = $("#bottomlines");
// var leftB = bottomlines.offset().left;
// var listBottomlines = $("#bottomlines a");
//
// var howFar;
//
// function animateB() {
//     leftB++;
//     var lastLineIndex = listBottomlines.length - 1;
//     if (bottomlines.offset().left > 0) {
//         leftB -= listBottomlines.eq(lastLineIndex).width();
//         bottomlines.prepend(listBottomlines.eq(lastLineIndex));
//         listBottomlines = $("#bottomlines a");
//     }
//
//     bottomlines.css("left", leftB + "px");
//     howFar = requestAnimationFrame(animateB);
// }
//
// animateB();
//
// bottomlines.on("mouseenter", function() {
//     cancelAnimationFrame(howFar);
// });
// bottomlines.on("mouseleave", function() {
//     animateB();
// });
