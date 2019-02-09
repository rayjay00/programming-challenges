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

