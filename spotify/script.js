var results = $(".results");
var moreButton = $(".more");
var whatPage = 0;
var curSearch = "";
var looking = $(".looking");
var question;
var typos;

$(".go").on("click", function() {
    search();
});

$("#bar").on("keydown", function(e) {
    if (e.key == "Enter") {
        search();
    }
});

function search() {
    question = $("input").val();
    typos = $("select").val();
    moreButton.removeClass("on");
    whatPage = 0;
    results.html("");
    curSearch = "<div>You searched for " + $("input").val() + "</div>";
    looking.html(curSearch);
    getMusic();
}

moreButton.on("click", function() {
    getMusic();
});

function getMusic() {
    $.ajax({
        url: "https://elegant-croissant.glitch.me/spotify",
        data: {
            q: question,
            type: typos,
            limit: 20,
            offset: whatPage
        },
        success: function(data) {
            data = data.artists || data.albums;

            var resultHtml = "";

            var items = data.items;
            if (data.total == 0) {
                looking.append("<div>No results<div>");
            }
            for (var i = 0; i < items.length; i++) {
                var picture = "default.png";
                if (items[i].images[0]) {
                    picture = items[i].images[0].url;
                }

                resultHtml +=
                    "<div class='block'><div class='item'><div class='picture'><a href='" +
                    items[i].external_urls.spotify +
                    "' target='_blank'><img src='" +
                    picture +
                    "'></a></div><a href='" +
                    items[i].external_urls.spotify +
                    "' class='link' target='_blank'>" +
                    items[i].name +
                    "</a></div>";
                if (typos == "artist") {
                    if (items[i].genres[0]) {
                        resultHtml +=
                            "<div class='genre'><p>" +
                            items[i].genres[0] +
                            "</p></div>";
                    } else {
                        resultHtml +=
                            "<div class='genre'><p>Who knows</p></div>";
                    }
                }
                resultHtml += "</div>";
            }
            console.log(data);
            results.append(resultHtml);
            if (data.next != null) {
                whatPage += 20;
                if (location.search.indexOf("scroll=infinite") > -1) {
                    getScrollEnd();
                    function getScrollEnd() {
                        var timer;
                        var atTheEnd =
                            $(window).scrollTop() >
                            $(document).height() - $(window).height() - 50;
                        if (atTheEnd) {
                            clearTimeout(timer);
                            getMusic();
                        } else {
                            setTimeout(getScrollEnd, 500);
                        }
                    }
                } else {
                    moreButton.addClass("on");
                }
            } else {
                moreButton.removeClass("on");
            }
        }
    });
}
