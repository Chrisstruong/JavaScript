// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
    const leaves = []
    fillLeaves(root, leaves)
    return leaves
  }
  
  const fillLeaves = (root, leaves) => {
    if (root === null) return
    if (root.left === null && root.right === null) leaves.push(root.val)
    
    fillLeaves(root.left, leaves)
    fillLeaves(root.right, leaves)
  }
  
  
  // const leafList = (root) => {
  //   // todo
  //   // Iterative solution 
  //   if (root === null) return []
    
  //   const leaves = []
  //   const stack = [ root ]
  //   while (stack.length > 0) {
  //     const current = stack.pop()
  //     if (current.left === null && current.right === null) leaves.push(current.val)
      
  //     if (current.right) stack.push(current.right)
  //     if (current.left) stack.push(current.left)
  //   }
  //   return leavess
  // };
  
  module.exports = {
    leafList,
  };
  