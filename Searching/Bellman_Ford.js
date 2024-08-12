/* 
Bellman-Ford Algorithm - Single Source Shortest Path Algorithm
The Bellman-Ford algorithm is an algorithm that computes shortest paths from a single source vertex to 
all of the other vertices in a weighted graph. It is slower than Dijkstra's algorithm for the same problem,
but more versatile, as it is capable of handling graphs in which some of the edge weights are negative 
numbers.

When to use Bellman-Ford Algorithm?
1. When the graph contains negative weight edges.
2. When we need to find the shortest path from a single source to all other vertices.

Real-world applications of Bellman-Ford Algorithm:
1. Used in network routing protocols like EIGRP.
2. Used in network packet routing.
3. Used in the implementation of distance vector routing protocol.

*/

/*
Plan
Implement the Bellman-Ford algorithm to find the shortest paths from a single source vertex to all other vertices in a weighted graph.
Initialize the distance to the source vertex as 0 and all other vertices as infinity.
Relax all edges |V| - 1 times, where |V| is the number of vertices.
Check for negative-weight cycles by verifying if any edge can still be relaxed.
*/

class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push(new Edge(source, destination, weight));
  }

  bellmanFord(source) {
    const distances = new Array(this.vertices).fill(Infinity);
    distances[source] = 0;

    // Relax all edges |V| - 1 times
    for (let i = 1; i < this.vertices; i++) {
      for (const edge of this.edges) {
        const { source, destination, weight } = edge;
        if (
          distances[source] !== Infinity &&
          distances[source] + weight < distances[destination]
        ) {
          distances[destination] = distances[source] + weight;
        }
      }
    }

    // Check for negative-weight cycles
    for (const edge of this.edges) {
      const { source, destination, weight } = edge;
      if (
        distances[source] !== Infinity &&
        distances[source] + weight < distances[destination]
      ) {
        console.log("Graph contains a negative-weight cycle");
        return;
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
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

graph.bellmanFord(0);
