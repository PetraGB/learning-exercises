var figure = document.getElementById("figure");
var ctx = figure.getContext("2d");

var rightFoot = ;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(200, 100, 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 160);
ctx.lineTo(200, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 230);
ctx.lineTo(330, 180);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 550);
ctx.lineTo(200, 400);
ctx.lineTo(300, 550);
ctx.stroke();
