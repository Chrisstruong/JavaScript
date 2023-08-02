// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
    // Iterative n = # of nodes
    // Time: O(n)
    // Time: O(1)
    let maxStreak = 0
    let currentStreak = 0
    let currentNode = head
    let prevVal = null
    
    while (currentNode !== null) {
      if (currentNode.val === prevVal) {
        currentStreak += 1
      } else {
        currentStreak = 1
      }
      
      if (currentStreak > maxStreak) maxStreak = currentStreak
      
      
      prevVal = currentNode.val
      currentNode = currentNode.next
    }
    return maxStreak
  }
  
  module.exports = {
    longestStreak,
  };
  