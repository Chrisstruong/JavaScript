class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const depthFirstValues = (root) => {
    // to do
    if (root === null) return []
    const result = []
    const stack = [ root ] // [null]
    while(stack.length > 0) {
      const current = stack.pop();
      result.push(current.val)
      
      if(current.right) stack.push(current.right)
      if(current.left) stack.push(current.left)
    } 
    return result
  };
  
  module.exports = {
    depthFirstValues,
  };
  