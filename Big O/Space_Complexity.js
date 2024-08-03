// What Causes Space Complexity? - Variables, Data Structures, Function Call, Allocations

function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    // only one variable 'i'
    console.log("boooooo!");
  }
}

boooo([1, 2, 3, 4, 5]); // O(1) - Constant Time - Space Complexity

function arrayOfHiNTimes(n) {
  let hiArray = []; // creating data structure
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; // n times variables are assigned
  }
  return hiArray;
}
arrayOfHiNTimes(6); // O(n) - Linear Time - Space Complexity
