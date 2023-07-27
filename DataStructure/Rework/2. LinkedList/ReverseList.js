class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Iterative style
  const reverseList = (head) => {
    let current = head
    let previous = null
    
    while (current !== null) {
      const next = current.next
      current.next = previous
      console.log(previous)
      previous = current
      current = next
    }
    return previous
  }
  //     cur  next
  // a ->  b-> c -> d
  // prev
  // const reverseList = (head) => {
  //   // todo
  //   // Time: O(n)
  //   // Space: O(1)
  //   let previous = null
  //   let current = head
  //   while(current !== null) {
  //     const next = current.next
  //     current.next = previous
  //     prev = current 
  //     current = next
  //   }
  //   return previous
  // };
  
  // N  <-   a    <-     b  ->      c
  //        prev        cur        next 
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  
  // a -> b -> c -> d -> e -> f
  
  reverseList(a);
  module.exports = {
    reverseList,
  };
  