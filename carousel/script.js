(function() {
    var kitties = document.getElementsByClassName("kitty");

    document.addEventListener("transitionend", function(a) {
        if (a.target.classList.contains("exit")) {
            a.target.classList.remove("exit");
            setTimeout(moveKitties, 5000);
        }
    });

    var cur = 0;

    setTimeout(moveKitties, 5000);

    function moveKitties() {
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");

        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }

        kitties[cur].classList.add("onscreen");
    }
})();
