function arrayChange(inputArray) {
  let iteration = 0; // how many iteration we have to do to get the
                     // current number larger than the previous in order to be stricly increasing
  
  
  // [3,1,4]
  // we skipped the first value, checking 1 <= 3? true
  // iteration = 0 + (4-1) = 3; meanning 1+3 = 4 > 3 this is what we want
  // then swap 1 with a new value which is 4
  // keep looping until we can't find any number that is smaller than or equal to the previous number
  for(let i = 1; i < inputArray.length; i++) {
    if(inputArray[i] <= inputArray[i-1]) {
      iteration = iteration + ((inputArray[i-1] + 1) - inputArray[i])
      inputArray[i] = inputArray[i-1] + 1;
    }
  }
  return iteration;
}

console.log(arrayChange[3,1,4]);