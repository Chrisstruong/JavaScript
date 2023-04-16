// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
    // todo
    // Time: O(n)
  //   Space: O(n)
    if (head === null) return null
    if (index === 0) return head.val
    return getNodeValue(head.next, index-1)
     
    
    
    
    // Time: O(n)
    // Space: O(1)
    // let current = head
    // let count = 0
    // while(current !== null) {
    //   if(count===index) return current.val
    //   count++
    //   current = current.next
    // }
    // return null
  };
  
  module.exports = {
    getNodeValue,
  };
  