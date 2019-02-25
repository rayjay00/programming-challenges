// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
    // code to calculate the average
    return Math.round(scores.reduce((n, currentVal) => n + currentVal) / scores.length);
}

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url){
    return url.split("#")[0];
}

//In this kata, you are asked to square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

function squareDigits(num){
    return Number(num.toString().split("").map(num => num * num).join(""));
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    const numsSorted = numbers.split(" ").sort((a, b) => b - a);
    return `${numsSorted[0]} ${numsSorted[numsSorted.length - 1]}`;
}

// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    if (array.length === 0) {
        return 'even'
     } else {
        const addedArr = array.reduce((i, num) => i + num);
        if ((addedArr % 2 === 0)) {
            return 'even';
        } else {
            return 'odd';
        }
    }
 }

