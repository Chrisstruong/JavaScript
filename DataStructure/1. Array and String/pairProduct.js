const pairProduct = (numbers, targetProduct) => {
    // todo
    // Hash map solution
    // Time: O(n)
  //   Space: O(n)
    // const previousNum = {}
    // for (let i = 0; i < numbers.length; i++){
    //   const num = numbers[i]
    //   const compliment = targetProduct / num
    //   if (compliment in previousNum){
    //     return [i, previousNum[compliment]]
    //   }
    //   previousNum[num] = i
    // }
    
    //Brute force (nested loop) solution:
    // Time: O(n^2)
    // Space: O(1)
    for (let i = 0; i < numbers.length; i++){
      for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] * numbers[j] === targetProduct){
          return [i,j]
        }
      }
    }
  };
  
  module.exports = {
    pairProduct,
  };
  