class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const treeIncludes = (root, target) => {
    // todo
    // Iterative Solution based on breath first value.
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    if (root === null) return false
    
    const queue = [ root ]
    
    while (queue.length > 0) {
      const current = queue.shift()
      
      if (current.val === target) return true
      
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    }
    return false
  };
  
  
  module.exports = {
    treeIncludes,
  };
  