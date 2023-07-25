class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

// Iterative style: Using while loop 
// Recursive style: Uisng recursive call
const linkedListValues = (head) => {
  // todo
  const result = []
  _linkedListValues(head, result)
  return result
  
};
const _linkedListValues = (head, values) => {
  // todo
 if (head === null) return values
 values.push(head.val)
 head = head.next
  _linkedListValues(head, values)
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]




module.exports = {
  linkedListValues,
};
