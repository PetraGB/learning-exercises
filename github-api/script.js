(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
})();

/////////////// I CAN RIDE MY BIKE WITH NO HANDLEBARS ////////////

var results = $(".results");
var baseUrl = "https://api.github.com";

$("#go-button").on("click", function() {
    results.html("");

    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var searchingFor = $("input[name='searching-for']").val();

    if (searchingFor == "") {
        return;
    }

    var endpoint = "/users/" + searchingFor + "/repos";
    var searchUrl = baseUrl + endpoint;

    $.ajax({
        url: searchUrl,
        headers: {
            Authorization: "Basic " + btoa(username + ":" + password)
        },
        success: function(whatsup) {
            console.log(whatsup);
            var repos = whatsup.map(function(thisRepo) {
                var picture = thisRepo.owner.avatar_url;
                var username = thisRepo.owner.login;
                return {
                    name: thisRepo.name,
                    picture: picture,
                    username: username
                };
            });

            results.append(
                Handlebars.templates.reposit({
                    repo: repos
                })
            );

            addlisteners();
        }
    });
});

function addlisteners() {
    var repoItems = $(".repo-item");
    for (var i = 0; i < repoItems.length; i++) {
        repoItems.eq(i).one("click", function(e) {
            var curItem = $(e.currentTarget);
            var repo = curItem.find(".name").html();
            var owner = curItem.find(".sneaky").html();

            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            if (password == "" || username == "") {
                console.log("no login data");
                return;
            }

            $.ajax({
                url: `${baseUrl}/repos/${owner}/${repo}/commits`,
                headers: {
                    Authorization: "Basic " + btoa(username + ":" + password)
                },
                success: function(theseCommits) {
                    console.log(theseCommits);

                    var detailsCommit = theseCommits.map(function(thisCommit) {
                        var message = thisCommit.commit.message;
                        return {
                            message: message
                        };
                    });

                    curItem.append(
                        Handlebars.templates.details({
                            commit: detailsCommit
                        })
                    );

                    curItem.on("click", function() {
                        curItem.find(".commits").toggleClass("sneaky");
                    });
                }
            });
        });
    }
}
