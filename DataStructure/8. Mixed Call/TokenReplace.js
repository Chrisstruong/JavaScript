const tokenReplace = (s, tokens) => {
    // todo
    // n = length of string
    // Time: O(n)
    // Space: O(n)
    let output = []
    let i = 0
    let j = 1
    while (i < s.length) {
      if (s[i] !== '$') {
        output.push(s[i])
        i += 1
        j = i + 1
      } else if (s[j] !== '$') {
        j += 1
      } else {
        const key = s.slice(i, j + 1)
        output.push(tokens[key])
        i = j + 1
        j = i + 1
      } 
    }
      return output.join('')
  };
  
  const tokens = {
    '$LOCATION$': 'park',
    '$ANIMAL$': 'dog',
  };
  tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', tokens); 
  // -> 'Walk the dog in the park!'
  
  module.exports = {
    tokenReplace,
  };
  