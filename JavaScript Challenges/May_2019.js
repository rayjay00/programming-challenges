//Remove text from the beginning and end of a measurement string while still preserving a brief description
//example 1: Two Cavity fits 7 7/8 x 3" (BULK) should return Two Cavity 7 7/8 x 3"
//example 2: (3.5 gal) 10 1/4" x 9&nbsp;1/8 x  11 1/4" {6} should return (3.5 gal) 10 1/4" x 9 1/8 x  11 1/4"
//example 3: [RT]Item Size= fits 7 7/8" x 3" (BULK) {42} should return fits 7 7/8" x 3"

const returnProductName = (productName) => {
  const productStringArr = productName.split("=")[1];
  
    //only if it's a bulk product
    //If so, it contains (BULK) after the name
    const removeBulk = productStringArr.split("(BULK)")[0];
    
    const removeMinQuantity = removeBulk.split("{")[0];
    const finalProductName = removeMinQuantity.replace("&nbsp;", " ");
 console.log("finalProductName ", finalProductName);

  return finalProductName;
}

returnProductName('Two Cavity fits 7 7/8 x 3" (BULK)')

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
  //find how many zeros are present in the array
  const zeroCount = arr.filter(item => {
    return item === 0;
  });

  //remove the zeros from array
  const removedZeros = arr.filter(item => {
    return item !== 0;
  }) 

  const addZeros = zeroCount.map(item => {
    return removedZeros.push(0);
  })
  
  return removedZeros;
}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

//first way works and is a bit more readable, but thought about this solution also:
const moveZerosAgain = (arr) => {
  return arr.filter(num => {
    return num !== 0;
  }).concat(arr.filter(num => {
    return num === 0;
  }))
}
// console.log(moveZerosAgain([false,1,0,1,2,0,1,3,"a"]));
