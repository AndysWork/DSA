function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const target = 87;
console.log(linearSearch(numbers, target)); // Output: 7

const targetNotFound = 100;
console.log(linearSearch(numbers, targetNotFound)); // Output: -1
