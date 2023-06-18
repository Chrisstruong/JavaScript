// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
    // todo
    // n = # nodes
    // Time: O(n)
    // Space: O(n)
    const values = []
    let current = head
    while (current !== null) {
      values.push(current.val)
      current = current.next
    }
    return values.join(',') === values.reverse().join(',')
  };
  
  const values = [7, 1, 8]
  console.log(values.reverse().join(','))
  
  module.exports = {
    linkedPalindrome,
  };
  