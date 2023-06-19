// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const linkedListCycle = (head) => {
//   // todo
//   // n = # nodes
//   // Time: O(n)
//   // Space: O(1)
//   const nodes = new Set()
//   let current = head
  
//   while (current !== null) {
//     if (nodes.has(current)) return true
//     nodes.add(current)
//     current = current.next
//   }
  
//   return false
// };

const linkedListCycle = (head) => {
  
    // n = # nodes
    // Time: O(n)
    // Space: O(1)
    let slow = head
    let fast = head
    let firstIteration = true
    
    while (fast !== null && fast.next !== null) {
      if (fast === slow && ! firstIteration) return true
      fast = fast.next.next
      slow = slow.next
      firstIteration = false
    }
    
    return false
  }
  
  module.exports = {
    linkedListCycle,
  };
  