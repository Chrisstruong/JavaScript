const substituteSynonyms = (sentence, synonyms) => {
    // todo
    // n = # words in sentence
    // m = max synonyms for a word
    // Time: O(m^n)
    // Space: O(m^n)
    const words = sentence.split(' ')
    const subarrays = generate(words, synonyms)
    return subarrays.map((subarray) => subarray.join(' '))
    // const result = []
    // for (let subarray of subarrays) {
    //   result.push(subarray.join(' '))
    // }
    // return result
  };
  
  const generate = (words, synonyms) => {
    if (words.length === 0) return [[]]
    
    const firstWord = words[0]
    const remaining = words.slice(1)
    
    const subarrays = generate(remaining, synonyms)
    
    if (firstWord in synonyms) {
      const result = []
      for (let synonym of synonyms[firstWord]) {
        result.push(...subarrays.map(subarray => [ synonym, ...subarray ]))
        // for (let subarray of subarrays) {
        //   result.push([ synonym, ...subarray])
        // }
      }
      return result
    } else {
      const result = []
      return subarrays.map(subarray => [ firstWord , ...subarray ])
      // for (let subarray of subarrays) {
      //   result.push([ firstWord, ...subarray])
      // }
      
      return result
    }
  }
  
  
  module.exports = {
    substituteSynonyms,
  };
  