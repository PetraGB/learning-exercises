var germanNumbers = {
    1: "Ein",
    2: "Zwei",
    3: "Drei",
    4: "Vier",
    5: "Funf",
    6: "Sechs",
    7: "Sieben",
    8: "Acht",
    9: "Neun",
    10: "Zehn"
};
var res = $(".result");

function askForNumber() {
    var num = prompt("What's a number between 1 and 10?");
    // var ans;

    if (num > 0 && num <= 10) {
        return num;
    } else {
        throw Error("uh oh");
    }
}

function translateNumberToGerman() {
    try {
        var num = askForNumber();
        var ans = "<p>" + germanNumbers[num] + "</p>";
        res.html(ans);
    } catch (e) {
        // num = askForNumber();
        console.log("Out of range");
        translateNumberToGerman();
    }
}

translateNumberToGerman();
