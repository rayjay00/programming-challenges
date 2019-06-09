// # Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Examples
// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"

// Notes
// All test cases contain a single word (as a string).

const getMiddle = str => {
  return str.length % 2 === 0
    ? str.slice(str.length / 2 - 1, str.length / 2 + 1)
    : str.split('')[Math.floor(str.length / 2)];
};

// Two Distinct Elements
// In each input array, every number repeats at least once, except for two.

// Write a function that returns the two unique numbers.

// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
// Notes
// Keep the same ordering in the output.

const returnUnique = arr => {
  return arr.filter(num => {
    return arr.indexOf(num) === arr.lastIndexOf(num);
  });
};

//see if number is prime
const isPrime = num => {
  let factors = [];
  for (let i = 1; i < num; i++) {
    num % i === 0 && factors.push(i);
  }
  return factors.length < 2;
};

//Print out all prime numbers under 100
const primeNums = [];

const checkIfPrime = num => {
  let factors = [];
  for (i = 2; i <= num; i++) {
    num % i === 0 && factors.push(i);
  }
  return factors.length === 1 && true;
};

for (let i = 1; i <= 100; i++) {
  checkIfPrime(i) && primeNums.push(i);
}
