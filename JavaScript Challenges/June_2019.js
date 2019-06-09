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
