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
