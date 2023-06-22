const rareRouting = (n, roads) => {
    // todo
    // n = # nodes
    // Time: O(n^2)
    // Space: O(n)
    const graph = makeGraph(n, roads)
    console.log(graph)
    const visited = new Set()
    const valid = validate(graph, '0', visited, null)
    return valid && visited.size === n
  };
  
  const validate = (graph, node, visited, previousNode) => {
    //todo
    if (visited.has(node)) {
      return false
    }
    visited.add(node)
    
    for (let neighbor of graph[node]) {
      if (neighbor !== previousNode && validate(graph, neighbor, visited, node) === false) {
        return false
      }
    }
    
    return true
  } 
  
  const makeGraph = (n, roads) => {
    const graph = {}
    
    for (let city = 0; city < n; city += 1) {
      graph[city] = []
    }
    
    for (let road of roads) {
      const [a, b] = road
      graph[a].push(String(b))
      graph[b].push(String(a))
    }
    
    return graph
  }
  
  
  
  module.exports = {
    rareRouting,  
  };
  