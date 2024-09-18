
//Bubble Sort
// Bubble sort is a sorting algorithm that starts from the first element of an array and
// compares it with the second element.If the first element is greater than the second,
//       we swap them.It continuesthis process until the end of the array, with the largest
// elements “bubbling” to the top

// --------------------Advantages of Bubble Sort---------------------------------

//     Bubble sort is easy to understand and implement.
//     It does not require any additional memory space.
//     It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order
//       in the sorted output.

//--------------------- Disadvantages of Bubble Sort-----------------------------

//     Bubble sort has a time complexity of O(N2) which makes it very slow for large data sets.
//     Bubble sort is a comparison - based sorting algorithm, which means that it requires a comparison operator to determine the relative 
//     order of elements in the input data set.It can limit the efficiency of the algorithm in certain cases.


// ************************************************BubbleSorting********************************************************

function bubbleSort(array) {
      const length = array.length;

      for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                  if (array[j] > array[j + 1]) {
                        const temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                  }
            }
      }
      return array;
}
// }
// console.log(bubbleSort([1,4,2,3])) // [1,2,3,4]