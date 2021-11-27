/* This pattern uses objects or sets to collect values/frequencies of values
 * This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
 */

/* An example:
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 *The frequency of values must be the same.
 * same([1,2,3], [4,1,9])  //true
 * same([1,2,3], [1,9])   //false
 * same([1,2,1], [4,4,1])  //false: must be the same prequency
 */

function same_naive(arr1, arr2) {
  //Time Complexity - O(n^2)
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); // remove arr2[correctIndex] from arr2
  }
  return true;
}

function same(arr1, arr2) {
  // Time Complexity - O(n)
  if (arr1.length !== arr2.length) {
    return false;
  }
  var obj1 = {};
  var obj2 = {};
  for (let elem of arr1) {
    if (!obj1[elem]) {
      obj1[elem] = 1;
    } else {
      obj1[elem]++;
    }
  }
  for (let elem of arr2) {
    obj2[elem] = (obj2[elem] || 0) + 1; //another way rewriting the previous for loop
  }
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 9, 1]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(same([1, 2, 3], [1, 9]));
