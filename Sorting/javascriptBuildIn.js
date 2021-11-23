// Array.prototype.sort()

//The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
// Demo from MDN:
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
//console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// The build-in sort method accept an optional comparator function
// Can use this comparator function to tell Javascript how I want it to sort
// The comparator looks at pairs of elements(a and b), determines their sort order based on the return value:
//   * If it returns a negative number, a should come before b
//   * If it returns a positive number, a should come after b
//   * If it returns 0, a and b are the same as far as the sort is concerned

function numberCompare(num1, num2) {
  return num1 - num2;
}
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
console.log([6, 4, 15, 10].sort(numberCompare));
console.log(
  ['Javascript', 'Database', 'OS', 'Data Structures', 'Algorithm'].sort(
    compareByLen
  )
);
