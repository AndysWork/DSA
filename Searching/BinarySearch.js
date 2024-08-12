/* 
Binary Search - Iterative
Implement a function to perform a binary search on a sorted array.
Use a while loop to repeatedly divide the search interval in half.
Compare the target element with the middle element of the array.
Adjust the search interval based on the comparison.
Return the index of the target element if found, otherwise return -1.

*/

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage
const sortedNumbers = [1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
const target = 87;
console.log(binarySearch(sortedNumbers, target)); // Output: 7

const targetNotFound = 100;
console.log(binarySearch(sortedNumbers, targetNotFound)); // Output: -1
