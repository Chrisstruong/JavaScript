const closestCarrot = (grid, startRow, startCol) => {
    // todo
    // Breath first traversal
    const visited = new Set([ startRow + ',' + startCol ])
    const queue = [ [ startRow, startCol, 0 ] ] 
    
    while (queue.length > 0) {
      const [ row, col, distance ] = queue.shift()
      
      if (grid[row][col] === 'C') return distance
      
      const deltas = [ [1, 0], [-1, 0], [0, 1], [0, -1] ]
      
      for (let delta of deltas) {
        const [rowDelta, colDelta ] = delta
        
        const neighborRow = row + rowDelta
        const neighborCol = col + colDelta
        const rowInbounds = 0 <= neighborRow && neighborRow < grid.length
        const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length
        const pos = neighborRow + ',' + neighborCol
        if (rowInbounds && colInbounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos) ) {
          queue.push([neighborRow, neighborCol, distance + 1 ]);
          visited.add(pos)
        }
      }
    }
    return -1
    
  };
  
  module.exports = {
    closestCarrot,
  };
  