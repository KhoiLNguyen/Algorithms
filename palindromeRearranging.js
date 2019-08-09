function palindromeRearranging(inputString) {
  // Create an object to keep track of letters in inputString
  let Obj = {};
  
  let count = 0; // if see a letter with odd occurences in Obj add 1 to count
  
  inputString.split('').forEach(letter => {
     // if letter already exist in Obj => +1 for any extra occurences
     if(Obj.hasOwnProperty(letter)) {
         Obj[letter] += 1;
     } else { // if not add it to Obj
         Obj[letter] = 1;
     }
  });
  
  // Ignore all even occurences because we can arrange them to be a palindrome
  // We just worry about odd occurences of letters
  // if there is only 1or 0 letter with odd occurences in Obj
  // we can rearrange string to form a palindrome
  // if more than 1, we can't form a palindrome
  for(let letter in Obj) {
      if(Obj[letter] %2 !== 0) {
          count++;
      }
  }
  console.log(Obj)
  
  return count <= 1 ? true : false;
}

console.log(palindromeRearranging("aaacccaaa"))