class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // // Recursive style version1
  // const createLinkedList = (values) => {
  //   // Complexity
  //   // Time: O(n^2)
  //   // Space: O(n)
  //   if (values.length === 0) return null
  //   const head = new Node(values[0])
  //   head.next = createLinkedList(values.slice(1))
  //   return head
  // }
  
  // Recursive style version 2
  const createLinkedList = (values, i = 0) => {
    // Complexity
    // Time: O(n)
    // Space: O(n)
    if (i === values.length) return null
    const head = new Node(values[i])
    head.next = createLinkedList(values, i + 1)
    return head
  }
  
  //   0    1    2
  // ["h", "e", "y"]
  // (h) -> (e) -> (y) -> null
  
  
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
  