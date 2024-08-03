function compressAllBoxes(boxes) {
  console.log(boxes[0]); // O(1) - Constant Time
}

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1) - Constant Time
  console.log(boxes[1]); // O(1) - Constant Time
}
logFirstTwoBoxes(boxes); // O(2) - Constant Time

function getElementAtIndex(array, index) {
  return array[index]; // O(1) - Constant Time
}

function appendElement(array, element) {
  array.push(element); // O(1) - Constant Time
}

function isEven(number) {
  return number % 2 === 0; // O(1) - Constant Time
}

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp; // O(1) - Constant Time
}

function getConstantValue() {
  return 42; // O(1) - Constant Time
}

function getArrayLength(array) {
  return array.length; // O(1) - Constant Time
}

function setHashMapValue(hashMap, key, value) {
  hashMap[key] = value; // O(1) - Constant Time
}
