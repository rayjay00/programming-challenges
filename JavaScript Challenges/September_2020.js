// A random number generator is seeded with a list of size N containing integers
// between 0 and N-1 (inclusive). It then returns "random" numbers by iterating
// through the list. The generator starts by returning the value at index 0.
// It then uses that value as the index for the next value to return, and so on.
// If the generator was seeded with the list [1, 2, 0],
// the first number it would return would be 1, then 2, then 0, and then it would repeat the sequence.
// Thus, the number of distinct values would be 3.

function checkSequence(arr) {
  const uniques = [arr[0]];

  function readRandoms() {
    const positionToCheck = uniques[uniques.length - 1];
    const nextRandomNum = arr[positionToCheck];
    const alreadyCheckedThisIndex = uniques.includes(nextRandomNum);

    if (alreadyCheckedThisIndex) {
      return uniques.length;
    }

    uniques.push(nextRandomNum);
    return readRandoms();
  }
  return readRandoms();
}

// console.log(checkSequence([4, 1, 3, 4, 2]));
// console.log(checkSequence([1, 2, 0]));
