(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var timer;
    // var isInTrans;

    document.addEventListener("transitionend", function(a) {
        // isInTrans = false;
        if (a.target.classList.contains("exit")) {
            a.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 5000);
        }
    });

    var cur = 0;

    timer = setTimeout(moveKitties, 5000);

    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("dot")) {
            if (e.target.classList.contains("on")) {
                clearTimeout(timer);
                timer = setTimeout(moveKitties, 5000);
            } else {
                for (var i = 0; i < dots.length; i++) {
                    if (dots[i] == e.target) {
                        clearTimeout(timer);
                        moveKitties(i);
                        break;
                    }
                }
            }
        }
    });

    function moveKitties(next) {
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        // isInTrans = true;

        dots[cur].classList.remove("on");

        cur++;

        if (typeof next !== "undefined") {
            cur = next;
        }

        if (cur >= kitties.length) {
            cur = 0;
        }

        kitties[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
    }
})();
