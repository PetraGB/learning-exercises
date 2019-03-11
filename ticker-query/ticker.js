var headlines = $("#headlines");
var left = headlines.offset().left;
var listHeadlines = $("#headlines a");

var howFarAreWe;

function animate() {
    left--;

    if (headlines.offset().left < -listHeadlines.eq(0).outerWidth()) {
        left += listHeadlines.eq(0).outerWidth();
        headlines.append(listHeadlines.eq(0));
        listHeadlines = $("#headlines a");
    }

    headlines.css("left", left + "px");
    // if (x of firstA < 0) {

    // move whole box (left) to the right, because first link will be replaced by second on the place it was ofscreen
    // use listHeadlines[0].offsetWidth
    // take first a out
    // add it to end
    // }
    howFarAreWe = requestAnimationFrame(animate);
}

animate();

headlines.on("mouseenter", function() {
    cancelAnimationFrame(howFarAreWe);
});
headlines.on("mouseleave", function() {
    animate();
});

//--------------bottom ticker--------------------------------

var bottomlines = $("#bottomlines");
var leftB = bottomlines.offset().left;
var listBottomlines = $("#bottomlines a");

var howFar;

function animateB() {
    leftB++;
    var lastLineIndex = listBottomlines.length - 1;
    if (bottomlines.offset().left > 0) {
        leftB -= listBottomlines.eq(lastLineIndex).width();
        bottomlines.prepend(listBottomlines.eq(lastLineIndex));
        listBottomlines = $("#bottomlines a");
    }

    bottomlines.css("left", leftB + "px");
    // if (x of firstA < 0) {

    // move whole box (left) to the right, because first link will be replaced by second on the place it was ofscreen
    // use listHeadlines[0].offsetWidth
    // take first a out
    // add it to end
    // }
    howFar = requestAnimationFrame(animateB);
}

animateB();

bottomlines.on("mouseenter", function() {
    cancelAnimationFrame(howFar);
});
bottomlines.on("mouseleave", function() {
    animateB();
});
