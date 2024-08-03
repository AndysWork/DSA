// Given 1 array, return true if there is a pair of numbers that add up to 9 else return false

const array = [6, 4, 3, 2, 1, 7];
const sum = 9;

function checkPairSum1(array, sum) {
  // O(n^2)
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

function checkPairSum2(array, sum) {
  // O(n)
  const map = {};
  for (const element of array) {
    if (map[element]) {
      return true;
    }
    map[sum - element] = true;
  }
  return false;
}

function checkPairSum3(array, sum) {
  // O(n) - With built-in functions
  return array.some((element, index) =>
    array.slice(index + 1).includes(sum - element)
  );
}

function checkMultiplePairSum(array, sum) {
  // O(n)
  const map = {};
  const pairs = [];
  for (const element of array) {
    if (map[element]) {
      pairs.push([element, sum - element]); // Keep track of pairs
    }
    map[sum - element] = true;
  }
  return pairs;
}
console.log(checkMultiplePairSum(array, sum)); // [[3, 6], [7, 2]]
