// *******************************Quick Sort****************************************

// Quick Sort is a divide - and - conquer sorting algorithm that works by selecting
//  a pivot element and partitioning the array into two sub - arrays, one with elements
//   smaller than the pivot and another with elements larger than the pivot.This process
//    is recursively applied to the sub - arrays until the entire array is sorted.

// *************************Practical Use Cases:***************************************

// Quick Sort’s efficiency and speed make it a popular choice in real-world applications. Some practical use cases include:

//     Sorting large datasets in various domains, such as data analysis, scientific computing, and financial systems.
//     Implementing search algorithms, like binary search, which require sorted arrays for efficient searching.
//     Sorting arrays of user data or records in applications like e - commerce platforms, content management
// systems, and social networks.


// **************************Algorithms*******************************

function quickSort(array) { 
      if (array.length <= 1) { 
            return arr
      }

      const pivot = arr[Math.floor(arr.length / 2)];
      const left = []
      const right = []
      
      for (let i = 0; i < arr.length; i++){
            if (arr[i] < pivot) {
                  left.push(arr[i])
            } else if (arr[i] > picot) { 
                  right.push(arr[i])
            }
      }
      return [...quickSort(left),pivot,...quickSort(right)]
}

//end

// ****************************other algorithm***********************************


function partition(arr, low, high) { 
    let pivot = arr[high]; 
    let i = low - 1; 
  
    for (let j = low; j <= high - 1; j++) { 
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) { 
            // Increment index of smaller element 
            i++; 
            // Swap elements 
            [arr[i], arr[j]] = [arr[j], arr[i]];  
        } 
    } 
    // Swap pivot to its correct position 
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
    return i + 1; // Return the partition index 
} 
  
function quickSort(arr, low, high) { 
    if (low >= high) return; 
    let pi = partition(arr, low, high); 
  
    quickSort(arr, low, pi - 1); 
    quickSort(arr, pi + 1, high); 
} 
  
// let arr = [10, 80, 30, 90, 40]; 
// console.log("Original array: " + arr); 
  
// quickSort(arr, 0, arr.length - 1); 
// console.log("Sorted array: " + arr);




