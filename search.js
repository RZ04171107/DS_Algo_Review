// Linear Search
// Big O - O(n)
function linearSearch(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// Binary Search
// Big o - O(log n)
// only works on sorted arrays
function binarySearch(value, array) {
  var left = 0;
  var right = array.length - 1;
  while (left <= right) {
    var middle = Math.floor((left + right) / 2);
    if (array[middle] === value) return middle;
    if (array[middle] < value) left = middle + 1;
    if (array[middle] > value) right = middle - 1;
  }
  return -1;
}

// Naive String Search
function naiveSearch(string, pattern) {
  // loop over the longer string
  // loop over the shorter string
  // if the characters do not match, break out of the inner loop
  // if the characters do match, keep going
  // if you complete the inner loop and find a match, increment the count of matches
  // return the count
  var count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      //console.log(string[i + j], pattern[j]);
      if (string[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol'));
