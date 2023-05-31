const knightAttack = (n, kr, kc, pr, pc) => {
    // todo
    // n = # rows, # cols
    // Time: O(n^2)
    // Space: O(n^2)
    const queue = [ [kr, kc, 0] ];
    const visited = new Set()
    visited.add(kr + ',' + kc)
    
    
    while(queue.length > 0) {
      const [r, c, step] = queue.shift()
      if (r === pr && c === pc) {
        return step
      }
      const neighborPositions = getKnightPositions(n, r, c)
      for (let neighborPos of neighborPositions) {
        const [neighborRow, neighborCol] = neighborPos
        const neighborKey = neighborRow + ',' + neighborCol
        if (!visited.has(neighborKey)) {
          queue.push([neighborRow, neighborCol, step + 1])
          visited.add(neighborKey)
        }
      }
    }
    return null
  };
  
  const getKnightPositions = (n, kr, kc) => {
    const positions = [
      [kr + 2, kc + 1], 
      [kr - 2, kc + 1], 
      [kr + 2, kc - 1],
      [kr - 2, kc - 1],
      [kr + 1, kc + 2],
      [kr - 1, kc + 2],
      [kr + 1, kc - 2],
      [kr - 1, kc - 2],
    ]
    
    const validPositions = []
    for (let pos of positions) {
      const [r, c] = pos
      if (0 <= r && r < n && 0 <= c && c < n) {
        validPositions.push(pos)
      }
    }
    
    return validPositions
  }
  
  module.exports = {
    knightAttack,
  };
  