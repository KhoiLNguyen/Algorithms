function lastDigit(a, b) {
  // I created these variables for simplicity
  // Notes I've taken from research
  // 
  // Number|  Last digits that repeat in cycle
  // 1     |     1
  // 2     |  4, 8, 6, 2
  // 3     |  9, 7, 1, 3
  // 4     |  6, 4
  // 5     |  5
  // 6     |  6
  // 7     |  9, 3, 1, 7
  // 8     |  4, 2, 6, 8
  // 9     |  1, 9
  // 
  // You can see there is a pattern repeated here (Ex: 9^2 = 81, 9^3= 729), can have up to 4 different numbers in a cycle
  // First we take the exponential number which is b => b%4, 4 = 4 different numbers could repeat in cycle
  // check to see if b%4 === 0 or !== 0
  // if !== 0 set expo = b%4 = remainder of b%4, then we use it in place of b
  // if === 0 set expo = 4
  // For a, no matter if it is 1 ditgit or more, we do a % 10 to get the last digit or the only digit of a
  // because for big numbers the last digit of a will always be between 1-9 like in the table above
  // There for when we have Math.pow(lastDigitIna, expo) % 10, we will guarantee to find the last digit of a^b in this
  // pattern

  let result;
  let expo;
  let lastDigitIna;
  
  // Of course the first 2 ifs cover the edge cases
  if(b === 0) {
      return 1;
  }
  
  if(a === 0) {
      return 0;
  }
  
  if(b%4 !== 0) {
      expo = b%4;
  } else {
      expo = 4;
  }
  
  lastDigitIna = a % 10;
  result = Math.pow(lastDigitIna, expo) % 10;
  
  return result;
}

console.log(lastDigit(12,220));