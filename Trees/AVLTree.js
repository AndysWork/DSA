/* AVL Tree - AVL tree is a self-balancing binary search tree in which the difference of 
heights of the left and right subtrees of the root is at most 1. 

Attributes:
- Balance Factor: The balance factor of a node is the height of the right subtree minus
 the height of the left subtree.
- Rotation: The operation of rotating the nodes in a tree in order to satisfy the balance factor.
- Left Rotation: The operation of rotating the nodes in a tree to the left.
- Right Rotation: The operation of rotating the nodes in a tree to the right.
- Left Right Rotation: The operation of rotating the nodes in a tree to the left and then to the right.
- Right Left Rotation: The operation of rotating the nodes in a tree to the right and then to the left.

Pros:
- Faster Lookups
- Balanced
- AVL trees are more balanced compared to Red-Black Trees.
- AVL trees are more rigidly balanced compared to Red-Black Trees.

Cons:
- Slower insertion and deletion.
- More memory consumption.
- More rotations during insertion and deletion.
- Slower because of the rotations during insertion and deletion.

Where to use:
- When you want faster lookups.
- When you want a balanced tree.
- When you are not worried about the memory consumption.
- When you are not worried about the slower insertion and deletion.

Real life use cases:
- Database indexing.
- Symbol tables in compilers.

Example:

*/
