const parentheticalPossibilities = (s) => {
    // todo
    // Complexity
    // n = string length
    // m = max group size
    // Time: O(m^n)
    // Space: O(m^n)
    
    if (s.length === 0) return ['']
    
    const allPossibilities = []
  
    const {choices, remainder } = getChoices(s)
    for (let choice of choices) {
      const remainderPossibilities = parentheticalPossibilities(remainder)
      for (let substring of remainderPossibilities) {
        allPossibilities.push(choice + substring)
      }
    }
    return allPossibilities
  };
  
  const getChoices = (s) => {
    if (s[0] === '('){
      const end = s.indexOf(')')
      const choices = s.slice(1, end)
      const remainder = s.slice(end + 1)
      return {
        choices,
        remainder
      }
    } else {
      return {
        choices: s[0],
        remainder: s.slice(1)
      }
    }
  }
  
  console.log(getChoices('(abc)de')) // ->'abc'
  console.log(getChoices('(qrtu)v')) // ->'qrtu'
  console.log(getChoices('xyz')) // -> 'x'
  
  module.exports = {
    parentheticalPossibilities,
  };
  