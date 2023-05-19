// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeValueCount = (root, target) => {
//   // todo
//   // Recursive Solution
//   // Time: O(n)
//   // SpacE: O(n)
//   if (root === null) return 0
//   const match = root.val === target ? 1 : 0
//   return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
// };

const treeValueCount = (root, target) => {
    // todo
    // Iterative Solution
    // Time: O(n)
    // Space: O(n)
    
    if (root === null) return 0
    
    let count = 0
    const queue = [root]
    while (queue.length > 0) {
      const current = queue.shift()
      if (current.val === target) count++
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return count
    
  };
  
  module.exports = {
    treeValueCount,
  };
  