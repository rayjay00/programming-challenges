// //Remove text from the beginning and end of a measurement string while still preserving a brief description
// //example 1: Two Cavity fits 7 7/8 x 3" (BULK) should return Two Cavity 7 7/8 x 3"
// //example 2: (3.5 gal) 10 1/4" x 9&nbsp;1/8 x  11 1/4" {6} should return (3.5 gal) 10 1/4" x 9 1/8 x  11 1/4"
// //example 3: [RT]Item Size= fits 7 7/8" x 3" (BULK) {42} should return fits 7 7/8" x 3"

const returnProductName = productName => {
  const productStringArr = productName.split("=")[1];

  //only if it's a bulk product
  //If so, it contains (BULK) after the name
  const removeBulk = productStringArr.split("(BULK)")[0];

  const removeMinQuantity = removeBulk.split("{")[0];
  const finalProductName = removeMinQuantity.replace("&nbsp;", " ");
  console.log("finalProductName ", finalProductName);

  return finalProductName;
};

returnProductName('Two Cavity fits 7 7/8 x 3" (BULK)');

// // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = arr => {
  //find how many zeros are present in the array
  const zeroCount = arr.filter(item => {
    return item === 0;
  });

  //remove the zeros from array
  const removedZeros = arr.filter(item => {
    return item !== 0;
  });

  const addZeros = zeroCount.map(item => {
    return removedZeros.push(0);
  });

  return addZeros;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// //first way works and is a bit more readable, but thought about this solution also:
const moveZerosAgain = arr => {
  return arr
    .filter(num => {
      return num !== 0;
    })
    .concat(
      arr.filter(num => {
        return num === 0;
      })
    );
};
console.log(moveZerosAgain([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// //Match count with header.
// //We have a table with a header for quantities: Under 250, 5000+, 2000+ that is created from an array [250, 5000, 2000]
// //There is also a "Case Minimum" category.
// //The rows that are generated are decoupled from the code that generates the headers. Ther

const breaks = [0, 1000, 1100, 1200, 9999];

const caseMin = 1300;

const matchBreakLevel = caseMin => {
  const lowerBreaks = breaks.filter(currentBreak => {
    return currentBreak <= caseMin;
  });
  let closestBreak = lowerBreaks.pop();
  const indexOfWhereBreakBelongs = breaks.indexOf(closestBreak);
  return indexOfWhereBreakBelongs;
};

matchBreakLevel(caseMin);

//Find all prime numbers between 1 and 100
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
