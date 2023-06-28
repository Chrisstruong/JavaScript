class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  // pre: self, left, right
  const buildTreeInPre = (
    inOrder, 
    preOrder, 
    startIn = 0,
    endIn = inOrder.length - 1,
    startPre = 0,
    endPre = preOrder.length - 1,
  ) => {
    // todo
    if (endIn < startIn) return null
    const value = preOrder[startPre]
    const root = new Node(value)
    const mid = inOrder.indexOf(value)
    const leftSize = mid - startIn
    root.left = buildTreeInPre(
      inOrder,
      preOrder, 
      startIn,
      mid - 1,
      startPre + 1,
      startPre + leftSize,
    )
    root.right = buildTreeInPre(
      inOrder,
      preOrder, 
      mid + 1,
      endIn,
      startPre + leftSize + 1,
      endPre,
    )
    
    return root
    
  };
  
  //  const buildTreeInPre = (inOrder, preOrder) => {
  //     // todo
  //     if (inOrder.length === 0) return null
      
  //     const value = preOrder[0]
  //     const root = new Node(value)
  //     const mid = inOrder.indexOf(value)
  //     const leftIn = inOrder.slice(0, mid)
  //     const rightIn = inOrder.slice(mid + 1)
  //     const leftSize = leftIn.length
  //     const leftPre = preOrder.slice(1, 1 + leftSize)
  //     const rightPre = preOrder.slice(1 + leftSize)
  //     root.left = buildTreeInPre(leftIn, leftPre)
  //     root.right = buildTreeInPre(rightIn, rightPre)
      
  //     return root
      
  //   };
  
  module.exports = {
    buildTreeInPre,
  };
  