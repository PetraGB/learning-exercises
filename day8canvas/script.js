var figure = document.getElementById("figure");
var ctx = figure.getContext("2d");

// var rightFoot = ;

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

ctx.moveTo(100, 550);
ctx.lineTo(200, 400);
ctx.lineTo(300, 550);
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
