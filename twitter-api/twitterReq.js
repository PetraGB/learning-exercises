// this is the file where you will write ALL
// of your code for this assignment

const secrets = require("./secrets");
const https = require("https");

module.exports.getToken = function getToken(callback) {
    // this function gets bearer token from Twitter API
    // we will complete this function in class together

    let concatCreds = secrets.consumerKey + ":" + secrets.consumerSecret;
    let encodedCreds = Buffer.from(concatCreds).toString("base64");

    let options = {
        method: "POST",
        path: "/oauth2/token",
        host: "api.twitter.com",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };

    let cb = resp => {
        if (resp.statusCode !== 200) {
            callback(resp.statusCode);
        }

        let body = "";
        resp.on("data", chunk => {
            body += chunk;
        });

        resp.on("end", () => {
            try {
                let parsedBody = JSON.parse(body);
                let bearerToken = parsedBody.access_token;
                callback(null, bearerToken);
            } catch (err) {
                callback(err);
            }
        });
    };

    https.request(options, cb).end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bToken, callback) {
    // this function gets tweets from Twitter API
    // this is for you to complete :)
    //
    // https request to twitter API
    // pass token in request
    // catch errors into callbacks
    // callback with tweets in it

    let options = {
        method: "GET",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=guardiannews&tweet_mode=extended&count=12",
        host: "api.twitter.com",
        headers: {
            Authorization: `Bearer ${bToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    };

    let cb = respo => {
        if (respo.statusCode !== 200) {
            console.log(respo.statusCode);
        }

        let body = "";
        respo.on("data", chunk => {
            body += chunk;
        });

        respo.on("end", () => {
            try {
                let parsedBody = JSON.parse(body);
                callback(null, parsedBody);
            } catch (err) {
                callback(err);
            }
        });
    };

    https.request(options, cb).end();
};

module.exports.filterTweets = function filterTweets(tweets) {
    // this function filters (cleans up) the response we get from Twitter API
    // this is also for you to complete :)
    //
    // take url from entities.urls array
    // take text from full_text
    // (clear url from full text)
    // add {href: url, text: tweetClean} to tweetsList

    const filtered = [];

    for (var i = 0; i < tweets.length; i++) {
        if (!tweets[i].entities.urls[0].url) {
            break;
        }

        const thisUrl = tweets[i].entities.urls[0].url;
        let thisTweet = tweets[i].full_text;

        thisTweet =
            thisTweet.slice(0, thisTweet.indexOf(thisUrl)) +
            thisTweet.slice(thisTweet.indexOf(thisUrl) + thisUrl.length);

        filtered.push({
            href: thisUrl,
            text: thisTweet
        });
    }
    return filtered;
};
