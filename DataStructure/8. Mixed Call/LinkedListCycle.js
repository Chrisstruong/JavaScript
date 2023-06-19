// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListCycle = (head) => {
    // todo
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    const nodes = new Set()
    let current = head
    
    while (current !== null) {
      if (nodes.has(current)) return true
      nodes.add(current)
      current = current.next
    }
    
    return false
  };
  
  module.exports = {
    linkedListCycle,
  };
  