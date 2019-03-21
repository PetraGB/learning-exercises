const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations!"
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};

function adventure(convo) {
    rl.question(chalk.red(convo.q), answer => {
        if (convo.answers[answer]) {
            if (typeof convo.answers[answer] == "string") {
                console.log(chalk.blue(convo.answers[answer]));
                rl.close();
            } else {
                adventure(convo.answers[answer]);
            }
        } else {
            console.log(chalk.magenta("no idea what you talking about"));
            adventure(convo);
        }
    });
}

adventure(story);
