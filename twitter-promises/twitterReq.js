// this is the file where you will write ALL
// of your code for this assignment

const secrets = require("./secrets");
const https = require("https");

module.exports.getToken = function getToken() {
    // this function gets bearer token from Twitter API
    // we will complete this function in class together

    return new Promise((resolve, reject) => {
        let concatCreds = secrets.consumerKey + ":" + secrets.consumerSecret;
        let encodedCreds = Buffer.from(concatCreds).toString("base64");

        let options = {
            method: "POST",
            path: "/oauth2/token",
            host: "api.twitter.com",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };

        let cb = resp => {
            if (resp.statusCode !== 200) {
                reject(resp.statusCode);
            }

            let body = "";
            resp.on("data", chunk => {
                body += chunk;
            });

            resp.on("end", () => {
                try {
                    let parsedBody = JSON.parse(body);
                    let bearerToken = parsedBody.access_token;
                    resolve(bearerToken);
                } catch (err) {
                    reject(err);
                }
            });
        };

        https.request(options, cb).end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function getTweets(bToken, screenName) {
    return new Promise((resolve, reject) => {
        let options = {
            method: "GET",
            path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&tweet_mode=extended&count=4`,
            host: "api.twitter.com",
            headers: {
                Authorization: `Bearer ${bToken}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };

        let cb = respo => {
            if (respo.statusCode !== 200) {
                reject(respo.statusCode);
            }

            let body = "";
            respo.on("data", chunk => {
                body += chunk;
            });

            respo.on("end", () => {
                try {
                    let parsedBody = JSON.parse(body);
                    resolve(parsedBody);
                } catch (err) {
                    reject(err);
                }
            });
        };

        https.request(options, cb).end();
    });
};

module.exports.filterTweets = function filterTweets(tweets) {
    const justOneArray = [];

    for (let i = 0; i < tweets.length; i++) {
        //const thisBatch =
        for (let j = 0; j < tweets[i].length; j++) {
            justOneArray.push(tweets[i][j]);
        }
    }

    const ordered = justOneArray.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    const filtered = [];

    for (let i = 0; i < ordered.length; i++) {
        if (
            !ordered[i].entities.urls.length == 0 ||
            !ordered[i].entities.urls.length > 1
        ) {
            const thisUrl = ordered[i].entities.urls[0].url;
            let thisTweet = ordered[i].full_text;

            thisTweet =
                thisTweet.slice(0, thisTweet.indexOf(thisUrl)) +
                thisTweet.slice(thisTweet.indexOf(thisUrl) + thisUrl.length);

            thisTweet += ` (${ordered[i].user.name})`;

            filtered.push({
                href: thisUrl,
                text: thisTweet
            });
        }
    }

    return filtered;
};
