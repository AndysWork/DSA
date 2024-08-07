/* 
1. Binary Tree - A binary tree is a tree data structure in which each node has at most two children,
referred to as the left child and the right child.

2. Types of Binary Trees:
    1. Full Binary Tree - A binary tree in which each node has either 0 or 2 children.
    2. Complete Binary Tree - A binary tree in which all levels are completely filled except possibly for the last level,
    which is filled from left to right.
    3. Perfect Binary Tree - A binary tree in which all internal nodes have exactly two children and all leaf nodes are at the same level.
    4. Balanced Binary Tree - A binary tree in which the height of the left and right subtrees of any node differ by at most one.
    5. Degenerate (or pathological) Tree - A binary tree in which each parent node has only one child node.
    6. Skewed Binary Tree - A binary tree in which all nodes have only one child node.
    7. Height-Balanced Binary Tree - A binary tree in which the height of the left and right subtrees of any node differ by at most one.
    8. Complete Binary Search Tree - A binary search tree in which all levels are completely filled except possibly for the last level,
    which is filled from left to right.
    9. Full Binary Search Tree - A binary search tree in which each node has either 0 or 2 children.
    10. Perfect Binary Search Tree - A binary search tree in which all internal nodes have exactly two children and all leaf nodes are at the same level.
    11. Balanced Binary Search Tree - A binary search tree in which the height of the left and right subtrees of any node differ by at most one.
    12. Degenerate (or pathological) Binary Search Tree - A binary search tree in which each parent node has only one child node.
    13. Skewed Binary Search Tree - A binary search tree in which all nodes have only one child node.
    14. Height-Balanced Binary Search Tree - A binary search tree in which the height of the left and right subtrees of any node differ by at most one.
    15. AVL Tree - A self-balancing binary search tree in which the height of the left and right subtrees of any node differ by at most one.
    16. Red-Black Tree - A self-balancing binary search tree in which each node has an extra bit for denoting the color of the node.
    17. Splay Tree - A self-adjusting binary search tree in which recently accessed elements are quick to access again.
    18. B-Tree - A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
    19. B+ Tree - A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
    20. Segment Tree - A tree data structure used for storing information about intervals or segments.

3. Pros:
    1. Binary trees are simple and easy to implement.
    2. Binary trees are efficient for searching, inserting, and deleting elements.
    3. Binary trees can be used to represent sorted lists.
    4. Binary trees can be used to create decision trees.
4. Cons:
    1. Binary trees can be slow for some operations.
    2. Binary trees require more memory than arrays and linked lists.

5. Where to use Binary Trees?
    1. To represent hierarchical data.
    2. To store data in a way that makes it easy to search, insert, and delete.
    3. To represent sorted lists.
    4. To create decision trees.
    5. To create binary search trees.
    6. To create balanced trees.

6. Time Complexity:
    1. Searching: O(log n)
    2. Insertion: O(log n)
    3. Deletion: O(log n)
    4. Traversal: O(n)

7. Perfect Binary Tree Properties: 
    1. The number of total nodes on each level doubles as we move down the tree.
    2. The number of nodes on the last level is equal to the sum of the number of nodes on all other levels plus one.
    3. The number of nodes on the last level is equal to 2^h, where h is the height of the tree.
    4. The number of total nodes in a perfect binary tree is equal to 2^(h+1) - 1, where h is the height of the tree.
    5. The height of a perfect binary tree is equal to log(n+1) - 1, where n is the number of nodes in the tree.

8. Full Binary Tree Properties:
    1. The number of leaf nodes is equal to the number of internal nodes plus one.
    2. The number of leaf nodes is equal to the number of nodes with a degree of 0.
    3. The number of internal nodes is equal to the number of nodes with a degree of 2 plus one.
    4. The number of internal nodes is equal to the number of leaf nodes minus one.
    5. The number of nodes in a full binary tree is equal to 2n - 1, where n is the number of leaf nodes.

*/

class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
