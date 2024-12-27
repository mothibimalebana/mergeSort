/**
 * A function that uses merge sort to sort an array in ascending order.
 *
 * @param {Array}  array - takes unsorted array as a parameter.
 *
 * @returns {Array} sortedArray - returns an array that is sorted in ascending order
 */

let arrayUpToEight = [1, 2, 3, 4, 5, 6, 7, 8];

const mergeSort = (array) => {
  if (array.length == 1) {
    console.log('reached');
    return;
  } else {
    let slicedArray = array.slice(0, array.length / 2);
    console.log(slicedArray);
    mergeSort(slicedArray);
  }
};

mergeSort(arrayUpToEight);
