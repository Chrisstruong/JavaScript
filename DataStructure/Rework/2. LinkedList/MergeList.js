class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Iterarive style
  const mergeLists = (head1, head2) => {
    // Complexity:
    // n = length of list 1
    // m = length of list2
    // Time: O(min(n,m))
    // Space: O(1)
    
    const dummnyHead = new Node(null)
    let tail = dummnyHead
    
    let current1 = head1
    let current2 = head2
    while(current1 !== null && current2 !== null) {
      if (current1.val < current2.val) {
        tail.next = current1
        current1 = current1.next
      } else {
        tail.next = current2
        current2 = current2.next
      }
      tail = tail.next
    }
    
    if (current1 !== null) tail.next = current1
    if (current2 !== null) tail.next = current2
    
    
    
    return dummnyHead.next
  }
  
  const a = new Node(5);
  const b = new Node(7);
  const c = new Node(10);
  const d = new Node(12);
  const e = new Node(20);
  const f = new Node(28);
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  // 5 -> 7 -> 10 -> 12 -> 20 -> 28
  
  const q = new Node(6);
  const r = new Node(8);
  const s = new Node(9);
  const t = new Node(25);
  q.next = r;
  r.next = s;
  s.next = t;
  // 6 -> 8 -> 9 -> 25
  
  mergeLists(a, q);
  
  module.exports = {
    mergeLists,
  };
  