//  Make a page that has on it an element that is 100px by 100px in size and has a solid black border. When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.

var cuteBox = document.getElementById("cuteBox");

function changeColor() {
    var rgbArr = [];
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 256);
        rgbArr.push(r);
    }
    cuteBox.style.background =
        "rgb(" + rgbArr[0] + "," + rgbArr[1] + "," + rgbArr[2] + ")";
}

cuteBox.addEventListener("mousedown", changeColor);
cuteBox.addEventListener("mouseup", changeColor);
