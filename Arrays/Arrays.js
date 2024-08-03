/*
Array - is a collection of elements of the same type placed in contiguous memory locations 
that can be individually referenced by adding an index to a unique identifier.

Operations on Array:
Insertion - O(1)
Deletion - O(1)
Access - O(1)
Search - O(n)
*/

const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage is used - for 32-bit system

console.log(strings[2]); // O(1)

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)
/*
Explanation:
1. Allocate new memory
2. Copy existing elements to new memory
3. Insert new element
4. Copy back existing elements
5. Deallocate old memory
const strings = 
["a", "b", "c", "d"];      =>    ["x", "a", "b", "c", "d"]   =>   ["x", "a", "b", "c", "d"]
  0    1    2    3         =>           0    1    2    3     =>     0    1    2    3    4
*/

function customUnshiftSingle(inputArray, element) {
  const newArray = [];
  newArray[0] = element;
  for (let i = 0; i < inputArray.length; i++) {
    // O(n)
    newArray[i + 1] = inputArray[i];
  }
  return newArray;
}
console.log(customUnshiftSingle(["a", "b", "c", "d"], "y"));

function customUnshiftSingleOrMultiple(array, ...elements) {
  const newArray = new Array(array.length + elements.length);

  // Copy new elements to the beginning of the new array
  for (let i = 0; i < elements.length; i++) {
    newArray[i] = elements[i];
  }

  // Copy existing elements to the new array
  for (let i = 0; i < array.length; i++) {
    newArray[i + elements.length] = array[i];
  }

  // Copy newArray back to the original array
  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }

  // Return the new length of the array
  return newArray.length;
}

// Example usage
const testStrings = ["a", "b", "c", "d"];
const newLength = customUnshiftSingleOrMultiple(testStrings, "x", "y");
console.log(strings); // ["x", "y", "a", "b", "c", "d"]
console.log(newLength); // 6

// splice
strings.splice(2, 0, "alien"); // O(n/2) -> O(n)
/*
Explanation:
Remove elements from the array starting at a specified index.
Optionally insert new elements at the same index.
Return the removed elements.
Here's a step-by-step implementation:
Validate the input parameters.
Remove the specified number of elements starting from the given index.
Insert the new elements at the specified index.
Return the removed elements.
const strings = 
["a", "b", "c", "d"];      =>    ["a", "b", "alien", "c", "d"]   =>   ["a", "b", "alien", "c", "d"]
  0    1    2    3         =>       0    1            3    4       =>      0    1     2     3    4
*/

function customSplice(array, start, deleteCount, ...elements) {
  // Ensure start is within bounds
  if (start < 0) {
    start = array.length + start;
    if (start < 0) start = 0;
  } else if (start > array.length) {
    start = array.length;
  }

  // Ensure deleteCount is within bounds
  if (deleteCount < 0) deleteCount = 0;
  if (deleteCount > array.length - start) deleteCount = array.length - start;

  // Extract the elements to be removed
  const removedElements = array.slice(start, start + deleteCount);

  // Create a new array to hold the result
  const newArray = [
    ...array.slice(0, start),
    ...elements,
    ...array.slice(start + deleteCount),
  ];

  // Copy the new array back to the original array
  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }

  // Adjust the length of the original array if necessary
  array.length = newArray.length;

  // Return the removed elements
  return removedElements;
}

// Example usage
const testSplice = ["a", "b", "c", "d"];
const removed = customSplice(testSplice, 2, 1, "alien");
console.log(strings); // ["a", "b", "alien", "d"]
console.log(removed); // ["c"]

console.log(strings);
