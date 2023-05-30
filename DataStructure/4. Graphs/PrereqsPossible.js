const prereqsPossible = (numCourses, prereqs) => {
    // todo
    // n = # courses
    // p = # prereqsPossible
    // Time: O(n+p)
    // Space: O(n+p)
    const graph = buildGraph(numCourses, prereqs)
    const visiting = new Set()
    const visited = new Set()
    
    for (let node in graph) {
      if (hasCycle(graph, node, visiting, visited)) {
        return false
      }
    }
    
    return true
  };
  
  const hasCycle = (graph, node, visiting, visited) => {
    if (visiting.has(node)) return true
    visiting.add(node)
    
    for (let neighbor of graph[node]) {
      if (hasCycle(graph, neighbor, visiting, visited)) {
        return true
      }
    }
    visiting.delete(node)
    visited.add(node)
    
    return false
  }
  
  const buildGraph = (numCourses, prereqs) => {
    const graph = {}
    for (let course = 0; course < numCourses; course += 1 ) {
      graph[course] = []
    }
    
    for (let prereq of prereqs) {
      const [ courseA, courseB ] = prereq
      graph[courseA].push(String(courseB))
    }
    
    return graph
  }
  
  
  module.exports = {
    prereqsPossible,
  };
  