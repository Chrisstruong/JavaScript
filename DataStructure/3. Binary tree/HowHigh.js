// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
    // todo
    // n = # nodes
    // Time : O(n)
    // Space : O(n)
    if (node === null) return -1
    
    const leftTreeHeight = howHigh(node.left)
    const rightTreeHeight = howHigh(node.right)
    return 1 + Math.max(leftTreeHeight, rightTreeHeight)
  };
  
  module.exports = {
    howHigh,
  };
  