function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function() {
        return this.width * this.height; //only once in code
    };
}
function Square(n) {
    this.width = n;
    this.height = n;
}

// Rectangle.prototype.getArea = function() {
//     return this.width * this.height;
// };

Square.prototype = new Rectangle();

var ret = new Rectangle(4, 6);
var sq = new Square(8);

ret.getArea(ret);
sq.getArea(sq);

// -------------------------------

function invertCase(words) {
    var invertedWords = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i] == words[i].toUpperCase()) {
            invertedWords += words[i].toLowerCase();
        } else {
            invertedWords += words[i].toUpperCase();
        }
    }
    return invertedWords;
}

// ----------------------------------
//  Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. It should be possible to call the start method of instances of Countdown to initiate the countdown. Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor and logging each number to the console with a one second delay.

function Countdown(sec) {
    this.sec = sec;
    this.start = function() {
        if (this.sec >= 0) {
            setTimeout(
                function() {
                    console.log(this.sec);
                    this.sec--;
                    this.start();
                }.bind(this), // bind because this does not work since it's 2 levels from actial this
                1000
            );
        }
    };
}
