// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }



// const treeSum = (root) => {
//   // todo
//   // Recursive solution
// // n = # nodes
// // Time: O(n)
// // Spae : O(n)
//   if (root === null) return 0
//   //        3              11                   5
//   return root.val + treeSum(root.left) + treeSum(root.right)
// };

const treeSum = (root) => {
    // Iterative solution
    // Time: O(n)
    // Space: O(n)
    if (root === null) return 0
    
    let totalSum = 0
    const queue = [ root ]
    
    while (queue.length > 0) {
      const current = queue.shift()
      totalSum += current.val
      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    }
    return totalSum
  }
  
  module.exports = {
    treeSum,
  };
  