var square = document.getElementById("square");

document.addEventListener("mousemove", function(where) {
    square.style.left = where.pageX - 50 + "px";
    square.style.top = where.pageY - 50 + "px";
});
