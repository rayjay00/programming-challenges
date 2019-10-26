// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// Examples

// sequenceSum(2,2,2) // 2
// sequenceSum(2,6,2) // 12 (2 + 4 + 6)
// sequenceSum(1,5,1) // 15 (1 + 2 + 3 + 4 + 5)
// sequenceSum(1,5,3) // 5  (1 + 4)

const sequenceSum = (begin, end, step) => {
  let num = 0;

  if (begin > end) {
    return num;
  }

  while (begin <= end) {
    num += begin;
    begin += step;
  }

  return num;
};

// Count Number of Identical Lists
// Create a function that takes four lists as arguments and returns a count of the total number of identical lists.

// Examples
// count_identical_lists([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2

// count_identical_lists([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0

// count_identical_lists([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3

const count_identical_lists = (...nums) => {
  const numString = JSON.stringify(nums);
  return nums.filter(arr => {
    const currentArrString = JSON.stringify(arr);
    return (
      numString.indexOf(currentArrString) !==
      numString.lastIndexOf(currentArrString)
    );
  }).length;
};
