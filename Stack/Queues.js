/* 
Queues 
- FIFO (First In First Out)
- Think of a line of people.
- The first person in line is the first person to get out.
- Queues are used in background tasks, uploading resources, printing/task processing, and more.
- Queues are used in algorithms like breadth first search.
- Queues are used in asynchronous JavaScript.
Pros and Cons:
Pros:
Fast operations (insertion, removal)
Cons:
Not dynamic
Operations:
enqueue: Add an element to the end of the queue - O(1)
dequeue: Remove an element from the front of the queue - O(1)
peek: Get the front element of the queue - O(1)
isEmpty: Check if the queue is empty - O(1)
lookup: Return the element at the specified index - O(n) 
*/

class QueueByStack {
  constructor() {
    this.first = [];
    this.last = [];
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }
    return this.last[0];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
}

// const myQueue = new QueueByStack();

// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// console.log("========");
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log("========");

// console.log(myQueue);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueByLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new QueueByLinkedList();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.peek());
console.log("========");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
myQueue.enqueue("Andy");
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log("========");

console.log(myQueue);
