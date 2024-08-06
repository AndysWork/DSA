/* 
Stacks are a collection of data that follow the LIFO principle.
- LIFO (Last In First Out)
- Think of a stack of plates.
- The last plate you put on the stack is the first plate you take off.
- Stacks are used to manage function invocations.
- Stacks are also used for undo mechanisms in applications.
- Stacks are used for routing (the history object) is treated like a stack.
- Stacks are used for parsing and executing functions.
- Stacks are used in algorithms like depth first search.
- Stacks are used in asynchronous JavaScript.
Pros and Cons:
Pros:
Fast operations (insertion, removal)
Cons:
Not dynamic

Operations:
push: Add an element to the top of the stack - O(1)
pop: Remove an element from the top of the stack - O(1)
peek: Get the top element of the stack - O(1)
isEmpty: Check if the stack is empty - O(1)
lookup: Return the element at the specified index - O(n)
*/

class StackByArray {
  constructor() {
    this.data = [];
    this.top = -1;
  }
  push(value) {
    this.data.push(value);
    this.top++;
    return this;
  }
  pop() {
    this.data.pop();
    this.top--;
    return this;
  }
  peek() {
    return this.data[this.top];
  }
}

const myStack = new StackByArray();
myStack.push(2);
myStack.push(4);
myStack.push(10);
myStack.pop();
console.log(myStack.peek());
console.log(myStack.data);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackByLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;
    return this;
  }

  peek() {
    return this.top;
  }
}

const myStack2 = new StackByLinkedList();
myStack2.push(2);
myStack2.push(4);
myStack2.push(10);
myStack2.pop();
myStack2.push("Microsoft");
console.log(myStack2.peek().value);
console.log(myStack2.peek());
