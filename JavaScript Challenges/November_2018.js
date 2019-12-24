//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  return num < 0 ? num : -num;
}

//Convert number to reversed array of digits
//You have to return the digits of this number within an array in reverse order.

function digitize(n) {
  const arr = n
    .toString()
    .split('')
    .map(Number);
  return arr.reverse();
}

//Given an integral number, determine if it's a square number.

const isSquare = function(n) {
  return Boolean(Math.sqrt(n) % 1 === 0);
};

//Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => item / 1 === item);
}
