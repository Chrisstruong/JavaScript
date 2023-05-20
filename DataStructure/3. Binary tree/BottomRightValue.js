// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const bottomRightValue = (root) => {
    // todo
    // n = # nodes
    // Space: O(n)
    // Time: O(n)
    const queue = [ root ]
    
    let current = null
    
    while (queue.length > 0) {
      current = queue.shift()
      
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      if (queue.length === 0) return current.val
    }
    
    
  };
  
  module.exports = {
    bottomRightValue,
  };
  