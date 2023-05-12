class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const createLinkedList = (values) => {
    
  };
  
  // const createLinkedList = (values) => {
  //   // todo
  //   // Iterative solution
  //   // n = array length
  //   // Time: O(n)
  //   // Space: O(n)
  //   const dummnyHead = new Node (null)
  //   let tail = dummnyHead
  //   for (let val of values) {
  //     tail.next = new Node (val)
  //     tail = tail.next
  //   }
  //   return dummnyHead.next
  // };
  
  module.exports = {
    createLinkedList,
  };
  