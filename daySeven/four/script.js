// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. Nest within that element another element that is 50px by 50px in size and has a different solid background color. When the user clicks on the outer element its background color should change to a randomly selected color. However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.

var bigBox = document.getElementById("bigBox");
var smallBox = document.getElementById("smallBox");

function color() {
    var rgbArr = [];
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256);
        rgbArr.push(r);
    }
    return rgbArr;
}

function changeColorB() {
    var newColor = color();
    bigBox.style.background =
        "rgb(" + newColor[0] + "," + newColor[1] + "," + newColor[2] + ")";
}

function changeColorS(a) {
    a.stopPropagation();
    var newColor = color();
    smallBox.style.background =
        "rgb(" + newColor[0] + "," + newColor[1] + "," + newColor[2] + ")";
}

bigBox.addEventListener("mousedown", changeColorB);
smallBox.addEventListener("mousedown", changeColorS);
