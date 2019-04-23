// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// function smallEnough(a, limit) {
//   //creat an array of numbers that are lower than or equal to the "a" array's contents
//   const lowerNums = a.filter(num => {
//     return num <= limit;
//   });
//   //are their lengths equal? This will return true or false;
//   return lowerNums.length === a.length;
// }

const longestPalindrome = letters => {
  //make it an array i guess?
  const mainArr = letters.split("");
  const lettersArr = mainArr.reverse();
  //start checking if something is equal or not
  // add all possible arrays with lengths to its own array
  const matchArr = lettersArr.map((letter, index) => {
    return lettersArr.slice(index, lettersArr.length);
  });
  console.log("matchArr", matchArr);
  const reversedArrTest = matchArr.filter(arr => {
    console.log("arr inside", arr);
    return arr.toString() == arr.reverse().toString();
  });
  return reversedArrTest;
};

longestPalindrome("baablk");

// split into array at ""
// start at 0, go through array and see if the selection joined is equal to joined reverse
// update: use slice
// expected output: Array ["bison", "camel", "duck", "elephant"]
// if so, return the length of that after maybe joining them?
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
