// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
    // todo
    // Iterative solution
    // n = # of nodes
    // Time: O(n)
    // Space: O(n)
    if (root === null) return []
    
    const queue = [ root ]
    const values = []
    
    while(queue.length > 0) {
      const current = queue.shift()
      values.push(current.val)
      
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    } 
    return values
  };
  
  module.exports = {
    breadthFirstValues,
  };
  