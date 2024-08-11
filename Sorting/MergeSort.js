/* 
MergeSort is a Divide and Conquer algorithm. It divides input array in two halves, 
calls itself for the two halves and then merges the two sorted halves. 
The merge() function is used for merging two halves. 
The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted 
and merges the two sorted sub-arrays into one.

When to use MergeSort:
1. When the input size is large.
2. When the input size is a list.
3. When the input size is a linked list.
4. When the input size is a large dataset.

Disadvantages of MergeSort:
1. It requires additional memory space.
2. It is not suitable for small datasets.
3. It is not suitable for nearly sorted datasets.
4. It is not suitable for datasets with a large number of unique elements.
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // split array into left & right
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.splice(middle);

  console.log("left", left);
  console.log("right", right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(numbers));
