// A sorting algorithm where the largest values bubble up to the top
// Big O Complexity:
// normally: 0(n^2)
// best case(for nealy sorted arrays): 0(n)

var nums = [37, 45, 29, 8, 12, 88, -3];
function BubbleSort(arr) {
  var noSwaps; // Optimization: add noSwaps vaviable for some nealy sorted arrays
  for (var i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (var j = 0; j < arr.length - i - 1; j++) {
      //console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    //console.log('ONE PASS COMPlETE');
    if (noSwaps) break;
  }
  return arr;
}

console.log(BubbleSort(nums));
