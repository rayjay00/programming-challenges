// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
    // code to calculate the average
    return Math.round(scores.reduce((n, currentVal) => n + currentVal) / scores.length);
}

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
function removeUrlAnchor(url){
    return url.split("#")[0];
  }

