/* 
LinkedList - A linked list is a linear data structure, in which the elements are not stored at 
contiguous memory locations. The elements in a linked list are linked using pointers.

What is a linked list?
A linked list is a sequence of elements in which every element is connected to the next element.

const fruits = ['apples', 'bananas', 'cherries'];
Linkedlist - apples -> bananas -> cherries
apples
5678 -> bananas
        6978 -> cherries
                1234 -> null

Points to remember:
1. The linked list is a dynamic data structure.
2. The number of nodes can grow or shrink during the program execution.
3. The linked list is a collection of nodes where each node contains a data field and a reference(link) 
to the next node in the list.
4. The linked list is a self-referential data structure because it contains a pointer or link to 
another data element.
5. The linked list allows dynamic memory allocation, deallocation, and re-allocation of memory.
6. The linked list can be traversed in both directions.
7. The linked list is a data structure that can store an infinite number of elements.

prepending - add a new node at the beginning of the linked list. O(1)
appending - add a new node at the end of the linked list. O(1)
searching - search for a specific node in the linked list. O(n)
deleting - delete a node from the linked list. O(n)
inserting - insert a new node at any position in the linked list. O(n)

Types of linked list:
1. Singly linked list
2. Doubly linked list
3. Circular linked list
4. Doubly circular linked list
5. Multi-level linked list
6. Skip list
7. XOR linked list
8. Unrolled linked list
9. Array linked list
10. Hashed linked list

What is pointer in javascript?
A pointer is a reference to a memory address. In JavaScript, we don't have direct access to memory.
In JavaScript, we can use a reference to an object as a pointer.
const obj1 = {a: true}
const obj2 = obj1; // obj2 is a pointer to obj1

*/

// 10 -> 5 -> 16

// const myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // O(1)
    if (value === null) return;

    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // O(1)
    if (value === null) return;
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    // O(n)
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    } else {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
  }

  remove(index) {
    // O(n)
    if (index === 0) {
      let nextElement = this.traverseToIndex(index + 1);
      this.head = nextElement;
    } else if (index === this.length - 1) {
      let prevElement = this.traverseToIndex(index - 1);
      prevElement.next = null;
      this.tail = prevElement;
    } else {
      let prevElement = this.traverseToIndex(index - 1);
      const unwantedNode = prevElement.next;
      prevElement.next = unwantedNode.next;
    }
    this.length--;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
console.log(myLinkedList);
console.log(myLinkedList.printList());
