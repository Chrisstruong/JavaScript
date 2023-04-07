const compress = (s) => {
    // todo
    let result = []
    let i = 0
    let j = 0
    while(j <=  s.length){//have <= to have the undefined at the end of s. This is called out of bounds index
      if(s[i] === s[j]){
        j+=1
      } else {
        let num = j - i 
        if (num === 1){
          result.push(s[i])
        } else{
          result.push(num, s[i])
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
  

  const array =[1,2]
  console.log(array[3])