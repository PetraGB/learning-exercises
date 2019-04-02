const express = require("express");
const app = express();

app.use(express.static("./ticker"));

const { getToken, getTweets, filterTweets } = require("./twitterReq");

app.get("/data.json", (req, res) => {
    getToken()
        .then(bearerToken => {
            Promise.all([
                getTweets(bearerToken, "guardiannews"),
                getTweets(bearerToken, "nytimes"),
                getTweets(bearerToken, "AFP")
            ])
                .then(tweets => {
                    let filteredTweets = filterTweets(tweets);
                    res.json(filteredTweets);
                })
                .catch(err => {
                    console.log("err in getTweets: ", err);
                });
        })
        .catch(err => {
            console.log("err in getToken: ", err);
        });
});

app.listen(8080, () => console.log("listening!"));
