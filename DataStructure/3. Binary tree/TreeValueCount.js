// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
    // todo
    if (root === null) return 0
    
    const queue = [root]
    let count = 0
    
    while(queue.length > 0) {
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
  