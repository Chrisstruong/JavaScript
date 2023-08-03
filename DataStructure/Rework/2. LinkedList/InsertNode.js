class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Iterative Style
  const insertNode = (head, value, index) => {
    // Complexity
    // Time: O(n)
    // Space: O(1)
    
    if (index === 0) {
      const newHead = new Node(value)
      newHead.next = head
      return newHead
    }
    let count = 0
    let current = head
    while (current !== null) {
      if (count === index - 1) {
        const temp = current.next
        current.next = new Node(value)
        current.next.next = temp
      }
      
      
      count += 1
      current = current.next
    }
    
    return head
  }
  // 0.   1.   2.   3
  // a -> b -> x -> c -> d
  //     cur  temp
  
  module.exports = {
    insertNode,
  };
   