const topologicalOrder = (graph) => {
    // todo
    // n = # nodes
    // e = # edges
    // Time: O(n+e)
    // Space: O(n)
    const numParents = {}
    // for loop for nodes
    for (let node in graph) {
      numParents[node] = 0
    }
    
    // for loop for edges
    for (let node in graph) {
      for (let child of graph[node]) {
        numParents[child] += 1
      }
    }
    
    const ready = []
    for (let node in numParents) {
      if (numParents[node] === 0) ready.push(node)
    }
    
    const order = []
    while (ready.length > 0) {
      const node = ready.pop()
      order.push(node)
      for (let child of graph[node]) {
        numParents[child] -= 1
        if (numParents[child] === 0) ready.push(child)
      }
    }
    
    return order
  };
  
  module.exports = {
    topologicalOrder,
  };
  