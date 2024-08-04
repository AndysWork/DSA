/*
Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
It should return 2

Given an array = [2, 1, 1, 2, 3 ,5 , 1, 2, 4];
It should return 1

Given an array = [2, 3, 4, 5];
It should return undefined
*/

function getFirstRecurringCharacter(arr) {
  const resultMap = new Map();
  let traverseIndex = 0;

  while (traverseIndex < arr.length) {
    for (let j = traverseIndex + 1; j < arr.length; j++) {
      if (arr[traverseIndex] === arr[j] && !resultMap.has(arr[traverseIndex])) {
        resultMap.set(arr[traverseIndex], j);
      }
    }
    traverseIndex++;
  }
  if (resultMap.size === 0) {
    return undefined;
  }

  // Convert Map to an array of key-value pairs and sort by value
  const sortedEntries = [...resultMap.entries()].sort((a, b) => a[1] - b[1]);

  // Return the key of the smallest value
  return sortedEntries[0][0];
}

const array =
  //[2, 1, 1, 2, 3, 5, 1, 2, 4];
  // [2, 3, 4, 5];

  [2, 5, 1, 2, 3, 5, 1, 2, 4];
//console.log(getFirstRecurringCharacter(array)); // Time complexity: O(n^2) Space complexity: O(n)

function getFirstRecurringCharacterBySet(arr) {
  const map = new Set();

  for (const element of arr) {
    if (map.has(element)) {
      return element;
    }
    map.add(element);
  }
  return undefined;
}

console.log(getFirstRecurringCharacterBySet(array)); // O(n) Space complexity: O(n)
