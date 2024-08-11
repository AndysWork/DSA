/* 
Insertion Sort  - It is a simple sorting algorithm that builds the final sorted array one item at a time.
When to use Insertion Sort:
1. When the input size is small.
2. When the input size is almost sorted.
3. When the input size is a list.
4. When the input size is a linked list.

Disadvantages of Insertion Sort:
1. It is not suitable for large datasets.
2. It is not suitable for nearly sorted datasets.
3. It is not suitable for datasets with a large number of unique elements.
4. It is not suitable for datasets with a large number of duplicate elements.

*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort1(numbers) {
  const length = numbers.length;

  for (let i = 0; i < length; i++) {
    if (numbers[i] < numbers[0]) {
      numbers.unshift(numbers.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (numbers[i] > numbers[j - 1] && numbers[i] < numbers[j]) {
          numbers.splice(j, 0, numbers.splice(i, 1)[0]);
        }
      }
    }
  }
  return numbers;
}

function insertionSort2(numbers) {
  const length = numbers.length;

  for (let i = 1; i < length; i++) {
    let key = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] > key) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = key;
  }
  return numbers;
}

console.log(insertionSort1(numbers));
console.log(insertionSort2(numbers));
