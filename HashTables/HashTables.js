/* 
Hash Tables - A data structure that stores key-value pairs. 
They are like arrays, but the keys are not ordered. 
Unlike arrays, hash tables are fast for all of the following operations: 
finding values, adding new values, and removing values!
a. append - O(1)
b. lookup - O(1)
c. delete - O(1)
d. search - O(1)

Hash Functions - A function that converts a key to an integer. 
Put keys through a hash function to get an index and that process is random,
which can cause collisions.
when collisions occur, then time complexity is O(n/k) => O(n) for search, delete, and append.

Types of hash functions:
1. Simple hash functions - Not very good, but simple.
2. Complex hash functions - Better, but more complex.

Hash Collisions - When a hash function returns the same index for two different keys.
There are many strategies for dealing with hash collisions, but we'll focus on two:
1. Separate Chaining - At each index in our array we store values 
 using a more sophisticated data structure (e.g. an array or a linked list).
2. Linear Probing - When we find a collision, we search through the array to find the next empty slot.

Map - A data structure that stores key-value pairs, but unlike a hash table.
a. An object in JavaScript is a type of map.
b. A map is a collection of elements where each element is stored as a pair of key and value
c. A map maintains insertion order.

Set - A data structure that stores just keys, no values.
a. A set is a collection of elements where each element is unique.

Array vs Hash Tables - 
a. Arrays are ordered, but hash tables are not.
b. The hash table is faster for all operations.
c. Hash tables do not have order, so you can't reverse them.
d. Hash tables are great for quick lookups.

When to use hash tables?
a. When you don't need order.
b. When you need fast lookups.
c. When you need fast inserts and deletes.

When not to use hash tables?
a. When you need order.
b. When you need a lot of insertions and deletions.

Pros and Cons of Hash tables:
Pros:
1. Fast lookups - O(1) time complexity.
2. Fast inserts - O(1) time complexity.
3. Flexible keys - You can use anything as a key.
Cons:
1. Unordered - No order to keys.
2. Slow key iteration - Not ideal for iterating over keys.
3. Single-directional - Can't go backward.
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]); // to handle hash collisions
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    // O(n)
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]); // first key in the bucket
      }
    }
    return keysArray;
  }

  keysWithoutCollinsion() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];

    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell & contains single key value pair
      if (this.data[i]?.length === 1) {
        result.push(this.data[i][0][0]);
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
console.log(myHashTable);
myHashTable.get("grapes");
console.log(myHashTable.keys());
console.log(myHashTable.keysWithoutCollinsion());
