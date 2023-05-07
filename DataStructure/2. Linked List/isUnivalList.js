// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head, prevVal = null) => {
    if (head === null) return true
    
    if(prevVal !== null && head.val !== prevVal) {
      return false
    }
    
    return isUnivalueList(head.next, head.val)
    
  }
  
  // const isUnivalueList = (head) => {
  //   // todo
  //   // Iterative Iterative
  //   // n = # of nodes
  //   // Time: O(n)
  //   // Space: O(1)
  //   let current = head
  //   while (current!==null) {
  //     if (current.val !== head.val) return false
  //     current = current.next
  //   }
  //   return true
  // };
  
  module.exports = {
    isUnivalueList,
  };
  