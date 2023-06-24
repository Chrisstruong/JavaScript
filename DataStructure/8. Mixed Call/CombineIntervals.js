const combineIntervals = (intervals) => {
    // todo
    // n = array length
    // Time: O(nlog(n))
    // Space: O(n)
    const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0])
    const combined = [ sortedIntervals[0] ]
    
    for (let currentInterval of sortedIntervals.slice(1)) {
      const [ lastStart, lastEnd] = combined[combined.length - 1]
      const [ currentStart, currentEnd ] = currentInterval
      if (currentStart <= lastEnd) {
        if (currentEnd > lastEnd) {
          combined[combined.length - 1][1] = currentEnd
        }
      } else {
        combined.push(currentInterval)
      }
    }
    
    return combined
  };
  
  
  
  module.exports = {
    combineIntervals,
  };
  
  