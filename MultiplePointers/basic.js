/*  Multiple Pointers
 * Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
 *
 * Very efficient for solving problems with minimal space complexity as well.
 *
 * Example:
 * Write a function called sumZero which accepts a sorted array of integer.
 * The function should find the FIRST pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 * sumZero([-3, -2, -1, 0, 1, 2, 3])  //[-3,3]
 * sumZero([-2, 0, 1, 3])  //undefined
 * sumZero([1, 2, 3])  //undefined
 */

function sumZero(arr) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      result.push(arr[left]);
      result.push(arr[right]);
      break;
    } else if (arr[left] + arr[right] < 0) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return !result.length ? undefined : result;
}

console.log(sumZero([1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
