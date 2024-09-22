
// ***************************************InsertionSort***************************************

// insertion sort is a simple sorting algorithm that works by iteratively inserting each element
//  of an unsorted list into its correct position in a sorted portion of the list.It is a stable sorting
// algorithm, meaning that elements with equal values maintain their relative order in the
//  sorted output.

//  Time Complexity of Insertion Sort

//     Best case: O(n) , If the list is already sorted, where n is the number of elements in the list.
//     Average case: O(n 2 ) , If the list is randomly ordered
//     Worst case: O(n 2 ) , If the list is in reverse order


function insertionSort(array) {

      for (let i = 1; i < array.length; i++) {
            let currentElement = array[i];
            let lastIndex = i - 1;

            while (lastIndex >= 0 && array[lastIndex] > currentElement) {
                  array[lastIndex + 1] = array[lastIndex]
                  lastIndex--
            }
            array[lastIndex + 1] = currentElement
      }
      return array
}


// *********************example********************
// insertionSort([4,5,8,9,3,11,2])

//  Advantages of Insertion Sort:

//     Simple and easy to implement.
//     Stable sorting algorithm.
//     Efficient for small lists and nearly sorted lists.
//     Space-efficient.
//             Adoptive.the number of inversions is directly proportional to number of swaps.For example,
//                   no swapping happens for a sorted array and it takes O(n) time only.

// Disadvantages of Insertion Sort:

//     Inefficient for large lists.
//     Not as efficient as other sorting algorithms (e.g., merge sort, quick sort) for most cases.







