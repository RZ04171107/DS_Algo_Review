// Selection Sort
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted positon

// Big O : O(n^2)

var nums = [37, 45, 29, 8, 12, 88, -3];
function SelectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // select min from arr[j] to arr[arr.length-1], swap the min and arr[j]
    for (var j = i + 1; j < arr.length; j++) {
      //var min = arr[i]
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
}
console.log(SelectionSort(nums));
