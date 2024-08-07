/* 
Binary Search Tree - BST is a tree data structure in which each node has at most two children, 
which are referred to as the left child and the right child.

When to use BST?
- When you need to store unique elements in sorted order.
- When you need to search for elements quickly.
- When you need to insert and delete elements quickly.

Time Complexity:
- Insertion: O(log n)
- Deletion: O(log n)
- Searching: O(log n)

Space Complexity: O(n)

Properties:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- The left and right subtree each must also be a binary search tree.
- There must be no duplicate nodes.

Pros:
- Better than O(n)
- Flexible Size
- Ordered

Cons:
- No O(1) Operation

Balanced vs Unbalanced BST:
- Balanced BST: A binary search tree is called balanced if the height of the tree is O(log n).
- Unbalanced BST: A binary search tree is called unbalanced if the height of the tree is O(n).
*/
//         9
//    4        20
// 1     6   15   170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.left) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        // We got a match

        //Option 1 - No Right Child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // If Parent > Current Value, make current left child as a left child of Parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              // If Parent < Current Value, make current left child as a right child of Parent
              parentNode.right = currentNode.left;
            }
          }
        } else if (currentNode.right.left === null) {
          // Option 2 - Right Child which doesn't have left child
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            // If Parent > Current Value, make current right child as a left child of Parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              // If Parent < Current Value, make current right child as a right child of Parent
              parentNode.right = currentNode.right;
            }
          }
        } else {
          // Option 3 - Right Child which has a left child
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(1);
tree.insert(15);
