class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Recursive style version1
  const createLinkedList = (values) => {
    // Complexity
    // Time: O(n^2)
    // Space: O(n)
    if (values.length === 0) return null
    const head = new Node(values[0])
    head.next = createLinkedList(values.slice(1))
    return head
  }
  
  // Iterative Style
  // const createLinkedList = (values) => {
  //   // Complexity
  //   // Time: O(n)
  //   // Space: O(n)
  //   const dummyHead = new Node(null)
  //   let tail = dummyHead
  //   for (let val of values) {
  //     tail.next = new Node(val)
  //     tail = tail.next
  //   }
  //   return dummyHead.next
  // }; 
  
  
  createLinkedList(["h", "e", "y"]);
  
  
  
  module.exports = {
    createLinkedList,
  };
  