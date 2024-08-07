/* Binary Heap - A binary heap is a binary tree with two additional constraints:
    1. Shape Property: A binary heap is a complete binary tree; that is, 
    all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.
    2. Heap Property: The key stored in each node is either greater than or equal to (≥) or 
    less than or equal to (≤) the keys in the node's children, according to some total order.

Attributes:
- Complete Binary Tree: A binary tree is called a complete binary tree if all levels of the tree are fully filled except possibly for the lowest level, which is filled from left to right.
- Binary Heap is a complete binary tree.
- Binary Heap is a binary tree with the heap property and the shape property.

Types of Binary Heap:
- Min Heap: In a Min-Heap, the key at the root must be minimum among all keys present in the heap.
- Max Heap: In a Max-Heap, the key at the root must be maximum among all keys present in the heap.

Pros:
- Better than O(n)
- Priority
- Flexible Size

Cons:
- No O(1) Operation

Where to use:
- When you need to find the minimum or maximum element.
- When you need to delete the minimum or maximum element.
- When you need to extract the minimum or maximum element.
- When you need to change the priority of elements.

Real life use cases:
- Heap Sort
- Priority Queue
- Dijkstra's Algorithm
- Prim's Algorithm
- Huffman Coding
- Kth Largest Element in an Array
   
*/
