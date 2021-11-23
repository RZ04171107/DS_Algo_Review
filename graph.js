// GRAPH
// Vertex - a node
// Edge - connection between nodes
// weighted/unveighted - values assigned to distances between vertices
// directed/undirected
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    // add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    // find in the adjacency list the key of vertex1 and push vertex2 to the array
    // and do the same thing for vertex2
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  deleteAryElem(index, array) {
    //const itemToDelete = this.data[index];
    for (let i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1];
    }
    array.pop();
  }

  removeEdge(v1, v2) {
    // reassign the key of vertex1 to be an array that does not contain vertex2
    // var v2Index = this.adjacencyList[v1].indexOf(v2);
    // this.deleteAryElem(v2Index, this.adjacencyList[v1]);
    // var v1Index = this.adjacencyList[v2].indexOf(v1);
    // this.deleteAryElem(v1Index, this.adjacencyList[v2]);
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    // also remove the vertex from other vertices' list
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    //remove the vertex itself
    delete this.adjacencyList[vertex];
  }
}

var graph = new Graph();
graph.addVertex('Nagoya');
graph.addVertex('Auckland');
graph.addVertex('Montreal');
graph.addVertex('Sherbrooke');
graph.addEdge('Montreal', 'Auckland');
graph.addEdge('Montreal', 'Nagoya');
graph.removeVertex('Nagoya');
console.log(graph.adjacencyList);
