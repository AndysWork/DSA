/* 
Dynamic Programming is a method for solving a complex problem by breaking it down into a collection of
 simpler subproblems, solving each of those subproblems just once, and storing their solutions.
 The next time the same subproblem occurs, instead of recomputing its solution, 
 one simply looks up the previously computed solution, thereby saving computation time at the expense
 of a (hopefully) modest expenditure in storage space. 
 (Each of the subproblem solutions is indexed in some way, typically based on the values of its input 
 parameters, so as to facilitate its lookup.) The technique of storing solutions to subproblems instead 
 of recomputing them is called "memoization".

1. House Robber - https://leetcode.com/problems/house-robber
2. Best Time to Buy and Sell Stock  - https://leetcode.com/problems/best-time-to-buy-and-sell-stock
3. Climbing Stairs  - https://leetcode.com/problems/climbing-stairs
*/

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacci(n) {
  //O(2^n)

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log("Slow", fibonacci(35));
console.log("DP", fasterFib(100));
console.log("DP2", fibonacciMaster2(100));
console.log("we did " + calculations + " calculations");
