function makeArrayConsecutive2(statues) {
  // sort the array
  statues.sort(function(a,b) {
     return a - b;
  })
  
  let count = 0; // count how many size is not in statues array
  
  
  for(let i = statues[0] + 1; i < statues[statues.length-1]; i++) {
     // if statue size is not in statue array, push in needed array
     if(!statues.includes(i)) {
        count++;
     }
  }
  
  return count;
}


console.log(makeArrayConsecutive2([6,2,3,8]))