/* 
Graph - collection of nodes and connections between those nodes.
Attributes:
- Nodes (Vertices) - points in the graph
- Edges - connections between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distances between vertices

Why Graphs?
- Social Networks
- Location/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Google Maps shows trips duration using graphs

Problems:
- Representing relationships between data
- Modeling real-world systems
- Pathfinding
- Representing networks

Pros:
- Relationship representation
- Flexibility
- Ability to represent data in multiple ways

Cons:
- Scaling challenges
- Complex
- Harder to reason about

Directed Acyclic Graphs (DAGs):
- Directed Graphs with no cycles
- Topological Ordering
- Used in task scheduling, data compression, etc.

Example -

        2 ------ 0
       /  \
      /    \
     1------3

Edge List -
const graph = [[0,2], [2,3], [2,1], [1,3]];

Adjacent List -
const graph = [[2], [2,3], [0,1,3], [1,2]]
                0     1       2       3     -----> Index of the array is the actual value of the graph node.

Adjacent Matrix - Connection matrix between nodes
const graph = [
[0,0,1,0],
[0,0,1,1],
[1,1,0,1],
[0,1,1,0]
]
*/

class Graph {
  constructor() {
    this.noOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.noOfNodes++;
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1].includes(node2))
      this.adjacentList[node1].push(node2);

    if (!this.adjacentList[node2].includes(node1))
      this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
