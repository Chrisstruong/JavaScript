// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
    // todo
    // Recursive Solution
    // Time: O(n)
    // SpacE: O(n)
    if (root === null) return 0
    const match = root.val === target ? 1 : 0
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
    
  };
  
  module.exports = {
    treeValueCount,
  };
  