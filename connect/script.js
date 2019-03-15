var currentPlayer = "player1";

function clear() {
    var allColumns = $(".column");
    for (var i = 0; i < allColumns.length; i++) {
        allColumns
            .eq(i)
            .find(".slot")
            .removeClass("player1")
            .removeClass("player2");
    }
}

$(".column").on("click", function(e) {
    var curColumn = $(e.currentTarget);
    var chosenColumnSlots = curColumn.find(".slot");

    for (var i = 5; i >= 0; i--) {
        if (
            !chosenColumnSlots.eq(i).hasClass("player1") &&
            !chosenColumnSlots.eq(i).hasClass("player2")
        ) {
            chosenColumnSlots.eq(i).addClass(currentPlayer);
            break;
        }
    }

    if (victoryCheck($(".row" + i))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(curColumn.find(".slot"))) {
        return achievementUnlocked(currentPlayer);
    }

    if (i >= 0) {
        changePlayer();
    }
});

function changePlayer() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}

function victoryCheck(slots) {
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            if (count >= 4) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}

function achievementUnlocked(currentPlayer) {
    $(".victory")
        .addClass(currentPlayer)
        .on("click", function(e) {
            $(".victory").removeClass(currentPlayer);
            clear();
        });
}

$("button").on("click", function() {
    clear();
});
