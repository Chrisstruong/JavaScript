const mostFrequentChar = (s) => {
    // todo
    // Alvis's solution
    const count = {}
    for (let char of s){
      if (!(char in count)){
        count[char]=0
      } 
      count[char] +=1
    }
    
    let best = null
    for (let char of s){
      if(best === null || count[char] > count[best]){
        best = char
      }
    }
    
    return best



    // const count = {}
    // let max = 0
    // const array = []
    // for (let char of s){
    //   if (!(char in count)){
    //     count[char] = 0
    //   }
    //   count[char] += 1
    // }
    
    // for (let char in count){
    //   if (max < count[char]) {
    //     max = count[char]
    //     array.push(char)
    //   }
    // }
    
    // return array[array.length-1]
  };
  
  mostFrequentChar('bookeeper')
  
  
  
  module.exports = {
    mostFrequentChar,
  };
  