// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//Time Complexity: O(n)
// Space Complexity: O(n)
// const linkedListValues = (head) => {
//   // todo
//   const values = []
//   let current = head
//   while(current !== null) {
//     values.push(current.val)
//     current = current.next
//   }
//   return values
// };


const linkedListValues = (head) => {
    // todo
    let current = head
    let result = []
    while (current !== null) {
      result.push(current.val)
      current = current.next
    }
    return result
  };
  
  
  
  
  
  
  module.exports = {
    linkedListValues,
  };
  