/* 
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements 
if they are in wrong order.
When the largest element is at the end of the array, it is called a pass.
When to use Bubble Sort:
1. When the input size is small.
2. When the input size is almost sorted.
3. When the input size is a list.
4. When the input size is a linked list.
5. When the input size is a doubly linked list.

Disadvantages of Bubble Sort:
1. It is not suitable for large datasets.
2. It is not suitable for nearly sorted datasets.
3. It is not suitable for datasets with a large number of unique elements.
4. It is not suitable for datasets with a large number of duplicate elements.
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(numbers) {
  let temp = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

console.log(bubbleSort(numbers));
