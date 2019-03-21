let urlInput = process.argv[2];

const url = require("url");
const querystring = require("querystring");

let urlObject = url.parse(urlInput);

console.log("The protocol is " + urlObject.protocol);
console.log("The host is " + urlObject.host);
console.log("The hostname is " + urlObject.hostname);
console.log("The port is " + urlObject.port);
console.log("The pathname is " + urlObject.pathname);

if (urlObject.query) {
    console.log("The query is " + urlObject.query);
    const queryObject = querystring.parse(urlObject.query);
    for (var qu in queryObject) {
        console.log(
            "The value of the " + qu + " parameter is " + queryObject[qu]
        );
    }
}

//
// The value of the a parameter is 100
// The value of the b parameter is 200
