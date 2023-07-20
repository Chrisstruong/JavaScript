const compress = (s) => {
    // todo
    // Complexity
    // n = string length
    // Time: O(n)
    // Space: O(n)  
    const result = []
    let i = 0
    let j = 0
    while (j <= s.length) {
      console.log(s[j])
      if (s[i] === s[j]) {
        j += 1
      } else {
        const num = j - i
        num === 1 ? result.push(s[i]) : result.push(num, s[i])
        i = j
      }
    }
    return result.join('')
  
    
    
    
    
    
  //   s +=""
  //   let i = 0
  //   let j = 0
  //   const result = []
  //   let tempLetter = s[0]
  //   let count 
    
  //   while (j < s.length) {
  //     if (tempLetter === s[j]){
  //       j++
  //     } else {
  //       j++
  //       count = j - i
  //       if (count <= 1){
  //         result.push(tempLetter)
  //       } else {
  //         result.push(count, tempLetter)
  //       }
  //       i = j
  //       tempLetter = s[j]
  //     }
  //   }
    
  //   return result.join('')
   
  };
  
  console.log(compress('ccaaatsss'))
  
  module.exports = {
    compress,
  };
  