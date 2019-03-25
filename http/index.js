const http = require("http");
const fs = require("fs");

let server = http.createServer((request, response) => {
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    let requestData = "";
    requestData += new Date() + "\t";
    requestData += request.method + "\t";
    requestData += request.url + "\t";
    requestData += request.headers["user-agent"] + "\n";

    fs.appendFile("requests.txt", requestData, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data logged!");
        }
    });

    request.on("error", err => {
        console.log(err);
    });

    if (request.method == "GET") {
        if (request.url == "/requests.txt") {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            const readable = fs.createReadStream("./requests.txt");
            readable.pipe(response);
        } else {
            response.statusCode = 200;
            response.setHeader("content-type", "text-html");
            response.end(`<!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!
            </html>`);
        }
    } else if (request.method == "HEAD") {
        response.statusCode = 200;
        response.setHeader("content-type", "text-html");
        response.end();
    } else if (request.method == "POST") {
        let body = "";
        request
            .on("data", chunk => {
                body += chunk;
            })
            .on("end", () => {
                console.log(body);
                response.statusCode = 302;
                response.setHeader("Location", "/");
                response.end();
            });
    } else {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080, () => console.log("listening"));
