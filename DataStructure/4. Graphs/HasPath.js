const hasPath = (graph, src, dst) => {
    // todo
    // Breath First Iterative. Please keep in mind that breath first only has iterative
    const queue = [ src ]
    
    while (queue.length > 0) {
      const current = queue.shift()
      
      if (current === dst) return true
      
      for (let neighbor of graph[current]) {
        queue.push(neighbor) 
      }
      
    }
    return false
      
  };
  
  
  // const hasPath = (graph, src, dst) => {
  //     // todo
  //     if (src === dst) return true
      
  //     for (let neighbor of graph[src]){
  //       if (hasPath(graph, neighbor, dst) === true){
  //           return true
  //       }
  //     } 
  //     return false
  //   };
    
    module.exports = {
      hasPath,
    };
    