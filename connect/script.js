var currentPlayer = "player1";
var allColumns = $(".column");
var coin = $(".coin");

allColumns.on("mousemove", function(e) {
    coin.css({ left: e.pageX - 50 + "px" });
});

$(".column").on("click", function(e) {
    var curColumn = $(e.currentTarget);
    var chosenColumnSlots = curColumn.find(".slot");

    // goes through slots from lowest to highest to check for lowest empty
    for (var i = 5; i >= 0; i--) {
        if (
            !chosenColumnSlots.eq(i).hasClass("player1") &&
            !chosenColumnSlots.eq(i).hasClass("player2")
        ) {
            // chosenColumnSlots.eq(i).addClass(currentPlayer);
            break;
        }
    }

    coin.addClass("moving");

    // trying to get the animation to stop when coin hits the slot

    // console.log(chosenColumnSlots.eq(i).offset().top);
    // console.log(coin.offset().top);
    //
    // if (coin.offset().top == chosenColumnSlots.eq(i).offset().top) {
    //     console.log("do I ever run?");
    //     $(".coin").removeClass("moving");
    // }

    // ----- finding column index to pass to diagonal finders
    curColumn.addClass("colIndex");

    for (var a = 0; a < allColumns.length; a++) {
        if (allColumns.eq(a).hasClass("colIndex")) {
            curColumn.removeClass("colIndex");
            break;
        }
    }

    // sends all possible lines as arrays to check for victory
    if (victoryCheck($(".row" + i))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(curColumn.find(".slot"))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(getDiagonalUp(a, i))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(getDiagonalDown(a, i))) {
        return achievementUnlocked(currentPlayer);
    }

    coin.one("transitionend", function(e) {
        chosenColumnSlots.eq(i).addClass(currentPlayer);
        coin.removeClass(currentPlayer).removeClass("moving");

        // only changes player if click was on column with an empty slot
        if (i >= 0) {
            changePlayer();
        }
        coin.addClass(currentPlayer);
        console.log("i'm working");
    });
});

function changePlayer() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}

// checks array of slots for victory, true or false
var howManyConnect = 4;
function victoryCheck(slots) {
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            if (count >= howManyConnect) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}

// shows victory screen
function achievementUnlocked(currentPlayer) {
    $(".victory")
        .addClass(currentPlayer)
        .on("click", function(e) {
            $(".victory").removeClass(currentPlayer);
            clear();
        });
}

// to reset the player classes of all slots
function clear() {
    for (var i = 0; i < allColumns.length; i++) {
        allColumns
            .eq(i)
            .find(".slot")
            .removeClass("player1")
            .removeClass("player2");
    }
}

$("button").on("click", function() {
    clear();
});

// functions to get array of all slots in diagonals
function getDiagonalUp(column, row) {
    $(".column")
        .find(".diagonalUp")
        .removeClass("diagonalUp");

    var rowUp = row;
    var columnUp = column;
    var rowDown = row;
    var columnDown = column;

    for (var i = 0; i <= allColumns.length; i++) {
        if (rowUp < 0) {
            break;
        }
        allColumns
            .eq(columnUp)
            .find(".slot")
            .eq(rowUp)
            .addClass("diagonalUp");
        rowUp--;
        columnUp++;
    }
    for (var i = 0; i <= allColumns.length; i++) {
        if (columnDown < 0) {
            break;
        }
        allColumns
            .eq(columnDown)
            .find(".slot")
            .eq(rowDown)
            .addClass("diagonalUp");
        rowDown++;
        columnDown--;
    }
    return $(".column").find(".diagonalUp");
}

function getDiagonalDown(column, row) {
    $(".column")
        .find(".diagonalDown")
        .removeClass("diagonalDown");
    var rowDown = row;
    var columnUp = column;
    var rowUp = row;
    var columnDown = column;

    for (var i = 0; i <= allColumns.length; i++) {
        if (rowDown < 0) {
            break;
        }
        allColumns
            .eq(columnUp)
            .find(".slot")
            .eq(rowDown)
            .addClass("diagonalDown");
        rowDown++;
        columnUp++;
    }
    for (var i = 0; i <= allColumns.length; i++) {
        if (rowUp < 0 || columnDown < 0) {
            break;
        }
        allColumns
            .eq(columnDown)
            .find(".slot")
            .eq(rowUp)
            .addClass("diagonalDown");
        rowUp--;
        columnDown--;
    }
    return $(".column").find(".diagonalDown");
}

// -------------------- Testing and BS --------

// function colorDiagonalUp(column, row) {
//     var diagonal;
//
//     var rowUp = row;
//     var columnUp = column;
//     var rowDown = row;
//     var columnDown = column;
//
//     var count = 0;
//
//     for (var i = 0; i <= allColumns.length; i++) {
//         if (rowUp < 0) {
//             break;
//         }
//         if (
//             allColumns
//                 .eq(columnUp)
//                 .find(".slot")
//                 .eq(rowUp)
//                 .hasClass("player1")
//         ) {
//             count++;
//         } else {
//             allColumns
//                 .eq(columnUp)
//                 .find(".slot")
//                 .eq(rowUp)
//                 .addClass("player1");
//             console.log(
//                 allColumns
//                     .eq(columnUp)
//                     .find(".slot")
//                     .eq(rowUp)
//             );
//         }
//         rowUp--;
//         columnUp++;
//     }
//     for (var i = 0; i <= allColumns.length; i++) {
//         if (rowDown < 0) {
//             break;
//         }
//         if (
//             allColumns
//                 .eq(columnDown)
//                 .find(".slot")
//                 .eq(rowDown)
//                 .hasClass("player1")
//         ) {
//             count++;
//         } else {
//             allColumns
//                 .eq(columnDown)
//                 .find(".slot")
//                 .eq(rowDown)
//                 .addClass("player1");
//             console.log(
//                 allColumns
//                     .eq(columnDown)
//                     .find(".slot")
//                     .eq(rowDown)
//             );
//         }
//         rowDown++;
//         columnDown--;
//     }
// }
