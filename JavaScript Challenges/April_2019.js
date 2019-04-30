// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  //creat an array of numbers that are lower than or equal to the "a" array's contents
  const lowerNums = a.filter(num => {
    return num <= limit;
  });
  //are their lengths equal? This will return true or false;
  return lowerNums.length === a.length;
}

const longestPalindrome = letters => {
  //make it an array i guess?
  const lettersArr = letters.split("");
  //start checking if something is equal or not
  letters.forEach(letter => {
    if (letter)
  })
};

longestPalindrome("baablkj12345432133d");

// split into array at ""
// start at 0, go through array and see if the selection joined is equal to joined reverse
// if so, return the length of that after maybe joining them?
// 


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  const sortedArr = numbers.sort((a, b) => a - b);

  const twoLowestAdded = sortedArr[0] + sortedArr[1];
  
  return twoLowestAdded;
};