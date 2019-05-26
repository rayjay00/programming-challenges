// // You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// // You can assume all values in the array are numbers.

// function smallEnough(a, limit) {
//   //creat an array of numbers that are lower than or equal to the "a" array's contents
//   const lowerNums = a.filter(num => {
//     return num <= limit;
//   });
//   //are their lengths equal? This will return true or false;
//   return lowerNums.length === a.length;
// }

// const longestPalindrome = letters => {
//   //make it an array i guess?
//   const lettersArr = letters.split("");
//   //start checking if something is equal or not
//   letters.forEach(letter => {
//     if (letter)
//   })
// };

// longestPalindrome("baablkj12345432133d");

// // split into array at ""
// // start at 0, go through array and see if the selection joined is equal to joined reverse
// // if so, return the length of that after maybe joining them?
// //

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B"];

const checkLetters = arr => {
  return arr.map(letter => {
    return letter;
  });
};

let letterArr = [];

//get only the letters from the array
const splitLetterArr = b.map(selection => {
  return selection.split("")[0];
});

const checkAllLetters = letter => {
  if (splitLetterArr.indexOf(letter) > -1) {
    letterArr.push(letter);
  }
};

const matchedLetters = c.map(letter => {
  return checkAllLetters(letter);
});

//try object

// const turnIntoObject =
const lettersAndCounts = b.map(selection => {
  return `${selection.split("")[0]} ${selection.split(" ")[1]}`;
});

// var obj = lettersAndCounts.reduce(function(acc, cur, i) {
//   lettersAndCounts[i] = cur;
//   return acc;
// }, {});

// const check = lettersAndCounts.map(pair => {
//   return Object.assign({}, pair)
// });

const matchLetterValues = lettersAndCounts.filter((selection, i) => {
  console.log("selection", selection.split(" "));
  console.log(selection[i].split(" ")[0]);
  // return selection.split(" ")[0] === selection[i+1].split(" ")
});

const letterNumObject = lettersAndCounts.reduce((obj, v, i) => {
  let letter = v.split(" ")[0];

  let num = v.split(" ")[1];
  obj[letter] = num;
  return obj;
}, {});

let letterVals = [];

for (letter in letterNumObject) {
  letterArr.indexOf(letter) > -1 && letterVals.push(letterNumObject[letter]);
}

console.log(
  // 'obj', formattedArr.join(" - ")
  // letterArr
  matchLetterValues
);
