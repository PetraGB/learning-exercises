var area = $("textarea");

area.val(localStorage.getItem("written"));

area.on("input", function(e) {
    localStorage.setItem("written", area.val());
});
