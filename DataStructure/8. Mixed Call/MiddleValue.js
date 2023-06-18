// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const middleValue = (head) => {
//   // todo

//   const values = []
//   let current = head
//   while (current !== null) {
//     values.push(current.val)
//     current = current.next
//   }
  
//   const mid = Math.floor(values.length / 2)
//   return values[mid]
// };

const middleValue = (head) => {
    // n = # nodes
    // Time: O(n)
    // Space: O(1)
    let slow = head
    let fast = head
    
    while (!(fast === null || fast.next === null )) {
      slow = slow.next
      fast = fast.next.next
    }
    
    return slow.val
  }
  
  module.exports = {
    middleValue,
  };
  