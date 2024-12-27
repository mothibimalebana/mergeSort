/**
 * A function that uses merge sort to sort an array in ascending order.
 *
 * @param {Array}  array - takes unsorted array as a parameter.
 *
 * @returns {Array} sortedArray - returns an array that is sorted in ascending order
 */

let arrayUpToEight = [2, 9, 6, 3, 7, 4, 5, 8];
let sortedArray = [];

const mergeSort = (array) => {
  if (array.length == 1) {
    console.log(array);
  } else {
    const splitArrayLeft = array.slice(0, array.length / 2);
    const splitArrayRight = array.slice(array.length / 2);
    // mergeSort(splitArrayLeft);
    mergeSort(splitArrayRight);
  }
};

mergeSort(arrayUpToEight);
