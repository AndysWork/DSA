/* 
Non Comparison Sort - Counting Sort, Radix Sort, Bucket Sort's Time Complexity is O(n)

Where to use Non Comparison Sort?
Non Comparison Sort is used to sort a large array of numbers, where Quick Sort and Merge Sort 
are not suitable.

Counting Sort:  It is used to sort elements in a specific range.

Radix Sort: It is used to sort elements in a specific range.

Advantages of Non Comparison Sort:
1. Time Complexity is O(n)
2. Space Complexity is O(n)
3. It is a stable sort
4. It is an in-place sort

Disadvantages of Non Comparison Sort:
1. It is not suitable for large datasets
2. It is not suitable for nearly sorted datasets
3. It is not suitable for partially sorted datasets

Radix Sort: https://brilliant.org/wiki/radix-sort/

Radix Sort Animation: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

Counting Sort: https://brilliant.org/wiki/counting-sort/

Counting Sort Animation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html

*/

/* ---------------------------------------- Counting Sort ----------------------------------*/

function countingSort(array) {
  if (array.length === 0) return array;

  // Find the maximum value in the array
  const max = Math.max(...array);

  // Initialize count array with all zeros
  const count = new Array(max + 1).fill(0);

  // Store the count of each element
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  // Store the cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  const output = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  // Copy the sorted elements back to the original array
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }

  return array;
}

// Example usage
const numbers1 = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(numbers1));

/* ---------------------------------------- Radix Sort ----------------------------------*/

function countingSortByDigit(array, exp) {
  const n = array.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(array[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] contains the actual
  // position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(array[i] / exp) % 10;
    output[count[digit] - 1] = array[i];
    count[digit]--;
  }

  // Copy the output array to array[], so that array[] now
  // contains sorted numbers according to the current digit
  for (let i = 0; i < n; i++) {
    array[i] = output[i];
  }
}

function radixSort(array) {
  // Do counting sort for every digit. Note that instead
  // of passing the digit number, exp is passed. exp is 10^i
  // where i is the current digit number
  for (let exp = 1; Math.floor(Math.max(...array) / exp) > 0; exp *= 10) {
    countingSortByDigit(array, exp);
  }
  return array;
}

// Example usage
const numbers2 = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers2));
