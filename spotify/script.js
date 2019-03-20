Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});

/////////////////// HANDS OFF ///////////////////////////
//

var results = $("#results");
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
            console.log(data);
            data = data.artists || data.albums;

            var resultHtml = "";

            var items = data.items;
            if (data.total == 0) {
                looking.append("<div>No results<div>");
            }

            var thisResults = data.items.map(function(thisItem) {
                var picture = "default.png";
                if (thisItem.images[0]) {
                    picture = thisItem.images[0].url;
                }
                var genre = "";
                if (thisItem.genres[0]) {
                    genre = thisItem.genres[0];
                } else {
                    genre = "who knows";
                }
                return {
                    name: thisItem.name,
                    url: thisItem.external_urls.spotify,
                    picture: picture,
                    genre: genre
                };
            });

            results.append(
                Handlebars.templates.resultTemplate({
                    eachItem: thisResults
                })
            );

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
