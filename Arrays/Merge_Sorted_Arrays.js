/* 
Merge Sorted Arrays - Given two sorted arrays, merge them into one sorted array.
Example: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); // Output: [0, 3, 4, 4, 6, 30, 31]

Questions - 
1. How many arrays are we merging?
2. Are the arrays sorted?
3. Are the arrays of the same length?
4. Are the arrays of the same size?
5. Are the arrays of the same type?
6. Are the arrays of the same data type?
7. Are the arrays of the same data structure?

Approaches -
1. Merge the arrays using the built-in sort method - O(n log n)
2. Merge the arrays using the spread operator - O(n)
3. Merge the arrays using a set - O(n)
4. Merge the arrays using the filter method - O(n)
5. Merge the arrays using the reduce method - O(n)
6. Merge the arrays using a for loop - O(n)
7. Merge the arrays using a while loop - O(n)
8. Merge the arrays using a for loop and if-else statements - O(n)
9. Merge the arrays using a while loop and if-else statements - O(n)
10. Merge the arrays using a while loop and if-else statements with a guard clause - O(n)
11. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator - O(n)
12. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator - O(n)
13. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator and a logical operator - O(n)
14. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator and a logical operator and a bitwise operator - O(n)
15. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator and a logical operator and a bitwise operator and a shift operator - O(n)
16. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator and a logical operator and a bitwise operator and a shift operator and a bitwise shift operator - O(n)
17. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator and a logical operator and a bitwise operator and a shift operator and a bitwise shift operator and a bitwise AND operator - O(n)
18. Merge the arrays using a while loop and if-else statements with a guard clause and a ternary operator and a conditional operator and a logical operator and a bitwise operator and a shift operator and a bitwise shift operator and a bitwise AND operator and a bitwise OR operator - O(n)
19. Merge the arrays with O(m + n) time complexity - O(n)
*/

function mergeSortedArrays(array1, array2) {
  // O(n)
  const mergedArray = [];
  let i = 0;
  let j = 0;

  // Merge the arrays while there are elements in both
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  // If there are remaining elements in array1, add them to mergedArray
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  // If there are remaining elements in array2, add them to mergedArray
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]

function mergeSortedArraysWithBuiltInFunc(array1, array2) {
  // O(n log n)
  array1 = array1.concat(array2);
  return array1.sort((a, b) => a - b);
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

function mergeSortedArraysWithSpreadOperator(array1, array2) {
  // O(n)
  return [...array1, ...array2].sort((a, b) => a - b);
}

function mergeSortedArraysUsingSet(array1, array2) {
  // O(n)
  return Array.from(new Set([...array1, ...array2])).sort((a, b) => a - b);
}

function mergeSortedArraysUsingFilter(array1, array2) {
  // O(n)
  return array1
    .concat(array2)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
}

function mergeSortedArraysUsingReduce(array1, array2) {
  // O(n+m)log(n+m)
  return array1
    .concat(array2)
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, [])
    .sort((a, b) => a - b);
}

function mergeSortedArraysUsingForLoop(array1, array2) {
  // O(n)
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length || j < array2.length) {
    if (array1[i] < array2[j] || j >= array2.length) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  return mergedArray;
}

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0 || (arr1.length === 1 && arr1[0] === 0)) {
    return arr2;
  }

  if (arr2.length === 0 || (arr2.length === 1 && arr2[0] === 0)) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // Output: [0, 3, 4, 4, 6, 30, 31]
