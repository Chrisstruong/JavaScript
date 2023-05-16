// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }



const treeSum = (root) => {
    // todo
    // Recursive solution
  // n = # nodes
  // Time: O(n)
  // Spae : O(n)
    if (root === null) return 0
    //        3              11                   5
    return root.val + treeSum(root.left) + treeSum(root.right)
  };
  
  module.exports = {
    treeSum,
  };
  