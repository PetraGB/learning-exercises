function sumItUp(a) {
    var allNumbers = 0;
    for (var i = 0; i < arguments.length; i++) {
        allNumbers += arguments[i];
    }
    return allNumbers;
}

function waitThenRun(thisSlower) {
    setTimeout(thisSlower, 1500);
}

function highNumber(x) {
    if (x <= 0 || isNaN(x)) {
        return "ERROR";
    } else if (x >= 1000000) {
        return x;
    } else {
        x *= 10;
        return highNumber(x);
    }
}

function getTotaler() {
    var total = 0;
    return function(n) {
        return (total += n);
    };
}

// var totaler = getTotaler();  use to not reset total
// when var is set to function call, it is only equal to what's after the return
// this way the var in getTotal is not reset, even not being a global variable
