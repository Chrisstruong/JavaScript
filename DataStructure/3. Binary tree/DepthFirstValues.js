class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // const depthFirstValues = (root) => {
  //   // to do
  //   if (root === null) return []
  //   const result = []
  //   const stack = [ root ] // [null]
  //   while(stack.length > 0) {
  //     const current = stack.pop();
  //     result.push(current.val)
      
  //     if(current.right) stack.push(current.right)
  //     if(current.left) stack.push(current.left)
  //   } 
  //   return result
  // };
  
  const depthFirstValues = (root) => {
    if (root === null) return []
    const leftValues = depthFirstValues(root.left)//[b, d, e]
    const rightValues = depthFirstValues(root.right)//[c, f]
    return [ root.val, ...leftValues, ...rightValues ]
  }
  
  const peeps = ['phelipe', 'jason', 'raj', 'abby']
  const newPeeps = ['alvin', ...peeps, 'brian']
  console.log(newPeeps)
  
  
  module.exports = {
    depthFirstValues,
  };
  