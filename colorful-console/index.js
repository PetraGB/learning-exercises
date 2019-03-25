const http = require("http");
const chalk = require("chalk");
const ca = require("chalk-animation");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    if (req.on("error", err => console.log(err)));
    if (res.on("error", err => console.log(err)));
    if (req.method == "GET") {
        res.setHeader("content-type", "text-html");
        res.statusCode = 200;
        res.end(`<!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
              <input type="text" name="text">
              <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
              </select>
              <button type="submit">Go</button>
            </form>
            </html>`);
    }
    if (req.method == "POST") {
        var body = "";
        req.on("data", function(chunk) {
            body += chunk;
        }).on("end", function() {
            let inputChoice = qs.parse(body);
            let text = inputChoice.text;
            let color = inputChoice.color;
            console.log(chalk[color](text));
            res.end(`<a href="/" style="color:${color}">${text}</a>`);
        });
    }
});

server.listen(8080, () => ca.rainbow("listening for whispers"));
