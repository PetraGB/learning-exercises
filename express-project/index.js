const express = require("express");
const app = express();
const basicAuth = require("basic-auth");

app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(require("cookie-parser")());

let originalUrl;
app.use((req, res, next) => {
    if (!req.cookies.consent && req.url != "/cookie") {
        res.cookie("originalUrl", req.url);
        res.redirect("/cookie");
    } else {
        next();
    }
});

app.get("/cookie", (req, res) => {
    res.send(
        `<!doctype html>
            <html>
            <title>Cookies</title>
            <div>
                <h1>Sorry to inform</h1>
                <h3>To use this website you must accept cookies</h3>
            </div>
            <form method="POST">
            <div>
                <input type="checkbox" name="consent">
                <p>I consent</p>
                <button type="submit">Submit</button>
            </div>
            </form>
            </html>`
    );
});

app.post("/cookie", (req, res) => {
    if (req.body.consent == "on") {
        res.cookie("consent", true);
        res.redirect(req.cookies.originalUrl);
    } else {
        res.redirect("/cookie");
    }
    console.log(req.body);
});

let auth = function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "disco" || creds.pass != "duck") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

// app.use(auth);

app.get("/increment-search", auth, (req, res) => {
    res.sendFile(__dirname + "/projects/increment-search/index.html");
});

// serves files in projects dir corresponding to url,
// or index.html in dir inside projects corresponding to url
app.use(express.static(__dirname + "/projects"));

app.get("*", (req, res) => {
    console.log("we ran out of ideas");
    res.status(400).send(
        `There is nothing here, try <a href="/ticker">this</a>`
    );
});

app.listen(8080, () => console.log("I hear you"));
