var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
var listHeadlines = headlines.getElementsByTagName("a");

var howFarAreWe;

function animate() {
    left--;

    if (headlines.offsetLeft < -listHeadlines[0].offsetWidth) {
        left += listHeadlines[0].offsetWidth;
        headlines.appendChild(listHeadlines[0]);
    }

    headlines.style.left = left + "px";
    // if (x of firstA < 0) {

    // move whole box (left) to the right, because first link will be replaced by second on the place it was ofscreen
    // use listHeadlines[0].offsetWidth
    // take first a out
    // add it to end
    // }
    howFarAreWe = requestAnimationFrame(animate);
}

animate();

headlines.addEventListener("mouseenter", function() {
    cancelAnimationFrame(howFarAreWe);
});
headlines.addEventListener("mouseleave", function() {
    animate();
});

//--------------bottom ticker--------------------------------

var bottomlines = document.getElementById("bottomlines");
var leftB = bottomlines.offsetLeft;
var listBottomlines = bottomlines.getElementsByTagName("a");

var howFar;

function animateB() {
    leftB++;
    var lastLineIndex = listBottomlines.length - 1;
    if (bottomlines.offsetLeft > 0) {
        leftB -= listBottomlines[lastLineIndex].offsetWidth;
        bottomlines.insertBefore(
            listBottomlines[lastLineIndex],
            listBottomlines[0]
        );
    }

    bottomlines.style.left = leftB + "px";
    // if (x of firstA < 0) {

    // move whole box (left) to the right, because first link will be replaced by second on the place it was ofscreen
    // use listHeadlines[0].offsetWidth
    // take first a out
    // add it to end
    // }
    howFar = requestAnimationFrame(animateB);
}

animateB();

bottomlines.addEventListener("mouseenter", function() {
    cancelAnimationFrame(howFar);
});
bottomlines.addEventListener("mouseleave", function() {
    animateB();
});
