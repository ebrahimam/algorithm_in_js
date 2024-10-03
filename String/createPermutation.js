// JavaScript Program to Print all Permutations of Given stringing


// 1. Using Backtracking

// Backtracking is an algorithmic technique for solving problems
//  recursively by trying to build a solution incrementally, one piece
//   at a time, removing those solutions that fail to satisfy the
//   constringaints of the problem at any point in time.

function generatePermutations(string) {
      const permutations = [];
      function permute(string, left, right) {
            if (left == right) {
                  permutations.push(string);
            } else {
                  for (let i = left; i <= right; i++) {
                        string = swap(string, left, i);
                        permute(string, left + 1, right);
                        string = swap(string, left, i);
                  }
            }
      }
      function swap(a, i, j) {
            const charArray = a.split("");
            const temp = charArray[i];
            charArray[i] = charArray[j];
            charArray[j] = temp;
            return charArray.join("");
      }
      permute(string, 0, string.length - 1);
      return permutations;
}

// const str = "ABC";
// const permutations = generatePermutations(str);
// console.log("Permutations:");
// console.log(...permutations);


// Using Iteration

// The idea is to generate sorted permutations of the String. 
// It uses the concept of lexicographically next greater permutation. 


function generatePermutations(inputString) {
      const uniquePermutations = [];

      function generateUniquePermutations(arr, currentIndex) {
            if (currentIndex === arr.length - 1) {
                  uniquePermutations.push(arr.join(""));
            } else {
                  for (let i = currentIndex;
                        i < arr.length; i++) {
                        [arr[currentIndex], arr[i]] =
                              [arr[i], arr[currentIndex]];
                        generateUniquePermutations(
                              [...arr], currentIndex + 1);
                  }
            }
      }

      generateUniquePermutations(inputString.split(""), 0);
      return uniquePermutations;
}

const inputString = "CABC";
const uniquePermutations =
      generatePermutations(inputString);

for (let i = 0;
      i < uniquePermutations.length; i++) {
      console.log(uniquePermutations[i]);
}

//Using Heap’s Algorithm

// Heap’s algorithm is an efficient method
// for generating all permutations of a string

function swap(strArr, i, j) {
      const temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;
}

function permute(str, n = str.length, strArr = str.split('')) {
      if (n === 1) {
            console.log(strArr.join(''));
      } else {
            for (let i = 0; i < n; i++) {
                  permute(str, n - 1, strArr);
                  if (n % 2 === 0) {
                        swap(strArr, i, n - 1);
                  } else {
                        swap(strArr, 0, n - 1);
                  }
            }
      }
}

const str = 'abcd';
permute(str);


//  Using Iterative Method with Factorial Count

//     Define a function generatePermutations that takes a string str as input.
//     Initialize an empty array permutations to store all permutations.
//     Define a factorial function factorial to calculate the factorial of a given number.
//     Calculate the total number of permutations totalPermutations using the factorial of the string length.
//     Iterate from 0 to totalPermutations

function generatePermutations(str) {
      const permutations = [];
      const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

      const len = str.length;
      const totalPermutations = factorial(len);

      for (let i = 0; i < totalPermutations; i++) {
            let currentPermutation = '';
            let temp = i;

            const availableChars = str.split('');

            for (let j = len - 1; j >= 0; j--) {
                  const index = temp % (j + 1);
                  temp = Math.floor(temp / (j + 1));

                  currentPermutation += availableChars[index];
                  availableChars.splice(index, 1);
            }

            permutations.push(currentPermutation);
      }

      return permutations;
}

const string = "ABC";
const permutations = generatePermutations(string);
console.log("Permutations:");
console.log(...permutations);


