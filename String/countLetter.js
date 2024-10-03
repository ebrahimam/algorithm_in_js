// **********************count letter************************

// counting letter

function countLetter(string) {
      let letterCount = string.replace(/\s+\g/, '').length
      return letterCount
}

// other way

function countLetter(string) {
      let letterCount = string.split('').filter(c => c != ' ').length;
      return letterCount
}

