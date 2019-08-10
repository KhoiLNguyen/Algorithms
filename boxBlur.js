function boxBlur(image) {
  let blurredImage = [];
  
  // image.length - 2 and image[i].length - 2 because we don't want to iterate to the last
  // 2 columns/rows since we are getting the sum of each 3 by 3 blocks
  for(let i = 0; i < image.length -2; i++) {
      let line = [] // store the sum of each blocks in row 1 here, then reset, then row 2
      
      for(let j = 0; j < image[i].length -2; j++) {
          let sum = 0; // Once we got the row and column, defines sum = 0 for resetting it later
          
          for(let a = i; a < i + 3; a++) { // In this nested loop, we iterate through the 3 by 3 block to get the sum
              for(let b = j; b < j + 3; b++) {
                  sum += image[a][b]
              }
          }
          // Once we got the sum do calculations on it, then push it into line
          // then we will continue with 2nd column and so on, not touching the last 2 column with j < image[i].length - 2
          line.push(Math.floor(sum/9))
      }
      // Then push line into result array
      blurredImage.push(line);
  }
  return blurredImage;
}

console.log(boxBlur([[7, 4, 0, 1], 
  [5, 6, 2, 2], 
  [6, 10, 7, 8], 
  [1, 4, 2, 0]]))
