/*
BFS - Breadth First Search - BFS is a tree/graph traversal algorithm that visits all the nodes of a 
tree/graph level by level.

When to use BFS:
- If you know a solution is not far from the root of the tree.
- If the tree is very deep and solutions are rare, BFS could take a long time.
- If the tree is very wide, DFS will need too much memory.
- If solutions are frequent but located deep in the tree, DFS could take a long time.
- Determining whether a path exists between two nodes.
- Finding the shortest path.

BFS in Graphs:
- In graphs, BFS is used to find the shortest path between two nodes.
- It starts at the root node and explores all the neighbor nodes at the present depth prior to 
moving on to the nodes at the next depth level.
- It uses a queue data structure to store the nodes that it needs to explore.
- It is used to find the shortest path between two nodes in an unweighted graph.

*/

function breadthFirstSearch() {
  let currentNode = this.root;
  let list = [];
  let queue = [];
  // putting the root node
  queue.push(currentNode);

  while (queue.length > 0) {
    // loops through untill queue is empty
    currentNode = queue.shift(); // grab the first element from queue & make it currentnode
    list.push(currentNode.value); // put into list
    if (currentNode.left) {
      // if currentnode has left child then put into queue
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      // if currentnode has right child then put into queue
      queue.push(currentNode.right);
    }
  }
  return list;
}

function breadthFirstSearchRecursive(queue, list) {
  if (!queue.length) {
    return list;
  }
  let currentNode = this.queue.shift();
  list.push(currentNode);
  if (currentNode.left) {
    // if currentnode has left child then put into queue
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    // if currentnode has right child then put into queue
    queue.push(currentNode.right);
  }
  return this.breadthFirstSearchRecursive(queue, list);
}

breadthFirstSearchRecursive([this.root], []); // tree.roots
