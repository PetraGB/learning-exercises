// document.documentElement.classList.add("on");

var hamburger = document.getElementById("hamburger");
var xButton = document.getElementById("x");
var fullMenu = document.getElementById("hamburgerMenu");
var menu = document.getElementById("menu");

hamburger.addEventListener("click", function(a) {
    a.stopPropagation();
    document.documentElement.classList.add("on");
});

xButton.addEventListener("click", function(a) {
    document.documentElement.classList.remove("on");
});

menu.addEventListener("click", function(a) {
    a.stopPropagation();
});
// so a click on menu does not bubble up to hamburgerMenu

fullMenu.addEventListener("click", function(a) {
    document.documentElement.classList.remove("on");
});
