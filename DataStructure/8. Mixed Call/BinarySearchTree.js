// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const binarySearchTreeIncludes = (root, target) => {
    // todo
    // n = # nodes
    // Best-case Complexity
    // Time: O(log(n))
    // Space: O(log(n))
    
    // Worst-Case Complexity
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    
    if (root === null) return false
    
    if (root.val === target) return true
    
    if (target < root.val) {
      return binarySearchTreeIncludes(root.left, target)
    } else {
      return binarySearchTreeIncludes(root.right, target)
    }
  };
  
  module.exports = {
    binarySearchTreeIncludes,
  };
  