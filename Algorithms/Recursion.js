/*
Recursion - a function that calls itself

When to use recursion?
    - When you can see that the problem can be broken down into smaller sub-problems
    - When you need to keep track of the state in each recursive call
    - Every time you are using a tree or converting something into a tree (e.g. JSON) - consider recursion
    - Divide and Conquer using recursion
    - Recursion is on the call stack
    - Recursion is a stack data structure
    - Divided into a number of sub problems that are smaller instances of the same problem *
    - Each instance of the sub problem is identical in nature *
    - The solution of each sub problem can be combined to solve the problem at hand*

Pros:
- DRY (Don't Repeat Yourself)
- Readability
- Easier to solve in some cases

Cons:
- Large stack (stack overflow)
- Hard to understand
- Hard to debug
- Performance (some cases)

*/

function findFactorialRecursive(number) {
  return number === 0 || number === 1 || number == 2
    ? number
    : number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 0 || number === 1 || number === 2) {
    return number;
  }
  for (let n = number; n > 1; n--) {
    answer *= n;
  }
  return answer;
}

// console.log(findFactorialRecursive(5));
// console.log(findFactorialIterative(4));

function fibonacciRecursion(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

function fibonacciIterative(n) {
  //O(n-2s)
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciRecursion(9));
console.log(fibonacciIterative(7));

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
  return str === ""
    ? ""
    : reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringRecursive("yoyo master"));
