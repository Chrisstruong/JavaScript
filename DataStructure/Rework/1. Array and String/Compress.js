const compress = (s) => {
    // todo
    const result = []
    let i = 0
    let j = 0
    
    while (j <= s.length) {
      if (s[i] === s[j]){
        j += 1
      } else {
       const num = j - i
        if (num === 1) {
          result.push(s[i])
        } else {
          result.push(String(num), s[i])
        }
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
  