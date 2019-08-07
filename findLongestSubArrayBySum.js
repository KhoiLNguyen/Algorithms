function findLongestSubarrayBySum(s, arr) {
  let currentContiguous = []; // keep track of consecutive numbers when add = s
  let left = 1; // left index will always start with 1
  let sum = 0;
  let longestContiguous = 0; // keep track of longest consecutive of numbers when add = s
  let boundArr;
  
  arr.forEach((val, right) => {
      currentContiguous.push(val); // always push new value in currentContiguous
      sum+=val;                    // and add that value to sum
      
      // Up to a point if sum > s then remove the first value in currentContiguous
      // while subtracting that value from sum
      // then increase left by 1 
      // Ex: [1, 2, 3, 7, 5] || currentContiguous = [1, 2, 3, 7] => sum = 13 > s = 12
      // We remove one and its index is 1 there for now our left will be 2 and val = 2 at that index
      while(sum > s) {
          sum-=currentContiguous.shift();
          left++;
      }
      
      // Up to a point sum will be equal to s but we have to check its longestContiguous length
      // if it is the first time sum === s, length of currentContiguous will always be larger than longestContiguous
      // since longestContiguous = 0 at this time
      // if sum === s a second time, check if length of currentCongiguous > longestContiguous, if it is set new value for
      // longestContiguous, if not then the current one might be the longestCongiguous already
      if(sum === s && currentContiguous.length > longestContiguous) {
          longestContiguous = currentContiguous.length
          boundArr = [left, right + 1]
      }
  })
  
  return boundArr || [-1]
}


console.log(findLongestSubarrayBySum(12, [1,2,3,7,5]))