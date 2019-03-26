const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const overview = require("./overview");

const extensionTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml"
};

let server = http.createServer((req, res) => {
    const thisPath = path.normalize(__dirname + "/projects" + req.url);
    if (req.method != "GET") {
        res.statusCode = 500;
        res.end();
    } else if (!thisPath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        res.end();
    } else {
        fs.stat(thisPath, (err, stats) => {
            if (err) {
                // console.log(err);
                res.statusCode = 404;
                res.end();
            } else {
                if (stats.isFile()) {
                    const exten = path.extname(thisPath);
                    res.setHeader("content-type", extensionTypes[exten]);
                    res.statusCode = 200;
                    const readable = fs.createReadStream(thisPath);
                    readable.pipe(res);
                } else if (stats.isDirectory()) {
                    if (req.url == "/") {
                        res.statusCode = 200;
                        res.end(overview.getHtml());
                    } else if (!thisPath.endsWith("/")) {
                        res.statusCode = 302;
                        res.setHeader("Location", req.url + "/");
                        res.end();
                    } else {
                        const indexPath = thisPath + "index.html";
                        fs.stat(indexPath, (err, stats) => {
                            if (err) {
                                res.statusCode = 404;
                                res.end();
                            } else {
                                res.setHeader("content-type", "text/html");
                                res.statusCode = 200;
                                const readable = fs.createReadStream(indexPath);
                                readable.pipe(res);
                            }
                        });
                    }
                }
            }
        });
    }
});

server.listen(8080, () => console.log("listening"));
