var container = $("#container");
var bar = $("#bar");
var boaty = $("#top");
var currentX;

// bar.on("mousedown", function() {
//     container.on("mousemove", function(e) {
//         currentX = e.clientX;
//         bar.css("left", currentX + "px");
//         boaty.css("width", currentX + "px");
//     });
// }).on("mouseup", function(e) {
//     container.off("mousemove");
// });

function pictureMove() {
    container.on("mousemove", function(e) {
        boaty.css("width", e.clientX - container.offset().left + "px");
    });
}

bar.on("mousedown", function() {
    container.on("mousemove", function(e) {
        pictureMove();
        bar.css("left", e.clientX - bar.width() / 2 + "px");
    });
}).on("mouseup", function(e) {
    container.off("mousemove");
});

// -------------------

// container.on("mousedown", "#bar", function() {
//     $(this).on("mousemove", function(e) {
//         bar.css("left", e.clientX + "px");
//         boaty.css("width", e.offsetX + "px");
//     });
// });

// container.on("mousemove", function(e) {
//     currentX = e.pageX;
// });
