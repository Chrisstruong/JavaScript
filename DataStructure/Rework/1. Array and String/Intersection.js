const intersection = (a, b) => {
    // todo
    // n : the minLength, m: the maxLength
    // Time: O(n+m)
    //Using hash map
    const result = []
    const setA = new Set(a)
    for (let num of b){
      if (setA.has(num)) result.push(num)
    }
    return result
    
    
    
    
    //nested loop solution
    // // Time: O(n*m)
    // // Space: O(min(n, m))
   // const result = []
   //  for (let item of a) {
   //    if(b.includes(item)) {
   //      result.push(item)
   //    }
   //  }
   //  return result
  };
  intersection([4,2,1,6], [3,6,9,2,10])
  
  module.exports = {
    intersection,
  };
  