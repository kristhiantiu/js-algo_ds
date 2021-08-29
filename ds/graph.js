class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(name) {
    if (!(name in this.adjacencyList)) {
      this.adjacencyList[name] = [];
    }
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }
    return this;
  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
  }

  removeVertex(vertex) {
    if (vertex in this.adjacencyList) {
      for (let other of this.adjacencyList[vertex]) {
        this.removeEdge(other, vertex) 
      }
      delete this.adjacencyList[vertex]
    }
  }

  depthFirstRecursiveReference(start){
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        results.push(vertex);
        // for(let neighbor of adjacencyList[vertex]) { // doesnt
        adjacencyList[vertex].forEach(neighbor => { // works
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start);

    return results;
  }

  dfsRecursive(start) {
    let visited = {}
    let results = []
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true
      results.push(vertex)
      const arr = adjacencyList[vertex]
      // adjacencyList[vertex].forEach(neighbor => {
      for(let neighbor of arr) {
      // for(let i=0; i < adjacencyList[vertex].length; ++i) {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      }
    })(start)
    return results;
  }

  dfsIterative(start) {
    const visitStack = []
    const visited = new Set()
    const results = []
    visitStack.push(start)
    while(visitStack.length > 0) {
      const vertex = visitStack.pop()
      if (!visited.has(vertex)) {
        visited.add(vertex)
        results.push(vertex)
        for(let neighbor of this.adjacencyList[vertex]) {
          visitStack.push(neighbor)
        }
      }
    }
    return results;
  }

  bfsIterative(start) {
    const visitQueue = []
    const visited = new Set()
    const results = []
    visitQueue.push(start)
    while(visitQueue.length > 0) {
      const vertex = visitQueue.shift()
      if (!visited.has(vertex)) {
        visited.add(vertex)
        results.push(vertex)
        for(let neighbor of this.adjacencyList[vertex]) {
          visitQueue.push(neighbor)
        }
      }
    }
    return results;
  }


}


const g = new Graph()
g.addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F')

g.addEdge('A', 'B')
  .addEdge('A', 'C')
  .addEdge('B', 'D')
  .addEdge('C', 'E')
  .addEdge('D', 'E')
  .addEdge('D', 'F')
  .addEdge('E', 'F')

console.log(g)
let output2 = g.depthFirstRecursiveReference('A')
console.log('CORRECT ANSWER : ', output2)

let output3 = g.dfsRecursive('A')
console.log('ACTUAL ANSWER [recursion] : ', output3)

let output4 = g.dfsIterative('A')
console.log('ACTUAL ANSWER [iteration] : ', output4)

let output5 = g.bfsIterative('A')
console.log('BFS ACTUAL ANSWER [iteration] : ', output5)