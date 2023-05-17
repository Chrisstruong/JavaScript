// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    // todo
    // Breath first code iterative
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    const queue = [ root ]
    let min = Number.MAX_VALUE
    while (queue.length > 0) {
      const current = queue.shift()
      if (current.val < min) min = current.val
      
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
    return min
  };
  
  module.exports = {
    treeMinValue,
  };
  