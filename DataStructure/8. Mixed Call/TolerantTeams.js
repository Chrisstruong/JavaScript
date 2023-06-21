const tolerantTeams = (rivalries) => {
    // todo
    // e = # rivalries
    // n = # people
    // Time: O(e)
    // Space: O(e)
    
    const graph = buildGraph(rivalries)
    
    const coloring = {}
    
    for (let node in graph) {
      if (!(node in coloring) && !isBipartie(graph, node, coloring, false)) {
        return false
      }
    }
    
    return true
  };
  
  const isBipartie = (graph, node, coloring, currentColor) => {
    if (node in coloring) return coloring[node] === currentColor
    coloring[node] = currentColor
    
    for (let neighbor of graph[node]) {
      if (!isBipartie(graph, neighbor, coloring, !currentColor)) {
        return false
      }
    }
    return true
    
  }
  
  const buildGraph = (edges) => {
    const graph = {}
    
    for (let edge of edges) {
      const [ a, b ] = edge 
      if (!(a in graph)) graph[a] = []
      if (!(b in graph)) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    }
    
    return graph
  }
  
  module.exports = {
    tolerantTeams,
  };
  