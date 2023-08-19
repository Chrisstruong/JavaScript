class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// Iterative Style
// const addLists = (head1, head2) => {
//     const dummyHead = new Node(null)
//     let tail = dummyHead

//     let carry = 0
//     let current1 = head1
//     let current2 = head2

//     while (current1 !== null || current2 !== null || carry === 1) {
//         const val1 = current1 === null ? 0 : current1.val
//         const val2 = current2 === null ? 0 : current2.val
//         const sum = val1 + val2 + carry
//         carry = sum > 9 ? 1 : 0
//         const digit = sum % 10

//         if (current1 !== null) current1 = current1.next
//         if (current2 !== null) current2 = current2.next

//         tail.next = new Node(digit)
//         tail = tail.next
//     }

//     return dummyHead.next


// }


Recursive Style
const addLists = (head1, head2, carry = 0) => {
  // n = length of list 1
  // m = length of list2
  // Time: O(max(n, m))
  // Space: O(max(n, m))
  if (head1 === null && head2 === null && carry === 0) return null
  const val1 = head1 === null ? 0 : head1.val
  const val2 = head2 === null ? 0 : head2.val

  const sum = val1 + val2 + carry
  const nextCarry = sum > 9 ? 1 : 0
  const digit = sum % 10

  const resultNode = new Node(digit)

  const next1 = head1 === null ? null : head1.next
  const next2 = head2 === null ? null : head2.next

  resultNode.next = addLists(next1, next2, nextCarry)
  return resultNode
}



module.exports = {
    addLists,
};
