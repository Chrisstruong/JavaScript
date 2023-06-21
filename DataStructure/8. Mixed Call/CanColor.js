const canColor = (graph) => {
    // todo
    // n = # nodes
    // Time: O(n^2)
    // Space: O(n)
    const coloring = {}
    
    for (let node in graph) {
        if (!(node in coloring) && validate(graph, node, coloring, false) === false){
          return false
        }
    }
    
    return true
  };
  
  const validate = (graph, node, coloring, currentColor) => {
    if (node in coloring) return coloring[node] === currentColor
    
    coloring[node] = currentColor
    
    for (let neighbor of graph[node]){
      if (validate(graph, neighbor, coloring, !currentColor) === false) {
        return false
      }
    }
    
    return true
  }
  
  module.exports = {
    canColor,
  };
  