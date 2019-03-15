var currentPlayer = "player1";
var allColumns = $(".column");

function clear() {
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
    var board = $(".board");

    for (var i = 5; i >= 0; i--) {
        if (
            !chosenColumnSlots.eq(i).hasClass("player1") &&
            !chosenColumnSlots.eq(i).hasClass("player2")
        ) {
            chosenColumnSlots.eq(i).addClass(currentPlayer);
            break;
        }
    }

    // ----- finding column index
    curColumn.addClass("colIndex");

    for (var a = 0; a < allColumns.length; a++) {
        // console.log(allColumns.eq(i).hasClass("colIndex"));
        if (allColumns.eq(a).hasClass("colIndex")) {
            curColumn.removeClass("colIndex");
            break;
        }
    }

    // ------- end finding index

    if (victoryCheck($(".row" + i))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(curColumn.find(".slot"))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(getDiagonalUp(a, i))) {
        return achievementUnlocked(currentPlayer);
    } else if (victoryCheck(getDiagonalDown(a, i))) {
        return achievementUnlocked(currentPlayer);
    }

    $(".column")
        .find(".diagonalUp")
        .removeClass(".diagonalUp");
    $(".column")
        .find(".diagonalDown")
        .removeClass(".diagonalDown");

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
        if (rowDown < 0) {
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
        if (rowDown < 0 || columnUp < 0) {
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
