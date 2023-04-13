// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Iterative Solution
//Time Complexity: O(n)
// Space Complexity: O(n)
// const linkedListValues = (head) => {
//     // todo
//     const value = []
//     while(head!==null){
//       value.push(head.val)
//       head = head.next
//     }

//     return value
//   };

// Recursion Solution
//Time Complexity: O(n)
// Space Complexity: O(n)
const values = []
const linkedListValues = (head) => {
    // todo
    fillValues(head)
    return values
};

const fillValues = (head) => {
    if (head === null) return
    values.push(head.val)
    fillValues(head.next)
}

module.exports = {
    linkedListValues,
};
