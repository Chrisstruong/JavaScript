class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Recursive Style
  const isUnivalueList = (head, prev = head.val) => {
    console.log(prev)
    if (head === null) return true
    if (head.val !== prev) return false
    return isUnivalueList(head.next, prev)
  }
  const a = new Node(7);
  const b = new Node(7);
  const c = new Node(4);
  
  a.next = b;
  b.next = c;
  
  // 7 -> 7 -> 4
  
  isUnivalueList(a);
  
  // Iterative solution
  // const isUnivalueList = (head) => {
  //   let prev = head.val
  //   while (head !== null) {
  //     if (head.val !== prev) return false
  //     head = head.next
  //   }
  //   return true
    
  // }
  
  
  
  
  module.exports = {
    isUnivalueList,
  };
  