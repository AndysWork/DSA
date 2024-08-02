// 1. Worst Case - Always consider the worst case scenario when analyzing the Big O of an algorithm. Its important for scalability.
// 2. Remove Constants - Constants do not matter in Big O notation. O(2n) becomes O(n).
// 3. Different terms for inputs - If the function has two separate inputs, n and m, you would write O(n + m).
// 4. Drop Non Dominants - Drop the non dominant terms. O(n^2 + n) becomes O(n^2).
// 5. Two separate collections - If the function has two separate collections, you would write O(n + m). & if nested then O(n * m).

//2nd Example

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]); // O(n/2)
    index++;
  }

  for (let i = 0; i < 100; i++) {
    // O(100) - Constant Time, because it will always run 100 times, doesn't matter the size of the input
    console.log("hi"); // O(100)s
  }
}
// BIG O(1 + n/2 + 100) => O(n) - Linear Time
printFirstItemThenFirstHalfThenSayHi100Times([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//3rd Example

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (box) {
    console.log(box);
  });

  boxes2.forEach(function (box) {
    console.log(box);
  });
}

// Big O(2n) => O(n) - Linear Times - We drop the constants

// Log all pairs of array

const boxes = [1, 2, 3, 4, 5];

function logalPairs(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(boxes[i], boxes[j]);
    }
  }
}
logalPairs(boxes);
// Big O(n * n) => O(n^2) - Quadratic Time

//4th Example

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}
printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// BIG O(n + n^2) => O(n^2) - Quadratic Time - Here n^2 is the dominant term
