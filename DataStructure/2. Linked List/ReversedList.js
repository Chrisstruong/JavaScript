// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head, prev = null) => {
    // Time: O(n)
    // Space: O(n)
    if (head === null) return prev
    const next = head.next
    head.next = prev
    return reverseList(next, head)
    
  };
  
  // const reverseList = (head) => {
  //   // todo
  //   // Time: O(n)
  //   // Space: O(1)
  //   let previous = null
  //   let current = head
  //   while(current !== null) {
  //     const next = current.next
  //     current.next = previous
  //     prev = current 
  //     current = next
  //   }
  //   return previous
  // };
  
  // N  <-   a    <-     b  ->      c
  //        prev        cur        next 
  
  module.exports = {
    reverseList,
  };
  