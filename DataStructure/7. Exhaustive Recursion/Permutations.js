const permutations = (items) => {
    // todo
    // n = length of items array
    // Time: O(n!)
    // Space: O(n!)
    
    if (items.length === 0) return [[]]
    
    const first = items[0] // a
    const perms = permutations(items.slice(1))
    const fullPermutations = []
    for (let perm of perms){
      for (let i = 0; i <= perm.length; i += 1) {
        fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)])
      }
    }
    
    return fullPermutations
  };
  
  permutations(['a', 'b', 'c']); // -> 
  //permutations(['b', 'c']) =>
  //[
  // [b,c],
  // [c,b]
  //]
  // [a, b, c],
  // [b, a, c],
  // [b, c, a],
  // [a, c ,b],
  // [c, a, b]
  // [c, b, a]
  
  
  // [ 
  //   [ 'a', 'b', 'c' ], 
  //   [ 'b', 'a', 'c' ], 
  //   [ 'b', 'c', 'a' ], 
  //   [ 'a', 'c', 'b' ], 
  //   [ 'c', 'a', 'b' ], 
  //   [ 'c', 'b', 'a' ] 
  // ] 
  module.exports = {
    permutations,
  };
  