/*
1. DoubleLinkedList - A linked list in which each node keeps a reference to the node before and after it.
when we want to insert a new node in the middle of the list, we can do it in O(1) time.
2. Attributes:
head: The first node in the list
tail: The last node in the list
length: The number of nodes in the list
3. Methods:
append(value): Add a new node to the end of the list - O(1)
prepend(value): Add a new node to the beginning of the list - O(1)
insert(index, value): Add a new node at the specified index - O(n)
remove(index): Remove the node at the specified index - O(n)
lookup(index): Return the node at the specified index - O(n)
4. When to Use Double Linked Lists:
When you need to add or remove nodes frequently
When you need to traverse the list in both directions
When you need to access the previous node of a node
5. Pros and Cons:
Pros:
Fast insertion and removal
Cons:
Extra memory is required to store the reference to the previous node

Single vs Double Linked Lists:
Single Linked List:
Pros:
Less memory is required
Cons:
Slow insertion and removal
Double Linked List:
Pros:
Fast insertion and removal
Cons:
Extra memory is required to store the reference to the previous node

6. When to Use Single Linked Lists:
When you need to save memory
When you need to traverse the list in one direction
When you don't need to access the previous node of a node

7. When to Use Double Linked Lists:
When you need to add or remove nodes frequently
When you need to traverse the list in both directions
When you need to access the previous node of a node

*/
// 10 -> 5 -> 16
// 10 <- 5 <- 16

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    if (value === null) return;

    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepand(value) {
    if (value === null) return;
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // O(n)
    if (index === 0) {
      return this.prepand(value);
    } else if (index >= this.length) {
      return this.append(value);
    } else {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.next = follower;

      newNode.prev = leader;
      follower.prev = newNode;

      this.length++;
      return this;
    }
  }

  remove(index) {
    // O(n)
    if (index === 0) {
      let nextHead = this.traverseToIndex(index + 1);
      nextHead.prev = null;
      this.head = nextHead;
    } else if (index === this.length - 1) {
      let prevElement = this.traverseToIndex(index - 1);
      prevElement.next = null;
      this.tail = prevElement;
    } else {
      let prevElement = this.traverseToIndex(index - 1);
      let nextElement = this.traverseToIndex(index + 1);
      const unwantedNode = prevElement.next;
      prevElement.next = unwantedNode.next;
      nextElement.prev = prevElement;
    }
    this.length--;
    return this;
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.prev; // Store previous node
      current.prev = current.next; // Swap prev and next
      current.next = temp; // Swap next and prev
      current = current.prev; // Move to next node (originally prev)
    }

    if (temp !== null) {
      this.head = temp.prev; // Update head to the new first node
    }
    return this;
  }

  traverseToIndex(index) {
    // O(n)
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

let myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);
myDoubleLinkedList.prepand(1);
myDoubleLinkedList.insert(1, 99);
myDoubleLinkedList.remove(4);
console.log(myDoubleLinkedList);
console.log(myDoubleLinkedList.printList());
