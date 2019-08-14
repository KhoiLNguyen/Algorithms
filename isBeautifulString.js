// A string is said to be beautiful if each letter of the alphabet appears at most as many times as than the previous letter; ie: b occurs no more times than a; c occurs no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;

// Since there are more bs than as, this string is not beautiful.

// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.

// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

function isBeautifulString(inputString) {
  let Obj = {};
  let arrLetter = inputString.split('').sort((a,b) => a > b);
  console.log(arrLetter)
  // put all letter sorted and count how many times they appeared in an Object to keep track
  for(let i = 0; i < arrLetter.length; i++) {
      if(!Obj.hasOwnProperty(arrLetter[i])) {
          Obj[arrLetter[i]] = 1
      }
      Obj[arrLetter[i]]++;
  }
  console.log(Obj)
  // Always start from b position then compare to the previous letter which is a in this case until the charcode of the last letter in arrLetter
  for(let i = 98; i <= arrLetter[arrLetter.length-1].charCodeAt(0); i++) {
      let curLetter = String.fromCharCode(i);
      let prevLetter = String.fromCharCode(i-1);
      
      // Some conditions check for edge cases
      if(Obj[prevLetter] === undefined || Obj[curLetter] === undefined) return false;
      if(Obj[curLetter] > Obj[prevLetter]) return false;
  }
  return true;
}

console.log(isBeautifulString('aabbcc'))