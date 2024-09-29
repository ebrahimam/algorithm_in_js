// **************************Count The Occurrence Of Each Character*******************************
//       This article will demonstrate different approaches for
//       implementing a JavaScript program to count the
//       occurrences of each character in a string.We will
//        be given a string as input and we return the chars
//         used with the number it occurred in that string.



function countCharacter(string) {
      let result = {};

      for (let i = 0; i < string.length; i++) {
            let ch = string.chartAt(i)
            if (!result[ch]) {
                  result[ch] = 1
            } else {
                  result[ch] += 1
            }
      }
      return result
}


//**********************With Array********************************

function countCharacterWithArray(string) {
      let stringToArray = string.split("");
      let result = stringToArray.reduce((chars, ch) => {
            if (!chars[ch]) {
                  chars[ch] = 1
            } else {
                  chars[ch] += 1
            }
            return chars
      }, []);
      return result
}


//**********************With ForEach********************************

function countCharacterWithForEach(string) {
      let result = {}
      string.split(" ").forEach(char => {
            result[char] = (result[char] || 0) + 1
      })
      return result
}


//**********************With for-of********************************

function countCharacterWithForOf(string) {
      let result = {}
      for (let char of string) {
            result[char] = (result[char] || 0) + 1
      }
      return result
}


