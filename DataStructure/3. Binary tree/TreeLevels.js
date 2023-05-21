// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const treeLevels = (root) => {
    const levels = []
    fillLevels(root, levels, 0)
    
    return levels
  }
  
  const fillLevels = (root, levels, levelNum) => {
    if (root === null) return
    if (levels.length === levelNum) levels.push([ root.val ])
    else levels[levelNum].push(root.val)
    
    fillLevels(root.left, levels, levelNum + 1)
    fillLevels(root.right, levels, levelNum + 1)
  }
  
  // const treeLevels = (root) => {
  //   // todo
  //   //Iterative solution
  //   // n = # nodes
  //   // Time: O(n)
  //   // Space: O(n)
  //   if (root === null) return []
  //   const levels = []
  //   const queue = [ { node: root, levelNum: 0 } ]
  //   while (queue.length > 0) {
  //     const { node, levelNum } = queue.shift()
      
  //     if (levels.length === levelNum) {
  //       levels.push( [ node.val ] )
  //     } else{
  //       levels[levelNum].push(node.val)
  //     }
      
  //     if (node.left) {
  //       queue.push({node: node.left, levelNum: levelNum + 1})
  //     }
  //     if (node.right) {
  //       queue.push({node: node.right, levelNum: levelNum + 1})
  //     }
  //   }
  //   return levels
  // };
  
  module.exports = {
    treeLevels,
  };
   