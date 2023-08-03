class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Iterative Style
  const createLinkedList = (values) => {
    // Complexity
    // Time: O(n)
    // Space: O(n)
    const dummyHead = new Node(null)
    let tail = dummyHead
    for (let val of values) {
      tail.next = new Node(val)
      tail = tail.next
    }
    return dummyHead.next
  }; 
  
  
  createLinkedList(["h", "e", "y"]);
  
  
  
  module.exports = {
    createLinkedList,
  };
  