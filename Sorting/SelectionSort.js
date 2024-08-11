/* 
Selection Sort is a simple sorting algorithm. This sorting algorithm is an in-place 
comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end
and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is 
the entire list.

Selection sort is used when:
1. small list is there
2. When the list is almost sorted
3. When memory space is limited
4. When the cost of writing to memory is high
5. When the cost of swapping items is high

Disadvantages of Selection Sort:
1. It is not suitable for large datasets.
2. It is not suitable for nearly sorted datasets.
3. It is not suitable for datasets with a large number of unique elements.
4. It is not suitable for datasets with a large number of duplicate elements.
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    //Set current Index as minimum
    let min = i;
    let temp = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        // Update the Min if current is lower than what we had previously
        min = j;
      }
    }
    numbers[i] = numbers[min];
    numbers[min] = temp;
  }
  return numbers;
}

console.log(selectionSort(numbers));
