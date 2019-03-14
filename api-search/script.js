var field = $("input");
var resultContainer = $(".results");

field.on("input", function() {
    var written = field.val();
    var xhr;

    if (xhr != undefined) {
        xhr.abort();
    }

    xhr = $.ajax({
        url: "https://flame-egg.glitch.me/",
        data: {
            q: written
        },
        success: function(results) {
            var allResults = "";
            for (var i = 0; i < results.length; i++) {
                allResults += "<div class='result'>" + results[i] + "</div>";
            }
            if (results.length == 0) {
                allResults = "<div class='none'> no results </div>";
            }
            if (written == "") {
                allResults = "";
            }
            resultContainer.html(allResults);
        }
    });

    // in case you press enter and then want to type again
    resultContainer.removeClass("disappear");
});

resultContainer.on("mouseover", function(e) {
    $(".highlight").removeClass("highlight");
    // if statement so -no result- does not seem clickable
    if ($(e.target).hasClass("result")) {
        $(e.target).addClass("highlight");
    }
});

resultContainer.on("mousedown", function(e) {
    var chosenCountry = e.target.innerText;
    if ($(e.target).hasClass("none")) {
        return;
    }
    field.val(chosenCountry);
    $(".result").addClass("disappear");
});

field.on("keydown", function(e) {
    var eachResult = $(".result");

    if (e.key == "ArrowDown" || e.key == "Down") {
        for (var i = 0; i < eachResult.length; i++) {
            if (eachResult.eq(i).hasClass("highlight")) {
                eachResult.removeClass("highlight");
                eachResult
                    .eq(i)
                    .next()
                    .addClass("highlight");
                break;
            } else {
                eachResult.eq(0).addClass("highlight");
            }
        }
    } else if (e.key == "ArrowUp" || e.key == "Up") {
        for (var i = 0; i < eachResult.length; i++) {
            if (eachResult.eq(i).hasClass("highlight")) {
                eachResult.removeClass("highlight");
                eachResult
                    .eq(i)
                    .prev()
                    .addClass("highlight");
                break;
            }
        }
    } else if (e.key == "Enter") {
        var chosenCountry = $(".highlight").html();
        field.val(chosenCountry);
        $(".results").addClass("disappear");
    }
});

field.on("focus", function(e) {
    resultContainer.removeClass("disappear");
});

field.on("blur", function(e) {
    resultContainer.addClass("disappear");
});
