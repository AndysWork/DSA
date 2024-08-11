/* 
Heap Sort is a comparison-based sorting technique based on Binary Heap data structure. 
It is similar to selection sort where we first find the maximum element and 
place the maximum element at the end. We repeat the same process for the remaining elements.

Where to use Heap Sort?
Heap Sort is used to sort a large array of numbers, where Quick Sort and Merge Sort are not suitable.

Advantages of Heap Sort:
1. Time Complexity is O(nlogn)
2. Space Complexity is O(1)
3. It is a stable sort
4. It is an in-place sort
5. It is not adaptive
6. It is not a comparison-based sort

Disadvantages of Heap Sort:
1. It is not suitable for small datasets
2. It is not suitable for nearly sorted datasets
3. It is not suitable for partially sorted datasets
4. It is not suitable for linked lists
5. It is not suitable for data that is stored in a database

*/
function heapSort(array) {
  let n = array.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [array[0], array[i]] = [array[i], array[0]]; //Swap the elements

    // Call max heapify on the reduced heap
    heapify(array, i, 0);
  }
  return array;
}

function heapify(array, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]]; //Swap the elements

    // Recursively heapify the affected sub-tree
    heapify(array, n, largest);
  }
}

// Example usage
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(heapSort(numbers));
