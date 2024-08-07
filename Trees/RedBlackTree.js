/* 
Red-Black Tree - Red-Black tree is a self-balancing binary search tree in which each node 
    contains an extra bit for denoting the color of the node, either red or black.

Properties:
- Every node is either red or black.
- The root is black.

Attributes:
- Red-Black Property: Every red node must have two black child nodes.
- Black Height: The number of black nodes from the root to a null pointer.
- Red-Black Tree is a balanced binary search tree.

When to use Red-Black Tree?
- When you want a balanced tree.
- When you want faster insertion and deletion compared to AVL tree.
- When you are worried about the memory consumption.
- When you are worried about the slower insertion and deletion of AVL tree.

Real life use cases:
- C++ STL map and multimap.
- Linux kernel process scheduling.
- Java TreeMap.

Time Complexity:
- Insertion: O(log n)
- Deletion: O(log n)
- Searching: O(log n)

Pros:
- Faster insertion and deletion compared to AVL tree.
- Balanced tree.
- Red-Black trees are more balanced compared to AVL trees.
- Red-Black trees are more flexible compared to AVL trees.

Cons:
- Slower lookups compared to AVL tree.
- More memory consumption compared to AVL tree.
- More rotations during insertion and deletion compared to AVL tree.
- Slower because of the rotations during insertion and deletion compared to AVL tree.

*/
