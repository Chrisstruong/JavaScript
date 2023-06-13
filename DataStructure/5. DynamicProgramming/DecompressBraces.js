const decompressBraces = (s) => {
    // todo
    // m = # brace groups
    // s = # regular chars
    // Time: O(9^m*s)
    // Space: O(9^m*s)
    const numberChars = "123456789"
    const stack = []
    
    for (let char of s) {
      if (numberChars.includes(char)){
        stack.push(Number(char))
      } else {
        if (char === '}') {
          // popping subroutine
          let segment = ''
          while (typeof stack[stack.length - 1] !== 'number') {
            const popped = stack.pop()
            segment = popped + segment // This help put the string in order
          }
          const num = stack.pop() 
          stack.push(repeat(segment, num))
        } else if (char !== '{') {
          stack.push(char)
        }
      }
    }
    return stack.join('')
  };
  
  const repeat = (str, n) => {
    let result = ''
    
    for (let i = 0; i < n; i += 1){
      result += str
    }
    return result
    
  }
  
  
  module.exports = {
    decompressBraces,
  };
  