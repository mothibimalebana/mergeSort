/**
 * A function that uses merge sort to sort an array in ascending order.
 *
 * @param {Array}  array - takes unsorted array as a parameter.
 *
 * @returns {Array} sortedArray - returns an array that is sorted in ascending order
 */

let arrayUpToSeven = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrayUpToSeven.slice(0, arrayUpToSeven.length / 2));

const mergeSort = (array) => {
  if (array.length == 1) {
    return;
  } else {
    array.slice(0, array.length);
    mergeSort();
  }
};
