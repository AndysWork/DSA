const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100000).fill("nemo");
function getNemo(array) {
  //let t1 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  // let t2 = performance.now(); // performance.now() is a method that returns a DOMHighResTimeStamp,
  //measured in milliseconds, accurate to one thousandth of a millisecond.
  //console.log("Call to find Nemo took " + (t2 - t1) + " milliseconds");
}
getNemo(large); // --> O(n) --> Linear Times

// Another O(n) Example
// ES5
function compressAllBoxes(boxes) {
  boxes.forEach(function (box) {
    console.log(box);
  });
}

// ES6
const compressAllBoxes = (boxes) => {
  boxes.forEach((box) => {
    console.log(box);
  });
};

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function sumArray(array) {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return sum;
}

function countOccurrences(array, target) {
  let count = 0;
  for (const element of array) {
    if (element === target) {
      count++;
    }
  }
  return count;
}

function copyArray(array) {
  const newArray = [];
  for (const element of array) {
    newArray.push(element);
  }
  return newArray;
}

function printArray(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

function removeDuplicates(array) {
  const uniqueArray = [];
  for (const element of array) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}
