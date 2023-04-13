// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//Time Complexity: O(n)
// Space Complexity: O(n)
const linkedListValues = (head) => {
    // todo
    const value = []
    while(head!==null){
      value.push(head.val)
      head = head.next
    }
    
    return value
  };
  
  module.exports = {
    linkedListValues,
  };
  