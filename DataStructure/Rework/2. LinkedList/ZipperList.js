// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
    const head = head1 
    let tail = head
    let current1 = head1.next
    let current2 = head2
    let count = 0
    
    while(current1 !== null && current2 !== null) {
      if (count % 2 ===0) {
        tail.next = current2
        current2 = current2.next
      } else { 
        tail.next = current1
        current1 = current1.next
      }
      tail = tail.next
      count += 1
    }
    
    if (current1 !== null) tail.next = current1
    if (current2 !== null) tail.next = current2
    
    return head
  }
  
  
  // const zipperLists = (head1, head2) => {
  // //  todo
  //   let tail = head1
  //   let current1 = head1.next
  //   let current2 = head2
  //   let count = 0
  
  //   while(current1 !== null && current2 !== null){
  //     if (count % 2 === 0){
  //       tail.next = current2 
  //       current2 = current2.next
        
  //     } else {
  //        tail.next = current1 
  //       current1 = current1.next
  //     }
  //     tail = tail.next
  //     count += 1
  //   }
  //   if (current1 !== null) tail.next = current1
  //   if (current2 !== null) tail.next = current2
    
  //   return head1
  // };
  
  module.exports = {
    zipperLists,
  };
  