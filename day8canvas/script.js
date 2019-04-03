var figure = document.getElementById("figure");
var ctx = figure.getContext("2d");

var rightFoot = 100;
var leftFoot = 300;
var footMoveRight = 3;
var footMoveLeft = -3;

document.addEventListener("keydown", function walk(aha) {
    if (aha.key == "ArrowRight" || aha.key == "Right") {
        console.log("rightFoot");
        rightFoot += footMoveRight;
        // if (100 < rightFoot < 300) {
        //     rightFoot += footMoveRight;
        // } else {
        //     footMoveRight = -footMoveRight;
        //     rightFoot += footMoveRight;
        // }
    } else if (aha.key == "ArrowLeft" || aha.key == "Left") {
        console.log("leftArrow");
        // if (100 <= leftFoot <= 300) {
        //     leftFoot += footMoveLeft;
        // } else {
        //     footMoveLeft = -footMoveLeft;
        //     leftFoot += footMoveLeft;
        // }
    }
    // console.log(leftFoot);
    console.log(rightFoot);
    // return leftFoot, rightFoot;
});

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(200, 100, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 160);
ctx.lineTo(200, 400);

ctx.moveTo(100, 150);
ctx.lineTo(200, 230);
ctx.lineTo(330, 180);

ctx.moveTo(rightFoot, 550);
ctx.lineTo(200, 400);
ctx.lineTo(leftFoot, 550);
ctx.stroke();

// drwaImage method to put canvas inside another canvas

var stage = document.getElementById("stage");
var ctxStage = stage.getContext("2d");

var figureX = 10;

document.addEventListener("keydown", function walk(aha) {
    if (aha.key == "ArrowRight" || aha.key == "Right") {
        figureX += 4;
    } else if (aha.key == "ArrowLeft" || aha.key == "Left") {
        figureX -= 4;
    }
});

function exist() {
    ctxStage.clearRect(0, 0, 1000, 650);
    ctxStage.drawImage(figure, figureX, 10);
    requestAnimationFrame(exist);
}
exist();
