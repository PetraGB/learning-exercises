var x = 77;
var xx = timesTwo(x);

function timesTwo(num) {
    return num * 2;
}

var numbers = [x, xx];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};

numbers.y = xx;
