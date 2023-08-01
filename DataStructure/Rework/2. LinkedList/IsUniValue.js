// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative solution
const isUnivalueList = (head) => {
    let prev = head.val
    while (head !== null) {
      if (head.val !== prev) return false
      head = head.next
    }
    return true
    
  }
  
  
  
  
  module.exports = {
    isUnivalueList,
  };
  