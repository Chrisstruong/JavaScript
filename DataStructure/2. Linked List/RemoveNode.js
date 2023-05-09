// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
    // Time : O(n)
    // Space: O(n)
    if (head === null) return null
    if (head.val === targetVal) return head.next
    head.next = removeNode(head.next, targetVal)
    return head
  }
  
  // const removeNode = (head, targetVal) => {
  //   // todo
  //   // Iterative solution
  //   // n = number of nodes
  //   // Time: O(n)
  //   //Space: O(1)
  //   if (head.val === targetVal) return head.next
  //   let prev = null
  //   let current = head
  //   while (current !== null) {
  //     if (current.val === targetVal) {
  //       prev.next = current.next
  //       break;
  //     }
  //     prev = current
  //     current = current.next
  //   }
  //   return head;
    
  // };
  
  module.exports = {
    removeNode,
  };
  