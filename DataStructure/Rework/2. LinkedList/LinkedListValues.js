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
  const result = []
  const linkedListValues = (head) => {
    // todo
    // if (head === null) {return result}
    //console.log(`result: ${result}`)
    if (head.val === "b") return result
    result.push(head.val)
    head = head.next
    linkedListValues(head)
    
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
  