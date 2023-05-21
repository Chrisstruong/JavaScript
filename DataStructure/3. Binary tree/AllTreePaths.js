// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
    // todo
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    if (root === null) return []
    if (root.left === null && root.right === null) return [ [root.val] ]
    
    const paths = []
    const leftSubPaths = allTreePaths(root.left)
    // [
    //  [a, b, d],
    //  [a, b, e],
    //  [a, c, f]
    //]
    for (let subPath of leftSubPaths){
      paths.push([root.val, ...subPath])
    }
    const rightSubPaths = allTreePaths(root.right)
     for (let subPath of rightSubPaths){
      paths.push([root.val, ...subPath])
    }
    return paths
  };
  
  module.exports = {
    allTreePaths,
  };
   