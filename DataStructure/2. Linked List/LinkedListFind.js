// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Recursion solution
const linkedListFind = (head, target) => {
  if(head === null) return false
  if (head.val === target) return true
  return linkedListFind(head.next, target)
}


// Iterative solution
// const linkedListFind = (head, target) => {
//   // todo
//   //Time: O(n)
//   //Space: O(1)
//   let current = head
//   while (current !== null){
//     if (target === current.val) return true
//     current = current.next
//   }
//   return false
// };

module.exports = {
  linkedListFind,
};
