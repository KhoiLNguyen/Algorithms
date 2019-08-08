function commonCharacterCount(s1, s2) {
    
  // make copy of strings and defines count = 0
  let string1 = s1;
  let string2 = s2;
  let count = 0
  
  
  for(let letter of string2) {
      // if string1 has a letter of string2, remove that letter from string1 and increase count
      if(string1.includes(letter)) {
          string1 = string1.replace(letter, '');
          count++;
      }
  }

  
  return count;

}

console.log(commonCharacterCount('aabbc', 'aabfdea'));