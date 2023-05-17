// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const treeMinValue = (root) => {
//   // todo
//   // Breath first code iterative
//   // n = # nodes
//   // Time: O(n)
//   // Space: O(n)
//   const queue = [ root ]
//   let min = Number.MAX_VALUE
//   while (queue.length > 0) {
//     const current = queue.shift()
//     if (current.val < min) min = current.val
    
//     if(current.left) queue.push(current.left)
//     if(current.right) queue.push(current.right)
//   }
//   return min
// };

// const treeMinValue = (root) => {
  // todo
  // Breath first code iterative
  // n = # nodes
  // Time: O(n)
  // Space: O(n)
//   const queue = [ root ]
//   let min = Number.MAX_VALUE
//   while (queue.length > 0) {
//     const current = queue.shift()
//     if (current.val < min) min = current.val
    
//     if(current.left) queue.push(current.left)
//     if(current.right) queue.push(current.right)
//   }
//   return min
// };

// const treeMinValue = (root) => {
//  
//   let smallest = Infinity
//   const stack = [ root ]
//   while(stack.length > 0) {
//     const current = stack.pop()
//     if(current.val < smallest) smallest = current.val
    
//     if (current.left) stack.push(current.left)
//     if (current.right) stack.push(current.right)
//   }
  
//   return smallest
// }


const treeMinValue = (root) => {
    if (root === null) return Infinity
    const leftMin = treeMinValue(root.left)
    const rightMin = treeMinValue(root.right)
    return Math.min(root.val, leftMin, rightMin)
  }
  
module.exports = {
    treeMinValue,
  };
  