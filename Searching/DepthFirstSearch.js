/* 
DFS - Depth First Search is a graph traversal algorithm. It starts at the root node and 
explores as far as possible along each branch before backtracking.

When we implement DFS, we use a stack data structure to store the nodes that we need to explore.

When to use DFS?
- When we need to visit all the nodes in the graph
- When we need to visit the nodes in a specific order
- When we need to visit the nodes in a specific way

     101
    /   \
  33    105

Inorder Traversal: Left, Root, Right - 33, 101, 105 - Ordered
Preorder Traversal: Root, Left, Right - 101, 33, 105 - When we create a tree
Postorder Traversal: Left, Right, Root - 33, 105, 101 - Deleting a tree

DFS in Graphs:
- In graphs, DFS is used to traverse the vertices or nodes of a graph.
- It starts at the root node and explores as far as possible along each branch before backtracking.
- It uses a stack data structure to store the nodes that it needs to explore.
- It is used to visit all the nodes of a graph and find the connected components of a graph.
*/

function depthFirstSearchInOrder() {
  return traverseInOrder(this.root, []);
}

function depthFirstSearchPreOrder() {
  return traversePreOrder(this.root, []);
}

function depthFirstSearchPostOrder() {
  return traversePostOrder(this.root, []);
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}
