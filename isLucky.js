function isLucky(n) {
    
  // if it includes odd numbers, take this into account, in this case it doesn't
  // if(n.toString().length % 2 !== 0) {
  //     return false;
  // }
  let sum1 = 0;
  let sum2 = 0;
  let num = n.toString().split('');
  
  for(let i = 0; i < num.length/2; i++) {
      sum1 += parseInt(num[i]);
  }
  for(let j = num.length/2; j < num.length; j++) {
      sum2 += parseInt(num[j]);
  }

  return sum1 === sum2 ? true : false;
}

console.log(isLucky(1230));