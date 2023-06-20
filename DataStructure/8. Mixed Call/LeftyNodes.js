// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leftyNodes = (root) => {
    // todo
    const values = []
    
    const traverse = (root, level) => {
    if (root === null) return
    
    // if there is no value stored for this level yet
    if (values.length === level) {
      values.push(root.val)
    }
    
    traverse(root.left, level + 1)
    traverse(root.right, level + 1)
  }
    
    traverse(root, 0, values)
    return values
  };
  
  
  
  // const leftyNodes = (root) => {
  //   // todo
  //   const values = []
  //   traverse(root, 0, values)
  //   return values
  // };
  
  // const traverse = (root, level, values) => {
  //   if (root === null) return
    
  //   // if there is no value stored for this level yet
  //   if (values.length === level) {
  //     values.push(root.val)
  //   }
    
  //   traverse(root.left, level + 1, values)
  //   traverse(root.right, level + 1, values)
  // }
  
  module.exports = {
    leftyNodes,
  };
  