const intersection = (a, b) => {
    // todo
    
    
    
    
    //nested loop solution
    // // Time: O(n*m)
    // // Space: O(n)
    // const result = []
    // let minLength, maxLength
    // if(a.length <= b.length) {
    //   minLength = [...a]
    //   maxLength =[...b]
    // } else {
    //   minLength = [...b]
    //   maxLength = [...a]
    // }
    // for (let i = 0; i < minLength.length; i++){
    //   for (let j = 0; j < maxLength.length; j++) {
    //     if (minLength[i] === maxLength[j]) result.push(maxLength[j])
    //   }
    // }
    // return result.sort((a,b)=>a-b)
  };
  
  module.exports = {
    intersection,
  };
  