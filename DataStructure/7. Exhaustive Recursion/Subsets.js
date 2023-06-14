const subsets = (elements) => {
    // todo
    // given n items, 2^n subsets
    // Time: O(2^n)
    // Space: O(2^n)
    if (elements.length === 0) return [[]]
    
    const first = elements[0]
    const subsetsWithoutFirst = subsets(elements.slice(1))
    
    const subsetsWithFirst = []
    for (let sub of subsetsWithoutFirst){
      subsetsWithFirst.push([first, ...sub])
    }
    
    return [ ...subsetsWithoutFirst, ...subsetsWithFirst]
  };
  
  subsets(['a', 'b', 'c']); // ->
  // [
  //   [],
  //   [ 'c' ],
  //   [ 'b' ],
  //   [ 'b', 'c' ],
  //   [ 'a' ],
  //   [ 'a', ' c' ],
  //   [ 'a', 'b' ],
  //   [ 'a', 'b', 'c' ]
  // ]
  
  module.exports = {
    subsets,
  };
  