var field = $("textarea");
var button = $("#check");

button.on("click", function(e) {
    try {
        JSON.parse(field.val());
        alert("it's JSON!!");
    } catch (e) {
        alert("it's not JSON");
    }
});
