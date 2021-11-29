/* Divide and Conquer
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
 * This pattern can tremendously decrease time complexity.
 */

/* An Example:
 * Given a SORTED array of integers, write a function called search, that acceptes a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 * search([1,2,3,4,5,6], 4) //3
 * search([1,2,3,4,5,6], 11) //-1
 */

function search(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    var middle = Math.floor((left + right) / 2);
    if (val < arr[middle]) {
      right = middle - 1;
    } else if (val > arr[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 11));
