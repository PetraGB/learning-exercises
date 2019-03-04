var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
var listHeadlines = headlines.getElementsByTagName("a");

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
    requestAnimationFrame(animate);
}

animate();
