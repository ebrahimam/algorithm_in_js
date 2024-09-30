// **************************PALINDROME****************************

// We will understand how to check whether a given value is a palindrome 
// or not in JavaScript.A palindrome is a word, phrase, number, or any sequence
//  that reads the same forward and backward.For instance, “madam” and “121” 
//  are palindromes.

function isPalindrome(string) {
      //return true if was palindrom
      return s === s.split(" ").reverse().join() ? true : false
}

function isPalindrome2(string) {
      let j = srt.length - 1;
      for (let i = 0; i < string.length / 2; i++){
            if (str[i] != str[j]) {
                  return false
            }
            j--
      }
      return true
}
 
 //check with end or last
function isPalindrome3(str) {
      let rev = ""
      for (let i = str.length - 1; i >= 0; i--){
            rev +=str[i]
      }
      if (rev == str) {
            return true
      } else {
            return false
      }
}
