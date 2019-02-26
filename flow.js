//checking types
function logType(arg) {
    if (arg === true || arg === false) {
        return "boolean!";
    } else if (arg === null) {
        return "null!";
    } else if (typeof arg == "undefined") {
        return "undefined!";
    } else if (typeof arg == "string") {
        return "string!";
    } else if (Array.isArray(arg)) {
        return "array!";
    } else if (typeof arg == "function") {
        return "function!";
    } else if (typeof arg == "object") {
        return "object!";
    } else if (isNaN(arg)) {
        return "not a number!";
    } else if (typeof arg == "number") {
        return "number!";
    } else {
        return "I have no idea!";
    }
}

//obj a becomes b with turned around keys and values
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};

for (var city in a) {
    var country = a[city];
    b[country] = city;
}

//count from 10 to 0 and log every number
for (var x = 10; x >= 0; x--) {
    console.log(x);
}
