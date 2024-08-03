// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
// should return false
// -------------------------
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];
// should return true
// 2 parameters - arrays - no size limit - ask interviwer what will be the size of the array?
// sorted or not? - no
// Note: In Javascripts arrays are objects and objects in Javascript are hash tables
// Note: In Javascript, object properties are converted into strings when created

// 1st approach
function checkCommonItems(array1, array2) {
  for (const element of array1) {
    if (array2.includes(element)) {
      return true;
    }
  }
  return false;
}

console.log(checkCommonItems(array1, array2)); // false
console.log(checkCommonItems(array3, array4)); // true

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// 2nd approach
function checkCommonItems2(array1, array2) {
  const map = {}; // Creation of object - Space Complexity: O(n)
  // Loop through first array and create object where properties === items in the array
  // Can we assume that always it will be 2 params?
  for (const element of array1) {
    map[element] = true;
  }

  // Loop through second array and check if item in second array exists on created object
  for (const element of array2) {
    if (map[element]) {
      // Check if array2 element exists in map object which consists of array1 elements as properties
      return true;
    }
  }
  return false;
}
console.log(checkCommonItems2(array1, array2)); // false
console.log(checkCommonItems2(array3, array4)); // true

// Time Complexity: O(n) - Linear Time Complexity
// Space Complexity: O(n) - Linear Space Complexity

// 3rd approach
function checkCommonItems3(array1, array2) {
  return array1.some((element) => array2.includes(element)); // With built-in functions
}
