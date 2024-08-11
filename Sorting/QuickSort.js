/* 
QuickSort is a Divide and Conquer algorithm. 
It picks an element as pivot and partitions the given array around the picked pivot.

When to use QuickSort?
QuickSort is a widely used sorting algorithm.
It is used by many sorting libraries and functions.
It is used by many languages inbuilt sort functions.
It is used by many online platforms for sorting.
It is used by many programming languages for internal sorting.

Disadvantages of QuickSort:
QuickSort is not a stable sort.
QuickSort is an in-place sort which means it doesn’t require any extra storage.
QuickSort is not a stable sort which means the relative order of equal sort items is not preserved.

*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

console.log(quickSort(numbers, 0, numbers.length - 1));
