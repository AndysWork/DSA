/* 
Dijkstra's Algorithm - Single Source Shortest Path Algorithm
Dijkstra's algorithm is an algorithm that computes the shortest path from a single source vertex to all 
of the other vertices in a weighted graph. It produces a shortest path tree rooted at the source vertex. 
Dijkstra's algorithm is very similar to Prim's algorithm for minimum spanning tree. 
Like Prim's MST, Dijkstra's algorithm is also a Greedy algorithm.

When to use Dijkstra's Algorithm?
1. When the graph is weighted.
2. When the graph is directed or undirected.
3. When all edge weights are non-negative.
4. When we need to find the shortest path from a single source to all other vertices.

Real-world applications of Dijkstra's Algorithm:
1. Used in network routing protocols like OSPF (Open Shortest Path First).
2. Used in network packet routing.
3. Used in Google Maps to find the shortest path between two locations.
4. Used in IP routing to find the shortest path to deliver packets.

*/

/* 
Plan
Implement the Bellman-Ford algorithm to find the shortest paths from a single source vertex to all other vertices in a weighted graph.
Initialize the distance to the source vertex as 0 and all other vertices as infinity.
Relax all edges |V| - 1 times, where |V| is the number of vertices.
Check for negative-weight cycles by verifying if any edge can still be relaxed.

*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent[1] <= element[1]) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[1] < element[1]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[1] < element[1]) ||
          (swap !== null && rightChild[1] < leftChild[1])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(source, destination, weight) {
    if (!this.adjList.has(source)) {
      this.adjList.set(source, []);
    }
    this.adjList.get(source).push({ node: destination, weight: weight });

    // For undirected graph, add the reverse edge
    if (!this.adjList.has(destination)) {
      this.adjList.set(destination, []);
    }
    this.adjList.get(destination).push({ node: source, weight: weight });
  }

  dijkstra(source) {
    const distances = new Array(this.vertices).fill(Infinity);
    distances[source] = 0;

    const minHeap = new MinHeap();
    minHeap.insert([source, 0]);

    while (!minHeap.isEmpty()) {
      const [currentVertex, currentDistance] = minHeap.extractMin();

      if (currentDistance > distances[currentVertex]) continue;

      const neighbors = this.adjList.get(currentVertex) || [];
      for (const neighbor of neighbors) {
        const { node: neighborVertex, weight } = neighbor;
        const distance = currentDistance + weight;

        if (distance < distances[neighborVertex]) {
          distances[neighborVertex] = distance;
          minHeap.insert([neighborVertex, distance]);
        }
      }
    }

    this.printSolution(distances);
  }

  printSolution(distances) {
    console.log("Vertex Distance from Source");
    for (let i = 0; i < distances.length; i++) {
      console.log(`${i} \t\t ${distances[i]}`);
    }
  }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, 9);
graph.addEdge(0, 2, 6);
graph.addEdge(0, 3, 5);
graph.addEdge(0, 4, 3);
graph.addEdge(2, 1, 2);
graph.addEdge(2, 3, 4);

graph.dijkstra(0);
