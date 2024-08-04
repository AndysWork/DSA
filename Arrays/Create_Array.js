class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.get(0);
myArray.push("hi");
myArray.push("you");
myArray.pop();
myArray.push("are");
myArray.delete(0);
console.log(myArray);

// Strings are arrays of characters - so we can use the same methods to manipulate strings
// Strings turned into arrays by splitting them (split method) and then joining them back together (join method)

function reverseString(string) {
  const reverseArray = [];
  if (!string || typeof string !== "string" || string.length < 2)
    return "string is not valid";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseArray.push(string[i]);
  }
  return reverseArray.join("");
}

function reverseStringBybuiltInMethods(string) {
  return string.split("").reverse().join("");
}

const reverseString3 = (string) => [...string].reverse().join(""); //ES6

console.log(reverseString3("hello"));
