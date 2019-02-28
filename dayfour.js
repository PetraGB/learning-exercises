// Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.
// If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.
// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.

function each(list, calling) {
    for (var thing in list) {
        calling(list[thing], thing);
    }
}

// Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

function mirrow(anArray) {
    var mirrowing = anArray.slice(0, anArray.length);
    mirrowing.reverse();
    return mirrowing;
}

// Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

function getLessThanZero(bunchOfNumbers) {
    var onlyLow = [];
    // bunchOfNumbers.slice(0, bunchOfNumbers.length);
    for (var i = 0; i < bunchOfNumbers.length; i++) {
        if (bunchOfNumbers[i] <= 0) {
            onlyLow.push(bunchOfNumbers[i]);
        }
    }
    return onlyLow;
}
