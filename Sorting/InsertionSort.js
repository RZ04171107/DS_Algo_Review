// Insertion Sort
// Builds up the sort by gradually creating a larger left half which is always sorted
// Big O:
// General case: O(n^2)
// Better for those nearly sorted arrays

var nums = [2, 1, 9, 76, 4];

function InsertionSort(arr) {
  // Pseudecode:
  // Start by picking the second element in the array
  // Now Compare the second element with the one before it and swap if necessary
  // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
  // Pepeat until the array is sorted;
  for (var i = 1; i < arr.length; i++) {
    //console.log(i, nums);
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(InsertionSort(nums));
