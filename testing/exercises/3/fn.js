module.exports = function fn(word) {
    if (Array.isArray(word)) {
        var newArray = [];
        for (var i = 0; i < word.length; i++) {
            newArray.push(fn(word[i]));
        }
        return newArray;
    } else if (typeof word == "number") {
        return null;
    } else {
        return word
            .split("")
            .reverse()
            .join("");
    }
};
