// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeIncludes = (root, target) => {
//   // todo
//   // Iterative Solution based on breath first value.
//   // n = # nodes
//   // Time: O(n)
//   // Space: O(n)
//   if (root === null ) return false
//   const queue = [ root ]
//   while (queue.length > 0) {
//     const current = queue.shift()
//     if(current.val === target) return true
    
//     if(current.left) queue.push(current.left)
//     if(current.right) queue.push(current.right)
//   }
//   return false
// };

const treeIncludes = (root, target) => {
    // Recursive solution
    if (root === null) return false
    if (root.val === target) return true
    return treeIncludes(root.left, target) || treeIncludes(root.right, target)
  }
  
  
  module.exports = {
    treeIncludes,
  };
  