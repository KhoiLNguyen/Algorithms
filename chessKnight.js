function chessKnight(cell) {
  // moves that knight can make
  let knightMove = {
      topleft1: [-2,1],
      topleft2: [-1,2],
      topright1: [2,1],
      topright2: [1,2],
      downleft1: [-2,-1],
      downleft2: [-1,-2],
      downright1: [2,-1],
      downright2: [1,-2]
  }
  
  // x axis is letters and y axis is numbers
  // convert letters to numbers for x axis
  let board = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8
  }
  
  // Store x and y position of knight
  const knightX = board[cell[0]]
  const knightY = parseInt(cell[1])
  
  // Keep track of moves knight can make at a given position
  let numberOfMoves = 0;
  
  // Iterate through all the moves knight can/cann't make, if knight can move => increment numberOfMoves
  for(let move in knightMove) {
      let x = knightMove[move][0]
      let y = knightMove[move][1]
      let totalX = knightX+x
      let totalY = knightY+y
      if ( (totalX > 0 && totalX < 9) && (totalY > 0 && totalY < 9) ) {
          numberOfMoves++
      }
  }
  return numberOfMoves
}