class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  const createLinkedList = (values, i = 0) => {
    if(i === values.length) return null
    const head = new Node(values[i])
    head.next = createLinkedList(values, i + 1)
    return head
  }; 
  
  // 0     1    2   3
  //["h", "e", "y"]
  // (h) -> (e) -> (y) ->null
  
  // const createLinkedList = (values) => {
  //   if(values.length === 0) return null
  //   const head = new Node(values[0])
  //   head.next = createLinkedList(values.slice(1))
  //   return head
  // }; 
  
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
  