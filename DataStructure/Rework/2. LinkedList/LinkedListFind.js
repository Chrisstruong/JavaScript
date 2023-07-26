// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative style
// const linkedListFind = (head, target) => {
//   let current = head
//   while (current !== null) {
//     if (current.val === target) return true
//     current = current.next
//   }
//   return false
// }

// Recursive style
const linkedListFind = (head, target) => {
    if (head === null) return false
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
  
  // const a = new Node("a");
  // const b = new Node("b");
  // const c = new Node("c");
  // const d = new Node("d");
  
  // a.next = b;
  // b.next = c;
  // c.next = d;
  
  // a -> b -> c -> d
  
  // linkedListFind(a, "c");
  
  module.exports = {
    linkedListFind,
  };
  